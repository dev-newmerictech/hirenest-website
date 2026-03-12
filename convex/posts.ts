/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { query, mutation, internalMutation, internalQuery } from "./_generated/server";
import { v } from "convex/values";
import { Doc } from "./_generated/dataModel";
import { internal } from "./_generated/api";
import { requireAuth } from "./authHelpers";

// Helper function to fetch all posts (using collect instead of pagination to avoid multiple paginated queries)
async function getAllPostsFromDB(ctx: { db: any }): Promise<Doc<"posts">[]> {
  // Use collect() instead of pagination to avoid "multiple paginated queries" error
  // This works for reasonable post counts (hundreds to low thousands)
  return await ctx.db.query("posts").collect();
}

// Helper function to fetch all published posts using pagination (exported for potential use)
export async function getAllPublishedPostsFromDB(ctx: { db: any }) {
  const allPosts: any[] = [];
  let cursor: string | null = null;

  do {
    const result: { page: any[]; continueCursor: string | null } = await ctx.db
      .query("posts")
      .withIndex("by_published", (q: any) => q.eq("published", true))
      .paginate({ cursor, numItems: 100 });

    allPosts.push(...result.page);
    cursor = result.continueCursor;
  } while (cursor !== null);

  return allPosts;
}

// Get total count of all posts (for dashboard pagination)
// Returns cached count from siteConfig
export const getTotalCount = query({
  args: {},
  returns: v.number(),
  handler: async (ctx) => {
    // Get total count (all posts) from cache
    const cachedCount = await ctx.db
      .query("siteConfig")
      .withIndex("by_key", (q) => q.eq("key", "totalPostCount"))
      .first();
    return cachedCount?.value as number ?? 500;
  },
});

// Get all posts (published and unpublished) for dashboard admin view
// NOTE: Server-side pagination - first fetch gets 15 posts, then 15 per page
// Dashboard uses static count of 400 for pagination UI
export const listAll = query({
  args: {
    offset: v.optional(v.number()),
    limit: v.optional(v.number()),
  },
  returns: v.array(
    v.object({
      _id: v.id("posts"),
      _creationTime: v.number(),
      slug: v.string(),
      title: v.string(),
      description: v.string(),
      date: v.string(),
      published: v.boolean(),
      tags: v.array(v.string()),
      readTime: v.optional(v.string()),
      image: v.optional(v.string()),
      excerpt: v.optional(v.string()),
      featured: v.optional(v.boolean()),
      featuredOrder: v.optional(v.number()),
      authorName: v.optional(v.string()),
      authorImage: v.optional(v.string()),
    }),
  ),
  handler: async (ctx, args) => {
    const offset = args.offset ?? 0;
    const limit = args.limit ?? 15;
    const FIRST_FETCH_SIZE = 15;

    // Determine fetch size based on offset
    let fetchSize: number;
    if (offset === 0) {
      // First page: fetch 160 posts
      fetchSize = FIRST_FETCH_SIZE;
    } else {
      // Subsequent pages: fetch 15 posts starting from offset
      fetchSize = offset + limit;
    }

    // BANDWIDTH OPTIMIZATION: Use postSummaries table (no content field)
    // This reduces bandwidth from ~50KB per post to ~1KB per post
    const summariesExist = await ctx.db
      .query("postSummaries")
      .first();

    let allFetchedPosts: any[] = [];

    if (summariesExist) {
      // Use lightweight postSummaries table (~1KB per post vs ~50KB)
      let lastTime: number | null = null;
      const batchSize = 50;
      const maxIterations = 50;
      let iterations = 0;

      while (allFetchedPosts.length < fetchSize && iterations < maxIterations) {
        iterations++;
        let batch: any[];
        const remaining = fetchSize - allFetchedPosts.length;
        const currentBatchSize = Math.min(batchSize, remaining);

        if (lastTime === null) {
          batch = await ctx.db
            .query("postSummaries")
            .order("desc")
            .take(currentBatchSize);
        } else {
          batch = await ctx.db
            .query("postSummaries")
            .order("desc")
            .filter((q) => q.lt(q.field("_creationTime"), lastTime as number))
            .take(currentBatchSize);
        }

        if (batch.length === 0) break;

        allFetchedPosts.push(...batch);

        if (batch.length < currentBatchSize) break;

        lastTime = batch[batch.length - 1]._creationTime;
      }

      // Map summary format to expected return format
      return allFetchedPosts
        .slice(offset, offset + limit)
        .map((post) => ({
          _id: post.postId,
          _creationTime: 0,
          slug: post.slug,
          title: post.title,
          description: post.description,
          date: post.date,
          published: post.published,
          tags: post.tags,
          readTime: post.readTime,
          image: post.image,
          excerpt: post.excerpt,
          featured: post.featured,
          featuredOrder: post.featuredOrder,
          authorName: post.authorName,
          authorImage: post.authorImage,
        }));
    }

    // Fallback: fetch from posts table (uses more bandwidth)
    let lastDate: string | null = null;
    const batchSize = 50;
    const maxIterations = 50;
    let iterations = 0;

    while (allFetchedPosts.length < fetchSize && iterations < maxIterations) {
      iterations++;
      let batch: Doc<"posts">[];
      const remaining = fetchSize - allFetchedPosts.length;
      const currentBatchSize = Math.min(batchSize, remaining);

      if (lastDate === null) {
        batch = await ctx.db
          .query("posts")
          .withIndex("by_date")
          .order("desc")
          .take(currentBatchSize);
      } else {
        const dateFilter = lastDate;
        batch = await ctx.db
          .query("posts")
          .withIndex("by_date", (q) => q.lt("date", dateFilter))
          .order("desc")
          .take(currentBatchSize);
      }

      if (batch.length === 0) break;

      allFetchedPosts.push(...batch);

      if (batch.length < currentBatchSize) break;

      lastDate = batch[batch.length - 1].date;
    }

    // Slice to get the requested page
    let paginatedPosts: Doc<"posts">[];
    if (offset === 0) {
      paginatedPosts = allFetchedPosts;
    } else {
      paginatedPosts = allFetchedPosts.slice(offset, offset + limit);
    }

    // Return without content for list view
    return paginatedPosts.map((post) => ({
      _id: post._id,
      _creationTime: post._creationTime,
      slug: post.slug,
      title: post.title,
      description: post.description,
      date: post.date,
      published: post.published,
      tags: post.tags,
      readTime: post.readTime,
      image: post.image,
      excerpt: post.excerpt,
      featured: post.featured,
      featuredOrder: post.featuredOrder,
      authorName: post.authorName,
      authorImage: post.authorImage,
    }));
  },
});

// Search posts for dashboard (includes drafts, no limit restriction by default or higher limit)
export const searchDashboardPosts = query({
  args: {
    query: v.string(),
  },
  returns: v.array(
    v.object({
      _id: v.id("posts"),
      _creationTime: v.number(),
      slug: v.string(),
      title: v.string(),
      description: v.string(),
      date: v.string(),
      published: v.boolean(),
      tags: v.array(v.string()),
      readTime: v.optional(v.string()),
      image: v.optional(v.string()),
      excerpt: v.optional(v.string()),
      featured: v.optional(v.boolean()),
      featuredOrder: v.optional(v.number()),
      authorName: v.optional(v.string()),
      authorImage: v.optional(v.string()),
    }),
  ),
  handler: async (ctx, args) => {
    if (!args.query.trim()) {
      return [];
    }

    // Search by title
    const postsByTitle = await ctx.db
      .query("posts")
      .withSearchIndex("search_title", (q) =>
        q.search("title", args.query)
      )
      .take(50);

    // Search by content
    const postsByContent = await ctx.db
      .query("posts")
      .withSearchIndex("search_content", (q) =>
        q.search("content", args.query)
      )
      .take(50);

    const seenIds = new Set<string>();
    const results = [];

    for (const post of [...postsByTitle, ...postsByContent]) {
      if (!seenIds.has(post._id)) {
        seenIds.add(post._id);
        results.push({
          _id: post._id,
          _creationTime: post._creationTime,
          slug: post.slug,
          title: post.title,
          description: post.description,
          date: post.date,
          published: post.published,
          tags: post.tags,
          readTime: post.readTime,
          image: post.image,
          excerpt: post.excerpt,
          featured: post.featured,
          featuredOrder: post.featuredOrder,
          authorName: post.authorName,
          authorImage: post.authorImage,
        });
      }
    }

    return results;
  },
});

// Get a single post by ID (for editing - includes content)
export const getPostById = query({
  args: {
    id: v.id("posts"),
  },
  returns: v.union(
    v.object({
      _id: v.id("posts"),
      _creationTime: v.number(),
      slug: v.string(),
      title: v.string(),
      description: v.string(),
      content: v.string(),
      date: v.string(),
      published: v.boolean(),
      tags: v.array(v.string()),
      readTime: v.optional(v.string()),
      image: v.optional(v.string()),
      excerpt: v.optional(v.string()),
      featured: v.optional(v.boolean()),
      featuredOrder: v.optional(v.number()),
      authorName: v.optional(v.string()),
      authorImage: v.optional(v.string()),
    }),
    v.null()
  ),
  handler: async (ctx, args) => {
    const post = await ctx.db.get(args.id);
    if (!post) {
      return null;
    }
    return {
      _id: post._id,
      _creationTime: post._creationTime,
      slug: post.slug,
      title: post.title,
      description: post.description,
      content: post.content,
      date: post.date,
      published: post.published,
      tags: post.tags,
      readTime: post.readTime,
      image: post.image,
      excerpt: post.excerpt,
      featured: post.featured,
      featuredOrder: post.featuredOrder,
      authorName: post.authorName,
      authorImage: post.authorImage,
    };
  },
});

