import { ConvexHttpClient } from "convex/browser";
import { api } from "@/convex/_generated/api";

export const dynamic = "force-dynamic";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://hirenest.ai";

function getClient(): ConvexHttpClient {
    const url = process.env.NEXT_PUBLIC_CONVEX_URL;
    if (!url) throw new Error("NEXT_PUBLIC_CONVEX_URL is not set");
    return new ConvexHttpClient(url);
}

export async function GET(
    _request: Request,
    { params }: { params: Promise<{ slug: string }> }
) {
    const { slug: rawSlug } = await params;
    const slug = rawSlug.replace(/\.md$/, "");

    if (!slug) {
        return new Response("Missing slug", { status: 400 });
    }

    try {
        const client = getClient();
        const post = await client.query(api.posts.getPostBySlug, { slug });

        if (!post) {
            return new Response("Post not found", { status: 404 });
        }

        // Build YAML frontmatter
        const frontmatter = [
            '---',
            `title: "${post.title.replace(/"/g, '\\"')}"`,
            `description: "${post.description.replace(/"/g, '\\"')}"`,
            `date: ${post.date}`,
            `tags: [${post.tags.join(', ')}]`,
            ...(post.readTime ? [`readTime: ${post.readTime}`] : []),
            ...(post.authorName ? [`authorName: ${post.authorName}`] : []),
            'type: post',
            `slug: ${post.slug}`,
            `url: ${SITE_URL}/blog/${post.slug}`,
            '---',
        ].join('\n');

        const markdown = `${frontmatter}\n\n${post.content}`;

        return new Response(markdown, {
            headers: {
                "Content-Type": "text/markdown; charset=utf-8",
                "Cache-Control": "public, max-age=300, s-maxage=600",
            },
        });
    } catch (error) {
        console.error("[/api/raw] Error:", error);
        return new Response("Internal server error", { status: 500 });
    }
}