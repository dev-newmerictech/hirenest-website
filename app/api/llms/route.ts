export const dynamic = "force-dynamic";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://hirenest.ai";
const SITE_NAME = "Hirenest AI";

export async function GET() {
    try {
        const res = await fetch("https://dmf25vwa4wepi.cloudfront.net/index.json");
        const posts = await res.json();
        
        const recentPosts = posts.slice(0, 10);
        
        let markdown = `# ${SITE_NAME} - Blog\n\n`;
        markdown += `Latest insights, updates, and thoughts from the team.\n\n`;
        
        markdown += `## Recent Posts\n\n`;
        
        recentPosts.forEach((post: any) => {
            const date = new Date(post.publishedAt || post._creationTime).toISOString().split('T')[0];
            markdown += `- [${post.title}](${SITE_URL}/blog/${post.slug}) (${date})\n`;
            if (post.excerpt) {
                markdown += `  ${post.excerpt}\n`;
            }
        });
        
        return new Response(markdown, {
            headers: {
                "Content-Type": "text/markdown; charset=utf-8",
                "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
            },
        });
    } catch (error) {
        console.error("Error generating llms.txt:", error);
        return new Response("Error generating llms.txt", { status: 500 });
    }
}