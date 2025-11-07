// app/.well-known/apple-app-site-association/route.ts
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const filePath = path.join(process.cwd(), 'public', '.well-known', 'apple-app-site-association.json');
  const fileContent = fs.readFileSync(filePath, 'utf8');
  
  return new NextResponse(fileContent, {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}