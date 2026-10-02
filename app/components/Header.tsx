'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useCallback } from 'react';
import siteConfig from '@/src/config/siteConfig';

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pages: any[] = []; // Convex removed, pages can be statically defined in siteConfig if needed

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  // Nav items
  const navItems: { slug: string; title: string; order: number }[] = [];

  if (siteConfig.blogPage.enabled && siteConfig.blogPage.showInNav) {
    navItems.push({
      slug: 'blog',
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
    if (item.slug === 'stats' && !siteConfig.statsPage?.enabled) return;
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

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="hidden font-bold sm:inline-block">
            {siteConfig.name}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.slug}
              href={`/${item.slug}`}
              className={`transition-colors hover:text-foreground/80 ${
                pathname === `/${item.slug}`
                  ? 'text-foreground'
                  : 'text-foreground/60'
              }`}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden ml-6"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t">
          <nav className="container py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.slug}
                href={`/${item.slug}`}
                className={`block py-2 text-sm font-medium transition-colors hover:text-foreground/80 ${
                  pathname === `/${item.slug}`
                    ? 'text-foreground'
                    : 'text-foreground/60'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
