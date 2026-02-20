'use client';

import Link from 'next/link';
import { useQuery } from 'convex/react';
import { api } from '../../convex/_generated/api';
import siteConfig from '@/src/config/siteConfig';

export default function Footer() {
  const recentPosts = useQuery(api.posts.getRecentPosts, { limit: 5 });

  return (
    <footer className="border-t bg-background">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">{siteConfig.name}</h3>
            <p className="text-sm text-muted-foreground">
              {siteConfig.title}
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="font-semibold">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground">
                  Home
                </Link>
              </li>
              {siteConfig.blogPage.enabled && (
                <li>
                  <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                    Blog
                  </Link>
                </li>
              )}
              {siteConfig.docsSection?.enabled && (
                <li>
                  <Link
                    href={`/${siteConfig.docsSection.slug}`}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {siteConfig.docsSection.title}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Recent Posts */}
          <div className="space-y-4">
            <h3 className="font-semibold">Recent Posts</h3>
            <ul className="space-y-2 text-sm">
              {recentPosts?.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-muted-foreground hover:text-foreground line-clamp-1"
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