// Get all published posts, sorted by date descending
export const getAllPosts = query({
  args: {},
  returns: v.array(
    v.object({
      _id: v.id("posts"),
      _creationTime: v.number(),
      slug: v.string(),
      title: v.string(),
      description: v.string(),
      date: v.string(),
      published: v.boolean(),
      tags: v.array(v.string()),
      readTime: v.optional(v.string()),
      image: v.optional(v.string()),
      excerpt: v.optional(v.string()),
      featured: v.optional(v.boolean()),
      featuredOrder: v.optional(v.number()),
      authorName: v.optional(v.string()),
      authorImage: v.optional(v.string()),
      layout: v.optional(v.string()),
      rightSidebar: v.optional(v.boolean()),
      showFooter: v.optional(v.boolean()),
      footer: v.optional(v.string()),
      blogFeatured: v.optional(v.boolean()),
    }),
  ),
  handler: async (ctx) => {
    // Try lightweight postSummaries first (~1KB per post, no content/embedding)
    const summariesExist = await ctx.db
      .query("postSummaries")
      .withIndex("by_published", (q) => q.eq("published", true))
      .first();

    if (summariesExist) {
      // Fetch ALL published summaries using _creationTime cursor (unique, no skips)
      // Convex only allows one .paginate() per query, so we use take() + cursor
      const allSummaries: any[] = [];
      let lastTime: number | null = null;
      while (true) {
        let batch;
        if (lastTime === null) {
          batch = await ctx.db
            .query("postSummaries")
            .withIndex("by_published", (q) => q.eq("published", true))
            .order("desc")
            .take(20);
        } else {
          batch = await ctx.db
            .query("postSummaries")
            .withIndex("by_published", (q) => q.eq("published", true))
            .order("desc")
            .filter((q) => q.lt(q.field("_creationTime"), lastTime as number))
            .take(20);
        }
        if (batch.length === 0) break;
        allSummaries.push(...batch);
        if (batch.length < 20) break;
        lastTime = batch[batch.length - 1]._creationTime;
      }

      const listedPosts = allSummaries.filter((p) => !p.unlisted);

      return listedPosts.map((post) => ({
        _id: post.postId,
        _creationTime: 0,
        slug: post.slug,
        title: post.title,
        description: post.description,
        date: post.date,
        published: post.published,
        tags: post.tags,
        readTime: post.readTime,
        image: post.image,
        excerpt: post.excerpt,
        featured: post.featured,
        featuredOrder: post.featuredOrder,
        authorName: post.authorName,
        authorImage: post.authorImage,
        layout: undefined,
        rightSidebar: undefined,
        showFooter: undefined,
        blogFeatured: post.blogFeatured,
      }));
    }

    // Fallback: batch iteration (batch size 20) using _creationTime cursor (unique, no skips)
    const allPosts: Doc<"posts">[] = [];
    let lastTime2: number | null = null;
    while (true) {
      let batch: Doc<"posts">[];
      if (lastTime2 === null) {
        batch = await ctx.db
          .query("posts")
          .withIndex("by_published_date", (q) => q.eq("published", true))
          .order("desc")
          .take(20);
      } else {
        batch = await ctx.db
          .query("posts")
          .withIndex("by_published_date", (q) => q.eq("published", true))
          .order("desc")
          .filter((q) => q.lt(q.field("_creationTime"), lastTime2 as number))
          .take(20);
      }
      if (batch.length === 0) break;
      allPosts.push(...batch);
      if (batch.length < 20) break;
      lastTime2 = batch[batch.length - 1]._creationTime;
    }

    const listedPosts = allPosts.filter((p) => !p.unlisted);

    return listedPosts.map((post) => ({
      _id: post._id,
      _creationTime: post._creationTime,
      slug: post.slug,
      title: post.title,
      description: post.description,
      date: post.date,
      published: post.published,
      tags: post.tags,
      readTime: post.readTime,
      image: post.image,
      excerpt: post.excerpt,
      featured: post.featured,
      featuredOrder: post.featuredOrder,
      authorName: post.authorName,
      authorImage: post.authorImage,
      layout: post.layout,
      rightSidebar: post.rightSidebar,
      showFooter: post.showFooter,
      blogFeatured: post.blogFeatured,
    }));
  },
});

// Get all blog featured posts for the /blog page (hero + featured row)
export const getBlogFeaturedPosts = query({
  args: {},
  returns: v.array(
    v.object({
      _id: v.id("posts"),
      slug: v.string(),
      title: v.string(),
      description: v.string(),
      date: v.string(),
      tags: v.array(v.string()),
      readTime: v.optional(v.string()),
      image: v.optional(v.string()),
      excerpt: v.optional(v.string()),
      authorName: v.optional(v.string()),
      authorImage: v.optional(v.string()),
    }),
  ),
  handler: async (ctx) => {
    // For featured posts, we can assume there won't be too many
    const posts = await ctx.db
      .query("posts")
      .withIndex("by_blogFeatured", (q) => q.eq("blogFeatured", true))
      .collect();

    // Filter to only published posts and sort by date descending
    const publishedFeatured = posts
      .filter((p) => p.published && !p.unlisted)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return publishedFeatured.map((post) => ({
      _id: post._id,
      slug: post.slug,
      title: post.title,
      description: post.description,
      date: post.date,
      tags: post.tags,
      readTime: post.readTime,
      image: post.image,
      excerpt: post.excerpt,
      authorName: post.authorName,
      authorImage: post.authorImage,
    }));
  },
});

// Get recent posts for footer and other public-facing components
export const getRecentPosts = query({
  args: {
    limit: v.optional(v.number()),
  },
  returns: v.array(
    v.object({
      _id: v.id("posts"),
      slug: v.string(),
      title: v.string(),
      description: v.string(),
      date: v.string(),
      tags: v.array(v.string()),
      readTime: v.optional(v.string()),
      image: v.optional(v.string()),
      authorName: v.optional(v.string()),
      authorImage: v.optional(v.string()),
    }),
  ),
  handler: async (ctx, args) => {
    const maxResults = args.limit ?? 5;

    // Fetch recent published posts
    const posts = await ctx.db
      .query("posts")
      .withIndex("by_published_date", (q) => q.eq("published", true))
      .order("desc")
      .take(maxResults * 2); // Fetch extra to account for unlisted posts

    // Filter out unlisted posts and limit results
    const listedPosts = posts
      .filter((p) => !p.unlisted)
      .slice(0, maxResults);

    return listedPosts.map((post) => ({
      _id: post._id,
      slug: post.slug,
      title: post.title,
      description: post.description,
      date: post.date,
      tags: post.tags,
      readTime: post.readTime,
      image: post.image,
      authorName: post.authorName,
      authorImage: post.authorImage,
    }));
  },
});

// Get featured posts for the homepage featured section
export const getFeaturedPosts = query({
  args: {},
  returns: v.array(
    v.object({
      _id: v.id("posts"),
      slug: v.string(),
      title: v.string(),
      excerpt: v.optional(v.string()),
      description: v.string(),
      image: v.optional(v.string()),
      featuredOrder: v.optional(v.number()),
    }),
  ),
  handler: async (ctx) => {
    // For featured posts, we can assume there won't be too many
    const posts = await ctx.db
      .query("posts")
      .withIndex("by_featured", (q) => q.eq("featured", true))
      .collect();

    // Filter to only published posts and sort by featuredOrder
    const featuredPosts = posts
      .filter((p) => p.published && !p.unlisted)
      .sort((a, b) => {
        const orderA = a.featuredOrder ?? 999;
        const orderB = b.featuredOrder ?? 999;
        return orderA - orderB;
      });

    return featuredPosts.map((post) => ({
      _id: post._id,
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      description: post.description,
      image: post.image,
      featuredOrder: post.featuredOrder,
    }));
  },
});

// Get all unique tags from published posts
export const getAllTags = query({
  args: {},
  returns: v.array(
    v.object({
      tag: v.string(),
      count: v.number(),
    }),
  ),
  handler: async (ctx) => {
    // Use collect() instead of paginated helper
    const posts = await ctx.db
      .query("posts")
      .withIndex("by_published", (q) => q.eq("published", true))
      .order("desc") // Get latest posts to find most relevant active tags
      .take(30); // Limit to 20 to avoid "Too many bytes read" error

    // Filter out unlisted posts
    const listedPosts = posts.filter((p) => !p.unlisted);

    // Count occurrences of each tag
    const tagCounts = new Map<string, number>();
    for (const post of listedPosts) {
      for (const tag of post.tags) {
        tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1);
      }
    }

    // Convert to array and sort by count (descending), then alphabetically
    return Array.from(tagCounts.entries())
      .map(([tag, count]) => ({ tag, count }))
      .sort((a, b) => {
        if (b.count !== a.count) return b.count - a.count;
        return a.tag.localeCompare(b.tag);
      });
  },
});

