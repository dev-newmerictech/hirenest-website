/**
 * Proxy utility for forwarding requests to Convex HTTP endpoints.
 * Replaces Netlify edge functions that proxied to Convex site URL.
 */
export function getConvexSiteUrl(): string {
    // Explicit site URL takes priority (required for custom domains)
    if (process.env.CONVEX_SITE_URL) {
        return process.env.CONVEX_SITE_URL;
    }
    const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL || "";
    // Self-hosted Convex: site runs on port 3211
    if (convexUrl.includes("127.0.0.1:3210") || convexUrl.includes("localhost:3210")) {
        return convexUrl.replace(":3210", ":3211");
    }
    // Convex cloud: .cloud → .site
    return convexUrl.replace(".cloud", ".site");
}

export async function proxyToConvex(
    path: string,
    options?: { accept?: string; contentType?: string; cacheControl?: string }
): Promise<Response> {
    const siteUrl = getConvexSiteUrl();
    const targetUrl = `${siteUrl}${path}`;

    try {
        const response = await fetch(targetUrl, {
            headers: { Accept: options?.accept || "application/json" },
        });

        if (!response.ok) {
            return new Response(await response.text(), { status: response.status });
        }

        const data = await response.text();
        return new Response(data, {
            headers: {
                "Content-Type": options?.contentType || "application/json",
                "Cache-Control": options?.cacheControl || "public, max-age=3600, s-maxage=7200",
            },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: "Proxy error" }), {
            status: 502,
            headers: { "Content-Type": "application/json" },
        });
    }
}