import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  if (pathname === '/apple-app-site-association' || 
    pathname === '/.well-known/apple-app-site-association.json') {

    const response = NextResponse.next();
    response.headers.set('Content-Type', 'application/json');
    
    return response;
  }
  
  if (pathname === '/.well-known/assetlinks.json') {
    const response = NextResponse.next();
    response.headers.set('Content-Type', 'application/json');
    
    return response;
  }
}

export const config = {
  matcher: [
    '/apple-app-site-association',
    '/.well-known/apple-app-site-association',
    '/.well-known/assetlinks.json'
  ]
};