// Get posts filtered by a specific tag
export const getPostsByTag = query({
  args: {
    tag: v.string(),
  },
  returns: v.array(
    v.object({
      _id: v.id("posts"),
      _creationTime: v.number(),
      slug: v.string(),
      title: v.string(),
      description: v.string(),
      date: v.string(),
      published: v.boolean(),
      tags: v.array(v.string()),
      readTime: v.optional(v.string()),
      image: v.optional(v.string()),
      excerpt: v.optional(v.string()),
      featured: v.optional(v.boolean()),
      featuredOrder: v.optional(v.number()),
      authorName: v.optional(v.string()),
      authorImage: v.optional(v.string()),
    }),
  ),
  handler: async (ctx, args) => {
    // Use collect() instead of paginated helper
    const posts = await ctx.db
      .query("posts")
      .withIndex("by_published", (q) => q.eq("published", true))
      .collect();

    // Filter posts that have the specified tag and are not unlisted
    const filteredPosts = posts.filter(
      (post: any) =>
        !post.unlisted &&
        post.tags.some((t: string) => t.toLowerCase() === args.tag.toLowerCase()),
    );

    // Sort by date descending
    const sortedPosts = filteredPosts.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );

    return sortedPosts.map((post) => ({
      _id: post._id,
      _creationTime: post._creationTime,
      slug: post.slug,
      title: post.title,
      description: post.description,
      date: post.date,
      published: post.published,
      tags: post.tags,
      readTime: post.readTime,
      image: post.image,
      excerpt: post.excerpt,
      featured: post.featured,
      featuredOrder: post.featuredOrder,
      authorName: post.authorName,
      authorImage: post.authorImage,
    }));
  },
});

// Get related posts that share tags with the current post
export const getRelatedPosts = query({
  args: {
    currentSlug: v.string(),
    tags: v.array(v.string()),
    limit: v.optional(v.number()),
  },
  returns: v.array(
    v.object({
      _id: v.id("posts"),
      slug: v.string(),
      title: v.string(),
      description: v.string(),
      date: v.string(),

      tags: v.array(v.string()),
      readTime: v.optional(v.string()),
      image: v.optional(v.string()),
      excerpt: v.optional(v.string()),
      authorName: v.optional(v.string()),
      authorImage: v.optional(v.string()),
      sharedTags: v.number(),
    }),
  ),
  handler: async (ctx, args) => {
    const maxResults = args.limit ?? 3;

    if (args.tags.length === 0) {
      return [];
    }

    // Fetch recent posts only to avoid exceeding byte read limit
    // Using by_published_date index to get posts sorted by date descending
    const posts = await ctx.db
      .query("posts")
      .withIndex("by_published_date", (q) => q.eq("published", true))
      .order("desc")
      .take(200);

    // Find posts that share tags
    const relatedPosts = posts
      .filter((post: any) => post.slug !== args.currentSlug && !post.unlisted)
      .map((post: any) => {
        const sharedTags = post.tags.filter((tag: string) =>
          args.tags.some((t: string) => t.toLowerCase() === tag.toLowerCase()),
        ).length;
        return {
          _id: post._id,
          slug: post.slug,
          title: post.title,
          description: post.description,
          date: post.date,
          tags: post.tags,
          readTime: post.readTime,
          image: post.image,
          excerpt: post.excerpt,
          authorName: post.authorName,
          authorImage: post.authorImage,
          sharedTags,
        };
      })
      .filter((post) => post.sharedTags > 0)
      .sort((a, b) => {
        if (b.sharedTags !== a.sharedTags) return b.sharedTags - a.sharedTags;
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      })
      .slice(0, maxResults);

    return relatedPosts;
  },
});

// Internal mutation for syncing posts from markdown files
export const syncPosts = internalMutation({
  args: {
    posts: v.array(
      v.object({
        slug: v.string(),
        title: v.string(),
        description: v.string(),
        content: v.string(),
        date: v.string(),
        published: v.boolean(),
        tags: v.array(v.string()),
        readTime: v.optional(v.string()),
        image: v.optional(v.string()),
        showImageAtTop: v.optional(v.boolean()),
        excerpt: v.optional(v.string()),
        featured: v.optional(v.boolean()),
        featuredOrder: v.optional(v.number()),
        authorName: v.optional(v.string()),
        authorImage: v.optional(v.string()),
        layout: v.optional(v.string()),
        rightSidebar: v.optional(v.boolean()),
        showFooter: v.optional(v.boolean()),
        footer: v.optional(v.string()),
        showSocialFooter: v.optional(v.boolean()),
        aiChat: v.optional(v.boolean()),
        blogFeatured: v.optional(v.boolean()),
        newsletter: v.optional(v.boolean()),
        contactForm: v.optional(v.boolean()),
        unlisted: v.optional(v.boolean()),
      }),
    ),
  },
  returns: v.object({
    created: v.number(),
    updated: v.number(),
    deleted: v.number(),
  }),
  handler: async (ctx, args) => {
    let created = 0;
    let updated = 0;
    let deleted = 0;

    const now = Date.now();
    const incomingSlugs = new Set(args.posts.map((p) => p.slug));

    // Get all existing posts using pagination
    const existingPosts = await getAllPostsFromDB(ctx);
    const existingBySlug = new Map(existingPosts.map((p) => [p.slug, p]));

    // Upsert incoming posts
    for (const post of args.posts) {
      const existing = existingBySlug.get(post.slug);

      if (existing) {

        await ctx.db.patch(existing._id, {
          title: post.title,
          description: post.description,
          content: post.content,
          date: post.date,
          published: post.published,
          tags: post.tags,
          readTime: post.readTime,
          image: post.image,
          showImageAtTop: post.showImageAtTop,
          excerpt: post.excerpt,
          featured: post.featured,
          featuredOrder: post.featuredOrder,
          authorName: post.authorName,
          authorImage: post.authorImage,
          layout: post.layout,
          rightSidebar: post.rightSidebar,
          showFooter: post.showFooter,
          footer: post.footer,
          showSocialFooter: post.showSocialFooter,
          aiChat: post.aiChat,
          blogFeatured: post.blogFeatured,
          newsletter: post.newsletter,
          contactForm: post.contactForm,
          unlisted: post.unlisted,
          lastSyncedAt: now,
        });
        updated++;
      } else {
        await ctx.db.insert("posts", {
          ...post,
          lastSyncedAt: now,
        });
        created++;
      }
    }

    // Delete posts that no longer exist
    for (const existing of existingPosts) {
      if (!incomingSlugs.has(existing.slug)) {
        await ctx.db.delete(existing._id);
        deleted++;
      }
    }

    return { created, updated, deleted };
  },
});

// Get a single post by slug (public)
export const getPostBySlug = query({
  args: {
    slug: v.string(),
  },
  returns: v.union(
    v.object({
      _id: v.id("posts"),
      _creationTime: v.number(),
      slug: v.string(),
      title: v.string(),
      description: v.string(),
      content: v.string(),
      date: v.string(),
      published: v.boolean(),
      tags: v.array(v.string()),
      readTime: v.optional(v.string()),
      image: v.optional(v.string()),
      showImageAtTop: v.optional(v.boolean()),
      excerpt: v.optional(v.string()),
      featured: v.optional(v.boolean()),
      featuredOrder: v.optional(v.number()),
      authorName: v.optional(v.string()),
      authorImage: v.optional(v.string()),
      layout: v.optional(v.string()),
      rightSidebar: v.optional(v.boolean()),
      showFooter: v.optional(v.boolean()),
      footer: v.optional(v.string()),
      showSocialFooter: v.optional(v.boolean()),
      aiChat: v.optional(v.boolean()),
      blogFeatured: v.optional(v.boolean()),
      newsletter: v.optional(v.boolean()),
      contactForm: v.optional(v.boolean()),
      unlisted: v.optional(v.boolean()),
    }),
    v.null()
  ),
  handler: async (ctx, args) => {
    const post = await ctx.db
      .query("posts")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .first();

    if (!post || !post.published) {
      return null;
    }

    return {
      _id: post._id,
      _creationTime: post._creationTime,
      slug: post.slug,
      title: post.title,
      description: post.description,
      content: post.content,
      date: post.date,
      published: post.published,
      tags: post.tags,
      readTime: post.readTime,
      image: post.image,
      showImageAtTop: post.showImageAtTop,
      excerpt: post.excerpt,
      featured: post.featured,
      featuredOrder: post.featuredOrder,
      authorName: post.authorName,
      authorImage: post.authorImage,
      layout: post.layout,
      rightSidebar: post.rightSidebar,
      showFooter: post.showFooter,
      footer: post.footer,
      showSocialFooter: post.showSocialFooter,
      aiChat: post.aiChat,
      blogFeatured: post.blogFeatured,
      newsletter: post.newsletter,
      contactForm: post.contactForm,
      unlisted: post.unlisted,
    };
  },
});

