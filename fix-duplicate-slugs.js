const fs = require('fs');

// Read the file
const content = fs.readFileSync('./app/lib/programmatic-seo/job-titles.ts', 'utf8');

// Find all slug entries with their line numbers and context
const lines = content.split('\n');
const slugMap = new Map();
const duplicates = [];

lines.forEach((line, index) => {
    const match = line.match(/slug: '([^']+)'/);
    if (match) {
        const slug = match[1];
        if (!slugMap.has(slug)) {
            slugMap.set(slug, []);
        }
        slugMap.get(slug).push({ line: index + 1, content: line });
    }
});

// Find duplicates and their IDs
const duplicateEntries = [];
slugMap.forEach((occurrences, slug) => {
    if (occurrences.length > 1) {
        occurrences.forEach((occ, i) => {
            // Get the ID from the line before
            const prevLine = lines[occ.line - 2]; // line is 1-indexed
            const idMatch = prevLine ? prevLine.match(/id: '([^']+)'/) : null;
            const id = idMatch ? idMatch[1] : 'unknown';
            duplicateEntries.push({ slug, id, line: occ.line, index: i });
        });
    }
});

console.log(`Found ${duplicateEntries.length} duplicate slug entries`);
console.log('Need to add suffixes to:', duplicateEntries.filter(d => d.index > 0).length, 'entries');

// Generate replacement commands
const replacements = [];
slugMap.forEach((occurrences, slug) => {
    if (occurrences.length > 1) {
        // Keep first one as-is, add suffix to others
        for (let i = 1; i < occurrences.length; i++) {
            const occ = occurrences[i];
            const oldSlug = slug;

            // Check if it already ends with a number
            const numberMatch = slug.match(/-(\d+)$/);
            let newSlug;
            if (numberMatch) {
                // Increment the number
                const baseSlug = slug.substring(0, slug.lastIndexOf('-'));
                const newNum = parseInt(numberMatch[1]) + i;
                newSlug = `${baseSlug}-${newNum}`;
            } else {
                newSlug = `${slug}-${i + 1}`;
            }

            replacements.push({
                line: occ.line,
                oldSlug,
                newSlug,
                oldLine: occ.content
            });
        }
    }
});

console.log('\n=== Replacements to make ===');
replacements.slice(0, 20).forEach(r => {
    console.log(`Line ${r.line}: '${r.oldSlug}' -> '${r.newSlug}'`);
});
console.log(`... and ${replacements.length - 20} more`);

// Apply replacements
let modifiedContent = content;
let appliedCount = 0;

replacements.reverse().forEach(r => {
    const lineContent = lines[r.line - 1];
    if (lineContent.includes(r.oldSlug)) {
        const newLineContent = lineContent.replace(`slug: '${r.oldSlug}'`, `slug: '${r.newSlug}'`);
        if (newLineContent !== lineContent) {
            lines[r.line - 1] = newLineContent;
            appliedCount++;
        }
    }
});

console.log(`\nApplied ${appliedCount} replacements`);

// Write back
fs.writeFileSync('./app/lib/programmatic-seo/job-titles.ts', lines.join('\n'));
console.log('File updated successfully');
