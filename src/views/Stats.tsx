import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Users,
  Eye,
  FileText,
  BookOpen,
  Activity,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Spinner } from "@phosphor-icons/react";
import VisitorMap from "@/app/components/VisitorMap";
import siteConfig from "@/src/config/siteConfig";

// Site launched Dec 14, 2025 at 1:00 PM (v1.0.0), stats added same day (v1.2.0)
const SITE_LAUNCH_DATE = "Dec 14, 2025 at 1:00 PM";

// Format tracking start date with time
function formatTrackingDate(timestamp: number | null): string {
  if (!timestamp) return "No data yet";
  const date = new Date(timestamp);
  const dateStr = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  const timeStr = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
  return `${dateStr} at ${timeStr}`;
}

export default function Stats() {
  const stats: any = null;

  // Pagination state for Views by Page section
  const [pageStatsPage, setPageStatsPage] = useState(1);
  const PAGE_STATS_PER_PAGE = 10;

  // GitHub stars state - must be before any conditional returns
  const [githubStars, setGithubStars] = useState<number | null>(null);

  // Fetch GitHub stars on mount - must be before any conditional returns
  useEffect(() => {
    if (!siteConfig.statsPage?.enabled) return;
    fetch("https://api.github.com/repos/waynesutton/markdown-site")
      .then((res) => res.json())
      .then((data) => setGithubStars(data.stargazers_count))
      .catch(() => setGithubStars(null));
  }, []);

  // Check if stats page is enabled
  if (!siteConfig.statsPage?.enabled) {
    return (
      <div className="stats-page-wide">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "60vh",
            gap: "1rem",
            padding: "2rem",
            textAlign: "center",
          }}
        >
          <h1 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
            Site Statistics
          </h1>
          <p style={{ color: "var(--text-secondary)", marginBottom: "1rem" }}>
            Stats page is disabled in site configuration.
          </p>
          <Link
            href="/"
            style={{
              color: "var(--link-color)",
              textDecoration: "underline",
            }}
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  // Show loading spinner while stats load
  if (stats === undefined) {
    return (
      <div className="stats-page-wide">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "60vh",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <Spinner size={32} className="spinner-icon" />
          <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem" }}>
            Loading statistics...
          </p>
        </div>
      </div>
    );
  }

  // Stats card configuration with numbered sections
  const statsCards = [
    {
      number: "01",
      icon: Activity,
      title: "Active Now",
      value: stats.activeVisitors,
      description: "Visitors on site",
    },
    {
      number: "02",
      icon: Eye,
      title: "Total Views",
      value: stats.totalPageViews,
      description: `Since ${formatTrackingDate(stats.trackingSince)}`,
      note: `Site launched ${SITE_LAUNCH_DATE}`,
    },
    {
      number: "03",
      icon: Users,
      title: "Unique Visitors",
      value: stats.uniqueVisitors,
      description: "Unique sessions",
    },
    {
      number: "04",
      icon: BookOpen,
      title: "Blog Posts",
      value: stats.pageStats.length,
      description: "Published posts",
    },
    {
      number: "05",
      icon: FileText,
      title: "Pages",
      value: stats.publishedPages,
      description: "Static pages",
    },
  ];

  return (
    <div className="stats-page-wide">
      {/* Header with back button */}
      {/* Page header */}
      <header className="stats-header-wide">
        <h1 className="stats-title-wide">Site Statistics</h1>
        <p className="stats-subtitle-wide">
          Real-time analytics for this site. All data updates automatically.
        </p>
      </header>

      {/* Modern horizontal stats cards */}
      <section className="stats-cards-modern">
        {statsCards.map((card) => {
          const IconComponent = card.icon;
          return (
            <div key={card.number} className="stat-card-modern">
              <div className="stat-card-modern-header">
                <div className="stat-card-modern-icon">
                  <IconComponent size={16} />
                </div>
                <span className="stat-card-modern-number">{card.number}</span>
              </div>
              <div className="stat-card-modern-content">
                <h3 className="stat-card-modern-title">{card.title}</h3>
                <p className="stat-card-modern-value">{card.value}</p>
                <p className="stat-card-modern-desc">{card.description}</p>
                {card.note && (
                  <p className="stat-card-modern-note">{card.note}</p>
                )}
              </div>
            </div>
          );
        })}
      </section>

      {/* Visitor map showing real-time locations */}
      {siteConfig.visitorMap.enabled && stats.visitorLocations.length > 0 && (
        <VisitorMap
          locations={stats.visitorLocations}
          title={siteConfig.visitorMap.title}
        />
      )}

      {/* Active visitors by page */}
      {stats.activeByPath.length > 0 && (
        <section className="stats-section-wide">
          <h2 className="stats-section-title-wide">Currently Viewing</h2>
          <div className="stats-list-wide">
            {stats.activeByPath.map((item) => (
              <div key={item.path} className="stats-list-item-wide">
                <span className="stats-list-path-wide">
                  {item.path === "/" ? "Home" : item.path}
                </span>
                <span className="stats-list-count-wide">
                  {item.count} {item.count === 1 ? "visitor" : "visitors"}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Page views by page with pagination */}
      {stats.pageStats.length > 0 && (() => {
        const totalPages = Math.ceil(stats.pageStats.length / PAGE_STATS_PER_PAGE);
        const startIndex = (pageStatsPage - 1) * PAGE_STATS_PER_PAGE;
        const endIndex = startIndex + PAGE_STATS_PER_PAGE;
        const paginatedPageStats = stats.pageStats.slice(startIndex, endIndex);
        const hasPrevPage = pageStatsPage > 1;
        const hasNextPage = pageStatsPage < totalPages;

        return (
          <section className="stats-section-wide">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
              <h2 className="stats-section-title-wide" style={{ margin: 0 }}>
                Views by Page
              </h2>
              <span style={{ 
                fontSize: "0.875rem", 
                color: "var(--text-secondary)",
                fontWeight: 500
              }}>
                Page {pageStatsPage} of {totalPages} ({stats.pageStats.length} total)
              </span>
            </div>
            <div className="stats-list-wide">
              {paginatedPageStats.map((item) => (
                <div key={item.path} className="stats-list-item-wide">
                  <div className="stats-list-info-wide">
                    <span className="stats-list-title-wide">{item.title}</span>
                    <span className="stats-list-type-wide">{item.pageType}</span>
                  </div>
                  <span className="stats-list-count-wide">
                    {item.views} {item.views === 1 ? "view" : "views"}
                  </span>
                </div>
              ))}
            </div>
            {totalPages > 1 && (
              <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "1rem",
                marginTop: "1.5rem",
                paddingTop: "1.5rem",
                borderTop: "1px solid var(--border-color)"
              }}>
                <button
                  onClick={() => setPageStatsPage(p => Math.max(1, p - 1))}
                  disabled={!hasPrevPage}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.5rem 1rem",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    color: hasPrevPage ? "var(--text-primary)" : "var(--text-muted)",
                    background: hasPrevPage ? "var(--bg-secondary)" : "transparent",
                    border: "1px solid var(--border-color)",
                    borderRadius: "6px",
                    cursor: hasPrevPage ? "pointer" : "not-allowed",
                    opacity: hasPrevPage ? 1 : 0.5,
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    if (hasPrevPage) {
                      e.currentTarget.style.background = "var(--bg-hover)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (hasPrevPage) {
                      e.currentTarget.style.background = "var(--bg-secondary)";
                    }
                  }}
                >
                  <ChevronLeft size={16} />
                  Previous
                </button>
                <span style={{
                  fontSize: "0.875rem",
                  color: "var(--text-secondary)",
                  minWidth: "100px",
                  textAlign: "center"
                }}>
                  {pageStatsPage} / {totalPages}
                </span>
                <button
                  onClick={() => setPageStatsPage(p => Math.min(totalPages, p + 1))}
                  disabled={!hasNextPage}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.5rem 1rem",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    color: hasNextPage ? "var(--text-primary)" : "var(--text-muted)",
                    background: hasNextPage ? "var(--bg-secondary)" : "transparent",
                    border: "1px solid var(--border-color)",
                    borderRadius: "6px",
                    cursor: hasNextPage ? "pointer" : "not-allowed",
                    opacity: hasNextPage ? 1 : 0.5,
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    if (hasNextPage) {
                      e.currentTarget.style.background = "var(--bg-hover)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (hasNextPage) {
                      e.currentTarget.style.background = "var(--bg-secondary)";
                    }
                  }}
                >
                  Next
                  <ChevronRight size={16} />
                </button>
              </div>
            )}
          </section>
        );
      })()}
    </div>
  );
}