// Get a single post by slug (internal - doesn't check published status)
export const getPostBySlugInternal = internalQuery({
  args: {
    slug: v.string(),
  },
  returns: v.union(
    v.object({
      _id: v.id("posts"),
      slug: v.string(),
      title: v.string(),
      description: v.string(),
      content: v.string(),
      date: v.string(),
      published: v.boolean(),
      tags: v.array(v.string()),
      readTime: v.optional(v.string()),
      image: v.optional(v.string()),
      authorName: v.optional(v.string()),
      excerpt: v.optional(v.string()),
    }),
    v.null()
  ),
  handler: async (ctx, args) => {
    const post = await ctx.db
      .query("posts")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .first();

    if (!post) {
      return null;
    }

    return {
      _id: post._id,
      slug: post.slug,
      title: post.title,
      description: post.description,
      content: post.content,
      date: post.date,
      published: post.published,
      tags: post.tags,
      readTime: post.readTime,
      image: post.image,
      authorName: post.authorName,
      excerpt: post.excerpt,
    };
  },
});

// Get recent posts (internal - for newsletter)
export const getRecentPostsInternal = internalQuery({
  args: {
    limit: v.optional(v.number()),
    days: v.optional(v.number()),
    since: v.optional(v.string()), // ISO date string cutoff
  },
  returns: v.array(
    v.object({
      _id: v.id("posts"),
      slug: v.string(),
      title: v.string(),
      description: v.string(),
      date: v.string(),
      tags: v.array(v.string()),
      readTime: v.optional(v.string()),
      image: v.optional(v.string()),
      authorName: v.optional(v.string()),
      excerpt: v.optional(v.string()),
    })
  ),
  handler: async (ctx, args) => {
    const maxResults = args.limit ?? 10;

    // Determine cutoff date
    let cutoffDateStr: string;
    if (args.since) {
      cutoffDateStr = args.since;
    } else {
      const daysBack = args.days ?? 7;
      const cutoffDate = new Date();
      cutoffDate.setDate(cutoffDate.getDate() - daysBack);
      cutoffDateStr = cutoffDate.toISOString().split("T")[0];
    }

    // Use collect() instead of paginated helper
    const posts = await ctx.db
      .query("posts")
      .withIndex("by_published", (q) => q.eq("published", true))
      .collect();

    const recentPosts = posts
      .filter((p: any) => !p.unlisted && p.date >= cutoffDateStr)
      .sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, maxResults);

    return recentPosts.map((post: any) => ({
      _id: post._id,
      slug: post.slug,
      title: post.title,
      description: post.description,
      date: post.date,
      tags: post.tags,
      readTime: post.readTime,
      image: post.image,
      authorName: post.authorName,
      excerpt: post.excerpt,
    }));
  },
});

// Get all unique authors from published posts
export const getAllAuthors = query({
  args: {},
  returns: v.array(
    v.object({
      name: v.string(),
      slug: v.string(),
      image: v.optional(v.string()),
      postCount: v.number(),
    })
  ),
  handler: async (ctx) => {
    // Use collect() instead of paginated helper
    const posts = await ctx.db
      .query("posts")
      .withIndex("by_published", (q) => q.eq("published", true))
      .collect();

    // Filter out unlisted posts
    const listedPosts = posts.filter((p) => !p.unlisted);

    // Count occurrences of each author
    const authorCounts = new Map<string, { image?: string; count: number }>();
    for (const post of listedPosts) {
      if (post.authorName) {
        const existing = authorCounts.get(post.authorName);
        if (existing) {
          existing.count++;
        } else {
          authorCounts.set(post.authorName, {
            image: post.authorImage,
            count: 1,
          });
        }
      }
    }

    // Convert to array and sort by count (descending)
    return Array.from(authorCounts.entries())
      .map(([name, data]) => ({
        name,
        slug: name.toLowerCase().replace(/\s+/g, "-"),
        image: data.image,
        postCount: data.count,
      }))
      .sort((a, b) => b.postCount - a.postCount);
  },
});

// Post return type for pagination
const paginatedPostValidator = v.object({
  _id: v.id("posts"),
  _creationTime: v.number(),
  slug: v.string(),
  title: v.string(),
  description: v.string(),
  date: v.string(),
  published: v.boolean(),
  tags: v.array(v.string()),
  readTime: v.optional(v.string()),
  image: v.optional(v.string()),
  excerpt: v.optional(v.string()),
  featured: v.optional(v.boolean()),
  featuredOrder: v.optional(v.number()),
  authorName: v.optional(v.string()),
  authorImage: v.optional(v.string()),
  blogFeatured: v.optional(v.boolean()),
});

// Cursor-based pagination for blog page (load-more mode)
// Uses _creationTime cursor (unique) to avoid duplicate date issues
export const getPaginatedPosts = query({
  args: {
    limit: v.number(),
    cursor: v.optional(v.number()),
    excludeUnlisted: v.optional(v.boolean()),
  },
  returns: v.object({
    posts: v.array(paginatedPostValidator),
    nextCursor: v.union(v.number(), v.null()),
    hasMore: v.boolean(),
  }),
  handler: async (ctx, args) => {
    const BATCH_SIZE = 20;
    const startIndex = args.cursor ?? 0;
    const targetCount = startIndex + args.limit + 5;

    const validPosts: Doc<"posts">[] = [];
    let lastCreationTime: number | null = null;

    while (validPosts.length < targetCount) {
      let batch: Doc<"posts">[];

      if (lastCreationTime === null) {
        batch = await ctx.db
          .query("posts")
          .order("desc")
          .take(BATCH_SIZE);
      } else {
        const cursor = lastCreationTime;
        batch = await ctx.db
          .query("posts")
          .order("desc")
          .filter((q) => q.lt(q.field("_creationTime"), cursor))
          .take(BATCH_SIZE);
      }

      if (batch.length === 0) break;

      for (const post of batch) {
        if (post.published && !post.unlisted) {
          validPosts.push(post);
          if (validPosts.length >= targetCount) break;
        }
      }

      if (batch.length < BATCH_SIZE) break;
      lastCreationTime = batch[batch.length - 1]._creationTime;
    }

    // Sort by date descending
    validPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    const paginatedPosts = validPosts.slice(startIndex, startIndex + args.limit);
    const hasMore = validPosts.length > startIndex + args.limit;
    const nextCursor = hasMore ? startIndex + paginatedPosts.length : null;

    return {
      posts: paginatedPosts.map((post) => ({
        _id: post._id,
        _creationTime: post._creationTime,
        slug: post.slug,
        title: post.title,
        description: post.description,
        date: post.date,
        published: post.published,
        tags: post.tags,
        readTime: post.readTime,
        image: post.image,
        excerpt: post.excerpt,
        featured: post.featured,
        featuredOrder: post.featuredOrder,
        authorName: post.authorName,
        authorImage: post.authorImage,
        blogFeatured: post.blogFeatured,
      })),
      nextCursor,
      hasMore,
    };
  },
});

// Offset-based pagination for blog page (numbered mode)
// Uses lightweight postSummaries table (no content/embedding) for efficiency
export const getPostsByPage = query({
  args: {
    offset: v.number(),
    limit: v.number(),
    excludeUnlisted: v.optional(v.boolean()),
  },
  returns: v.object({
    posts: v.array(paginatedPostValidator),
    totalPosts: v.number(),
  }),
  handler: async (ctx, args) => {
    // Try lightweight summaries first (no content/embedding = ~1KB per post)
    const summariesExist = await ctx.db
      .query("postSummaries")
      .withIndex("by_published", (q) => q.eq("published", true))
      .first();

    if (summariesExist) {
      // Fetch ALL published summaries using _creationTime cursor (unique, no skips)
      const validPosts: any[] = [];
      let lastTime: number | null = null;
      while (true) {
        let batch;
        if (lastTime === null) {
          batch = await ctx.db
            .query("postSummaries")
            .withIndex("by_published", (q) => q.eq("published", true))
            .order("desc")
            .take(20);
        } else {
          batch = await ctx.db
            .query("postSummaries")
            .withIndex("by_published", (q) => q.eq("published", true))
            .order("desc")
            .filter((q) => q.lt(q.field("_creationTime"), lastTime as number))
            .take(20);
        }
        if (batch.length === 0) break;
        validPosts.push(...batch.filter((p: any) => !p.unlisted));
        if (batch.length < 20) break;
        lastTime = batch[batch.length - 1]._creationTime;
      }

      const paginatedPosts = validPosts.slice(args.offset, args.offset + args.limit);

      return {
        posts: paginatedPosts.map((post) => ({
          _id: post.postId,
          _creationTime: 0, // Not available in summaries
          slug: post.slug,
          title: post.title,
          description: post.description,
          date: post.date,
          published: post.published,
          tags: post.tags,
          readTime: post.readTime,
          image: post.image,
          excerpt: post.excerpt,
          featured: post.featured,
          featuredOrder: post.featuredOrder,
          authorName: post.authorName,
          authorImage: post.authorImage,
          blogFeatured: post.blogFeatured,
        })),
        totalPosts: validPosts.length,
      };
    }

    // Fallback: fetch ALL published posts using _creationTime cursor (unique, no skips)
    const validPosts: Array<Doc<"posts">> = [];
    let lastTime2: number | null = null;

    while (true) {
      let batch: Doc<"posts">[];
      if (lastTime2 === null) {
        batch = await ctx.db
          .query("posts")
          .withIndex("by_published_date", (q) => q.eq("published", true))
          .order("desc")
          .take(20);
      } else {
        batch = await ctx.db
          .query("posts")
          .withIndex("by_published_date", (q) => q.eq("published", true))
          .order("desc")
          .filter((q) => q.lt(q.field("_creationTime"), lastTime2 as number))
          .take(20);
      }

      if (batch.length === 0) break;
      validPosts.push(...batch.filter((p) => !p.unlisted));
      if (batch.length < 20) break;
      lastTime2 = batch[batch.length - 1]._creationTime;
    }

    const effectiveOffset = Math.min(args.offset, validPosts.length);
    const paginatedPosts = validPosts.slice(effectiveOffset, effectiveOffset + args.limit);

    return {
      posts: paginatedPosts.map((post) => ({
        _id: post._id,
        _creationTime: post._creationTime,
        slug: post.slug,
        title: post.title,
        description: post.description,
        date: post.date,
        published: post.published,
        tags: post.tags,
        readTime: post.readTime,
        image: post.image,
        excerpt: post.excerpt,
        featured: post.featured,
        featuredOrder: post.featuredOrder,
        authorName: post.authorName,
        authorImage: post.authorImage,
        blogFeatured: post.blogFeatured,
      })),
      totalPosts: validPosts.length,
    };
  },
});

