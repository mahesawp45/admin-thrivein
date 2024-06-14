import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getCookie } from 'cookies-next';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest, response: NextResponse) {
  const isLoggedin = getCookie('isLoggedin', {
    req: request,
    res: response,
  });

  console.log('====================================');
  console.log('LOGGED ---> ', isLoggedin);
  console.log('====================================');

  if (request.nextUrl.pathname === '/' && isLoggedin) {
    return NextResponse.redirect(new URL('/admin', request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/', '/admin/:path*'],
};
