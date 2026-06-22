export interface PostSummary {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime?: string;
  tags: string[];
  published: boolean;
  image?: string | null;
  excerpt?: string | null;
  authorName?: string | null;
  authorImage?: string | null;
  blogFeatured?: boolean;
  unlisted?: boolean;
  url?: string; // Derived field
}

export interface PostMetadata {
  slug: string;
  title: string;
  description: string;
  content: string;
  date: string;
  published: boolean;
  tags: string[];
  readTime?: string;
  image?: string | null;
  showImageAtTop?: boolean;
  excerpt?: string | null;
  authorName?: string | null;
  authorImage?: string | null;
  showSocialFooter?: boolean;
  contactForm?: boolean;
  newsletter?: boolean;
}

const CDN_URL = process.env.NEXT_PUBLIC_BLOG_CDN_URL;

const CACHE_TTL = {
  SHORT: 60_000,        // 1 min
  MEDIUM: 172_800_000,  // 48 hours
  LONG: 900_000         // 15 min
};

const cache = new Map<string, { data: any; expiresAt: number }>();

async function withCache<T>(
  key: string,
  ttlMs: number,
  fetcher: () => Promise<T>
): Promise<T> {
  const now = Date.now();
  const cached = cache.get(key);

  if (cached && cached.expiresAt > now) {
    return cached.data;
  }

  const data = await fetcher();
  cache.set(key, { data, expiresAt: now + ttlMs });
  return data;
}

export async function fetchBlogPosts(): Promise<PostSummary[]> {
  if (!CDN_URL) {
    console.error("NEXT_PUBLIC_BLOG_CDN_URL is not configured.");
    return [];
  }

  return withCache("blog-posts", CACHE_TTL.MEDIUM, async () => {
    try {
      const res = await fetch(`${CDN_URL}/index.json`, {
        next: { revalidate: 3600 }
      });
      if (!res.ok) throw new Error(`Failed to fetch blog index: ${res.status}`);
      
      const summaries: PostSummary[] = await res.json();
      
      // Filter unlisted and map the url field
      return summaries
        .filter(s => !s.unlisted)
        .map(s => ({
          ...s,
          url: `/blog/${s.slug}`
        }));
    } catch (e) {
      console.error("Error fetching blog index from CDN", e);
      return [];
    }
  });
}

export async function fetchPostBySlug(slug: string): Promise<PostMetadata | null> {
  if (!CDN_URL) return null;

  return withCache(`post-${slug}`, CACHE_TTL.SHORT, async () => {
    try {
      const res = await fetch(`${CDN_URL}/posts/${slug}.json`, {
        next: { revalidate: 3600 }
      });
      if (!res.ok) return null;
      return await res.json();
    } catch (e) {
      console.error(`Error fetching post ${slug} from CDN`, e);
      return null;
    }
  });
}

export async function fetchAllPostSlugs(): Promise<string[]> {
  return withCache("blog-slugs", CACHE_TTL.LONG, async () => {
    const posts = await fetchBlogPosts();
    return posts.map(p => p.slug);
  });
}

export async function fetchAllTags(): Promise<{ tag: string; count: number }[]> {
  return withCache("blog-tags", CACHE_TTL.LONG, async () => {
    const posts = await fetchBlogPosts();
    const counts = new Map<string, number>();
    
    for (const post of posts) {
      for (const tag of post.tags) {
        counts.set(tag, (counts.get(tag) || 0) + 1);
      }
    }
    
    return Array.from(counts.entries())
      .map(([tag, count]) => ({ tag, count }))
      .sort((a, b) => b.count - a.count);
  });
}

export async function fetchAllAuthors(): Promise<{ name: string; slug: string; image?: string; postCount: number }[]> {
  return withCache("blog-authors", CACHE_TTL.LONG, async () => {
    const posts = await fetchBlogPosts();
    const authors = new Map<string, { name: string; slug: string; image?: string; postCount: number }>();
    
    for (const post of posts) {
      if (!post.authorName) continue;
      
      if (!authors.has(post.authorName)) {
        authors.set(post.authorName, {
          name: post.authorName,
          slug: post.authorName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
          image: post.authorImage || undefined,
          postCount: 0
        });
      }
      authors.get(post.authorName)!.postCount++;
    }
    
    return Array.from(authors.values()).sort((a, b) => b.postCount - a.postCount);
  });
}

export async function fetchPostsByAuthor(
  authorSlug: string,
  page: number = 1,
  pageSize: number = 10
): Promise<{ posts: PostSummary[]; totalPages: number; totalPosts: number; authorName?: string; authorImage?: string }> {
  const allPosts = await fetchBlogPosts();
  const authorPosts = allPosts.filter(p => 
    p.authorName && 
    p.authorName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') === authorSlug
  );
  
  const totalPosts = authorPosts.length;
  const totalPages = Math.ceil(totalPosts / pageSize);
  const start = (page - 1) * pageSize;
  const paginated = authorPosts.slice(start, start + pageSize);

  return {
    posts: paginated,
    totalPages,
    totalPosts,
    authorName: authorPosts[0]?.authorName || undefined,
    authorImage: authorPosts[0]?.authorImage || undefined
  };
}

export async function fetchPostsByTag(
  tag: string,
  page: number = 1,
  pageSize: number = 10
): Promise<{ posts: PostSummary[]; totalPages: number; totalPosts: number }> {
  const allPosts = await fetchBlogPosts();
  const normalizedSearchTag = tag.toLowerCase().trim();
  const tagPosts = allPosts.filter(p => 
    p.tags.some(t => t.toLowerCase().trim() === normalizedSearchTag)
  );
  
  const totalPosts = tagPosts.length;
  const totalPages = Math.ceil(totalPosts / pageSize);
  const start = (page - 1) * pageSize;
  const paginated = tagPosts.slice(start, start + pageSize);

  return {
    posts: paginated,
    totalPages,
    totalPosts
  };
}

export async function fetchFeaturedPosts(): Promise<PostSummary[]> {
  const posts = await fetchBlogPosts();
  return posts.filter(p => p.blogFeatured);
}

export async function fetchPostCount(): Promise<number> {
  const posts = await fetchBlogPosts();
  return posts.length;
}

export async function fetchAdjacentPosts(slug: string): Promise<{
  newer: PostSummary | null;
  older: PostSummary | null;
} | null> {
  const posts = await fetchBlogPosts();
  const currentIndex = posts.findIndex(p => p.slug === slug);
  
  if (currentIndex === -1) return null;

  // The array is sorted descending by date (newest first).
  // Therefore, 'newer' post is at index - 1, 'older' post is at index + 1.
  return {
    newer: currentIndex > 0 ? posts[currentIndex - 1] : null,
    older: currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null
  };
}

export function clearBlogCache(pattern?: string): void {
  if (!pattern) {
    cache.clear();
    return;
  }
  for (const key of Array.from(cache.keys())) {
    if (key.includes(pattern)) {
      cache.delete(key);
    }
  }
}