// Get count of regular (non-blogFeatured) posts
// Returns cached count from siteConfig, falls back to real count
export const getRegularPostsCount = query({
  args: {
    excludeUnlisted: v.optional(v.boolean()),
  },
  returns: v.number(),
  handler: async (ctx) => {
    // Always count dynamically — no stale cache dependency
    const summariesExist = await ctx.db
      .query("postSummaries")
      .withIndex("by_published", (q) => q.eq("published", true))
      .first();

    let count = 0;
    if (summariesExist) {
      // Count from summaries using _creationTime cursor (unique, no skips)
      let lastTime: number | null = null;
      while (true) {
        let batch;
        if (lastTime === null) {
          batch = await ctx.db
            .query("postSummaries")
            .withIndex("by_published", (q) => q.eq("published", true))
            .order("desc")
            .take(20);
        } else {
          batch = await ctx.db
            .query("postSummaries")
            .withIndex("by_published", (q) => q.eq("published", true))
            .order("desc")
            .filter((q) => q.lt(q.field("_creationTime"), lastTime as number))
            .take(20);
        }
        if (batch.length === 0) break;
        count += batch.filter((p: any) => !p.unlisted).length;
        if (batch.length < 20) break;
        lastTime = batch[batch.length - 1]._creationTime;
      }
    } else {
      // Count from posts table using _creationTime cursor (unique, no skips)
      let lastTime: number | null = null;
      while (true) {
        let batch;
        if (lastTime === null) {
          batch = await ctx.db
            .query("posts")
            .withIndex("by_published_date", (q) => q.eq("published", true))
            .order("desc")
            .take(20);
        } else {
          batch = await ctx.db
            .query("posts")
            .withIndex("by_published_date", (q) => q.eq("published", true))
            .order("desc")
            .filter((q) => q.lt(q.field("_creationTime"), lastTime as number))
            .take(20);
        }
        if (batch.length === 0) break;
        count += batch.filter((p: any) => !p.unlisted).length;
        if (batch.length < 20) break;
        lastTime = batch[batch.length - 1]._creationTime;
      }
    }

    return count;
  },
});

// Update cached total post count in siteConfig (all posts - published and unpublished)
// Call this after syncing posts to keep the count accurate
export const updateTotalPostCountCache = mutation({
  args: {},
  returns: v.number(),
  handler: async (ctx) => {
    await requireAuth(ctx);
    // Count ALL posts (published and unpublished) in small batches
    let totalCount = 0;
    let lastDate: string | null = null;
    const batchSize = 20; // Small batch size
    let hasMore = true;
    const maxIterations = 1000;
    let iterations = 0;

    while (hasMore && iterations < maxIterations) {
      iterations++;
      let batch: Doc<"posts">[];

      if (lastDate === null) {
        batch = await ctx.db
          .query("posts")
          .withIndex("by_date")
          .order("desc")
          .take(batchSize);
      } else {
        const dateFilter = lastDate;
        batch = await ctx.db
          .query("posts")
          .withIndex("by_date", (q) => q.lt("date", dateFilter))
          .order("desc")
          .take(batchSize);
      }

      if (batch.length === 0) {
        hasMore = false;
        break;
      }

      totalCount += batch.length;

      if (batch.length < batchSize) {
        hasMore = false;
        break;
      }

      lastDate = batch[batch.length - 1].date;
    }

    // Store in siteConfig
    const existing = await ctx.db
      .query("siteConfig")
      .withIndex("by_key", (q) => q.eq("key", "totalPostCount"))
      .first();

    if (existing) {
      await ctx.db.patch(existing._id, { value: totalCount });
    } else {
      await ctx.db.insert("siteConfig", {
        key: "totalPostCount",
        value: totalCount,
      });
    }

    return totalCount;
  },
});

// Helper function for updating post count cache
// Uses lightweight postSummaries table (no content field) to stay under 16MB
async function updatePostCountCacheLogic(ctx: { db: any }) {
  // Try postSummaries first (lightweight, ~1KB per record vs ~50KB for posts)
  const summariesExist = await ctx.db
    .query("postSummaries")
    .withIndex("by_published", (q: any) => q.eq("published", true))
    .first();

  let count = 0;

  if (summariesExist) {
    // Use lightweight summaries - can fetch 1000+ easily
    const result = await ctx.db
      .query("postSummaries")
      .withIndex("by_published", (q: any) => q.eq("published", true))
      .paginate({ cursor: null, numItems: 2000 });

    count = result.page.filter((p: any) => !p.unlisted).length;
  } else {
    // Fallback: count posts in small batches using take() instead of paginate()
    // This avoids the "multiple paginated queries" restriction
    let lastId: string | null = null;
    const batchSize = 50;
    const maxIterations = 50;

    for (let i = 0; i < maxIterations; i++) {
      let batch: any[];

      if (lastId === null) {
        batch = await ctx.db
          .query("posts")
          .withIndex("by_published", (q: any) => q.eq("published", true))
          .take(batchSize);
      } else {
        // Use default index (by _id) for cursor-based iteration
        batch = await ctx.db
          .query("posts")
          .filter((q: any) =>
            q.and(
              q.eq(q.field("published"), true),
              q.gt(q.field("_id"), lastId)
            )
          )
          .take(batchSize);
      }

      if (batch.length === 0) break;

      count += batch.filter((p: any) => !p.unlisted).length;

      if (batch.length < batchSize) break;
      lastId = batch[batch.length - 1]._id;
    }
  }

  // Store in siteConfig
  const existing = await ctx.db
    .query("siteConfig")
    .withIndex("by_key", (q: any) => q.eq("key", "postCount"))
    .first();

  if (existing) {
    await ctx.db.patch(existing._id, { value: count });
  } else {
    await ctx.db.insert("siteConfig", {
      key: "postCount",
      value: count,
    });
  }

  return count;
}

// Update cached post count in siteConfig (published posts only)
// Call this after syncing posts to keep the count accurate
export const updatePostCountCache = mutation({
  args: {},
  returns: v.number(),
  handler: async (ctx) => {
    await requireAuth(ctx);
    return await updatePostCountCacheLogic(ctx);
  },
});

export const updatePostCountCacheInternal = internalMutation({
  args: {
    count: v.optional(v.number()),
  },
  returns: v.number(),
  handler: async (ctx, args) => {
    if (args.count !== undefined) {
      // Manual update
      const existing = await ctx.db
        .query("siteConfig")
        .withIndex("by_key", (q: any) => q.eq("key", "postCount"))
        .first();

      if (existing) {
        await ctx.db.patch(existing._id, { value: args.count });
      } else {
        await ctx.db.insert("siteConfig", {
          key: "postCount",
          value: args.count,
        });
      }
      return args.count;
    }
    return await updatePostCountCacheLogic(ctx);
  },
});

export const repairPostCount = mutation({
  args: { count: v.number() },
  handler: async (ctx, args) => {
    await requireAuth(ctx);
    const existing = await ctx.db
      .query("siteConfig")
      .withIndex("by_key", (q: any) => q.eq("key", "postCount"))
      .first();

    if (existing) {
      await ctx.db.patch(existing._id, { value: args.count });
      return existing._id;
    } else {
      return await ctx.db.insert("siteConfig", { key: "postCount", value: args.count });
    }
  },
});

