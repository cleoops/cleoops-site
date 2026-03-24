import Image from 'next/image'
import { getAllPosts, formatDate } from '../../lib/blog'
import { getCoverImage } from '@/lib/images'
import AdSlot from '../components/AdSlot'

export const metadata = {
  title: 'News & Analysis – Cleoops',
  description: 'AI news, analysis, and practical guides. Thoughtful coverage of how AI is changing work.',
}

const CATEGORY_COLORS = {
  'News':     '#dc2626',
  'Analysis': '#2563eb',
  'Guide':    '#16a34a',
  'Research': '#7c3aed',
  'Industry': '#d97706',
}

function getCategoryColor(category) {
  return CATEGORY_COLORS[category] || '#2563eb'
}

export default function BlogIndex({ searchParams }) {
  const allPosts = getAllPosts()
  const activeCategory = searchParams?.category || 'All'

  // Derive unique categories from actual posts
  const categories = ['All', ...Array.from(new Set(allPosts.map(p => p.category).filter(Boolean))).sort()]

  const posts = activeCategory === 'All'
    ? allPosts
    : allPosts.filter(p => p.category === activeCategory)

  const featuredPost   = posts[0]
  const secondaryPosts = posts.slice(1, 3)
  const remainingPosts = posts.slice(3)
  const latestPosts    = allPosts.slice(0, 8)

  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'
  })

  return (
    <div className="bg-white min-h-screen">

      {/* PAGE HEADER */}
      <div className="border-b border-[#e2e8f0] py-4 px-6 bg-white">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-black text-[#0f172a]">AI News & Analysis</h1>
          <span className="text-sm text-[#64748b]">{today}</span>
        </div>
      </div>

      {/* CATEGORY FILTER BAR */}
      <div className="border-b border-[#e2e8f0] bg-white px-6 overflow-x-auto">
        <div className="max-w-[1400px] mx-auto flex gap-1 py-0">
          {categories.map(cat => (
            <a
              key={cat}
              href={cat === 'All' ? '/blog' : `/blog?category=${encodeURIComponent(cat)}`}
              className={`px-4 py-3 text-xs font-black uppercase tracking-widest whitespace-nowrap border-b-2 transition-colors ${
                activeCategory === cat
                  ? 'border-[#0f172a] text-[#0f172a]'
                  : 'border-transparent text-[#64748b] hover:text-[#0f172a]'
              }`}
            >
              {cat}
            </a>
          ))}
        </div>
      </div>

      {/* AD SLOT — LEADERBOARD */}
      <div className="py-3 px-6 bg-[#f8f9fc] border-b border-[#e2e8f0]">
        <div className="max-w-[1400px] mx-auto flex justify-center">
          <AdSlot slotId={process.env.NEXT_PUBLIC_BLOG_LEADERBOARD_SLOT_ID} />
        </div>
      </div>

      {/* MAIN LAYOUT */}
      <div className="max-w-[1400px] mx-auto px-6 py-8">
        {posts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-[#64748b] text-lg mb-4">No {activeCategory} posts yet.</p>
            <a href="/blog" className="text-[#2563eb] text-sm font-bold hover:underline">View all posts</a>
          </div>
        ) : (
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">

            {/* ── LEFT: MAIN CONTENT ── */}
            <div className="xl:col-span-9">

              {/* TOP ROW: HERO + 2 SECONDARY */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-8">

                {/* HERO */}
                {featuredPost && (
                  <a href={`/blog/${featuredPost.slug}`}
                    className="lg:col-span-7 group block relative h-[420px] rounded-xl overflow-hidden bg-[#0d1117]">
                    <Image
                      src={getCoverImage(featuredPost.slug, featuredPost.tags || [])}
                      alt={featuredPost.title}
                      fill
                      className="object-cover opacity-70 group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="text-xs font-black uppercase tracking-widest mb-2 block"
                        style={{ color: getCategoryColor(featuredPost.category) }}>
                        {featuredPost.category}
                      </span>
                      <h2 className="text-white text-2xl font-black leading-tight mb-2 group-hover:underline">
                        {featuredPost.title}
                      </h2>
                      <p className="text-white/70 text-sm">{formatDate(featuredPost.date)} &middot; {featuredPost.readTime || '4 min read'}</p>
                    </div>
                  </a>
                )}

                {/* 2 SECONDARY STACKED */}
                <div className="lg:col-span-5 flex flex-col gap-4">
                  {secondaryPosts.map(post => (
                    <a key={post.slug} href={`/blog/${post.slug}`}
                      className="group flex gap-4 border border-[#e2e8f0] rounded-xl overflow-hidden hover:border-[#2563eb] transition-colors h-[200px]">
                      <div className="relative w-[140px] flex-shrink-0">
                        <Image
                          src={getCoverImage(post.slug, post.tags || [])}
                          alt={post.title}
                          fill
                          className="object-cover"
                          sizes="140px"
                        />
                      </div>
                      <div className="flex flex-col justify-center py-4 pr-4">
                        <span className="text-xs font-black uppercase tracking-widest mb-1"
                          style={{ color: getCategoryColor(post.category) }}>
                          {post.category}
                        </span>
                        <h3 className="text-[#0f172a] font-black text-sm leading-snug mb-2 group-hover:text-[#2563eb] transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-[#64748b] text-xs">{formatDate(post.date)}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* DIVIDER */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs font-black uppercase tracking-widest text-[#64748b]">
                  {activeCategory === 'All' ? 'All Stories' : activeCategory}
                </span>
                <div className="flex-1 border-t border-[#e2e8f0]" />
                <span className="text-xs text-[#94a3b8]">{posts.length} articles</span>
              </div>

              {/* FULL ARTICLE GRID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {remainingPosts.map(post => (
                  <a key={post.slug} href={`/blog/${post.slug}`}
                    className="group flex flex-col border border-[#e2e8f0] rounded-xl overflow-hidden hover:border-[#2563eb] transition-colors hover:shadow-md">
                    <div className="relative aspect-video bg-[#f1f5f9]">
                      <Image
                        src={getCoverImage(post.slug, post.tags || [])}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="text-xs font-black uppercase tracking-widest px-2 py-1 rounded text-white"
                          style={{ background: getCategoryColor(post.category) }}>
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-4 flex flex-col flex-1">
                      <h3 className="text-[#0f172a] font-black text-sm leading-snug mb-3 group-hover:text-[#2563eb] transition-colors flex-1">
                        {post.title}
                      </h3>
                      {post.description && (
                        <p className="text-[#64748b] text-xs leading-relaxed mb-3 line-clamp-2">
                          {post.description}
                        </p>
                      )}
                      <div className="flex items-center justify-between text-xs text-[#94a3b8] mt-auto pt-3 border-t border-[#f1f5f9]">
                        <span>{formatDate(post.date)}</span>
                        <span>{post.readTime || '4 min read'}</span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

            </div>

            {/* ── RIGHT SIDEBAR ── */}
            <div className="xl:col-span-3">
              <div className="sticky top-6 space-y-6">

                {/* BROWSE BY CATEGORY */}
                <div className="border border-[#e2e8f0] rounded-xl p-5">
                  <h3 className="text-[#0f172a] text-xs font-black uppercase tracking-widest mb-4 pb-3 border-b border-[#e2e8f0]">
                    Browse by Category
                  </h3>
                  <div className="space-y-1">
                    {categories.map(cat => {
                      const count = cat === 'All' ? allPosts.length : allPosts.filter(p => p.category === cat).length
                      const isActive = activeCategory === cat
                      return (
                        <a
                          key={cat}
                          href={cat === 'All' ? '/blog' : `/blog?category=${encodeURIComponent(cat)}`}
                          className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                            isActive
                              ? 'bg-[#0f172a] text-white font-bold'
                              : 'text-[#374151] hover:bg-[#f8f9fc] font-medium'
                          }`}
                        >
                          <span className="flex items-center gap-2">
                            {cat !== 'All' && (
                              <span
                                className="w-2 h-2 rounded-full flex-shrink-0"
                                style={{ background: getCategoryColor(cat) }}
                              />
                            )}
                            {cat}
                          </span>
                          <span className={`text-xs ${isActive ? 'text-white/70' : 'text-[#94a3b8]'}`}>
                            {count}
                          </span>
                        </a>
                      )
                    })}
                  </div>
                </div>

                {/* LATEST NEWS */}
                <div className="bg-[#0d1117] rounded-xl p-5">
                  <h3 className="text-white text-xs font-black uppercase tracking-widest mb-4 pb-3 border-b border-white/10">
                    Latest
                  </h3>
                  <div className="space-y-4">
                    {latestPosts.map((post, i) => (
                      <a key={post.slug} href={`/blog/${post.slug}`}
                        className="group flex gap-3 items-start">
                        <span className="text-[#2563eb] font-black text-lg leading-none w-6 flex-shrink-0">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <div>
                          <p className="text-white text-xs font-bold leading-snug group-hover:text-[#2563eb] transition-colors">
                            {post.title}
                          </p>
                          <p className="text-white/40 text-xs mt-1">{formatDate(post.date)}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* NEWSLETTER CTA */}
                <div className="bg-[#2563eb] rounded-xl p-5 text-white">
                  <p className="text-xs font-black uppercase tracking-widest mb-2 opacity-80">Free Newsletter</p>
                  <h3 className="font-black text-lg leading-tight mb-3">AI strategy for business operators</h3>
                  <a href="/#newsletter"
                    className="block w-full py-3 bg-white text-[#2563eb] text-center text-sm font-black rounded-lg hover:bg-[#f1f5f9] transition-colors">
                    Subscribe free
                  </a>
                </div>

                {/* AD SLOT — SIDEBAR */}
                <AdSlot slotId={process.env.NEXT_PUBLIC_BLOG_SIDEBAR_SLOT_ID} />

              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  )
}
