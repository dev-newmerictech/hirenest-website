import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Keep-alive: prevents Cloudflare from dropping idle connections to the
  // origin, which is the primary code-side cause of 521 "Web Server Is Down"
  response.headers.set('Connection', 'keep-alive');
  response.headers.set('Keep-Alive', 'timeout=30, max=1000');

  // SEO — skip X-Robots-Tag for API routes (they don't need indexing headers)
  if (!request.nextUrl.pathname.startsWith('/api/')) {
    response.headers.set(
      'X-Robots-Tag',
      'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    );
  }

  // Security headers
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
};
