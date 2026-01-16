import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const url = request.nextUrl.clone();
    const hostname = request.headers.get('host') || '';
    let shouldRedirect = false;

    // Force HTTPS (if not already)
    if (url.protocol === 'http:') {
        url.protocol = 'https:';
        shouldRedirect = true;
    }

    // Force non-www (remove www. prefix)
    if (hostname.startsWith('www.')) {
        url.host = hostname.replace('www.', '');
        shouldRedirect = true;
    }

    // Single redirect for both HTTP→HTTPS and WWW→non-WWW
    if (shouldRedirect) {
        return NextResponse.redirect(url, 301); // Permanent redirect
    }

    const response = NextResponse.next();

    // Add X-Robots-Tag headers for SEO control
    response.headers.set('X-Robots-Tag', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

    // Add security headers
    response.headers.set('X-Content-Type-Options', 'nosniff');
    response.headers.set('X-Frame-Options', 'DENY');
    response.headers.set('X-XSS-Protection', '1; mode=block');
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

    return response;
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - robots.txt (SEO crawlers)
         * - sitemap.xml (SEO crawlers)
         */
        '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
    ],
};