// Get posts by tag with pagination
// Uses take() to avoid multiple paginated queries
// Simplified getPostsByTagPaginated to avoid "Too many bytes read" errors
// This version fetches a safe fixed batch of recent posts and filters them.
// It prioritizes stability over deep pagination.
export const getPostsByTagPaginated = query({
  args: {
    tag: v.string(),
    page: v.number(),
    pageSize: v.number(),
  },
  returns: v.object({
    posts: v.array(
      v.object({
        _id: v.id("posts"),
        _creationTime: v.number(),
        slug: v.string(),
        title: v.string(),
        description: v.string(),
        date: v.string(),
        published: v.boolean(),
        tags: v.array(v.string()),
        readTime: v.optional(v.string()),
        image: v.optional(v.string()),
        excerpt: v.optional(v.string()),
        authorName: v.optional(v.string()),
        authorImage: v.optional(v.string()),
      })
    ),
    totalPages: v.number(),
    totalPosts: v.number(),
  }),
  handler: async (ctx, args) => {
    // Safety limit: fetch max 100 recent posts to scan for tags
    // This prevents the "Too many bytes read" error reliably.
    const FETCH_LIMIT = 30;

    // Fetch recent posts using the optimized date index
    const allRecentPosts = await ctx.db
      .query("posts")
      .withIndex("by_published_date", (q) => q.eq("published", true))
      .order("desc")
      .take(FETCH_LIMIT);

    // Filter by tag in memory
    const filtered = allRecentPosts.filter(
      (post) =>
        !post.unlisted &&
        post.tags.some((t: string) => t.toLowerCase() === args.tag.toLowerCase())
    );

    // Hard limit to 20 items as requested ("only 20 get")
    // We strictly take the first page worth of data (or up to 20)
    const LIMIT = 20;
    const paginatedPosts = filtered.slice(0, LIMIT);

    return {
      posts: paginatedPosts.map((post) => ({
        _id: post._id,
        _creationTime: post._creationTime,
        slug: post.slug,
        title: post.title,
        description: post.description,
        date: post.date,
        published: post.published,
        tags: post.tags,
        readTime: post.readTime,
        image: post.image,
        excerpt: post.excerpt,
        authorName: post.authorName,
        authorImage: post.authorImage,
      })),
      totalPages: 1, // Force single page
      totalPosts: filtered.length,
    };
  },
});

// Get count of posts with a specific tag
// Uses take() to avoid multiple paginated queries
export const getPostsByTagCount = query({
  args: {
    tag: v.string(),
  },
  returns: v.number(),
  handler: async (ctx, args) => {
    // Fetch up to 500 posts to count matching tags (limited by 16MB read limit)
    const posts = await ctx.db
      .query("posts")
      .withIndex("by_published_date", (q) => q.eq("published", true))
      .take(20);

    // Count posts with the specified tag
    return posts.filter(
      (post) =>
        !post.unlisted &&
        post.tags.some((t: string) => t.toLowerCase() === args.tag.toLowerCase())
    ).length;
  },
});

// Get posts by author with pagination
// Uses take() to avoid multiple paginated queries
export const getPostsByAuthorPaginated = query({
  args: {
    authorSlug: v.string(),
    page: v.number(),
    pageSize: v.number(),
  },
  returns: v.object({
    posts: v.array(
      v.object({
        _id: v.id("posts"),
        _creationTime: v.number(),
        slug: v.string(),
        title: v.string(),
        description: v.string(),
        date: v.string(),
        published: v.boolean(),
        tags: v.array(v.string()),
        readTime: v.optional(v.string()),
        image: v.optional(v.string()),
        excerpt: v.optional(v.string()),
        authorName: v.optional(v.string()),
        authorImage: v.optional(v.string()),
      })
    ),
    totalPages: v.number(),
    totalPosts: v.number(),
    authorName: v.optional(v.string()),
    authorImage: v.optional(v.string()),
  }),
  handler: async (ctx, args) => {
    // Fetch up to 500 posts to find matching authors (limited by 16MB read limit)
    const posts = await ctx.db
      .query("posts")
      .withIndex("by_published_date", (q) => q.eq("published", true))
      .take(500);

    // Filter posts by author slug
    const filteredPosts = posts.filter((post) => {
      if (!post.authorName || post.unlisted) return false;
      const postAuthorSlug = post.authorName.toLowerCase().replace(/\s+/g, "-");
      return postAuthorSlug === args.authorSlug.toLowerCase();
    });

    // Get author info from first post
    const authorName = filteredPosts[0]?.authorName;
    const authorImage = filteredPosts[0]?.authorImage;

    // Sort by date descending
    const sortedPosts = filteredPosts.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    const totalPosts = sortedPosts.length;
    const totalPages = Math.ceil(totalPosts / args.pageSize);
    const startIndex = (args.page - 1) * args.pageSize;
    const paginatedPosts = sortedPosts.slice(
      startIndex,
      startIndex + args.pageSize
    );

    return {
      posts: paginatedPosts.map((post) => ({
        _id: post._id,
        _creationTime: post._creationTime,
        slug: post.slug,
        title: post.title,
        description: post.description,
        date: post.date,
        published: post.published,
        tags: post.tags,
        readTime: post.readTime,
        image: post.image,
        excerpt: post.excerpt,
        authorName: post.authorName,
        authorImage: post.authorImage,
      })),
      totalPages,
      totalPosts,
      authorName,
      authorImage,
    };
  },
});

// Get count of posts by author
// Uses take() to avoid multiple paginated queries
export const getPostsByAuthorCount = query({
  args: {
    authorSlug: v.string(),
  },
  returns: v.number(),
  handler: async (ctx, args) => {
    // Fetch up to 500 posts to count matching authors (limited by 16MB read limit)
    const posts = await ctx.db
      .query("posts")
      .withIndex("by_published_date", (q) => q.eq("published", true))
      .take(500);

    // Count posts by the specified author
    return posts.filter((post) => {
      if (!post.authorName || post.unlisted) return false;
      const postAuthorSlug = post.authorName.toLowerCase().replace(/\s+/g, "-");
      return postAuthorSlug === args.authorSlug.toLowerCase();
    }).length;
  },
});

// Get posts with docs layout (for sidebar navigation)
export const getDocsPosts = query({
  args: {},
  returns: v.array(
    v.object({
      _id: v.id("posts"),
      slug: v.string(),
      title: v.string(),
      featuredOrder: v.optional(v.number()),
      layout: v.optional(v.string()),
    })
  ),
  handler: async (ctx) => {
    // Use collect() instead of paginated helper
    const posts = await ctx.db
      .query("posts")
      .withIndex("by_published", (q) => q.eq("published", true))
      .collect();

    // Filter posts with docs layout
    const docsPosts = posts
      .filter((p: any) => p.layout === "sidebar" && !p.unlisted)
      .sort((a: any, b: any) => {
        const orderA = a.featuredOrder ?? 999;
        const orderB = b.featuredOrder ?? 999;
        return orderA - orderB;
      });

    return docsPosts.map((post: any) => ({
      _id: post._id,
      slug: post.slug,
      title: post.title,
      featuredOrder: post.featuredOrder,
      layout: post.layout,
    }));
  },
});

// Authenticated mutation for syncing posts from markdown files
export const syncPostsPublic = mutation({
  args: {
    posts: v.array(
      v.object({
        slug: v.string(),
        title: v.string(),
        description: v.string(),
        content: v.string(),
        date: v.string(),
        published: v.boolean(),
        tags: v.array(v.string()),
        readTime: v.optional(v.string()),
        image: v.optional(v.string()),
        showImageAtTop: v.optional(v.boolean()),
        excerpt: v.optional(v.string()),
        featured: v.optional(v.boolean()),
        featuredOrder: v.optional(v.number()),
        authorName: v.optional(v.string()),
        authorImage: v.optional(v.string()),
        layout: v.optional(v.string()),
        rightSidebar: v.optional(v.boolean()),
        showFooter: v.optional(v.boolean()),
        footer: v.optional(v.string()),
        showSocialFooter: v.optional(v.boolean()),
        aiChat: v.optional(v.boolean()),
        blogFeatured: v.optional(v.boolean()),
        newsletter: v.optional(v.boolean()),
        contactForm: v.optional(v.boolean()),
        unlisted: v.optional(v.boolean()),
      })
    ),
  },
  returns: v.object({
    created: v.number(),
    updated: v.number(),
    deleted: v.number(),
  }),
  handler: async (ctx, args) => {
    await requireAuth(ctx);
    let created = 0;
    let updated = 0;

    const now = Date.now();
    const incomingSlugs = new Set(args.posts.map((p) => p.slug));

    // Get existing posts for this batch efficiently
    const existingBySlug = new Map<string, any>();
    for (const post of args.posts) {
      const existing = await ctx.db
        .query("posts")
        .withIndex("by_slug", (q) => q.eq("slug", post.slug))
        .first();
      if (existing) {
        existingBySlug.set(post.slug, existing);
      }
    }

    // Upsert incoming posts
    for (const post of args.posts) {
      const existing = existingBySlug.get(post.slug);

      if (existing) {
        await ctx.db.patch(existing._id, {
          ...post,
          lastSyncedAt: now,
        });
        updated++;
      } else {
        await ctx.db.insert("posts", {
          ...post,
          lastSyncedAt: now,
        });
        created++;
      }
    }

    // Note: Deletion of posts not in source files should be handled
    // in a separate cleanup step after all batches are processed

    return { created, updated, deleted: 0 };
  },
});

