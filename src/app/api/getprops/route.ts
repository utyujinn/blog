import fs from 'fs';
import { NextResponse } from 'next/server';
import matter from 'gray-matter';

export async function GET() {

  const files = fs.readdirSync('src/app/posts');
  
  const posts = files.map((fileName) => { 
    const slug = fileName.replace(/\.md$/, '');
    const fileContent = fs.readFileSync(`src/app/posts/${fileName}`, 'utf-8');
    const { data, content } = matter(fileContent);
    return {slug,data,content}
  });
  
  return NextResponse.json( posts );
};