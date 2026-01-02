import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['en', 'pl'];
const defaultLocale = 'pl'; 

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // skip if the URL already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return NextResponse.next();

  const acceptLanguage = request.headers.get('accept-language');
  let detectedLocale = defaultLocale;

  if (acceptLanguage) {
    // We look for 'en' specifically. If they have 'en' in their browser, 
    // we give them the English version. 
    // Otherwise (for IT, UA, DE, etc.), they get the Polish version (default).
    if (acceptLanguage.startsWith('en') || acceptLanguage.includes(',en')) {
      detectedLocale = 'en';
    } 
    // If they have 'pl' anywhere, they definitely get Polish
    else if (acceptLanguage.includes('pl')) {
      detectedLocale = 'pl';
    }
  }

  // 3. Execute Redirect
  const url = request.nextUrl.clone();
  url.pathname = `/${detectedLocale}${pathname}`;
  
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.png|.*\\.jpg|.*\\.svg).*)',
  ],
};