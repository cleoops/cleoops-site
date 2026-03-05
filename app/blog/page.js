import { getAllPosts, formatDate } from '../../lib/blog'

export const metadata = {
  title: 'Blog – Cleo',
  description: 'Practical guides to using AI tools effectively. Step-by-step walkthroughs, honest comparisons, and real-world workflows.',
}

export default function BlogIndex() {
  const posts = getAllPosts()

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-stone-900 mb-4">Blog</h1>
        <p className="text-lg text-stone-600 leading-relaxed">
          Practical guides to using AI tools effectively. No hype, no vague advice — just what to type, what to click, and what to do with the output.
        </p>
      </div>

      <div className="space-y-10">
        {posts.map(post => (
          <article key={post.slug} className="border-b border-stone-200 pb-10 last:border-0">
            <a href={`/blog/${post.slug}`} className="group block">
              <div className="flex items-center gap-3 mb-3">
                <time className="text-sm text-stone-500" dateTime={post.date}>
                  {formatDate(post.date)}
                </time>
                {post.tags && post.tags.length > 0 && (
                  <span className="text-stone-300">·</span>
                )}
                {post.tags && post.tags.slice(0, 2).map(tag => (
                  <span key={tag} className="text-xs bg-stone-100 text-stone-600 px-2 py-0.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="text-xl font-semibold text-stone-900 mb-2 group-hover:text-brand-600 transition-colors leading-snug">
                {post.title}
              </h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                {post.description}
              </p>
              <span className="text-sm font-medium text-brand-600 group-hover:underline">
                Read article →
              </span>
            </a>
          </article>
        ))}
      </div>
    </div>
  )
}
