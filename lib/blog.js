import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

export function getAllPosts() {
  if (!fs.existsSync(BLOG_DIR)) return []

  const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.md'))

  const posts = files.map(filename => {
    const filePath = path.join(BLOG_DIR, filename)
    const raw = fs.readFileSync(filePath, 'utf-8')
    const { data } = matter(raw)
    return {
      slug: data.slug || filename.replace('.md', ''),
      title: data.title || '',
      date: data.date || '',
      description: data.description || '',
      tags: data.tags || [],
    }
  })

  // Sort by date descending
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date))
}

export function getPostBySlug(slug) {
  const filePath = path.join(BLOG_DIR, `${slug}.md`)
  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  const html = marked(content)

  return {
    slug: data.slug || slug,
    title: data.title || '',
    date: data.date || '',
    description: data.description || '',
    tags: data.tags || [],
    content: html,
  }
}

export function formatDate(dateStr) {
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}
