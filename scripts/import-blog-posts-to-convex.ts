/**
 * Import Blog Posts from blog-posts-backup folder to Convex
 *
 * This script reads all markdown files from the blog-posts-backup folder
 * and imports them into the Convex database.
 *
 * Usage:
 *   npx tsx scripts/import-blog-posts-to-convex.ts
 */

import { readFileSync, readdirSync } from "fs";
import { join } from "path";
import { ConvexHttpClient } from "convex/browser";

// Configuration
const BACKUP_DIR = join(process.cwd(), "blog-posts-backup");
const CONVEX_URL = process.env.NEXT_PUBLIC_CONVEX_URL || "https://different-aardvark-542.convex.cloud";

interface BlogPostFromMarkdown {
  slug: string;
  title: string;
  description: string;
  content: string;
  date: string;
  published: boolean;
  tags: string[];
  readTime?: string;
  image?: string;
  showImageAtTop?: boolean;
  excerpt?: string;
  featured?: boolean;
  featuredOrder?: number;
  authorName?: string;
  authorImage?: string;
  layout?: string;
  rightSidebar?: boolean;
  showFooter?: boolean;
  footer?: string;
  showSocialFooter?: boolean;
  aiChat?: boolean;
  blogFeatured?: boolean;
  newsletter?: boolean;
  contactForm?: boolean;
  unlisted?: boolean;
}

/**
 * Parse frontmatter from markdown content
 */
function parseFrontmatter(content: string): { frontmatter: Record<string, any>, content: string } {
  const frontmatterMatch = content.match(/^---\n(.*?)\n---\n\n?(.*)/s);
  if (!frontmatterMatch) {
    return { frontmatter: {}, content };
  }

  const frontmatter: Record<string, any> = {};
  const lines = frontmatterMatch[1].split("\n");

  for (const line of lines) {
    const match = line.match(/^(\w+):\s*(.+)$/);
    if (match) {
      let value = match[2];
      // Try to parse JSON values
      try {
        value = JSON.parse(value);
      } catch {}
      frontmatter[match[1]] = value;
    }
  }

  return {
    frontmatter,
    content: frontmatterMatch[2] || content.replace(/^---\n.*?\n---\n\n?/s, "")
  };
}

/**
 * Read all markdown files from backup directory
 */
function readBackupFiles(): BlogPostFromMarkdown[] {
  const files = readdirSync(BACKUP_DIR).filter((f: string) => f.endsWith(".md"));
  const posts: BlogPostFromMarkdown[] = [];

  console.log(`Found ${files.length} markdown files in ${BACKUP_DIR}`);

  for (const filename of files) {
    try {
      const filepath = join(BACKUP_DIR, filename);
      const fileContent = readFileSync(filepath, "utf-8");
      const { frontmatter, content } = parseFrontmatter(fileContent);

      posts.push({
        slug: frontmatter.slug || filename.replace(".md", "").replace(/^\d{4}-\d{2}-\d{2}-/, ""),
        title: frontmatter.title || "",
        description: frontmatter.description || "",
        content: content,
        date: frontmatter.date || new Date().toISOString().split("T")[0],
        published: frontmatter.published !== false,
        tags: frontmatter.tags || [],
        readTime: frontmatter.readTime,
        image: frontmatter.image,
        showImageAtTop: frontmatter.showImageAtTop,
        excerpt: frontmatter.excerpt,
        featured: frontmatter.featured,
        featuredOrder: frontmatter.featuredOrder,
        authorName: frontmatter.authorName,
        authorImage: frontmatter.authorImage,
        layout: frontmatter.layout,
        rightSidebar: frontmatter.rightSidebar,
        showFooter: frontmatter.showFooter,
        footer: frontmatter.footer,
        showSocialFooter: frontmatter.showSocialFooter,
        aiChat: frontmatter.aiChat,
        blogFeatured: frontmatter.blogFeatured,
        newsletter: frontmatter.newsletter,
        contactForm: frontmatter.contactForm,
        unlisted: frontmatter.unlisted,
      });
    } catch (error) {
      console.error(`Error reading file ${filename}:`, error);
    }
  }

  return posts;
}

/**
 * Import posts to Convex using the bulkImportPosts mutation
 */
async function importPostsToConvex(posts: BlogPostFromMarkdown[]): Promise<void> {
  console.log(`\nImporting ${posts.length} posts to Convex...`);
  console.log(`Convex URL: ${CONVEX_URL}\n`);

  const client = new ConvexHttpClient(CONVEX_URL);

  // Import in batches to avoid overwhelming the server
  const batchSize = 50;
  let totalImported = 0;
  let totalUpdated = 0;
  let totalErrors = 0;

  for (let i = 0; i < posts.length; i += batchSize) {
    const batch = posts.slice(i, i + batchSize);
    console.log(`Processing batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(posts.length / batchSize)} (${batch.length} posts)...`);

    try {
      const result = await client.mutation("import:bulkImportPosts", { posts: batch }) as {
        imported: number;
        updated: number;
        errors: number;
      };

      totalImported += result.imported;
      totalUpdated += result.updated;
      totalErrors += result.errors;

      console.log(`  ✓ Imported: ${result.imported}, Updated: ${result.updated}, Errors: ${result.errors}`);
    } catch (error: any) {
      console.error(`  ✗ Batch error: ${error.message || String(error)}`);
      totalErrors += batch.length;
    }
  }

  console.log(`\n=== Import Summary ===`);
  console.log(`Total Imported: ${totalImported} posts`);
  console.log(`Total Updated: ${totalUpdated} posts`);
  console.log(`Total Errors: ${totalErrors} posts`);
  console.log(`Total Processed: ${totalImported + totalUpdated + totalErrors} posts`);
}

/**
 * Main function
 */
async function main() {
  console.log("=== Import Blog Posts to Convex ===\n");

  // Read all backup files
  const posts = readBackupFiles();

  if (posts.length === 0) {
    console.error("No posts found in backup directory!");
    return;
  }

  console.log(`\nSuccessfully parsed ${posts.length} posts from markdown files.\n`);

  // Import to Convex
  await importPostsToConvex(posts);
}

main().catch(console.error);
