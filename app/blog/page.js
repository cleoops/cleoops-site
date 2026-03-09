import Image from 'next/image'
import { getAllPosts, formatDate } from '../../lib/blog'
import { getCoverImage } from '@/lib/images'
import AdSlot from '../components/AdSlot'

export const metadata = {
  title: 'News & Analysis – Cleoops',
  description: 'AI news, analysis, and practical guides. Thoughtful coverage of how AI is changing work.',
}

// Hash category string to pick a color
function getCategoryColor(category) {
  const colors = ['#2563eb', '#dc2626', '#16a34a', '#d97706']
  let hash = 0
  for (let i = 0; i < category.length; i++) {
    hash = ((hash << 5) - hash) + category.charCodeAt(i)
    hash = hash & hash // Convert to 32bit integer
  }
  return colors[Math.abs(hash) % colors.length]
}

export default function BlogIndex() {
  const posts = getAllPosts()
  const featuredPost = posts[0]
  const gridPosts = posts.slice(1, 5)
  const trendingPosts = posts.slice(5, 10)

  const today = new Date().toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })

  return (
    <div className="bg-white min-h-screen">
      {/* ── PAGE HEADER ── */}
      <div className="border-b border-[#e2e8f0] py-6 px-6 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-black text-[#0f172a]">
              AI News & Analysis
            </h1>
            <div className="text-sm text-[#64748b]">
              {today}
            </div>
          </div>
        </div>
      </div>

      {/* ── AD SLOT ── */}
      <div className="py-4 px-6 bg-white border-b border-[#e2e8f0]">
        <div className="max-w-[1400px] mx-auto flex justify-center">
          <AdSlot slotId={process.env.NEXT_PUBLIC_BLOG_LEADERBOARD_SLOT_ID} />
        </div>
      </div>

      <div className="px-6 py-8">
        <div className="max-w-[1400px] mx-auto">
          {posts.length === 0 ? (
            <div className="bg-[#f8f9fc] rounded-xl p-12 text-center border border-[#e2e8f0]">
              <p className="text-[#64748b]">Posts coming soon.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* ── HERO (LEFT, 40%) ── */}
              {featuredPost && (
                <div className="lg:col-span-5">
                  <a
                    href={`/blog/${featuredPost.slug}`}
                    className="group block h-full"
                  >
                    <div className="relative h-[600px] rounded-lg overflow-hidden bg-[#0d1117] flex flex-col justify-end">
                      {/* Image */}
                      <Image
                        src={getCoverImage(featuredPost.slug, featuredPost.tags || [])}
                        alt={featuredPost.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        priority
                      />
                      
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                      
                      {/* Content overlay */}
                      <div className="relative p-6 text-white">
                        {featuredPost.tags && featuredPost.tags.length > 0 && (
                          <div className="mb-4">
                            <span 
                              className="inline-block text-xs font-black uppercase tracking-wide"
                              style={{ color: getCategoryColor(featuredPost.tags[0]) }}
                            >
                              {featuredPost.tags[0]}
                            </span>
                          </div>
                        )}
                        
                        <h2 className="text-3xl font-black leading-tight mb-4 group-hover:opacity-90 transition-opacity">
                          {featuredPost.title}
                        </h2>
                        
                        <div className="text-sm text-[#9ca3af]">
                          {formatDate(featuredPost.date)}
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              )}

              {/* ── GRID (CENTRE, 40%) ── */}
              <div className="lg:col-span-5">
                <div className="grid grid-cols-2 gap-6 h-full">
                  {gridPosts.map((post, idx) => (
                    <a
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="group bg-white border border-[#e2e8f0] rounded-lg overflow-hidden hover:border-[#2563eb] hover:shadow-md transition-all flex flex-col"
                    >
                      {/* Thumbnail */}
                      <div className="aspect-video relative overflow-hidden bg-[#0d1117]">
                        <Image
                          src={getCoverImage(post.slug, post.tags || [])}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 1024px) 50vw, 20vw"
                        />
                      </div>

                      {/* Content */}
                      <div className="p-4 flex flex-col flex-grow">
                        {post.tags && post.tags.length > 0 && (
                          <div className="mb-2">
                            <span 
                              className="inline-block text-xs font-black uppercase tracking-wide"
                              style={{ color: getCategoryColor(post.tags[0]) }}
                            >
                              {post.tags[0]}
                            </span>
                          </div>
                        )}

                        <h3 className="text-base font-bold text-[#0f172a] mb-2 leading-snug group-hover:text-[#2563eb] transition-colors line-clamp-3 flex-grow">
                          {post.title}
                        </h3>

                        <div className="text-xs text-[#64748b] pt-3 border-t border-[#e2e8f0] mt-auto">
                          {formatDate(post.date)}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* ── SIDEBAR (RIGHT, 20%) ── */}
              <div className="lg:col-span-2">
                <div className="bg-[#0d1117] rounded-lg p-6 h-full flex flex-col">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-[#9ca3af] mb-6">
                    Trending
                  </h3>

                  <div className="space-y-4 flex-grow">
                    {trendingPosts.map((post, idx) => (
                      <a
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="block group pb-4 last:pb-0 border-b border-[#2d2d2d] last:border-0 hover:opacity-80 transition-opacity"
                      >
                        <div className="mb-2">
                          {post.tags && post.tags.length > 0 && (
                            <span 
                              className="text-xs font-black uppercase tracking-wide"
                              style={{ color: getCategoryColor(post.tags[0]) }}
                            >
                              {post.tags[0]}
                            </span>
                          )}
                        </div>
                        <h4 className="text-sm font-bold text-white leading-tight group-hover:text-[#2563eb] transition-colors">
                          {post.title}
                        </h4>
                      </a>
                    ))}
                  </div>

                  <a
                    href="/blog"
                    className="mt-6 pt-4 border-t border-[#2d2d2d] text-[#2563eb] text-sm font-semibold hover:opacity-80 transition-opacity inline-block"
                  >
                    See all →
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