// Batch fetch posts for sitemaps using cursors
export const getSitemapPostsBatch = query({
  args: {
    cursor: v.union(v.string(), v.null()),
    numItems: v.number(),
  },
  returns: v.object({
    posts: v.array(
      v.object({
        slug: v.string(),
        date: v.string(),
        published: v.boolean(),
        unlisted: v.boolean(),
      })
    ),
    continueCursor: v.string(),
    isDone: v.boolean(),
  }),
  handler: async (ctx, args) => {
    // We use the by_published_date index to match the counting logic and ensure efficiency
    const result = await ctx.db
      .query("posts")
      .withIndex("by_published_date", (q) => q.eq("published", true))
      .order("desc") // Most recent first
      .paginate({ cursor: args.cursor, numItems: args.numItems });

    return {
      posts: result.page.map((post) => ({
        slug: post.slug,
        date: post.date,
        published: !!post.published,
        unlisted: !!post.unlisted,
      })),
      continueCursor: result.continueCursor,
      isDone: result.isDone,
    };
  },
});

// Get total count of published posts for sitemap index
// Note: Convex only allows a single paginated query per function, so we fetch up to 1000 posts
// This is practical for sitemaps as we don't need more than 50 pages of 20 posts each
export const getSitemapPostsCount = query({
  args: {},
  returns: v.number(),
  handler: async (ctx) => {
    // Fetch a large batch in a single pagination call
    const batch = await ctx.db
      .query("posts")
      .withIndex("by_published_date", (q) => q.eq("published", true))
      .order("desc")
      .paginate({ cursor: null, numItems: 1000 });

    // Count only non-unlisted posts
    return batch.page.filter((p: any) => !p.unlisted).length;
  },
});

// Batch fetch posts for RSS using cursors
export const getRSSPostsBatch = query({
  args: {
    cursor: v.union(v.string(), v.null()),
    numItems: v.number(),
    includeContent: v.optional(v.boolean()),
  },
  handler: async (ctx, args) => {
    const result = await ctx.db
      .query("posts")
      .order("desc")
      .paginate({ cursor: args.cursor, numItems: args.numItems });

    return {
      posts: result.page.map((post) => ({
        title: post.title,
        description: post.description,
        slug: post.slug,
        date: post.date,
        published: !!post.published,
        unlisted: !!post.unlisted,
        content: args.includeContent ? post.content : undefined,
        tags: post.tags || [],
      })),
      continueCursor: result.continueCursor,
      isDone: result.isDone,
    };
  },
});

// Create or update a post (for the Write page)
export const createOrUpdatePost = mutation({
  args: {
    slug: v.string(),
    title: v.string(),
    description: v.string(),
    content: v.string(),
    date: v.string(),
    published: v.boolean(),
    tags: v.array(v.string()),
    readTime: v.optional(v.string()),
    image: v.optional(v.string()),
    showImageAtTop: v.optional(v.boolean()),
    excerpt: v.optional(v.string()),
    featured: v.optional(v.boolean()),
    featuredOrder: v.optional(v.number()),
    authorName: v.optional(v.string()),
    authorImage: v.optional(v.string()),
    layout: v.optional(v.string()),
    rightSidebar: v.optional(v.boolean()),
    showFooter: v.optional(v.boolean()),
    footer: v.optional(v.string()),
    showSocialFooter: v.optional(v.boolean()),
    aiChat: v.optional(v.boolean()),
    blogFeatured: v.optional(v.boolean()),
    newsletter: v.optional(v.boolean()),
    contactForm: v.optional(v.boolean()),
    unlisted: v.optional(v.boolean()),
  },
  returns: v.id("posts"),
  handler: async (ctx, args) => {
    // Auth handled by Supabase at the dashboard route level
    const existing = await ctx.db
      .query("posts")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .first();

    if (existing) {
      await ctx.db.patch(existing._id, {
        ...args,
        lastSyncedAt: Date.now(),
      });
      return existing._id;
    }

    return await ctx.db.insert("posts", {
      ...args,
      lastSyncedAt: Date.now(),
    });
  },
});

// Delete a post by ID
export const deletePost = mutation({
  args: {
    id: v.id("posts"),
  },
  handler: async (ctx, args) => {
    await requireAuth(ctx);
    await ctx.db.delete(args.id);

    // Also delete from postSummaries if exists to keep lists in sync
    const summary = await ctx.db
      .query("postSummaries")
      .withIndex("by_postId", (q) => q.eq("postId", args.id))
      .first();

    if (summary) {
      await ctx.db.delete(summary._id);
    }
  },
});

// Update a post by ID (for Dashboard editor)
export const updatePost = mutation({
  args: {
    id: v.id("posts"),
    slug: v.string(),
    title: v.string(),
    description: v.string(),
    content: v.string(),
    date: v.string(),
    published: v.boolean(),
    tags: v.array(v.string()),
    readTime: v.optional(v.string()),
    image: v.optional(v.string()),
    showImageAtTop: v.optional(v.boolean()),
    excerpt: v.optional(v.string()),
    featured: v.optional(v.boolean()),
    featuredOrder: v.optional(v.number()),
    authorName: v.optional(v.string()),
    authorImage: v.optional(v.string()),
    layout: v.optional(v.string()),
    rightSidebar: v.optional(v.boolean()),
    showFooter: v.optional(v.boolean()),
    footer: v.optional(v.string()),
    showSocialFooter: v.optional(v.boolean()),
    aiChat: v.optional(v.boolean()),
    blogFeatured: v.optional(v.boolean()),
    newsletter: v.optional(v.boolean()),
    contactForm: v.optional(v.boolean()),
    unlisted: v.optional(v.boolean()),
  },
  handler: async (ctx, args) => {
    await requireAuth(ctx);
    const { id, ...updates } = args;

    // Get existing post to create version snapshot
    const existing = await ctx.db.get(id);
    if (existing) {
      // Capture version before update (async, non-blocking)
      await ctx.scheduler.runAfter(0, internal.versions.createVersion, {
        contentType: "post",
        contentId: String(id),
        slug: existing.slug,
        title: existing.title,
        content: existing.content,
        description: existing.description,
        source: "dashboard",
      });
    }

    await ctx.db.patch(id, {
      ...updates,
      lastSyncedAt: Date.now(),
    });
  },
});

// Get adjacent posts (newer/older) by published date for navigation
export const getAdjacentPosts = query({
  args: {
    slug: v.string(),
  },
  returns: v.object({
    newer: v.union(v.object({
      slug: v.string(),
      title: v.string(),
    }), v.null()),
    older: v.union(v.object({
      slug: v.string(),
      title: v.string(),
    }), v.null()),
  }),
  handler: async (ctx, args) => {
    const currentPost = await ctx.db
      .query("posts")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .first();

    if (!currentPost) {
      return { newer: null, older: null };
    }

    // Newer post (fetched ascending from current date)
    const newerPosts = await ctx.db
      .query("posts")
      .withIndex("by_published_date", (q) => q.eq("published", true).gt("date", currentPost.date))
      .order("asc")
      .take(10);
    const validNewer = newerPosts.find((p: any) => !p.unlisted);

    // Older post (fetched descending from current date)
    const olderPosts = await ctx.db
      .query("posts")
      .withIndex("by_published_date", (q) => q.eq("published", true).lt("date", currentPost.date))
      .order("desc")
      .take(10);
    const validOlder = olderPosts.find((p: any) => !p.unlisted);

    return {
      newer: validNewer ? { slug: validNewer.slug, title: validNewer.title } : null,
      older: validOlder ? { slug: validOlder.slug, title: validOlder.title } : null,
    };
  },
});

// Sync post summaries (lightweight table for pagination)
// Call this after syncing posts to populate the summaries table
export const syncPostSummaries = mutation({
  args: {},
  returns: v.object({
    created: v.number(),
    updated: v.number(),
    deleted: v.number(),
  }),
  handler: async (ctx) => {
    await requireAuth(ctx);
    let created = 0;
    let updated = 0;
    let deleted = 0;

    // Get existing summaries first (lightweight, no content)
    const existingSummaries = await ctx.db.query("postSummaries").collect();
    const summaryByPostId = new Map(existingSummaries.map(s => [String(s.postId), s]));
    const processedPostIds = new Set<string>();

    // Fetch posts in small batches using take() to avoid byte limit
    // Use single paginated query (Convex allows only one per function)
    const result = await ctx.db
      .query("posts")
      .order("desc")
      .paginate({ cursor: null, numItems: 100 }); // Small batch

    for (const post of result.page) {
      processedPostIds.add(String(post._id));
      const existing = summaryByPostId.get(String(post._id));
      const summaryData = {
        postId: post._id,
        slug: post.slug,
        title: post.title,
        description: post.description,
        date: post.date,
        published: post.published,
        tags: post.tags,
        readTime: post.readTime,
        image: post.image,
        excerpt: post.excerpt,
        featured: post.featured,
        featuredOrder: post.featuredOrder,
        authorName: post.authorName,
        authorImage: post.authorImage,
        blogFeatured: post.blogFeatured,
        unlisted: post.unlisted,
      };

      if (existing) {
        await ctx.db.patch(existing._id, summaryData);
        updated++;
      } else {
        await ctx.db.insert("postSummaries", summaryData);
        created++;
      }
    }

    // Note: For full sync of 490+ posts, run syncPostSummariesBatch multiple times
    // This function only syncs first 100 posts per call

    // Delete orphaned summaries (only if we processed all posts)
    if (result.isDone) {
      for (const summary of existingSummaries) {
        if (!processedPostIds.has(String(summary.postId))) {
          await ctx.db.delete(summary._id);
          deleted++;
        }
      }
    }

    return { created, updated, deleted };
  },
});

