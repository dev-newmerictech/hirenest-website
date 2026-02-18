/* eslint-disable prefer-const */
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { format, parseISO } from "date-fns";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import BlogPost from "@/app/components/BlogPost";
import PageSidebar from "@/app/components/PageSidebar";
import PostNavigation from "@/app/components/PostNavigation";
import SocialFooter from "@/app/components/SocialFooter";

import NewsletterSignup from "@/app/components/NewsletterSignup";
import ContactForm from "@/app/components/ContactForm";
import { extractHeadings } from "@/src/utils/extractHeadings";
import { useSidebar } from "@/src/context/SidebarContext";
import { ArrowLeft } from "lucide-react";
import { useEffect, useCallback, useState } from "react";
import siteConfig from "@/src/config/siteConfig";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import SkeletonLoader from "@/app/components/SkeletonLoader";

// Local storage key for related posts view mode preference
const RELATED_POSTS_VIEW_MODE_KEY = "related-posts-view-mode";


// Site configuration - use dynamic origin to support both localhost and production
const getSiteUrl = () => typeof window !== "undefined" ? window.location.origin : (process.env.NEXT_PUBLIC_SITE_URL || "https://hirenest.ai");

interface PostProps {
  slug?: string; // Optional slug prop when used as homepage
  isHomepage?: boolean; // Flag to indicate this is the homepage
  homepageType?: "page" | "post"; // Type of homepage content
  initialPost?: {
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
    showImageAtTop?: boolean;
    contactForm?: boolean;
    newsletter?: boolean;
    showSocialFooter?: boolean;
  };
}

