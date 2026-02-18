import { NextResponse } from 'next/server';

// Lightweight health check endpoint
// Used by Cloudflare health checks, uptime monitors, and load balancers
// to verify the origin server is alive and responding
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET() {
    return NextResponse.json(
        {
            status: 'ok',
            timestamp: new Date().toISOString(),
            service: 'hirenest-website',
        },
        {
            status: 200,
            headers: {
                // No caching — always a fresh check
                'Cache-Control': 'no-store, no-cache, must-revalidate',
                // Keep the connection alive to the origin
                'Connection': 'keep-alive',
            },
        }
    );
}