// Sync post summaries in batches (for large datasets)
// Run multiple times if you have more than 500 posts
export const syncPostSummariesBatch = mutation({
  args: {
    cursor: v.optional(v.union(v.string(), v.null())),
  },
  returns: v.object({
    created: v.number(),
    updated: v.number(),
    nextCursor: v.union(v.string(), v.null()),
    isDone: v.boolean(),
  }),
  handler: async (ctx, args) => {
    await requireAuth(ctx);
    let created = 0;
    let updated = 0;

    // Fetch batch of posts
    const result = await ctx.db
      .query("posts")
      .order("desc")
      .paginate({ cursor: args.cursor ?? null, numItems: 100 });

    // Upsert summaries for this batch
    for (const post of result.page) {
      const existing = await ctx.db
        .query("postSummaries")
        .withIndex("by_postId", (q) => q.eq("postId", post._id))
        .first();

      const summaryData = {
        postId: post._id,
        slug: post.slug,
        title: post.title,
        description: post.description,
        date: post.date,
        published: post.published,
        tags: post.tags,
        readTime: post.readTime,
        image: post.image,
        excerpt: post.excerpt,
        featured: post.featured,
        featuredOrder: post.featuredOrder,
        authorName: post.authorName,
        authorImage: post.authorImage,
        blogFeatured: post.blogFeatured,
        unlisted: post.unlisted,
      };

      if (existing) {
        await ctx.db.patch(existing._id, summaryData);
        updated++;
      } else {
        await ctx.db.insert("postSummaries", summaryData);
        created++;
      }
    }

    return {
      created,
      updated,
      nextCursor: result.isDone ? null : result.continueCursor,
      isDone: result.isDone,
    };
  },
});

// Debug: count posts by status from lightweight postSummaries table
export const debugPostCounts = internalQuery({
  args: {},
  returns: v.object({
    summariesTotal: v.number(),
    published: v.number(),
    unpublished: v.number(),
    unlisted: v.number(),
    publishedAndListed: v.number(),
  }),
  handler: async (ctx) => {
    // postSummaries are ~1KB each, safe to collect for 500+ posts
    const all = await ctx.db.query("postSummaries").collect();
    let pub = 0, unpub = 0, unl = 0, pubListed = 0;
    for (const p of all) {
      if (p.published) pub++; else unpub++;
      if (p.unlisted) unl++;
      if (p.published && !p.unlisted) pubListed++;
    }
    return { summariesTotal: all.length, published: pub, unpublished: unpub, unlisted: unl, publishedAndListed: pubListed };
  },
});

// Internal sync: no auth required, for CLI/scheduled use
export const syncPostSummariesInternal = internalMutation({
  args: {
    cursor: v.optional(v.union(v.string(), v.null())),
  },
  returns: v.object({
    created: v.number(),
    updated: v.number(),
    nextCursor: v.union(v.string(), v.null()),
    isDone: v.boolean(),
  }),
  handler: async (ctx, args) => {
    let created = 0;
    let updated = 0;

    const result = await ctx.db
      .query("posts")
      .order("desc")
      .paginate({ cursor: args.cursor ?? null, numItems: 100 });

    for (const post of result.page) {
      const existing = await ctx.db
        .query("postSummaries")
        .withIndex("by_postId", (q) => q.eq("postId", post._id))
        .first();

      const summaryData = {
        postId: post._id,
        slug: post.slug,
        title: post.title,
        description: post.description,
        date: post.date,
        published: post.published,
        tags: post.tags,
        readTime: post.readTime,
        image: post.image,
        excerpt: post.excerpt,
        featured: post.featured,
        featuredOrder: post.featuredOrder,
        authorName: post.authorName,
        authorImage: post.authorImage,
        blogFeatured: post.blogFeatured,
        unlisted: post.unlisted,
      };

      if (existing) {
        await ctx.db.patch(existing._id, summaryData);
        updated++;
      } else {
        await ctx.db.insert("postSummaries", summaryData);
        created++;
      }
    }

    return {
      created,
      updated,
      nextCursor: result.isDone ? null : result.continueCursor,
      isDone: result.isDone,
    };
  },
});

// Auto-sync all post summaries (chains batches automatically)
export const syncAllPostSummaries = mutation({
  args: {
    cursor: v.optional(v.string()),
    totalCreated: v.optional(v.number()),
    totalUpdated: v.optional(v.number()),
  },
  returns: v.object({
    created: v.number(),
    updated: v.number(),
    status: v.string(),
  }),
  handler: async (ctx, args) => {
    await requireAuth(ctx);
    const totalCreated = args.totalCreated ?? 0;
    const totalUpdated = args.totalUpdated ?? 0;

    // Fetch batch of posts
    const result = await ctx.db
      .query("posts")
      .order("desc")
      .paginate({ cursor: args.cursor ?? null, numItems: 50 });

    let created = 0;
    let updated = 0;

    for (const post of result.page) {
      const existing = await ctx.db
        .query("postSummaries")
        .withIndex("by_postId", (q) => q.eq("postId", post._id))
        .first();

      const summaryData = {
        postId: post._id,
        slug: post.slug,
        title: post.title,
        description: post.description,
        date: post.date,
        published: post.published,
        tags: post.tags,
        readTime: post.readTime,
        image: post.image,
        excerpt: post.excerpt,
        featured: post.featured,
        featuredOrder: post.featuredOrder,
        authorName: post.authorName,
        authorImage: post.authorImage,
        blogFeatured: post.blogFeatured,
        unlisted: post.unlisted,
      };

      if (existing) {
        await ctx.db.patch(existing._id, summaryData);
        updated++;
      } else {
        await ctx.db.insert("postSummaries", summaryData);
        created++;
      }
    }

    const newTotalCreated = totalCreated + created;
    const newTotalUpdated = totalUpdated + updated;

    if (!result.isDone) {
      // Schedule next batch
      await ctx.scheduler.runAfter(0, internal.posts.syncAllPostSummariesInternal, {
        cursor: result.continueCursor,
        totalCreated: newTotalCreated,
        totalUpdated: newTotalUpdated,
      });
      return {
        created: newTotalCreated,
        updated: newTotalUpdated,
        status: "in_progress - more batches scheduled",
      };
    }

    // All done - update the post count cache
    await updatePostCountCacheLogic(ctx);

    return {
      created: newTotalCreated,
      updated: newTotalUpdated,
      status: "completed",
    };
  },
});

// Internal version for scheduler chaining
export const syncAllPostSummariesInternal = internalMutation({
  args: {
    cursor: v.optional(v.string()),
    totalCreated: v.optional(v.number()),
    totalUpdated: v.optional(v.number()),
  },
  returns: v.null(),
  handler: async (ctx, args) => {
    const totalCreated = args.totalCreated ?? 0;
    const totalUpdated = args.totalUpdated ?? 0;

    const result = await ctx.db
      .query("posts")
      .order("desc")
      .paginate({ cursor: args.cursor ?? null, numItems: 50 });

    let created = 0;
    let updated = 0;

    for (const post of result.page) {
      const existing = await ctx.db
        .query("postSummaries")
        .withIndex("by_postId", (q) => q.eq("postId", post._id))
        .first();

      const summaryData = {
        postId: post._id,
        slug: post.slug,
        title: post.title,
        description: post.description,
        date: post.date,
        published: post.published,
        tags: post.tags,
        readTime: post.readTime,
        image: post.image,
        excerpt: post.excerpt,
        featured: post.featured,
        featuredOrder: post.featuredOrder,
        authorName: post.authorName,
        authorImage: post.authorImage,
        blogFeatured: post.blogFeatured,
        unlisted: post.unlisted,
      };

      if (existing) {
        await ctx.db.patch(existing._id, summaryData);
        updated++;
      } else {
        await ctx.db.insert("postSummaries", summaryData);
        created++;
      }
    }

    if (!result.isDone) {
      await ctx.scheduler.runAfter(0, internal.posts.syncAllPostSummariesInternal, {
        cursor: result.continueCursor,
        totalCreated: totalCreated + created,
        totalUpdated: totalUpdated + updated,
      });
    } else {
      // All done - update the post count cache
      await updatePostCountCacheLogic(ctx);
    }

    return null;
  },
});
