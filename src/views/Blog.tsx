/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useCallback, useRef } from "react";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import PostList from "@/app/components/PostList";
import BlogHeroCard from "@/app/components/BlogHeroCard";
import LoadMoreButton from "@/app/components/Pagination/LoadMoreButton";
import NumberedPagination from "@/app/components/Pagination/NumberedPagination";
import siteConfig from "@/src/config/siteConfig";
import SkeletonLoader from "@/app/components/SkeletonLoader";
import NewsletterSignup from "@/app/components/NewsletterSignup";

import { usePathname, useRouter } from "next/navigation";

interface BlogProps {
  initialPosts?: Array<{
    title: string;
    slug: string;
    description: string;
    date: string;
    readTime?: string;
    tags: string[];
  }>;
}

export default function Blog({ initialPosts }: BlogProps = {}) {
  /* ---------------- Pagination state ---------------- */
  const pathname = usePathname();
  const router = useRouter();
  const [cursor, setCursor] = useState<number | null>(null);
  const [allRegularPosts, setAllRegularPosts] = useState<any[]>(initialPosts ?? []);
  const [isLoading, setIsLoading] = useState(false);
  const lastProcessedResult = useRef<any>(null);

  const isPaginationEnabled = siteConfig.pagination?.enabled ?? false;
  const paginationMode = siteConfig.pagination?.mode ?? "load-more";
  const postsPerPage = siteConfig.pagination?.postsPerPage ?? 9;

  /* ---------------- Convex Queries ---------------- */

  // Cursor-based pagination (LOAD MORE) or all posts when pagination disabled
  const effectiveLimit = isPaginationEnabled ? postsPerPage : 200;
  const cursorBasedResult = useQuery(
    api.posts.getPaginatedPosts,
    paginationMode === "load-more" || !isPaginationEnabled
      ? {
        limit: effectiveLimit,
        cursor: cursor !== null ? cursor : undefined,
        excludeUnlisted: true,
      }
      : "skip",
  );

  // Offset-based pagination (NUMBERED) — track in state for immediate reactivity
  const [currentPage, setCurrentPage] = useState(() => {
    if (typeof window === "undefined") return 1;
    const param = new URLSearchParams(window.location.search).get("page");
    return Math.max(1, parseInt(param || "1", 10) || 1);
  });

  const skipAmount = (currentPage - 1) * postsPerPage;

  const paginatedPostsResult = useQuery(
    api.posts.getPostsByPage,
    paginationMode === "numbered"
      ? {
        offset: skipAmount,
        limit: postsPerPage,
        excludeUnlisted: true,
      }
      : "skip",
  );

  // Featured posts
  const blogFeaturedPosts = useQuery(api.posts.getBlogFeaturedPosts);

  // Total count
  const totalRegularPostsCount = useQuery(api.posts.getRegularPostsCount, {
    excludeUnlisted: true,
  });

  const totalPages = totalRegularPostsCount
    ? Math.ceil(totalRegularPostsCount / postsPerPage)
    : 1;

  /* ---------------- Handle pagination data ---------------- */

  // LOAD MORE MODE (or pagination disabled) — process results without auto-advancing cursor
  useEffect(() => {
    if (paginationMode !== "load-more" && isPaginationEnabled) return;
    if (!cursorBasedResult?.posts) return;
    // Deduplicate: skip if we already processed this exact result
    if (lastProcessedResult.current === cursorBasedResult) return;
    lastProcessedResult.current = cursorBasedResult;

    setAllRegularPosts((prev) =>
      cursor === null
        ? cursorBasedResult.posts
        : [...prev, ...cursorBasedResult.posts],
    );
    setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cursorBasedResult, paginationMode, cursor]);

  // NUMBERED MODE (offset-based)
  useEffect(() => {
    if (paginationMode !== "numbered") return;
    if (!paginatedPostsResult) return;

    const posts = Array.isArray(paginatedPostsResult)
      ? paginatedPostsResult
      : paginatedPostsResult.posts ?? [];

    setAllRegularPosts(posts);
    setIsLoading(false);
  }, [paginatedPostsResult, paginationMode]);

  /* ---------------- View mode ---------------- */

  const [viewMode, setViewMode] = useState<"list" | "cards">(
    siteConfig.blogPage.viewMode,
  );

  const toggleViewMode = () => {
    const newMode = viewMode === "cards" ? "list" : "cards";
    setViewMode(newMode);
  };

  /* ---------------- Pagination handlers ---------------- */

  const handleLoadMore = useCallback(() => {
    if (!isLoading && cursorBasedResult?.hasMore && cursorBasedResult?.nextCursor != null) {
      setIsLoading(true);
      setCursor(cursorBasedResult.nextCursor);
    }
  }, [isLoading, cursorBasedResult]);

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
    setIsLoading(true);
    router.push(pathname + "?page=" + page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname, router]);

  /* ---------------- Derived data ---------------- */

  const showPosts = siteConfig.postsDisplay.showOnBlogPage;

  const heroPost =
    blogFeaturedPosts && blogFeaturedPosts.length > 0
      ? blogFeaturedPosts[0]
      : null;

  const featuredRowPosts =
    blogFeaturedPosts && blogFeaturedPosts.length > 1
      ? blogFeaturedPosts.slice(1)
      : [];

  // Filter out featured posts from regular list to prevent duplicates
  const featuredIds = new Set(
    blogFeaturedPosts?.map((p: any) => p._id) ?? [],
  );
  const regularPosts = viewMode === "cards" && featuredIds.size > 0
    ? allRegularPosts.filter((p: any) => !featuredIds.has(p._id))
    : allRegularPosts;

  const isServerRender = typeof window === "undefined";
  const displayPosts = isServerRender && initialPosts
    ? initialPosts
    : regularPosts;

  // Only show skeleton on initial load, not when loading more pages
  // Skip skeleton if we have server-provided initialPosts
  const isDataLoading = initialPosts?.length
    ? false
    : paginationMode === "load-more" || !isPaginationEnabled
      ? cursorBasedResult === undefined && allRegularPosts.length === 0
      : paginatedPostsResult === undefined;

  const blogPageClass = [
    "blog-page",
    viewMode === "cards" ? "blog-page-cards" : "blog-page-list",
  ].join(" ");

  /* ---------------- Render ---------------- */

  return (
    <>
      <div className={blogPageClass}>
        <header className="blog-header">
          <div className="blog-header-top">
            <h1 className="blog-title">{siteConfig.blogPage.title}</h1>
          </div>
        </header>

        {showPosts && heroPost && viewMode === "cards" && (
          <section className="blog-hero-section">
            <BlogHeroCard {...heroPost} />
          </section>
        )}

        {showPosts && featuredRowPosts.length > 0 && viewMode === "cards" && (
          <section className="blog-featured-row">
            <PostList posts={featuredRowPosts} viewMode="cards" columns={2} />
          </section>
        )}

        {showPosts && (
          <section className="blog-posts">
            {isDataLoading ? (
              <SkeletonLoader type="blog" />
            ) : (
              <>
                {displayPosts.length === 0 ? (
                  <div style={{ textAlign: "center", padding: "4rem 2rem", background: "var(--bg-subtle)", borderRadius: "var(--radius-lg)" }}>
                    <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem" }}>
                      We don't have any blog available now
                    </h3>
                    <p style={{ color: "var(--fg-muted)" }}>
                      Check back later for new updates and articles.
                    </p>
                  </div>
                ) : (
                  <PostList
                    posts={displayPosts}
                    viewMode={viewMode}
                    columns={3}
                  />
                )}

                <div className="post-count-indicator-pagination-container">
                  {isPaginationEnabled &&
                    paginationMode === "load-more" &&
                    cursorBasedResult && (
                      <LoadMoreButton
                        onClick={handleLoadMore}
                        loading={isLoading}
                        hasMore={cursorBasedResult.hasMore}
                      />
                    )}

                  {isPaginationEnabled &&
                    paginationMode === "numbered" &&
                    totalPages > 1 && (
                      <NumberedPagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                        basePath="/blog"
                      />
                    )}
                </div>
              </>
            )}
          </section>
        )}





        {siteConfig.newsletter?.enabled &&
          siteConfig.newsletter.signup.blogPage.enabled && (
            <NewsletterSignup source="blog-page" />
          )}
      </div>

    </>
  );
}
