/* eslint-disable prefer-const */
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import BlogPost from "@/app/components/BlogPost";
import PostNavigation from "@/app/components/PostNavigation";
import SocialFooter from "@/app/components/SocialFooter";

import NewsletterSignup from "@/app/components/NewsletterSignup";
import ContactForm from "@/app/components/ContactForm";
import { extractHeadings } from "@/src/utils/extractHeadings";
import { useSidebar } from "@/src/context/SidebarContext";
import { ArrowLeft } from "lucide-react";
import { useEffect, useCallback } from "react";
import siteConfig from "@/src/config/siteConfig";
import Breadcrumbs from "@/app/components/Breadcrumbs";

// Site configuration - use dynamic origin to support both localhost and production
const getSiteUrl = () => typeof window !== "undefined" ? window.location.origin : (process.env.NEXT_PUBLIC_SITE_URL || "https://hirenest.ai");

interface PostProps {
  slug?: string; // Optional slug prop when used as homepage
  isHomepage?: boolean; // Flag to indicate this is the homepage
  homepageType?: "page" | "post"; // Type of homepage content
  initialPost?: {
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
  initialAdjacentPosts?: {
    newer: any | null;
    older: any | null;
  };
}

// Helper functions (must be defined before use)
const normalizeSlug = (slug: string | undefined): string | undefined => {
  if (!slug) return undefined;
  // Remove /raw/ prefix if present
  let normalized = slug.startsWith("raw/") ? slug.slice(4) : slug;
  // Remove .md extension if present
  normalized = normalized.endsWith(".md") ? normalized.slice(0, -3) : normalized;
  return normalized;
};

export default function Post({
  slug: propSlug,
  initialPost,
  initialAdjacentPosts
}: PostProps = {}) {
  const { slug: routeSlug } = useParams<{ slug: string }>();
  const pathname = usePathname();
  const { setHeadings, setActiveId, activeId } = useSidebar();
  // For SSR/JS-disabled: use slug from initialPost if available
  // For CSR: use slug from route params
  const effectiveSlug = initialPost?.slug || normalizeSlug(propSlug || routeSlug);

  // Check if this is a raw markdown request
  const isRawRequest = pathname.startsWith("/raw/");

  // For raw requests, parse slug from pathname; otherwise use route param
  const getRawSlugFromPath = (): string | undefined => {
    if (!isRawRequest) return undefined;
    // Extract slug from /raw/slug.md or /raw/slug
    const match = pathname.match(/^\/raw\/(.+?)(?:\.md)?$/);
    return match ? match[1] : undefined;
  };

  const slug = effectiveSlug || getRawSlugFromPath();

  // In S3 architecture, we completely rely on initialPost fetched during SSR.
  const post = initialPost;
  const adjacentPosts = initialAdjacentPosts;

  // Scroll to hash anchor after content loads
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    if (!post) return;

    // Small delay to ensure content is rendered
    const timer = setTimeout(() => {
      const id = hash.slice(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [post]);

  // Update sidebar context with headings for mobile menu
  useEffect(() => {
    if (post) {
      const postHeadings = extractHeadings(post.content);
      setHeadings(postHeadings);
      setActiveId(window.location.hash.slice(1) || undefined);
    } else {
      setHeadings([]);
      setActiveId(undefined);
    }

    // Cleanup: clear headings when leaving page
    return () => {
      setHeadings([]);
      setActiveId(undefined);
    };
  }, [post, setHeadings, setActiveId]);

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

  // Display raw markdown for /raw/ routes
  if (isRawRequest) {
    const content = post?.content;

    if (!content) {
      return (
        <div className="raw-markdown-container">
          <pre>Content not found</pre>
        </div>
      );
    }

    // Build frontmatter from post/page data
    const frontmatterLines: string[] = ['---'];

    if (post?.title) frontmatterLines.push(`title: "${post.title}"`);
    if (post?.description) frontmatterLines.push(`description: "${post.description}"`);
    if (post?.date) frontmatterLines.push(`date: ${post.date}`);
    if (post?.tags && post.tags.length > 0) frontmatterLines.push(`tags: [${post.tags.join(', ')}]`);
    if (post?.readTime) frontmatterLines.push(`readTime: ${post.readTime}`);
    if (post?.authorName) frontmatterLines.push(`authorName: ${post.authorName}`);
    frontmatterLines.push(`type: post`);
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

  // Handle not found
  if (!post) {
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
