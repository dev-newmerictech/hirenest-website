import { mutation } from "./_generated/server";
import { v } from "convex/values";

/**
 * Bulk import blog posts from markdown backup
 * This mutation accepts an array of post objects and inserts them into the database
 * Also syncs postSummaries table for efficient queries
 */
export const bulkImportPosts = mutation({
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
    imported: v.number(),
    updated: v.number(),
    errors: v.number(),
  }),
  handler: async (ctx, args) => {
    let imported = 0;
    let updated = 0;
    let errors = 0;

    const now = Date.now();

    for (const post of args.posts) {
      try {
        // Check if post already exists
        const existing = await ctx.db
          .query("posts")
          .withIndex("by_slug", (q) => q.eq("slug", post.slug))
          .first();

        let postId: any;

        if (existing) {
          // Update existing post
          await ctx.db.patch(existing._id, {
            ...post,
            lastSyncedAt: now,
          });
          postId = existing._id;
          updated++;
        } else {
          // Insert new post
          postId = await ctx.db.insert("posts", {
            ...post,
            lastSyncedAt: now,
          });
          imported++;
        }

        // Sync postSummaries table (used for efficient queries)
        const existingSummary = await ctx.db
          .query("postSummaries")
          .withIndex("by_postId", (q) => q.eq("postId", postId))
          .first();

        const summaryData = {
          postId,
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

        if (existingSummary) {
          await ctx.db.patch(existingSummary._id, summaryData);
        } else {
          await ctx.db.insert("postSummaries", summaryData);
        }
      } catch (error) {
        console.error(`Error importing post ${post.slug}:`, error);
        errors++;
      }
    }

    return { imported, updated, errors };
  },
});
