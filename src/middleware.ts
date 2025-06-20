// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['en', 'pt']; // Your supported locales
const defaultLocale = 'en'; // Your default locale

export function middleware(request: NextRequest) {
  console.log("It's going through here")
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return; // If a locale is already present, continue

  // Redirect if there is no locale
  // e.g., / -> /en
  // e.g., /about -> /en/about
  const locale = defaultLocale; // Or detect based on Accept-Language header, cookie, etc.

  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

// You can also specify which paths the middleware should run on
export const config = {
  // Match all request paths except for files with a dot (e.g. favicon.ico)
  // and Next.js internal paths (_next).
  // This effectively means it will apply to / and /about etc.
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};