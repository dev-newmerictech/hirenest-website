import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  // Extract geo data from the request headers (Vercel edge environment)
  const city = request.headers.get("x-vercel-ip-city");
  const country = request.headers.get("x-vercel-ip-country");
  const latitude = request.headers.get("x-vercel-ip-latitude");
  const longitude = request.headers.get("x-vercel-ip-longitude");
  
  if (!city && !country && !latitude && !longitude) {
    return NextResponse.json({
      city: "Unknown",
      country: "Unknown",
      latitude: null,
      longitude: null,
    });
  }

  return NextResponse.json({
    city: city || "Unknown",
    country: country || "Unknown",
    latitude: latitude ? parseFloat(latitude) : null,
    longitude: longitude ? parseFloat(longitude) : null,
  });
}
