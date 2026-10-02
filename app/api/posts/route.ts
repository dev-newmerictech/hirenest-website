import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
    try {
        const url = new URL(request.url);
        const limitStr = url.searchParams.get('limit');
        
        const res = await fetch("https://dmf25vwa4wepi.cloudfront.net/index.json");
        const posts = await res.json();
        
        let result = posts;
        if (limitStr) {
            const limit = parseInt(limitStr, 10);
            if (!isNaN(limit)) {
                result = result.slice(0, limit);
            }
        }
        
        return NextResponse.json(result);
    } catch (error) {
        console.error("Error fetching posts from S3 proxy:", error);
        return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });
    }
}