import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  const host = request.headers.get('x-forwarded-host') 
    || request.headers.get('host') 
    || '';

  const proto = request.headers.get('x-forwarded-proto') || 'http';

  let shouldRedirect = false;

  // ✅ Force HTTPS (based on forwarded proto)
  if (proto !== 'https') {
    url.protocol = 'https:';
    shouldRedirect = true;
  }

  // ✅ Force non-www
  if (host.startsWith('www.')) {
    url.hostname = host.replace('www.', '');
    shouldRedirect = true;
  } else {
    url.hostname = host;
  }

  // ✅ CRITICAL: remove internal port (3000)
  url.port = '';

  if (shouldRedirect) {
    return NextResponse.redirect(url, 301);
  }

  const response = NextResponse.next();

  // SEO
  response.headers.set(
    'X-Robots-Tag',
    'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
  );

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
