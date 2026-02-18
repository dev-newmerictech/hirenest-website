import { useEffect, useState, useMemo, useCallback, useRef } from "react";
import { Heading } from "@/src/utils/extractHeadings";
// ChevronRight available for future use
// import { ChevronRight } from "lucide-react";

interface PageSidebarProps {
  headings: Heading[];
  activeId?: string;
}

interface HeadingNode extends Heading {
  children: HeadingNode[];
}

// Build a tree structure from flat headings array
function buildHeadingTree(headings: Heading[]): HeadingNode[] {
  const tree: HeadingNode[] = [];
  const stack: HeadingNode[] = [];

  headings.forEach((heading) => {
    const node: HeadingNode = { ...heading, children: [] };

    // Pop stack until we find the parent (heading with lower level)
    while (stack.length > 0 && stack[stack.length - 1].level >= heading.level) {
      stack.pop();
    }

    if (stack.length === 0) {
      // Root level heading
      tree.push(node);
    } else {
      // Child of the last heading in stack
      stack[stack.length - 1].children.push(node);
    }

    stack.push(node);
  });

  return tree;
}

// Flatten a heading tree into an array of IDs (roots + all descendants)
function flattenHeadingIds(nodes: HeadingNode[]): string[] {
  const ids: string[] = [];

  const walk = (nodeList: HeadingNode[]) => {
    nodeList.forEach((node) => {
      ids.push(node.id);
      if (node.children.length > 0) {
        walk(node.children);
      }
    });
  };

  walk(nodes);
  return ids;
}

// Load expanded state from localStorage
function loadExpandedState(headings: Heading[]): Set<string> {
  const stored = localStorage.getItem("page-sidebar-expanded-state");
  if (stored) {
    try {
      const parsed = JSON.parse(stored) as string[];
      // If stored array has items, use it (filter to valid IDs)
      if (parsed.length > 0) {
        const storedIds = new Set(parsed);
        const validIds = new Set(
          headings.filter((h) => storedIds.has(h.id)).map((h) => h.id),
        );
        // If valid IDs exist, use them; otherwise fall through to default
        if (validIds.size > 0) {
          return validIds;
        }
      }
    } catch {
      // If parse fails, use default
    }
    // Clear stale/empty localStorage
    localStorage.removeItem("page-sidebar-expanded-state");
  }
  // Default: expand all headings to show full TOC
  return new Set(headings.map((h) => h.id));
}

// Save expanded state to localStorage
function saveExpandedState(expanded: Set<string>): void {
  localStorage.setItem(
    "page-sidebar-expanded-state",
    JSON.stringify(Array.from(expanded)),
  );
}

// Get absolute top position of an element
function getElementTop(element: HTMLElement): number {
  const rect = element.getBoundingClientRect();
  return rect.top + window.scrollY;
}

// Render a heading node recursively
function HeadingItem({
  node,
  activeId,
  expanded,
  onToggle: _onToggle,
  onNavigate,
  depth: _depth = 0,
}: {
  node: HeadingNode;
  activeId?: string;
  expanded: Set<string>;
  onToggle: (id: string) => void;
  onNavigate: (id: string) => void;
  depth?: number;
}) {
  // hasChildren and isExpanded available for expandable tree feature
  void node.children.length;
  void expanded.has(node.id);
  const isActive = activeId === node.id;

  return (
    <li className="page-sidebar-item">
      <div className="page-sidebar-item-wrapper">
        {/* {hasChildren && (
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onToggle(node.id);
            }}
            onMouseDown={(e) => {
              e.preventDefault();
            }}
            className={`page-sidebar-expand ${isExpanded ? "expanded" : ""}`}
            aria-label={isExpanded ? "Collapse" : "Expand"}
            aria-expanded={isExpanded}
          >
            <ChevronRight size={14} />
          </button>
        )} */}
        {/* {!hasChildren && <span className="page-sidebar-spacer" />} */}
        <a
          href={`#${node.id}`}
          onClick={(e) => {
            e.preventDefault();
            onNavigate(node.id);
          }}
          className={`page-sidebar-link page-sidebar-item-level-${node.level} ${isActive ? "active" : ""
            }`}
        >
          {node.text.replace(/\*\*/g, "").trim()}
        </a>
      </div>
      {/* {hasChildren && isExpanded && (
        <ul className="page-sidebar-sublist">
          {node.children.map((child) => (
            <HeadingItem
              key={child.id}
              node={child}
              activeId={activeId}
              expanded={expanded}
              onToggle={onToggle}
              onNavigate={onNavigate}
              depth={depth + 1}
            />
          ))}
        </ul>
      )} */}
    </li>
  );
}

