import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Heading } from "@/src/utils/extractHeadings";

interface PostNavigationProps {
  headings?: Heading[];
  activeId?: string;
  onNavigate?: (id: string) => void;
}

export default function PostNavigation({ headings = [], activeId: propActiveId, onNavigate }: PostNavigationProps) {
  const router = useRouter();
  const pathname = usePathname();

  // Convex disabled due to limits
  // const pages = useQuery(api.pages.getAllPages);
  const pages: any[] = [];

  // Filter headings to only show H2 (main titles only)
  const filteredHeadings = headings.filter(h => h.level === 2);

  // State for active heading (syncs with external prop and updates on click)
  const [activeId, setActiveId] = useState<string | undefined>(propActiveId);

  useEffect(() => {
    setActiveId(propActiveId);
  }, [propActiveId]);

  // State for collapsible sections
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    overview: true,
    pages: false,
    posts: false,
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };
  
  // Get all pages
  const allPages = pages || [];

  return (
    <nav className="post-navigation">
      {/* Table of Contents for current page - flat list of H2 headings */}
      {filteredHeadings.length > 0 && (
        <div className="post-navigation-section">
          <button
            className="post-navigation-heading-button"
          >
            <ChevronRight 
              size={14} 
              className={`nav-chevron ${expandedSections.overview ? 'expanded' : ''}`}
            />
            <span className="post-navigation-heading">Overview</span>
          </button>
          {expandedSections.overview && (
            <ul className="post-navigation-list post-navigation-sublist">
              {filteredHeadings.map((heading) => (
                <li key={heading.id}>
                  <a
                    href={`#${heading.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveId(heading.id);
                      if (onNavigate) onNavigate(heading.id);
                    }}
                    className={`post-navigation-link post-navigation-sublink ${
                      activeId === heading.id ? "active" : ""
                    }`}
                  >
                    {heading.text.replace(/\*\*/g, "")}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {allPages.length > 0 && (
        <div className="post-navigation-section">
          <button
            onClick={() => toggleSection('pages')}
            className="post-navigation-heading-button"
          >
            <ChevronRight 
              size={14} 
              className={`nav-chevron ${expandedSections.pages ? 'expanded' : ''}`}
            />
            <span className="post-navigation-heading">Pages</span>
          </button>
          {expandedSections.pages && (
            <ul className="post-navigation-list post-navigation-sublist">
              {allPages.map((page) => (
                <li key={page._id}>
                  <a
                    href={`/${page.slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      router.push(`/${page.slug}`);
                    }}
                    className={`post-navigation-link post-navigation-sublink ${
                      pathname === `/${page.slug}` ? "active" : ""
                    }`}
                  >
                    {page.title}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </nav>
  );
}

