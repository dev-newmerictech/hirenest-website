/**
 * Upload Blog Posts from backup-blog folder to Convex
 *
 * Reads all markdown files from the backup-blog folder,
 * parses frontmatter, and uploads them to Convex.
 *
 * Usage: npm run upload:blog
 *   or: npx tsx scripts/upload-blog-backup.ts
 *
 * Options:
 *   --dry-run  - Parse files but don't upload (for testing)
 *   --filter   - Only upload files matching a pattern
 */

import { config } from "dotenv";
import { ConvexHttpClient } from "convex/browser";
import { api } from "../convex/_generated/api";
import * as fs from "fs";
import * as path from "path";

// Load environment variables from .env
config({ path: ".env" });

// Configuration
const CONVEX_URL = process.env.NEXT_PUBLIC_CONVEX_URL;
const BACKUP_DIR = path.join(process.cwd(), "backup-blog");
const BATCH_SIZE = 50; // Process in batches to avoid overwhelming the API

// Colors for terminal output
const colors = {
  reset: "\x1b[0m",
  green: "\x1b[32m",
  blue: "\x1b[34m",
  yellow: "\x1b[33m",
  red: "\x1b[31m",
  gray: "\x1b[90m",
  cyan: "\x1b[36m",
  magenta: "\x1b[35m",
};

function log(message: string, color: keyof typeof colors = "reset") {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

// Parse frontmatter from markdown content
function parseFrontmatter(markdown: string): { frontmatter: Record<string, any>; content: string } {
  const match = markdown.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { frontmatter: {}, content: markdown };

  const frontmatterLines = match[1].split("\n");
  const frontmatter: Record<string, any> = {};
  const content = match[2];

  for (const line of frontmatterLines) {
    const colonIndex = line.indexOf(":");
    if (colonIndex === -1) continue;

    const key = line.slice(0, colonIndex).trim();
    let value: any = line.slice(colonIndex + 1).trim();

    // Remove quotes if present
    if ((value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }

    // Parse boolean values
    if (value === "true") value = true;
    else if (value === "false") value = false;
    else if (value === "null" || value === "") value = null;
    else if (!isNaN(Number(value)) && value !== "") value = Number(value);
    else if (value.startsWith("[") && value.endsWith("]")) {
      try { value = JSON.parse(value); } catch { value = []; }
    }

    frontmatter[key] = value;
  }

  return { frontmatter, content };
}

// Generate slug from title if not present
function generateSlug(title: string): string {
  if (!title) return `untitled-${Date.now()}-${Math.random().toString(36).substring(2, 8)}`;
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .substring(0, 100);
}

// Convert frontmatter to Convex post format
function convertToConvexPost(frontmatter: Record<string, any>, content: string): any {
  const title = frontmatter.title || "Untitled";
  return {
    slug: frontmatter.slug || generateSlug(title),
    title,
    description: frontmatter.description || "",
    content,
    date: frontmatter.date || new Date().toISOString().split("T")[0],
    published: frontmatter.published !== false,
    tags: Array.isArray(frontmatter.tags) ? frontmatter.tags : [],
    readTime: frontmatter.readTime || undefined,
    image: frontmatter.image || undefined,
    showImageAtTop: frontmatter.showImageAtTop || undefined,
    excerpt: frontmatter.excerpt || undefined,
    featured: frontmatter.featured || undefined,
    featuredOrder: frontmatter.featuredOrder || undefined,
    authorName: frontmatter.authorName || undefined,
    authorImage: frontmatter.authorImage || undefined,
    layout: frontmatter.layout || undefined,
    rightSidebar: frontmatter.rightSidebar || undefined,
    showFooter: frontmatter.showFooter || undefined,
    footer: frontmatter.footer || undefined,
    showSocialFooter: frontmatter.showSocialFooter || undefined,
    aiChat: frontmatter.aiChat || undefined,
    blogFeatured: frontmatter.blogFeatured || undefined,
    newsletter: frontmatter.newsletter || undefined,
    contactForm: frontmatter.contactForm || undefined,
    unlisted: frontmatter.unlisted || undefined,
  };
}

// Read all markdown files from backup-blog folder
function readMarkdownFiles(filterPattern?: string): Array<{ filename: string; filepath: string; content: string }> {
  if (!fs.existsSync(BACKUP_DIR)) {
    log(`Error: Backup directory not found: ${BACKUP_DIR}`, "red");
    process.exit(1);
  }

  const files = fs.readdirSync(BACKUP_DIR)
    .filter(name => name.endsWith(".md"))
    .filter(name => !filterPattern || name.includes(filterPattern))
    .sort();

  const results: Array<{ filename: string; filepath: string; content: string }> = [];

  for (const filename of files) {
    const filepath = path.join(BACKUP_DIR, filename);
    try {
      const content = fs.readFileSync(filepath, "utf-8");
      results.push({ filename, filepath, content });
    } catch (error) {
      log(`  Warning: Could not read ${filename}`, "yellow");
    }
  }

  return results;
}

// Validate post data
function validatePost(post: any): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!post.slug) errors.push("Missing slug");
  if (!post.title) errors.push("Missing title");
  if (!post.description) errors.push("Missing description");
  if (!post.content) errors.push("Missing content");
  if (!post.date) errors.push("Missing date");

  return { valid: errors.length === 0, errors };
}

