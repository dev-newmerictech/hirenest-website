/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { generateSitemapXML, generatePostsSitemapXML, generateRSSXML } from "../utils/sitemap";

// Helper to render XML with proper content type
function useXMLRenderer(generator: () => string, dependencies: any[]) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Check if all dependencies are loaded (not undefined)
    const isLoaded = dependencies.every(
      (dep) => dep !== undefined && Array.isArray(dep)
    );

    if (isLoaded) {
      const xml = generator();

      // Set content type via meta tag for crawlers
      const meta = document.createElement("meta");
      meta.setAttribute("http-equiv", "Content-Type");
      meta.setAttribute("content", "application/xml; charset=utf-8");
      document.head.appendChild(meta);

      // Replace the entire document with XML
      document.open();
      document.write(xml);
      document.close();

      setIsReady(true);
    }
  }, dependencies);

  return isReady;
}

// Full sitemap with posts, pages, tags, and authors
export function Sitemap() {
  const posts = useQuery(api.posts.listAll, {}) || [];
  const pages = useQuery(api.pages.getAllPages) || [];
  const tags = useQuery(api.posts.getAllTags) || [];
  const authors = useQuery(api.posts.getAllAuthors) || [];

  useXMLRenderer(
    () => generateSitemapXML(posts, pages, tags, authors),
    [posts, pages, tags, authors]
  );

  return null;
}

// Posts-only sitemap
export function SitemapPosts() {
  const posts = useQuery(api.posts.listAll, {}) || [];

  useXMLRenderer(
    () => generatePostsSitemapXML(posts),
    [posts]
  );

  return null;
}

// RSS feed - needs full post data (title, description) for RSS
// Using a limit to avoid exceeding byte read limit
export function RSS() {
  // Use regular getAllPosts with built-in limit of 500 posts
  const posts = useQuery(api.posts.getAllPosts) || [];

  useXMLRenderer(
    () => generateRSSXML(posts),
    [posts]
  );

  return null;
}
