/**
 * Server-side Convex data fetching with in-memory caching.
 * Reduces Convex bandwidth usage through intelligent caching.
 */
import { ConvexHttpClient } from "convex/browser";
import { api } from "@/convex/_generated/api";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://hirenest.ai";

/** Cache TTL configuration */
const CACHE_TTL = {
  SHORT: 60 * 1000,          // 1 minute - for post details
  MEDIUM: 48 * 60 * 60 * 1000, // 48 hours - for blog listing
  LONG: 15 * 60 * 1000,       // 15 minutes - for slugs, tags, authors
};

/** In-memory cache store */
interface CacheEntry<T> {
  data: T;
  expires: number;
}

const cache = new Map<string, CacheEntry<any>>();

/** Get cached data or fetch fresh */
async function withCache<T>(
  key: string,
  ttl: number,
  fetcher: () => Promise<T>
): Promise<T> {
  const now = Date.now();
  const cached = cache.get(key);

  if (cached && cached.expires > now) {
    console.log(`[cache HIT] ${key}`);
    return cached.data as T;
  }

  console.log(`[cache MISS] ${key}`);
  const data = await fetcher();
  cache.set(key, { data, expires: now + ttl });

  // Cleanup expired entries periodically
  if (cache.size > 100) {
    for (const [k, v] of cache.entries()) {
      if (v.expires <= now) {
        cache.delete(k);
      }
    }
  }

  return data;
}

/** Clear cache for a specific key pattern (call after post updates) */
export function clearConvexCache(pattern?: string): void {
  if (!pattern) {
    cache.clear();
    console.log("[cache] Cleared all cache");
    return;
  }
  let cleared = 0;
  for (const key of cache.keys()) {
    if (key.includes(pattern)) {
      cache.delete(key);
      cleared++;
    }
  }
  console.log(`[cache] Cleared ${cleared} entries matching "${pattern}"`);
}

/** Lazy-initialized Convex HTTP client */
let _client: ConvexHttpClient | null = null;
function getClient(): ConvexHttpClient {
  if (!_client) {
    const url = process.env.NEXT_PUBLIC_CONVEX_URL;
    if (!url) throw new Error("NEXT_PUBLIC_CONVEX_URL is not set");
    _client = new ConvexHttpClient(url);
  }
  return _client;
}

export interface PostMetadata {
  _id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  date: string;
  published: boolean;
  tags: string[];
  image?: string;
  excerpt?: string;
  authorName?: string;
  authorImage?: string;
  readTime?: string;
  updatedAt?: string;
  showImageAtTop?: boolean;
  contactForm?: boolean;
  newsletter?: boolean;
  showSocialFooter?: boolean;
}

export interface PostSummary {
  title: string;
  slug: string;
  description: string;
  date: string;
  readTime?: string;
  tags: string[];
  url: string;
}

/**
 * Fetch all published blog posts with caching.
 */
export async function fetchBlogPosts(): Promise<PostSummary[]> {
  return withCache("blog-posts", CACHE_TTL.MEDIUM, async () => {
    const client = getClient();
    const posts = await client.query(api.posts.getAllPosts);

    return posts.map((post) => ({
      title: post.title,
      slug: post.slug,
      description: post.description,
      date: post.date,
      readTime: post.readTime,
      tags: post.tags,
      url: `${SITE_URL}/blog/${post.slug}`,
    }));
  });
}

/**
 * Fetch all post slugs with caching.
 */
export async function fetchAllPostSlugs(): Promise<string[]> {
  const posts = await fetchBlogPosts();
  if (posts.length === 0) {
    console.warn("[generateStaticParams] No blog posts returned");
  } else {
    console.log(`[generateStaticParams] Pre-rendering ${posts.length} blog posts`);
  }
  return posts.map((p) => p.slug);
}

/**
 * Fetch all unique tags with caching.
 */
export async function fetchAllTags(): Promise<{ tag: string; count: number }[]> {
  return withCache("blog-tags", CACHE_TTL.LONG, async () => {
    const client = getClient();
    return await client.query(api.posts.getAllTags);
  });
}

/**
 * Fetch posts by tag with caching.
 */
export async function fetchPostsByTag(tag: string): Promise<PostSummary[]> {
  return withCache(`blog-posts-by-tag-${tag}`, CACHE_TTL.MEDIUM, async () => {
    const client = getClient();
    const posts = await client.query(api.posts.getPostsByTag, { tag });
    return posts.map((post) => ({
      title: post.title,
      slug: post.slug,
      description: post.description,
      date: post.date,
      readTime: post.readTime,
      tags: post.tags,
      url: `${SITE_URL}/blog/${post.slug}`,
    }));
  });
}

/**
 * Fetch all authors with caching.
 */
export async function fetchAllAuthors(): Promise<{ name: string; slug: string; postCount: number }[]> {
  return withCache("blog-authors", CACHE_TTL.LONG, async () => {
    const client = getClient();
    return await client.query(api.posts.getAllAuthors);
  });
}

/**
 * Fetch posts by author with caching.
 */
export async function fetchPostsByAuthor(authorSlug: string): Promise<PostSummary[]> {
  return withCache(`blog-posts-by-author-${authorSlug}`, CACHE_TTL.MEDIUM, async () => {
    const client = getClient();
    const result = await client.query(api.posts.getPostsByAuthorPaginated, {
      authorSlug,
      page: 1,
      pageSize: 200,
    });
    return result.posts.map((post) => ({
      title: post.title,
      slug: post.slug,
      description: post.description,
      date: post.date,
      readTime: post.readTime,
      tags: post.tags,
      url: `${SITE_URL}/blog/${post.slug}`,
    }));
  });
}

/**
 * Fetch a single post by slug with caching.
 */
export async function fetchPostBySlug(slug: string): Promise<PostMetadata | null> {
  return withCache(`blog-post-${slug}`, CACHE_TTL.SHORT, async () => {
    const client = getClient();
    const post = await client.query(api.posts.getPostBySlug, { slug });

    if (!post) return null;

    return post as unknown as PostMetadata;
  });
}
