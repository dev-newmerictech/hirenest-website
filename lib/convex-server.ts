/**
 * Server-side Convex data fetching for generateMetadata, generateStaticParams,
 * and Server Components. Uses ConvexHttpClient to query Convex functions
 * directly (bypasses HTTP action routes which may 404 on self-hosted).
 */
import { ConvexHttpClient } from "convex/browser";
import { api } from "@/convex/_generated/api";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://hirenest.ai";

/** Lazy-initialized Convex HTTP client (queries the backend directly) */
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

/** Summary post for blog listing (no full content) */
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
 * Fetch all published blog posts for the listing page.
 * Returns summaries only (no full content) for lightweight SSR.
 */
export async function fetchBlogPosts(): Promise<PostSummary[]> {
  try {
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
  } catch (error) {
    console.error("[convex-server] Failed to fetch blog posts:", error);
    return [];
  }
}

/**
 * Fetch all post slugs for generateStaticParams (ISR).
 */
export async function fetchAllPostSlugs(): Promise<string[]> {
  try {
    const posts = await fetchBlogPosts();
    if (posts.length === 0) {
      console.warn("[generateStaticParams] No blog posts returned — pages will use ISR on first request");
    } else {
      console.log(`[generateStaticParams] Pre-rendering ${posts.length} blog posts`);
    }
    return posts.map((p) => p.slug);
  } catch (error) {
    console.error("[generateStaticParams] Failed to fetch blog slugs:", error);
    return [];
  }
}

/**
 * Fetch all unique tags for generateStaticParams.
 */
export async function fetchAllTags(): Promise<{ tag: string; count: number }[]> {
  try {
    const client = getClient();
    return await client.query(api.posts.getAllTags);
  } catch (error) {
    console.error("[convex-server] Failed to fetch tags:", error);
    return [];
  }
}

/**
 * Fetch posts filtered by tag for server-rendered fallback.
 */
export async function fetchPostsByTag(tag: string): Promise<PostSummary[]> {
  try {
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
  } catch (error) {
    console.error(`[convex-server] Failed to fetch posts for tag "${tag}":`, error);
    return [];
  }
}

/**
 * Fetch all unique authors for generateStaticParams.
 */
export async function fetchAllAuthors(): Promise<{ name: string; slug: string; postCount: number }[]> {
  try {
    const client = getClient();
    return await client.query(api.posts.getAllAuthors);
  } catch (error) {
    console.error("[convex-server] Failed to fetch authors:", error);
    return [];
  }
}

/**
 * Fetch posts by author slug for server-rendered fallback.
 */
export async function fetchPostsByAuthor(authorSlug: string): Promise<PostSummary[]> {
  try {
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
  } catch (error) {
    console.error(`[convex-server] Failed to fetch posts for author "${authorSlug}":`, error);
    return [];
  }
}

/**
 * Fetch a published blog post by slug.
 * Returns null if not found or unpublished.
 */
export async function fetchPostBySlug(slug: string): Promise<PostMetadata | null> {
  try {
    const client = getClient();
    const post = await client.query(api.posts.getPostBySlug, { slug });

    if (!post) return null;

    return post as unknown as PostMetadata;
  } catch (error) {
    console.error(`[convex-server] Failed to fetch post "${slug}":`, error);
    return null;
  }
}
