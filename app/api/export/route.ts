import { proxyToConvex } from "../convex-proxy";

export async function GET() {
    return proxyToConvex("/api/export", {
        accept: "application/json",
        contentType: "application/json",
    });
}