export default function PageSidebar({ headings, activeId }: PageSidebarProps) {
  const [activeHeading, setActiveHeading] = useState<string | undefined>(
    activeId,
  );

  useEffect(() => {
    setActiveHeading(activeId);
  }, [activeId]);

  // Filter headings to only show H2 (level 2) and H3 (level 3),
  // keep full list here so subheadings (children) are available in the tree
  const filteredHeadings = useMemo(
    () => headings.filter((h) => h.level === 2 || h.level === 3),
    [headings],
  );

  const [expanded, setExpanded] = useState<Set<string>>(() =>
    loadExpandedState(filteredHeadings),
  );

  // Track if we're currently navigating to prevent scroll handler interference
  const isNavigatingRef = useRef(false);

  // Build tree structure from filtered headings
  const headingTree = useMemo(() => buildHeadingTree(filteredHeadings), [filteredHeadings]);

  // Only show the first 7 root-level headings in the sidebar,
  // but still include all of their nested children.
  const visibleHeadingTree = useMemo(
    () => headingTree.slice(0, 7),
    [headingTree],
  );

  // Reset expanded state when headings change (new page) to expand all headings
  useEffect(() => {
    if (filteredHeadings.length > 0) {
      setExpanded((prev) => {
        const currentIds = new Set(filteredHeadings.map((h) => h.id));
        const hasMatchingIds = Array.from(prev).some((id) =>
          currentIds.has(id),
        );
        // If no current expanded IDs match new headings, expand all
        if (!hasMatchingIds) {
          return new Set(filteredHeadings.map((h) => h.id));
        }
        return prev;
      });
    }
  }, [filteredHeadings]);

  // Get heading IDs for scroll tracking (only headings actually rendered:
  // the first 7 root headings and all of their descendants)
  const allHeadingIds = useMemo(
    () => flattenHeadingIds(visibleHeadingTree),
    [visibleHeadingTree],
  );

  // Create a map for quick heading ID validation
  const headingIdSet = useMemo(() => new Set(allHeadingIds), [allHeadingIds]);

  // Find path to a heading ID in the tree (for expanding ancestors)
  const findPathToId = useCallback(
    (
      nodes: HeadingNode[],
      targetId: string,
      path: HeadingNode[] = [],
    ): HeadingNode[] | null => {
      for (const node of nodes) {
        const currentPath = [...path, node];
        if (node.id === targetId) {
          return currentPath;
        }
        const found = findPathToId(node.children, targetId, currentPath);
        if (found) return found;
      }
      return null;
    },
    [],
  );

  // Expand ancestors to make a heading visible in sidebar
  const expandAncestors = useCallback(
    (targetId: string) => {
      const path = findPathToId(headingTree, targetId);
      if (path && path.length > 1) {
        const newExpanded = new Set(expanded);
        let changed = false;
        // Expand all ancestors (not the target itself)
        path.slice(0, -1).forEach((node) => {
          if (!newExpanded.has(node.id)) {
            newExpanded.add(node.id);
            changed = true;
          }
        });
        if (changed) {
          setExpanded(newExpanded);
          saveExpandedState(newExpanded);
        }
      }
    },
    [expanded, headingTree, findPathToId],
  );

  // Toggle expand/collapse
  const toggleExpand = useCallback((id: string) => {
    setExpanded((prev) => {
      const newExpanded = new Set(prev);
      if (newExpanded.has(id)) {
        newExpanded.delete(id);
      } else {
        newExpanded.add(id);
      }
      saveExpandedState(newExpanded);
      return newExpanded;
    });
  }, []);

  // Navigate to heading - scroll within main content container
  const navigateToHeading = useCallback(
    (id: string) => {
      // Expand ancestors first so sidebar shows the target
      expandAncestors(id);

      // Use requestAnimationFrame to ensure DOM updates are complete
      requestAnimationFrame(() => {
        const element = document.getElementById(id);
        if (!element) {
          return;
        }

        // Set flag to prevent scroll handler from changing active heading
        isNavigatingRef.current = true;

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
          const elementTop = getElementTop(element);
          const targetPosition = elementTop - headerOffset;

          window.scrollTo({
            top: Math.max(0, targetPosition),
            behavior: "smooth",
          });
        }

        // Update URL hash
        window.history.pushState(null, "", `#${id}`);

        // Update active heading
        setActiveHeading(id);

        // Reset navigation flag after scroll completes
        setTimeout(() => {
          isNavigatingRef.current = false;
        }, 1000);
      });
    },
    [expandAncestors],
  );

  // Handle initial URL hash on page load
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash && headingIdSet.has(hash)) {
      // Delay to ensure DOM is ready and headings are rendered
      const timeoutId = setTimeout(() => {
        navigateToHeading(hash);
      }, 200);
      return () => clearTimeout(timeoutId);
    }
  }, [headingIdSet, navigateToHeading]);

  // Handle hash changes (back/forward navigation)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash && headingIdSet.has(hash)) {
        navigateToHeading(hash);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [headingIdSet, navigateToHeading]);

  // Update active heading on scroll (within main content container)
  useEffect(() => {
    if (allHeadingIds.length === 0) return;

    const mainContent = document.querySelector('.hirenest-main-content');
    if (!mainContent) return;

    const handleScroll = () => {
      // Don't update if we're in the middle of navigating
      if (isNavigatingRef.current) return;

      const containerRect = mainContent.getBoundingClientRect();

      // Find the heading that's currently in view
      for (let i = allHeadingIds.length - 1; i >= 0; i--) {
        const element = document.getElementById(allHeadingIds[i]);
        if (element) {
          const elementRect = element.getBoundingClientRect();
          const elementAbsoluteTop = mainContent.scrollTop + (elementRect.top - containerRect.top);

          if (elementAbsoluteTop <= mainContent.scrollTop + 120) {
            const newActiveId = allHeadingIds[i];
            setActiveHeading((prev) => {
              // Only update if different - don't expand ancestors on scroll
              // User can manually collapse/expand sections
              return prev !== newActiveId ? newActiveId : prev;
            });
            break;
          }
        }
      }
    };

    mainContent.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => mainContent.removeEventListener("scroll", handleScroll);
  }, [allHeadingIds]);

  // Auto-expand to show active heading from props
  useEffect(() => {
    if (activeId) {
      expandAncestors(activeId);
    }
  }, [activeId, expandAncestors]);

  if (filteredHeadings.length === 0) return null;

  return (
    <nav className="page-sidebar">
      <h2 className="page-sidebar-title">ON THIS PAGE</h2>
      <ul className="page-sidebar-list">
        {visibleHeadingTree.map((node) => (
          <HeadingItem
            key={node.id}
            node={node}
            activeId={activeHeading}
            expanded={expanded}
            onToggle={toggleExpand}
            onNavigate={navigateToHeading}
          />
        ))}
      </ul>
    </nav>
  );
}
