import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Verificar si es el archivo apple-app-site-association
  if (pathname === '/apple-app-site-association' || 
      pathname === '/.well-known/apple-app-site-association') {
    
    const response = NextResponse.next();
    response.headers.set('Content-Type', 'application/json');
    
    return response;
  }
  
  // Verificar si es el archivo assetlinks.json (Android)
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
