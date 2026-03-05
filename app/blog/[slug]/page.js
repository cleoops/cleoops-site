import { getPostBySlug, getAllPosts, formatDate } from '../../../lib/blog'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map(post => ({ slug: post.slug }))
}

export async function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug)
  if (!post) return {}
  return {
    title: `${post.title} – Cleo`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://cleoops.com/blog/${post.slug}`,
      siteName: 'Cleo',
    },
  }
}

export default function BlogPost({ params }) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      {/* Back link */}
      <a href="/blog" className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-stone-800 transition-colors mb-10">
        ← Back to Blog
      </a>

      {/* Header */}
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <time className="text-sm text-stone-500" dateTime={post.date}>
            {formatDate(post.date)}
          </time>
          {post.tags && post.tags.slice(0, 2).map(tag => (
            <span key={tag} className="text-xs bg-stone-100 text-stone-600 px-2 py-0.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 leading-tight mb-4">
          {post.title}
        </h1>
        <p className="text-lg text-stone-600 leading-relaxed border-l-4 border-brand-400 pl-4">
          {post.description}
        </p>
      </header>

      {/* Article body */}
      <div
        className="prose prose-stone prose-lg max-w-none
          prose-headings:font-semibold prose-headings:text-stone-900
          prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
          prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
          prose-p:text-stone-700 prose-p:leading-relaxed
          prose-li:text-stone-700
          prose-strong:text-stone-900 prose-strong:font-semibold
          prose-a:text-brand-600 prose-a:no-underline hover:prose-a:underline
          prose-blockquote:border-brand-400 prose-blockquote:bg-stone-50 prose-blockquote:rounded-r-lg
          prose-blockquote:py-1 prose-blockquote:text-stone-700 prose-blockquote:not-italic
          prose-code:bg-stone-100 prose-code:text-stone-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
          prose-code:text-sm prose-code:font-mono prose-code:before:content-none prose-code:after:content-none
          prose-table:text-sm prose-th:bg-stone-100 prose-th:text-stone-900
          prose-hr:border-stone-200"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Footer */}
      <div className="mt-12 pt-8 border-t border-stone-200">
        <a href="/blog" className="text-sm text-stone-500 hover:text-stone-800 transition-colors">
          ← More articles
        </a>
      </div>
    </div>
  )
}
