const fs = require('fs');
const readline = require('readline');
const path = require('path');

async function extractBlogs() {
    const exportDir = path.join(__dirname, '../snapshot_export');
    const outputDir = path.join(__dirname, '../blog-export');

    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    // 1. Read and Parse Summaries
    console.log("Reading post summaries...");
    const summariesPath = path.join(exportDir, 'postSummaries/documents.jsonl');
    const summaries = [];
    
    const summaryStream = readline.createInterface({
        input: fs.createReadStream(summariesPath),
        crlfDelay: Infinity
    });

    for await (const line of summaryStream) {
        if (line.trim()) {
            summaries.push(JSON.parse(line));
        }
    }

    // Filter published and sort by date descending (latest first!)
    const publishedSummaries = summaries.filter(s => s.published);
    publishedSummaries.sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return dateB - dateA; // Descending
    });

    // Write metadata.json
    console.log(`Writing metadata.json with ${publishedSummaries.length} sorted posts...`);
    fs.writeFileSync(
        path.join(outputDir, 'metadata.json'), 
        JSON.stringify(publishedSummaries, null, 2)
    );

    // Create a lookup map for easy access when parsing posts
    const summaryMap = new Map();
    for (const summary of publishedSummaries) {
        summaryMap.set(summary.postId, summary);
    }

    // 2. Read Posts and generate Markdown files
    console.log("Extracting markdown files from posts...");
    const postsPath = path.join(exportDir, 'posts/documents.jsonl');
    
    const postStream = readline.createInterface({
        input: fs.createReadStream(postsPath),
        crlfDelay: Infinity
    });

    let count = 0;
    for await (const line of postStream) {
        if (line.trim()) {
            const post = JSON.parse(line);
            const summary = summaryMap.get(post._id);
            
            if (summary && summary.slug) {
                const mdFilename = `${summary.slug}.md`;
                const mdPath = path.join(outputDir, mdFilename);
                fs.writeFileSync(mdPath, post.content);
                count++;
            }
        }
    }

    console.log(`✅ Successfully extracted ${count} markdown blogs into the /blog-export folder!`);
}

extractBlogs().catch(console.error);
