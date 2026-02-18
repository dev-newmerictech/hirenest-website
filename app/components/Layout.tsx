import { ReactNode, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import SearchModal from "./SearchModal";
import AskAIModal from "./AskAIModal";
import MobileMenu from "./MobileMenu";
import ScrollToTop from "./ScrollToTop";
import { useSidebarOptional } from "@/src/context/SidebarContext";
import siteConfig from "@/src/config/siteConfig";
import Header from "./Header";

// Scroll-to-top configuration
const scrollToTopConfig = {
    enabled: true,
    threshold: 300,
    smooth: true,
};

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    /* -----------------------------------------------------
     * DATA
     * --------------------------------------------------- */

    const pages = useQuery(api.pages.getAllPages);
    const pathname = usePathname();


    const sidebarContext = useSidebarOptional();
    const sidebarHeadings = sidebarContext?.headings || [];
    const sidebarActiveId = sidebarContext?.activeId;

    /* -----------------------------------------------------
     * STATE
     * --------------------------------------------------- */

    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isAskAIOpen, setIsAskAIOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    /* -----------------------------------------------------
     * HANDLERS
     * --------------------------------------------------- */

    const openSearch = useCallback(() => setIsSearchOpen(true), []);
    const closeSearch = useCallback(() => setIsSearchOpen(false), []);

    const closeAskAI = useCallback(() => setIsAskAIOpen(false), []);

    const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    /* -----------------------------------------------------
     * KEYBOARD SHORTCUTS
     * --------------------------------------------------- */

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === "k") {
                e.preventDefault();
                setIsSearchOpen((p) => !p);
            }

            if (
                (e.metaKey || e.ctrlKey) &&
                (e.key === "j" || e.key === "/") &&
                siteConfig.askAI?.enabled &&
                siteConfig.semanticSearch?.enabled
            ) {
                e.preventDefault();
                setIsAskAIOpen((p) => !p);
            }

            if (e.key === "Escape") {
                setIsSearchOpen(false);
                setIsAskAIOpen(false);
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, []);

    /* -----------------------------------------------------
     * NAV ITEMS
     * --------------------------------------------------- */

    type NavItem = {
        slug: string;
        title: string;
        order: number;
    };

    const navItems: NavItem[] = [];

    if (siteConfig.blogPage.enabled && siteConfig.blogPage.showInNav) {
        navItems.push({
            slug: "blog",
            title: siteConfig.blogPage.title,
            order: siteConfig.blogPage.order ?? 0,
        });
    }

    if (siteConfig.docsSection?.enabled && siteConfig.docsSection?.showInNav) {
        navItems.push({
            slug: siteConfig.docsSection.slug,
            title: siteConfig.docsSection.title,
            order: siteConfig.docsSection.order ?? 1,
        });
    }

    siteConfig.hardcodedNavItems?.forEach((item) => {
        if (item.slug === "stats" && !siteConfig.statsPage?.enabled) return;
        if (item.showInNav !== false) {
            navItems.push({
                slug: item.slug,
                title: item.title,
                order: item.order ?? 999,
            });
        }
    });

    pages?.forEach((page) => {
        navItems.push({
            slug: page.slug,
            title: page.title,
            order: page.order ?? 999,
        });
    });

    navItems.sort((a, b) =>
        a.order !== b.order ? a.order - b.order : a.title.localeCompare(b.title)
    );

    /* -----------------------------------------------------
     * RENDER
     * --------------------------------------------------- */

    return (
        <div className="layout">
            {/* Header */}
            <Header />

            {/* Mobile Menu */}
            <MobileMenu
                isOpen={isMobileMenuOpen}
                onClose={closeMobileMenu}
                sidebarHeadings={sidebarHeadings}
                sidebarActiveId={sidebarActiveId}
            >
                <nav className="mobile-nav-links">
                    {navItems.map((item) => (
                        <Link
                            key={item.slug}
                            href={`/${item.slug}`}
                            className="mobile-nav-link"
                            onClick={closeMobileMenu}
                        >
                            {item.title}
                        </Link>
                    ))}
                </nav>
            </MobileMenu>

            {/* Main */}
            <main
                className={
                    pathname === "/stats" || pathname === "/blog"
                        ? "main-content-wide"
                        : "main-content"
                }
            >
                {children}
            </main>

            {/* Modals */}
            <SearchModal isOpen={isSearchOpen} onClose={closeSearch} />

            {siteConfig.askAI?.enabled && siteConfig.semanticSearch?.enabled && (
                <AskAIModal isOpen={isAskAIOpen} onClose={closeAskAI} />
            )}

            <ScrollToTop />
        </div>
    );
}
