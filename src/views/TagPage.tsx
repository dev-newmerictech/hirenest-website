import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import PostList from "@/app/components/PostList";
import LoadMoreButton from "@/app/components/Pagination/LoadMoreButton";
import PostCountIndicator from "@/app/components/Pagination/PostCountIndicator";
import siteConfig from "@/src/config/siteConfig";
import Footer from "@/app/components/Footer";
import { useS3Posts } from "@/src/hooks/useS3Posts";

// Local storage key for tag page view mode preference
const TAG_VIEW_MODE_KEY = "tag-view-mode";

import { useParams } from "next/navigation";

// Tag page component
// Displays all posts that have a specific tag (with pagination)
export default function TagPage() {
  const params = useParams();
  const tag = params?.tag as string;
  const decodedTag = tag ? decodeURIComponent(tag) : "";
  
  const { posts, loading, getPostsByTag, getAllTags } = useS3Posts();

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = siteConfig.pagination?.postsPerPage || 20;

  // Get filtered posts
  const allTagPosts = decodedTag ? getPostsByTag(decodedTag) : [];
  
  // Apply pagination manually
  const allPosts = allTagPosts.slice(0, currentPage * postsPerPage);
  
  const tagPostsCount = allTagPosts.length;
  const allTags = getAllTags();

  // Find the tag info for this tag
  const tagInfo = allTags?.find(
    (t) => t.tag.toLowerCase() === decodedTag.toLowerCase(),
  );

  // State for view mode toggle (list or cards)
  const [viewMode, setViewMode] = useState<"list" | "cards">("list");

  // Load saved view mode preference from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(TAG_VIEW_MODE_KEY);
    if (saved === "list" || saved === "cards") {
      setViewMode(saved);
    }
  }, []);

  // Toggle view mode and save preference
  const toggleViewMode = () => {
    const newMode = viewMode === "list" ? "cards" : "list";
    setViewMode(newMode);
    localStorage.setItem(TAG_VIEW_MODE_KEY, newMode);
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

  // Reset pagination when tag changes
  useEffect(() => {
    setCurrentPage(1);
    setAllPosts([]);
    setIsLoadingMore(false);
  }, [decodedTag]);

  // Load more posts handler
  const handleLoadMore = useCallback(() => {
    if (!isLoadingMore && hasMore) {
      setIsLoadingMore(true);
      setCurrentPage((prev) => prev + 1);
    }
  }, [isLoadingMore, hasMore]);

  // Update page title
  useEffect(() => {
    if (decodedTag) {
      document.title = `Posts tagged "${decodedTag}" | ${siteConfig.name}`;
    }
    return () => {
      document.title = siteConfig.name;
    };
  }, [decodedTag]);

  // Update canonical URL for tag pages
  useEffect(() => {
    if (!decodedTag) return;

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

    // Update meta description for tag page
    const tagDescription = `Explore all posts tagged with "${decodedTag}" on ${siteConfig.name}.`;
    updateMeta('meta[name="description"]', "content", tagDescription);
    updateMeta('meta[property="og:description"]', "content", tagDescription);

    // Update og:url to match canonical URL
    updateMeta('meta[property="og:url"]', "content", currentUrl);

    // Cleanup on unmount - reset to home
    return () => {
      let canonicalTag = document.querySelector('link[rel="canonical"]');
      if (canonicalTag) {
        canonicalTag.setAttribute("href", `${siteUrl}/`);
      }
    };
  }, [decodedTag]);

  // Handle not found tag
  if (allPosts.length === 0 && paginatedPostsResult !== undefined) {
    return (
      <>
        <div className="tag-page">
          <div className="tag-not-found">
            <h1>No posts found</h1>
            <p>
              No posts with the tag <strong>"{decodedTag}"</strong> were found.
            </p>
            <Link href="/blog" className="back-link">
              Back to home
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <div className="tag-page">
        {/* Tag page header */}
        <header className="tag-header">
          <div className="tag-header-top">
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
              <div className="tag-title-row">
                <h1 className="tag-title" style={{ textTransform: "capitalize" }}>{decodedTag}</h1>
              </div>
              <p className="tag-description">
                {tagInfo ? `${tagInfo.count} post${tagInfo.count !== 1 ? "s" : ""}` : "Loading..."}
              </p>
            </div>
          </div>
        </header>

        {/* Tag posts section */}
        <section className="tag-posts">
          {allPosts.length === 0 ? null : (
            <div className="post-list1">
              {/* Post count indicator - only show when pagination is enabled */}
              {isPaginationEnabled && tagPostsCount !== undefined && (
                <PostCountIndicator
                  currentCount={allPosts.length}
                  totalCount={tagPostsCount}
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
            </div>
          )}
        </section>
      </div>
      <Footer />
    </>
  );
}

