#!/usr/bin/env node
/**
 * Generate Static Blog Links for SEO
 * 
 * This script fetches all blog posts from Convex and generates
 * static HTML links that can be added to index.html for crawlers.
 * 
 * Usage: node generate-blog-links.mjs > blog-links.html
 */

import { ConvexHttpClient } from 'convex/browser';
import dotenv from 'dotenv';

dotenv.config();

const convexUrl = process.env.VITE_CONVEX_URL || process.env.CONVEX_URL;

if (!convexUrl) {
  console.error('Error: VITE_CONVEX_URL or CONVEX_URL not set');
  process.exit(1);
}

async function generateBlogLinks() {
  const client = new ConvexHttpClient(convexUrl);
  
  try {
    // Import the API
    const { api } = await import('./convex/_generated/api.mjs');
    
    // Fetch all published posts
    const posts = await client.query(api.posts.getAllPosts);
    
    console.log(`<!-- Blog Post Links for SEO (${posts.length} posts) -->`);
    console.log(`<!-- Add this inside the hidden crawler nav in index.html -->`);
    console.log(`<h2>Blog Posts</h2>`);
    console.log(`<ul>`);
    
    for (const post of posts) {
      console.log(`  <li><a href="/blog/${post.slug}">${escapeHtml(post.title)}</a></li>`);
    }
    
    console.log(`</ul>`);
    
  } catch (error) {
    console.error('Error fetching posts:', error);
    process.exit(1);
  }
}

function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

generateBlogLinks();
