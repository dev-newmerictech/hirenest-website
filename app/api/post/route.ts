import { NextRequest } from "next/server";
import { proxyToConvex } from "../convex-proxy";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const slug = searchParams.get("slug");
    const format = searchParams.get("format");
    let path = `/api/post?slug=${encodeURIComponent(slug || '')}`;
    if (format) path += `&format=${encodeURIComponent(format)}`;
    return proxyToConvex(path);
}