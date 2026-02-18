#!/usr/bin/env node

/**
 * Broken Links Checker
 * 
 * This script helps identify broken links in the codebase.
 * Run with: node scripts/check-broken-links.js
 */

const fs = require('fs');
const path = require('path');

// Patterns to check for broken links
const BROKEN_LINK_PATTERNS = [
  // Example.com links
  {
    pattern: /https?:\/\/example\.com[^\s"']*/g,
    name: 'Example.com links',
    fix: 'Replace with # or add rel="nofollow"'
  },
  // Malformed schema.org URLs
  {
    pattern: /https?:\/\/schema\.org\/[^%"]+%22%5C%3E/g,
    name: 'Malformed schema.org URLs',
    fix: 'Remove %22%5C%3E encoding'
  },
  // Malformed Google API URLs
  {
    pattern: /https?:\/\/www\.googleapis\.com\/[^'%]*'%5C/g,
    name: 'Malformed Google API URLs',
    fix: "Remove '%5C encoding"
  },
  // Email protection links (should be handled by middleware)
  {
    pattern: /\/cdn-cgi\/l\/email-protection/g,
    name: 'Cloudflare email protection links',
    fix: 'Already handled by middleware (returns 410)'
  },
  // URLs with encoding issues
  {
    pattern: /https?:\/\/[^\s"']*%22%5C%3E/g,
    name: 'URLs with %22%5C%3E encoding',
    fix: 'Remove %22%5C%3E from end of URL'
  },
  {
    pattern: /https?:\/\/[^\s"']*%5C["']/g,
    name: 'URLs with trailing %5C',
    fix: 'Remove %5C from end of URL'
  }
];

// Directories to search
const SEARCH_DIRS = [
  'app',
  'public',
  'src'
];

// File extensions to check
const FILE_EXTENSIONS = ['.tsx', '.ts', '.jsx', '.js', '.md', '.mdx', '.html'];

/**
 * Recursively find all files in a directory
 */
function findFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and .next
      if (!file.startsWith('.') && file !== 'node_modules' && file !== '.next') {
        findFiles(filePath, fileList);
      }
    } else {
      const ext = path.extname(file);
      if (FILE_EXTENSIONS.includes(ext)) {
        fileList.push(filePath);
      }
    }
  });
  
  return fileList;
}

/**
 * Check a file for broken link patterns
 */
function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const issues = [];
  
  BROKEN_LINK_PATTERNS.forEach(({ pattern, name, fix }) => {
    const matches = content.match(pattern);
    if (matches) {
      matches.forEach(match => {
        const lines = content.substring(0, content.indexOf(match)).split('\n');
        const lineNumber = lines.length;
        
        issues.push({
          file: filePath,
          line: lineNumber,
          pattern: name,
          match: match,
          fix: fix
        });
      });
    }
  });
  
  return issues;
}

/**
 * Main function
 */
function main() {
  console.log('🔍 Checking for broken links...\n');
  
  const allIssues = [];
  
  SEARCH_DIRS.forEach(dir => {
    if (fs.existsSync(dir)) {
      const files = findFiles(dir);
      files.forEach(file => {
        const issues = checkFile(file);
        allIssues.push(...issues);
      });
    }
  });
  
  if (allIssues.length === 0) {
    console.log('✅ No broken links found!');
    return;
  }
  
  // Group by pattern
  const grouped = {};
  allIssues.forEach(issue => {
    if (!grouped[issue.pattern]) {
      grouped[issue.pattern] = [];
    }
    grouped[issue.pattern].push(issue);
  });
  
  // Print results
  console.log(`Found ${allIssues.length} potential broken link(s):\n`);
  
  Object.entries(grouped).forEach(([pattern, issues]) => {
    console.log(`\n📌 ${pattern} (${issues.length} found)`);
    console.log(`   Fix: ${issues[0].fix}`);
    console.log(`   ──────────────────────────────────────────`);
    
    issues.forEach(issue => {
      console.log(`   ${issue.file}:${issue.line}`);
      console.log(`   → ${issue.match.substring(0, 80)}${issue.match.length > 80 ? '...' : ''}`);
    });
  });
  
  console.log(`\n\n💡 Tip: Run 'node scripts/fix-broken-links.js' to automatically fix some issues.`);
}

main();

