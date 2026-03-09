import { NextResponse } from 'next/server'
import { getAllPosts } from '../../../lib/blog'

export async function GET() {
  const posts = getAllPosts().map(p => ({
    slug: p.slug,
    title: p.title,
    description: p.description || '',
    category: p.category || '',
    tags: p.tags || [],
    date: p.date,
    readTime: p.readTime || '4 min read',
  }))
  return NextResponse.json(posts)
}