export default function Post({
  slug: propSlug,
  initialPost,
}: PostProps = {}) {
  const { slug: routeSlug } = useParams<{ slug: string }>();
  const pathname = usePathname();
  const { setHeadings, setActiveId, activeId } = useSidebar();

  // State for related posts view mode toggle (list or thumbnails)
  const [relatedPostsViewMode, setRelatedPostsViewMode] = useState<"list" | "thumbnails">(
    siteConfig.relatedPosts?.defaultViewMode ?? "thumbnails",
  );

  // Load saved related posts view mode preference from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(RELATED_POSTS_VIEW_MODE_KEY);
    if (saved === "list" || saved === "thumbnails") {
      setRelatedPostsViewMode(saved);
    }
  }, []);

  // Toggle related posts view mode and save preference
  const toggleRelatedPostsViewMode = useCallback(() => {
    setRelatedPostsViewMode((prev: "list" | "thumbnails") => {
      const newMode = prev === "list" ? "thumbnails" : "list";
      localStorage.setItem(RELATED_POSTS_VIEW_MODE_KEY, newMode);
      return newMode;
    });
  }, []);

  // Check if this is a raw markdown request
  const isRawRequest = pathname.startsWith("/raw/");

  // Normalize slug: remove /raw/ prefix and .md extension if present
  const normalizeSlug = (slug: string | undefined): string | undefined => {
    if (!slug) return undefined;
    // Remove /raw/ prefix if present
    let normalized = slug.startsWith("raw/") ? slug.slice(4) : slug;
    // Remove .md extension if present
    normalized = normalized.endsWith(".md") ? normalized.slice(0, -3) : normalized;
    return normalized;
  };

  // For raw requests, parse slug from pathname; otherwise use route param
  const getRawSlugFromPath = (): string | undefined => {
    if (!isRawRequest) return undefined;
    // Extract slug from /raw/slug.md or /raw/slug
    const match = pathname.match(/^\/raw\/(.+?)(?:\.md)?$/);
    return match ? match[1] : undefined;
  };

  // Use prop slug if provided (for homepage), otherwise use route slug or parse from path
  const slug = normalizeSlug(propSlug || routeSlug || getRawSlugFromPath());

  // Check for page first, then post
  // Skip redundant Convex queries when server-fetched initialPost is available
  const page = useQuery(api.pages.getPageBySlug, slug && !initialPost ? { slug } : "skip");
  const convexPost = useQuery(api.posts.getPostBySlug, slug && !initialPost ? { slug } : "skip");
  const post = convexPost ?? (initialPost as typeof convexPost);

  // Fetch related posts based on current post's tags (only for blog posts, not pages)
  const relatedPosts = useQuery(
    api.posts.getRelatedPosts,
    post && !page
      ? { currentSlug: post.slug, tags: post.tags, limit: 3 }
      : "skip",
  );

  // Fetch adjacent posts for navigation (to avoid dead ends)
  const adjacentPosts = useQuery(
    api.posts.getAdjacentPosts,
    post && !page ? { slug: post.slug } : "skip"
  );


  // Scroll to hash anchor after content loads
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    if (page === undefined && post === undefined) return;

    // Small delay to ensure content is rendered
    const timer = setTimeout(() => {
      const id = hash.slice(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [page, post]);

  // Update sidebar context with headings for mobile menu
  useEffect(() => {
    // Extract headings for pages (show TOC for any page with headings)
    if (page) {
      const pageHeadings = extractHeadings(page.content);
      setHeadings(pageHeadings);
      setActiveId(window.location.hash.slice(1) || undefined);
    }
    // Extract headings for posts (show TOC for any post with headings)
    else if (post) {
      const postHeadings = extractHeadings(post.content);
      setHeadings(postHeadings);
      setActiveId(window.location.hash.slice(1) || undefined);
    }
    // Clear headings when no sidebar
    else if (page !== undefined || post !== undefined) {
      setHeadings([]);
      setActiveId(undefined);
    }

    // Cleanup: clear headings when leaving page
    return () => {
      setHeadings([]);
      setActiveId(undefined);
    };
  }, [page, post, setHeadings, setActiveId]);

  // Navigate to heading - scroll within main content container (defined early to avoid hook order issues)
  const navigateToHeading = useCallback(
    (id: string) => {
      const element = document.getElementById(id);
      if (!element) return;

      // Find the main content container
      const mainContent = document.querySelector('.hirenest-main-content');

      if (mainContent) {
        // Scroll within the main content container
        const containerTop = mainContent.getBoundingClientRect().top;
        const elementTop = element.getBoundingClientRect().top;
        const offset = 32; // Padding offset within container

        const scrollPosition = mainContent.scrollTop + (elementTop - containerTop) - offset;

        mainContent.scrollTo({
          top: Math.max(0, scrollPosition),
          behavior: "smooth",
        });
      } else {
        // Fallback to window scroll if container not found
        const headerOffset = 80;
        const elementTop = element.getBoundingClientRect().top + window.scrollY;
        const targetPosition = elementTop - headerOffset;

        window.scrollTo({
          top: Math.max(0, targetPosition),
          behavior: "smooth",
        });
      }

      // Update URL hash and active heading state
      window.history.pushState(null, "", `#${id}`);
      setActiveId(id);
    },
    [setActiveId],
  );

  // Show loading skeleton while fetching data
  // Skip skeleton if we have server-provided initialPost data
  if (!initialPost && (page === undefined || post === undefined)) {
    return (
      <SkeletonLoader type="post" />
    );
  }

  // Display raw markdown for /raw/ routes
  if (isRawRequest) {
    const content = page?.content || post?.content;

    if (!content) {
      return (
        <div className="raw-markdown-container">
          <pre>Content not found</pre>
        </div>
      );
    }

    // Build frontmatter from post/page data
    const data = page || post;
    const frontmatterLines: string[] = ['---'];

    if (data?.title) frontmatterLines.push(`title: "${data.title}"`);
    // Type-safe property access - these exist on posts only
    if (post?.description) frontmatterLines.push(`description: "${post.description}"`);
    if (post?.date) frontmatterLines.push(`date: ${post.date}`);
    if (post?.tags && post.tags.length > 0) frontmatterLines.push(`tags: [${post.tags.join(', ')}]`);
    if (post?.readTime) frontmatterLines.push(`readTime: ${post.readTime}`);
    if (post?.authorName) frontmatterLines.push(`authorName: ${post.authorName}`);
    if (page) frontmatterLines.push(`type: page`);
    if (post) frontmatterLines.push(`type: post`);
    frontmatterLines.push(`slug: ${slug}`);
    frontmatterLines.push('---');
    frontmatterLines.push('');

    const frontmatter = frontmatterLines.join('\n');

    return (
      <pre style={{
        margin: 0,
        padding: '20px',
        fontFamily: "'SF Mono', Monaco, 'Cascadia Code', Consolas, monospace",
        fontSize: '14px',
        lineHeight: '1.6',
        whiteSpace: 'pre-wrap',
        wordWrap: 'break-word',
        background: '#ffffff',
        color: '#24292e',
        minHeight: '100vh',
        boxSizing: 'border-box',
      }}>
        {frontmatter}{content}
      </pre>
    );
  }

  // If it's a static page, render with hirenest-style layout
  if (page) {
    // Extract headings for sidebar TOC (show TOC for any page with headings)
    const headings = extractHeadings(page.content);
    const hasLeftSidebar = headings.length > 0;

    return (
      <>
        <div className={`hirenest-post-layout ${hasLeftSidebar ? "has-toc" : ""}`}>
          {/* Left sidebar - Navigation */}
          <aside className="hirenest-sidebar-left">
            <div className="hirenest-sidebar-sticky">
              <PostNavigation
                headings={headings}
                activeId={activeId}
                onNavigate={navigateToHeading}
              />
            </div>
          </aside>

          {/* Content section - contains main content and right sidebar */}
          <div className="hirenest-content-section">
            {/* Main content area */}
            <main className="hirenest-main-content">
              {/* Breadcrumbs */}
              <Breadcrumbs
                items={[
                  { name: page.title }
                ]}
              />

              {/* Article content */}
              <article className="hirenest-article">
                {/* Display image at top if showImageAtTop is true */}
                {page.showImageAtTop && page.image && (
                  <div className="hirenest-header-image">
                    <Image
                      src={page.image}
                      alt={page.title}
                      width={1200}
                      height={630}
                      priority
                      className="hirenest-header-image-img"
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </div>
                )}

                {/* Page content */}
                <div className="hirenest-content">
                  <BlogPost
                    content={page.content}
                    slug={page.slug}
                    postTitle={page.title}
                    pageType="page"
                    copyPageProps={{
                      title: page.title,
                      content: page.content,
                      url: `${getSiteUrl()}${pathname}`,
                      slug: page.slug,
                      description: page.excerpt,
                    }}
                  />
                </div>

                {/* Contact form - shown when contactForm: true in frontmatter (only if not inline) */}
                {siteConfig.contactForm?.enabled && page.contactForm &&
                  !page.content.includes("<!-- contactform -->") && (
                    <ContactForm source={`page:${page.slug}`} />
                  )}

                {/* Newsletter signup - respects frontmatter override (only if not inline) */}
                {siteConfig.newsletter?.enabled &&
                  (page.newsletter !== undefined
                    ? page.newsletter
                    : siteConfig.newsletter.signup.posts.enabled) &&
                  !page.content.includes("<!-- newsletter -->") && (
                    <NewsletterSignup source="post" postSlug={page.slug} />
                  )}

                {/* Social footer - shown inside article at bottom for pages */}
                {siteConfig.socialFooter?.enabled &&
                  (page.showSocialFooter !== undefined ? page.showSocialFooter : siteConfig.socialFooter.showOnPages) && (
                    <SocialFooter />
                  )}
              </article>
            </main>
          </div>

          {/* Full footer with internal links - shown below content for pages */}
        </div>
      </>
    );
  }

  // Handle not found (neither page nor post)
  if (post === null) {
    return (
      <div className="post-page">
        <div className="post-not-found">
          <h1>Page not found</h1>
          <p>The page you're looking for doesn't exist or has been removed.</p>
          <Link href="/" className="back-link">
            <ArrowLeft size={16} />
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  // At this point post is guaranteed to be defined (guards above handle undefined/null)
  if (!post) return null;

  // Extract headings for sidebar TOC (show TOC for any post with headings)
  const headings = extractHeadings(post.content);
  const hasLeftSidebar = headings.length > 0;

  // Render blog post with hirenest-style documentation UI
  return (
    <>
      <div className={`hirenest-post-layout ${hasLeftSidebar ? "has-toc" : ""}`}>
        {/* Left sidebar - Navigation */}
        <aside className="hirenest-sidebar-left">
          <div className="hirenest-sidebar-sticky">
            <PostNavigation
              headings={headings}
              activeId={activeId}
              onNavigate={navigateToHeading}
            />
          </div>
        </aside>

        {/* Content section - contains main content and right sidebar */}
        <div className="hirenest-content-section">
          {/* Main content area */}
          <main className="hirenest-main-content">
            {/* Breadcrumbs */}
            <Breadcrumbs
              items={[
                { name: "Blog", url: "/blog" },
                { name: post.title }
              ]}
            />

            {/* Article content */}
            <article className="hirenest-article">
              {/* Display image at top if showImageAtTop is true */}
              {post.showImageAtTop && post.image && (
                <div className="hirenest-header-image">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={1200}
                    height={630}
                    priority
                    className="hirenest-header-image-img"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
              )}

              {/* Blog content */}
              <div className="hirenest-content">
                <BlogPost
                  content={post.content}
                  slug={post.slug}
                  postTitle={post.title}
                  pageType="post"
                  copyPageProps={{
                    title: post.title,
                    content: post.content,
                    url: `${getSiteUrl()}${pathname}`,
                    slug: post.slug,
                    description: post.description,
                    date: post.date,
                    tags: post.tags,
                    readTime: post.readTime,
                    authorName: post.authorName,
                    authorImage: post.authorImage,
                  }}
                />
              </div>

              {/* Contact form - shown when contactForm: true in frontmatter (only if not inline) */}
              {siteConfig.contactForm?.enabled && post.contactForm &&
                !post.content.includes("<!-- contactform -->") && (
                  <ContactForm source={`post:${post.slug}`} />
                )}

              {/* Newsletter signup - respects frontmatter override (only if not inline) */}
              {siteConfig.newsletter?.enabled &&
                (post.newsletter !== undefined
                  ? post.newsletter
                  : siteConfig.newsletter.signup.posts.enabled) &&
                !post.content.includes("<!-- newsletter -->") && (
                  <NewsletterSignup source="post" postSlug={post.slug} />
                )}

              {/* Related posts */}
              {relatedPosts && relatedPosts.length > 0 && (
                <div className="hirenest-related">
                  <div className="related-posts-header"></div>
                  <h2 className="hirenest-related-title">Related Posts</h2>
                  {siteConfig.relatedPosts?.showViewToggle !== false && (
                    <button
                      className="view-toggle-button"
                      onClick={toggleRelatedPostsViewMode}
                      aria-label={`Switch to ${relatedPostsViewMode === "list" ? "thumbnail" : "list"} view`}
                    >
                      {relatedPostsViewMode === "thumbnails" ? (
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
                          <rect x="3" y="3" width="7" height="7" />
                          <rect x="14" y="3" width="7" height="7" />
                          <rect x="3" y="14" width="7" height="7" />
                          <rect x="14" y="14" width="7" height="7" />
                        </svg>
                      )}
                    </button>
                  )}

                  {/* Thumbnail view - shows image, title, description, author */}
                  {relatedPostsViewMode === "thumbnails" ? (
                    <div className="related-posts-thumbnails">
                      {relatedPosts.map((relatedPost) => (
                        <Link
                          key={relatedPost.slug}
                          href={`/blog/${relatedPost.slug}`}
                          className="related-post-thumbnail"
                        >
                          {relatedPost.image && (
                            <div className="related-post-thumbnail-image">
                              <Image
                                src={relatedPost.image}
                                alt={relatedPost.title}
                                width={400}
                                height={225}
                                loading="lazy"
                                style={{ width: '100%', height: 'auto' }}
                              />
                            </div>
                          )}
                          <div className="related-post-thumbnail-content">
                            <h4 className="related-post-thumbnail-title">
                              {relatedPost.title}
                            </h4>
                            {(relatedPost.excerpt || relatedPost.description) && (
                              <p className="related-post-thumbnail-excerpt">
                                {relatedPost.excerpt || relatedPost.description}
                              </p>
                            )}
                            <div className="related-post-thumbnail-meta">
                              {relatedPost.authorImage && (
                                <Image
                                  src={relatedPost.authorImage}
                                  alt={relatedPost.authorName || "Author"}
                                  width={24}
                                  height={24}
                                  className="related-post-thumbnail-author-image"
                                />
                              )}
                              {relatedPost.authorName && (
                                <span className="related-post-thumbnail-author">
                                  {relatedPost.authorName}
                                </span>
                              )}
                              {relatedPost.date && (
                                <span className="related-post-thumbnail-date">
                                  {format(parseISO(relatedPost.date), "MMM d, yyyy")}
                                </span>
                              )}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    /* List view - simple list with title and read time */
                    <div className="hirenest-related-grid">
                      {relatedPosts.map((relatedPost) => (
                        <Link
                          key={relatedPost._id}
                          href={`/blog/${relatedPost.slug}`}
                          className="hirenest-related-card"
                        >
                          <h3 className="hirenest-related-card-title">
                            {relatedPost.title}
                          </h3>
                          {relatedPost.description && (
                            <p className="hirenest-related-card-description">
                              {relatedPost.description}
                            </p>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Adjacent Posts Navigation (Prev/Next) */}
              {adjacentPosts && (adjacentPosts.newer || adjacentPosts.older) && (
                <div className="post-adjacent-nav" style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: '3rem',
                  gap: '2rem',
                  borderTop: '1px solid #e5e5e5',
                  paddingTop: '2rem'
                }}>
                  {adjacentPosts.older ? (
                    <Link
                      href={`/blog/${adjacentPosts.older.slug}`}
                      className="adjacent-post-link prev"
                      style={{
                        flex: 1,
                        textAlign: 'left',
                        textDecoration: 'none',
                        color: 'inherit',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start'
                      }}
                    >
                      <div style={{ fontSize: '0.875rem', color: '#666', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <ArrowLeft size={16} /> Previous Post
                      </div>
                      <div style={{ fontWeight: '600', fontSize: '1.1rem', lineHeight: '1.4' }}>{adjacentPosts.older.title}</div>
                    </Link>
                  ) : <div style={{ flex: 1 }} />}

                  {adjacentPosts.newer ? (
                    <Link
                      href={`/blog/${adjacentPosts.newer.slug}`}
                      className="adjacent-post-link next"
                      style={{
                        flex: 1,
                        textAlign: 'right',
                        textDecoration: 'none',
                        color: 'inherit',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-end'
                      }}
                    >
                      <div style={{ fontSize: '0.875rem', color: '#666', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        Next Post <ArrowLeft size={16} style={{ transform: 'rotate(180deg)' }} />
                      </div>
                      <div style={{ fontWeight: '600', fontSize: '1.1rem', lineHeight: '1.4' }}>{adjacentPosts.newer.title}</div>
                    </Link>
                  ) : <div style={{ flex: 1 }} />}
                </div>
              )}

              {/* Social footer - shown inside article at bottom */}
              {siteConfig.socialFooter?.enabled &&
                (post.showSocialFooter !== undefined ? post.showSocialFooter : siteConfig.socialFooter.showOnPosts) && (
                  <SocialFooter />
                )}
            </article>
          </main>
        </div>

      </div>
      {/* Footer provided by LayoutWrapper */}
    </>
  );
}