// Upload posts to Convex in batches
async function uploadPosts(posts: any[], dryRun: boolean = false): Promise<{ imported: number; updated: number; errors: number }> {
  let totalImported = 0;
  let totalUpdated = 0;
  let totalErrors = 0;

  const client = new ConvexHttpClient(CONVEX_URL!);

  // Process in batches
  for (let i = 0; i < posts.length; i += BATCH_SIZE) {
    const batch = posts.slice(i, i + BATCH_SIZE);
    const batchNum = Math.floor(i / BATCH_SIZE) + 1;
    const totalBatches = Math.ceil(posts.length / BATCH_SIZE);

    log(`\nBatch ${batchNum}/${totalBatches} (${batch.length} posts)...`, "cyan");

    if (dryRun) {
      log("  [DRY RUN] Would upload this batch", "yellow");
      totalImported += batch.length;
      continue;
    }

    try {
      const result = await client.mutation(api.import.bulkImportPosts, { posts: batch });
      totalImported += result.imported;
      totalUpdated += result.updated;
      totalErrors += result.errors;

      log(`  ✓ Imported: ${result.imported}, Updated: ${result.updated}, Errors: ${result.errors}`, "green");
    } catch (error) {
      log(`  ✗ Batch failed: ${error}`, "red");
      totalErrors += batch.length;
    }

    // Small delay between batches
    if (i + BATCH_SIZE < posts.length) {
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  }

  return { imported: totalImported, updated: totalUpdated, errors: totalErrors };
}

// Main function
async function main() {
  log("\n=== Upload Blog Posts to Convex ===\n", "blue");

  // Parse command line arguments
  const args = process.argv.slice(2);
  const dryRun = args.includes("--dry-run");
  const filterIndex = args.indexOf("--filter");
  const filterPattern = filterIndex >= 0 ? args[filterIndex + 1] : undefined;

  // Check environment
  if (!CONVEX_URL) {
    log("Error: NEXT_PUBLIC_CONVEX_URL not found in environment", "red");
    log("Make sure you have a .env file with NEXT_PUBLIC_CONVEX_URL set", "yellow");
    process.exit(1);
  }

  log(`Convex URL: ${CONVEX_URL}`, "gray");
  log(`Backup Directory: ${BACKUP_DIR}`, "gray");
  if (dryRun) log("Mode: DRY RUN (no actual uploads)", "yellow");
  if (filterPattern) log(`Filter: ${filterPattern}`, "yellow");
  log("");

  // Read markdown files
  log("Reading markdown files...", "blue");
  const files = readMarkdownFiles(filterPattern);
  log(`Found ${files.length} markdown files\n`, "green");

  // Parse and convert posts
  log("Parsing frontmatter and validating...", "blue");
  const posts: any[] = [];
  const invalidPosts: Array<{ filename: string; errors: string[] }> = [];

  for (const { filename, content } of files) {
    const { frontmatter, content: bodyContent } = parseFrontmatter(content);
    const post = convertToConvexPost(frontmatter, bodyContent);
    const validation = validatePost(post);

    if (validation.valid) {
      posts.push(post);
    } else {
      invalidPosts.push({ filename, errors: validation.errors });
    }
  }

  log(`  Valid posts: ${posts.length}`, "green");
  if (invalidPosts.length > 0) {
    log(`  Invalid posts: ${invalidPosts.length}`, "yellow");
    log("\nInvalid posts details:", "yellow");
    for (const { filename, errors } of invalidPosts) {
      log(`  - ${filename}: ${errors.join(", ")}`, "gray");
    }
  }
  log("");

  if (posts.length === 0) {
    log("No valid posts to upload!", "red");
    process.exit(1);
  }

  // Show sample post
  log("Sample post data:", "cyan");
  const sample = posts[0];
  log(`  Title: ${sample.title}`, "gray");
  log(`  Slug: ${sample.slug}`, "gray");
  log(`  Tags: ${sample.tags?.join(", ") || "none"}`, "gray");
  log(`  Content length: ${sample.content?.length || 0} chars`, "gray");
  log("");

  // Upload to Convex
  log("Uploading to Convex...\n", "blue");
  const result = await uploadPosts(posts, dryRun);

  // Summary
  log("\n=== Upload Summary ===", "blue");
  log(`Total valid posts: ${posts.length}`, "blue");
  log(`Imported: ${result.imported}`, "green");
  log(`Updated: ${result.updated}`, "cyan");
  log(`Errors: ${result.errors}`, result.errors > 0 ? "red" : "gray");

  if (dryRun) {
    log("\n[Dry run complete - no actual uploads were made]", "yellow");
  } else if (result.errors === 0) {
    log("\n✓ Upload completed successfully!", "green");
  } else {
    log("\n⚠ Upload completed with some errors", "yellow");
  }
}

// Run the script
main().catch((error) => {
  log(`Error: ${error}`, "red");
  console.error(error);
  process.exit(1);
});
