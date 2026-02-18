import { useState, useEffect, useCallback } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import PostList from "@/app/components/PostList";
import LoadMoreButton from "@/app/components/Pagination/LoadMoreButton";
import PostCountIndicator from "@/app/components/Pagination/PostCountIndicator";
import siteConfig from "@/src/config/siteConfig";
import { ArrowLeft, User } from "lucide-react";

// Local storage key for author page view mode preference
const AUTHOR_VIEW_MODE_KEY = "author-view-mode";

// Author page component
// Displays all posts written by a specific author (with pagination)
export default function AuthorPage() {
  const { slug: authorSlug } = useParams<{ slug: string }>();
  const router = useRouter();

  // Decode the URL-encoded author slug
  const decodedSlug = authorSlug ? decodeURIComponent(authorSlug) : "";

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [allPosts, setAllPosts] = useState<any[]>([]);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  // Check if pagination is enabled (disabled for author pages for now)
  const isPaginationEnabled = false; // siteConfig.pagination?.enabled ?? false;
  const postsPerPage = siteConfig.pagination?.postsPerPage ?? 9;

  // Fetch paginated posts by this author from Convex
  const paginatedPostsResult = useQuery(
    api.posts.getPostsByAuthorPaginated,
    decodedSlug
      ? {
        authorSlug: decodedSlug,
        page: currentPage,
        pageSize: postsPerPage,
      }
      : "skip",
  );

  // Fetch total count of posts for this author
  const authorPostsCount = useQuery(
    api.posts.getPostsByAuthorCount,
    decodedSlug ? { authorSlug: decodedSlug } : "skip",
  );

  // Fetch all authors for showing count and display name
  const allAuthors = useQuery(api.posts.getAllAuthors);

  // Find the author info for this slug
  const authorInfo = allAuthors?.find(
    (a) => a.slug.toLowerCase() === decodedSlug.toLowerCase(),
  );

  // State for view mode toggle (list or cards)
  const [viewMode, setViewMode] = useState<"list" | "cards">("list");

  // Load saved view mode preference from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(AUTHOR_VIEW_MODE_KEY);
    if (saved === "list" || saved === "cards") {
      setViewMode(saved);
    }
  }, []);

  // Toggle view mode and save preference
  const toggleViewMode = () => {
    const newMode = viewMode === "list" ? "cards" : "list";
    setViewMode(newMode);
    localStorage.setItem(AUTHOR_VIEW_MODE_KEY, newMode);
  };

  // Derive hasMore from result
  const hasMore = paginatedPostsResult
    ? currentPage < paginatedPostsResult.totalPages
    : false;

  // Update posts list when paginated data loads
  useEffect(() => {
    if (paginatedPostsResult) {
      if (currentPage === 1) {
        // Initial load - replace all posts
        setAllPosts(paginatedPostsResult.posts);
      } else {
        // Load more - append posts
        setAllPosts((prev) => [...prev, ...paginatedPostsResult.posts]);
      }
      setIsLoadingMore(false);
    }
  }, [paginatedPostsResult, currentPage]);

  // Reset pagination when author changes
  useEffect(() => {
    setCurrentPage(1);
    setAllPosts([]);
    setIsLoadingMore(false);
  }, [decodedSlug]);

  // Load more posts handler
  const handleLoadMore = useCallback(() => {
    if (!isLoadingMore && hasMore) {
      setIsLoadingMore(true);
      setCurrentPage((prev) => prev + 1);
    }
  }, [isLoadingMore, hasMore]);

  // Update page title
  useEffect(() => {
    if (authorInfo) {
      document.title = `Posts by ${authorInfo.name} | ${siteConfig.name}`;
    } else if (decodedSlug) {
      document.title = `Author | ${siteConfig.name}`;
    }
    return () => {
      document.title = siteConfig.name;
    };
  }, [authorInfo, decodedSlug]);

  // Update canonical URL for author pages
  useEffect(() => {
    if (!decodedSlug) return;

    const siteUrl = typeof window !== "undefined" ? window.location.origin : (process.env.NEXT_PUBLIC_SITE_URL || "https://hirenest.ai");
    const currentPath = window.location.pathname;
    const currentUrl = `${siteUrl}${currentPath}`;

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", currentUrl);

    // Update hreflang tags
    const existingHreflangs = document.querySelectorAll('link[rel="alternate"][hreflang]');
    existingHreflangs.forEach(tag => tag.remove());

    const hreflangEnUs = document.createElement("link");
    hreflangEnUs.setAttribute("rel", "alternate");
    hreflangEnUs.setAttribute("hreflang", "en-us");
    hreflangEnUs.setAttribute("href", currentUrl);
    document.head.appendChild(hreflangEnUs);

    const hreflangDefault = document.createElement("link");
    hreflangDefault.setAttribute("rel", "alternate");
    hreflangDefault.setAttribute("hreflang", "x-default");
    hreflangDefault.setAttribute("href", currentUrl);
    document.head.appendChild(hreflangDefault);

    // Helper to update or create meta tag
    const updateMeta = (selector: string, attr: string, value: string) => {
      // Determine ID based on selector for more precise targeting
      let id = "";
      if (selector === 'meta[name="description"]') id = "meta-description";
      else if (selector === 'meta[property="og:description"]') id = "og-description";
      else if (selector === 'meta[name="twitter:description"]') id = "twitter-description";
      else if (selector === 'meta[property="og:url"]') id = "og-url";

      // Find all matching tags
      const allMatches = document.querySelectorAll(selector);
      let meta = id ? document.getElementById(id) : document.querySelector(selector);

      // If we have an ID and multiple tags were found, or a tag without ID...
      if (allMatches.length > 1 || (id && allMatches.length === 1 && !allMatches[0].id)) {
        allMatches.forEach(el => {
          if (el.id !== id) el.remove();
        });
        meta = id ? document.getElementById(id) : null;
      }

      if (!meta) {
        meta = document.createElement("meta");
        const attrName = selector.includes("property=") ? "property" : "name";
        const attrValue = selector.match(/["']([^"']+)["']/)?.[1] || "";
        meta.setAttribute(attrName, attrValue);
        if (id) meta.id = id;
        document.head.appendChild(meta);
      }
      meta.setAttribute(attr, value);
    };

    // Update meta description for author page
    const authorName = authorInfo?.name || decodedSlug.replace(/-/g, " ");
    const authorDescription = `Read all posts by ${authorName} on ${siteConfig.name}.`;
    updateMeta('meta[name="description"]', "content", authorDescription);
    updateMeta('meta[property="og:description"]', "content", authorDescription);

    // Update og:url to match canonical URL
    updateMeta('meta[property="og:url"]', "content", currentUrl);

    // Cleanup on unmount - reset to home
    return () => {
      let canonicalTag = document.querySelector('link[rel="canonical"]');
      if (canonicalTag) {
        canonicalTag.setAttribute("href", `${siteUrl}/`);
      }
    };
  }, [decodedSlug, authorInfo?.name]);

  // Handle not found author
  if (allPosts.length === 0 && paginatedPostsResult !== undefined) {
    return (
      <div className="author-page">
        <nav className="post-nav">
          <button onClick={() => router.back()} className="back-button">
            <ArrowLeft size={16} />
            <span>Back</span>
          </button>
        </nav>
        <div className="author-not-found">
          <h1>No posts found</h1>
          <p>
            No posts by this author were found.
          </p>
          <Link href="/" className="back-link">
            <ArrowLeft size={16} />
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="author-page">
      {/* Navigation with back button */}
      <nav className="post-nav">
        <button onClick={() => router.back()} className="back-button">
          <ArrowLeft size={16} />
          <span>Back</span>
        </button>
      </nav>

      {/* Author page header */}
      <header className="author-header">
        <div className="author-header-top">
          <div>
            <div className="author-title-row">
              <User size={24} className="author-icon" />
              <h1 className="author-title">
                {authorInfo?.name || decodedSlug.replace(/-/g, " ")}
              </h1>
            </div>
            <p className="author-description">
              {authorInfo
                ? `${authorInfo.postCount} post${authorInfo.postCount !== 1 ? "s" : ""}`
                : "Loading..."}
            </p>
          </div>
          {/* View toggle button */}
          {allPosts.length > 0 && (
            <button
              className="view-toggle-button"
              onClick={toggleViewMode}
              aria-label={`Switch to ${viewMode === "list" ? "card" : "list"} view`}
            >
              {viewMode === "list" ? (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                </svg>
              ) : (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="8" y1="6" x2="21" y2="6" />
                  <line x1="8" y1="12" x2="21" y2="12" />
                  <line x1="8" y1="18" x2="21" y2="18" />
                  <line x1="3" y1="6" x2="3.01" y2="6" />
                  <line x1="3" y1="12" x2="3.01" y2="12" />
                  <line x1="3" y1="18" x2="3.01" y2="18" />
                </svg>
              )}
            </button>
          )}
        </div>
      </header>

      {/* Author posts section */}
      <section className="author-posts">
        {allPosts.length === 0 ? null : (
          <>
            {/* Post count indicator - only show when pagination is enabled */}
            {isPaginationEnabled && authorPostsCount !== undefined && (
              <PostCountIndicator
                currentCount={allPosts.length}
                totalCount={authorPostsCount}
                label="posts"
              />
            )}
            <PostList posts={allPosts} viewMode={viewMode} />
            {/* Load More Button - only show when pagination is enabled */}
            {isPaginationEnabled && (
              <LoadMoreButton
                onClick={handleLoadMore}
                loading={isLoadingMore}
                hasMore={hasMore}
              />
            )}
          </>
        )}
      </section>
    </div>
  );
}
