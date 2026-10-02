#!/usr/bin/env node

/**
 * Broken Links Auto-Fixer
 * 
 * This script automatically fixes common broken link issues.
 * Run with: node scripts/fix-broken-links.js
 * 
 * WARNING: This script modifies files. Make sure to commit your changes first!
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Fix patterns
const FIXES = [
  {
    name: 'Fix malformed schema.org URLs',
    pattern: /https?:\/\/schema\.org\/([^%"\s]+)%22%5C%3E/g,
    replacement: 'https://schema.org/$1',
    description: 'Removes %22%5C%3E encoding from schema.org URLs'
  },
  {
    name: 'Fix malformed Google API URLs',
    pattern: /https?:\/\/www\.googleapis\.com\/([^'%]+)'%5C/g,
    replacement: "https://www.googleapis.com/$1",
    description: "Removes '%5C encoding from Google API URLs"
  },
  {
    name: 'Fix URLs with %22%5C%3E encoding',
    pattern: /(https?:\/\/[^\s"']+)%22%5C%3E/g,
    replacement: '$1',
    description: 'Removes %22%5C%3E from end of URLs'
  },
  {
    name: 'Fix URLs with trailing %5C',
    pattern: /(https?:\/\/[^\s"']+)%5C(["'])/g,
    replacement: '$1$2',
    description: 'Removes trailing %5C from URLs'
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
  if (!fs.existsSync(dir)) {
    return fileList;
  }
  
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
 * Apply fixes to a file
 */
function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  const changes = [];
  
  FIXES.forEach(fix => {
    const matches = content.match(fix.pattern);
    if (matches) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
        changes.push({
          fix: fix.name,
          count: matches.length
        });
      }
    }
  });
  
  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    return changes;
  }
  
  return null;
}

/**
 * Main function
 */
function main() {
  console.log('🔧 Broken Links Auto-Fixer\n');
  console.log('⚠️  WARNING: This script will modify files!');
  console.log('   Make sure you have committed your changes first.\n');
  
  rl.question('Do you want to continue? (yes/no): ', (answer) => {
    if (answer.toLowerCase() !== 'yes' && answer.toLowerCase() !== 'y') {
      console.log('❌ Aborted.');
      rl.close();
      return;
    }
    
    console.log('\n🔍 Scanning files...\n');
    
    const allFiles = [];
    SEARCH_DIRS.forEach(dir => {
      if (fs.existsSync(dir)) {
        const files = findFiles(dir);
        allFiles.push(...files);
      }
    });
    
    console.log(`Found ${allFiles.length} file(s) to check.\n`);
    
    const results = [];
    let totalFixed = 0;
    
    allFiles.forEach(file => {
      const changes = fixFile(file);
      if (changes) {
        results.push({ file, changes });
        totalFixed += changes.reduce((sum, c) => sum + c.count, 0);
      }
    });
    
    if (results.length === 0) {
      console.log('✅ No fixes needed!');
      rl.close();
      return;
    }
    
    console.log(`\n✅ Fixed ${totalFixed} issue(s) in ${results.length} file(s):\n`);
    
    results.forEach(({ file, changes }) => {
      console.log(`📝 ${file}`);
      changes.forEach(change => {
        console.log(`   - ${change.fix}: ${change.count} fix(es)`);
      });
    });
    
    console.log('\n💡 Tip: Review the changes and test your application before committing.');
    rl.close();
  });
}

main();

