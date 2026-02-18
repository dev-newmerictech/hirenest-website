import { proxyToConvex } from "../convex-proxy";

export async function GET() {
    return proxyToConvex("/api/posts", {
        accept: "application/json",
        contentType: "application/json",
    });
}