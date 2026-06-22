const fs = require('fs');
const readline = require('readline');
const path = require('path');

async function convertForS3() {
    const exportDir = path.join(__dirname, '../snapshot_export');
    const outputDir = path.join(__dirname, '../s3-upload');
    const postsOutputDir = path.join(outputDir, 'posts');

    if (!fs.existsSync(postsOutputDir)) {
        fs.mkdirSync(postsOutputDir, { recursive: true });
    }

    // 1. Read and Parse Summaries
    console.log("Reading post summaries...");
    const summariesPath = path.join(exportDir, 'postSummaries/documents.jsonl');
    const summaries = [];
    
    const summaryStream = readline.createInterface({
        input: fs.createReadStream(summariesPath),
        crlfDelay: Infinity
    });

    let totalSummaries = 0;
    for await (const line of summaryStream) {
        if (line.trim()) {
            totalSummaries++;
            summaries.push(JSON.parse(line));
        }
    }

    // Filter published and sort by date descending (newest first)
    const publishedSummaries = summaries.filter(s => s.published);
    publishedSummaries.sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        if (dateB !== dateA) return dateB - dateA;
        return b._creationTime - a._creationTime;
    });

    const cleanSummaries = [];
    const summaryMap = new Map();

    for (const s of publishedSummaries) {
        const cleanSummary = {
            slug: s.slug || null,
            title: s.title || null,
            description: s.description || null,
            date: s.date || null,
            readTime: s.readTime || null,
            tags: s.tags || [],
            published: s.published || false,
            image: s.image || null,
            excerpt: s.excerpt || null,
            authorName: s.authorName || null,
            authorImage: s.authorImage || null,
            blogFeatured: s.blogFeatured || false,
            unlisted: s.unlisted || false
        };
        cleanSummaries.push(cleanSummary);
        summaryMap.set(s.postId, cleanSummary);
    }

    // Write index.json
    console.log(`Writing index.json with ${cleanSummaries.length} sorted posts...`);
    fs.writeFileSync(
        path.join(outputDir, 'index.json'), 
        JSON.stringify(cleanSummaries, null, 2)
    );

    // 2. Read Posts and generate individual JSON files
    console.log("Extracting full post JSON files...");
    const postsPath = path.join(exportDir, 'posts/documents.jsonl');
    
    const postStream = readline.createInterface({
        input: fs.createReadStream(postsPath),
        crlfDelay: Infinity
    });

    let postsMatched = 0;
    let postsWritten = 0;

    for await (const line of postStream) {
        if (line.trim()) {
            const post = JSON.parse(line);
            const summary = summaryMap.get(post._id);
            
            if (summary && summary.slug) {
                postsMatched++;
                
                const fullPost = {
                    slug: summary.slug,
                    title: summary.title,
                    description: summary.description,
                    content: post.content || null,
                    date: summary.date,
                    published: summary.published,
                    tags: summary.tags,
                    readTime: summary.readTime,
                    image: post.image || null,
                    showImageAtTop: post.showImageAtTop || false,
                    excerpt: post.excerpt || null,
                    authorName: post.authorName || null,
                    authorImage: post.authorImage || null,
                    showSocialFooter: post.showSocialFooter || false,
                    contactForm: post.contactForm || false,
                    newsletter: post.newsletter || false
                };

                const postJsonPath = path.join(postsOutputDir, `${summary.slug}.json`);
                fs.writeFileSync(postJsonPath, JSON.stringify(fullPost, null, 2));
                postsWritten++;
            }
        }
    }

    console.log(`\n✅ Data Conversion Complete!`);
    console.log(`- Total Summaries Read: ${totalSummaries}`);
    console.log(`- Published Summaries: ${publishedSummaries.length}`);
    console.log(`- Posts Matched: ${postsMatched}`);
    console.log(`- Post JSONs Written: ${postsWritten}`);
    console.log(`Files saved to /hirenest-website/s3-upload/`);
}

convertForS3().catch(console.error);
