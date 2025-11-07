import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Verificar si es el archivo apple-app-site-association (sin .well-known)
  if (pathname === '/apple-app-site-association') {
    // Redirigir a la ruta con .well-known
    const url = request.nextUrl.clone();
    url.pathname = '/.well-known/apple-app-site-association.json';
    
    const response = NextResponse.rewrite(url);
    response.headers.set('Content-Type', 'application/json');
    
    return response;
  }
  
  // Verificar si es el archivo en .well-known
  if (pathname === '/.well-known/apple-app-site-association') {
    // Redirigir al archivo .json
    const url = request.nextUrl.clone();
    url.pathname = '/.well-known/apple-app-site-association.json';
    
    const response = NextResponse.rewrite(url);
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
