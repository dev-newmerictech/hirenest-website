import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(
    request: NextRequest,
    context: { params: Promise<{ token: string }> }
) {
    const { token } = await context.params;
    const host = request.headers.get("host") || "hirenest.ai";

    try {
        // Forward directly to Traefik HTTP challenge entrypoint on port 80
        const proxyUrl = `http://coolify-proxy:80/.well-known/acme-challenge/${encodeURIComponent(token)}`;
        const res = await fetch(proxyUrl, {
            headers: {
                Host: host,
            },
            cache: "no-store",
        });

        const data = await res.text();
        return new NextResponse(data, {
            status: res.status,
            headers: { "Content-Type": "text/plain" },
        });
    } catch (err: unknown) {
        // Fallback to internal docker gateway if DNS alias is resolving slowly
        try {
            const fallbackUrl = `http://10.0.1.6:80/.well-known/acme-challenge/${encodeURIComponent(token)}`;
            const res = await fetch(fallbackUrl, {
                headers: { Host: host },
                cache: "no-store",
            });
            const data = await res.text();
            return new NextResponse(data, {
                status: res.status,
                headers: { "Content-Type": "text/plain" },
            });
        } catch (fallbackErr: unknown) {
            console.error("[ACME Challenge Proxy Error]:", err, fallbackErr);
            return new NextResponse("ACME challenge proxy error", { status: 502 });
        }
    }
}
