/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useCallback } from "react";
import PostList from "@/app/components/PostList";
import BlogHeroCard from "@/app/components/BlogHeroCard";
import LoadMoreButton from "@/app/components/Pagination/LoadMoreButton";
import NumberedPagination from "@/app/components/Pagination/NumberedPagination";
import siteConfig from "@/src/config/siteConfig";
import NewsletterSignup from "@/app/components/NewsletterSignup";

import { usePathname, useRouter } from "next/navigation";

import type { PostSummary, PaginatedBlogPostsResult } from "@/lib/blog-data";

interface BlogProps {
  initialPosts?: Array<{
    title: string;
    slug: string;
    description: string;
    date: string;
    readTime?: string;
    tags: string[];
    blogFeatured?: boolean;
    unlisted?: boolean;
    url?: string;
  }>;
  paginatedData?: PaginatedBlogPostsResult;
}

export default function Blog({ initialPosts = [], paginatedData }: BlogProps) {
  /* ---------------- Config ---------------- */
  const isPaginationEnabled = siteConfig.pagination?.enabled ?? false;
  const paginationMode = siteConfig.pagination?.mode ?? "load-more";
  const postsPerPage = siteConfig.pagination?.postsPerPage ?? 9;

  /* ---------------- Pagination state ---------------- */
  const pathname = usePathname();
  const router = useRouter();

  // If paginatedData is provided by server SSR
  const isServerPaginated = Boolean(paginatedData);

  // Filter unlisted posts first (fallback mode)
  const publicPosts = initialPosts.filter(p => !p.unlisted);
  const fallbackFeatured = publicPosts.filter(p => p.blogFeatured);
  const fallbackFeaturedSlugs = new Set(fallbackFeatured.map((p) => p.slug));
  const fallbackRegularPosts = publicPosts.filter((p) => !fallbackFeaturedSlugs.has(p.slug));

  const totalRegularPostsCount = isServerPaginated
    ? paginatedData!.totalRegularPostsCount
    : fallbackRegularPosts.length;

  const totalPages = isServerPaginated
    ? paginatedData!.totalPages
    : Math.max(1, Math.ceil(totalRegularPostsCount / postsPerPage));

  const [displayCount, setDisplayCount] = useState(postsPerPage);
  const [currentPage, setCurrentPage] = useState(
    isServerPaginated ? paginatedData!.currentPage : 1
  );

  // Keep currentPage synced when server delivers new paginatedData
  useEffect(() => {
    if (paginatedData) {
      setCurrentPage(paginatedData.currentPage);
    }
  }, [paginatedData?.currentPage]);

  // Initialize from URL after mount for client-fallback mode
  useEffect(() => {
    if (!isServerPaginated && typeof window !== "undefined" && paginationMode === "numbered") {
      const param = new URLSearchParams(window.location.search).get("page");
      const page = Math.max(1, parseInt(param || "1", 10) || 1);
      if (page !== 1) {
        setCurrentPage(page);
      }
    }
  }, [paginationMode, isServerPaginated]);

  /* ---------------- View mode ---------------- */
  const [viewMode] = useState<"list" | "cards">(
    siteConfig.blogPage.viewMode,
  );

  /* ---------------- Pagination handlers ---------------- */
  const handleLoadMore = useCallback(() => {
    if (displayCount < totalRegularPostsCount) {
      setDisplayCount(prev => prev + postsPerPage);
    }
  }, [displayCount, totalRegularPostsCount, postsPerPage]);

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
    router.push(pathname + "?page=" + page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname, router]);

  /* ---------------- Derived data ---------------- */
  const showPosts = siteConfig.postsDisplay.showOnBlogPage;

  const blogFeaturedPosts = isServerPaginated
    ? paginatedData!.featuredPosts
    : fallbackFeatured;

  const heroPost = isServerPaginated
    ? paginatedData!.heroPost
    : (blogFeaturedPosts.length > 0 ? blogFeaturedPosts[0] : null);

  const featuredRowPosts = isServerPaginated
    ? paginatedData!.featuredRowPosts
    : (blogFeaturedPosts.length > 1 ? blogFeaturedPosts.slice(1) : []);

  let displayPosts: any[] = [];

  if (isServerPaginated) {
    displayPosts = paginatedData!.posts;
  } else if (!isPaginationEnabled) {
    displayPosts = fallbackRegularPosts;
  } else if (paginationMode === "load-more") {
    displayPosts = fallbackRegularPosts.slice(0, displayCount);
  } else if (paginationMode === "numbered") {
    const start = (currentPage - 1) * postsPerPage;
    displayPosts = fallbackRegularPosts.slice(start, start + postsPerPage);
  }

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
            {displayPosts.length === 0 && blogFeaturedPosts.length === 0 ? (
              <div style={{ textAlign: "center", padding: "4rem 2rem", background: "var(--bg-subtle)", borderRadius: "var(--radius-lg)" }}>
                <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem" }}>
                  We don't have any blog available now
                </h3>
                <p style={{ color: "var(--fg-muted)" }}>
                  Check back later for new updates and articles.
                </p>
              </div>
            ) : (
              <>
                {displayPosts.length > 0 && (
                  <PostList
                    posts={displayPosts}
                    viewMode={viewMode}
                    columns={3}
                  />
                )}

                <div className="post-count-indicator-pagination-container">
                  {isPaginationEnabled &&
                    paginationMode === "load-more" &&
                    displayCount < totalRegularPostsCount && (
                      <LoadMoreButton
                        onClick={handleLoadMore}
                        loading={false}
                        hasMore={true}
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
