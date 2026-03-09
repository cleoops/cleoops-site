import Image from 'next/image'
import { getAllPosts, formatDate } from '../../lib/blog'
import { getCoverImage } from '@/lib/images'
import AdSlot from '../components/AdSlot'

export const metadata = {
  title: 'News & Analysis – Cleoops',
  description: 'AI news, analysis, and practical guides. Thoughtful coverage of how AI is changing work.',
}

export default function BlogIndex() {
  const posts = getAllPosts()
  const featuredPost = posts[0]
  const remainingPosts = posts.slice(1)

  const estimateReadTime = (description) => {
    const wordsPerMinute = 200
    const wordCount = description.split(/\s+/).length
    return Math.max(1, Math.ceil(wordCount / wordsPerMinute))
  }

  return (
    <div className="bg-[#f8f9fc] min-h-screen">
      {/* ── PAGE HEADER ── */}
      <div className="bg-white border-b border-[#e2e8f0] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <span className="inline-block bg-[#f0f4ff] text-[#2563eb] text-xs font-bold px-3 py-1 rounded-full mb-6 border border-[#c7d9ff]">NEWS & ANALYSIS</span>
          <h1 className="text-4xl sm:text-5xl font-black text-[#0f172a] mb-4">
            AI News & Analysis
          </h1>
          <p className="text-lg text-[#64748b] max-w-3xl">
            Practical analysis of how AI is changing work. Step-by-step guides. Honest tool reviews. No hype.
          </p>
        </div>
      </div>

      {/* ── AD SLOT ── */}
      <div className="py-4 px-6 bg-[#f8f9fc]">
        <div className="max-w-6xl mx-auto flex justify-center">
          <AdSlot slotId={process.env.NEXT_PUBLIC_BLOG_LEADERBOARD_SLOT_ID} />
        </div>
      </div>

      <div className="px-6 py-12">
        <div className="max-w-6xl mx-auto">

          {posts.length === 0 ? (
            <div className="bg-white rounded-xl p-12 text-center border border-[#e2e8f0]">
              <p className="text-[#64748b]">Posts coming soon.</p>
            </div>
          ) : (
            <>
              {/* ── FEATURED POST ── */}
              {featuredPost && (
                <a
                  href={`/blog/${featuredPost.slug}`}
                  className="group block mb-12"
                >
                  <div className="bg-white border border-[#e2e8f0] rounded-2xl overflow-hidden hover:border-[#2563eb] hover:shadow-lg transition-all">
                    <div className="grid sm:grid-cols-2 gap-0">
                      {/* Image */}
                      <div className="aspect-[16/7] sm:aspect-auto relative overflow-hidden bg-[#0d1117]">
                        <Image
                          src={getCoverImage(featuredPost.slug, featuredPost.tags || [])}
                          alt={featuredPost.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 640px) 100vw, 50vw"
                          priority
                        />
                      </div>

                      {/* Content */}
                      <div className="p-8 sm:p-10 flex flex-col justify-between">
                        {/* Top */}
                        <div>
                          {featuredPost.tags && featuredPost.tags.length > 0 && (
                            <div className="mb-4 flex gap-2 flex-wrap">
                              {featuredPost.tags.slice(0, 2).map(tag => (
                                <span key={tag} className="inline-block bg-[#f0f4ff] text-[#2563eb] text-xs font-bold px-2.5 py-1 rounded border border-[#c7d9ff]">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                          <h2 className="text-3xl font-black text-[#0f172a] mb-4 leading-tight group-hover:text-[#2563eb] transition-colors">
                            {featuredPost.title}
                          </h2>
                          <p className="text-[#64748b] text-base leading-relaxed">
                            {featuredPost.description}
                          </p>
                        </div>

                        {/* Bottom */}
                        <div className="flex items-center justify-between pt-6 border-t border-[#e2e8f0] mt-6">
                          <div className="flex items-center gap-4 text-sm text-[#64748b]">
                            <time dateTime={featuredPost.date}>
                              {formatDate(featuredPost.date)}
                            </time>
                            <span>·</span>
                            <span>{estimateReadTime(featuredPost.description)} min read</span>
                          </div>
                          <span className="text-[#2563eb] font-semibold">Read →</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              )}

              {/* ── REMAINING POSTS GRID ── */}
              {remainingPosts.length > 0 && (
                <div>
                  <h2 className="text-2xl font-black text-[#0f172a] mb-8">More articles</h2>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {remainingPosts.map(post => (
                      <a
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="group bg-white border border-[#e2e8f0] rounded-xl overflow-hidden hover:border-[#2563eb] hover:shadow-md transition-all flex flex-col"
                      >
                        {/* Image */}
                        <div className="aspect-video relative overflow-hidden bg-[#0d1117]">
                          <Image
                            src={getCoverImage(post.slug, post.tags || [])}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                        </div>

                        {/* Content */}
                        <div className="p-5 flex flex-col flex-grow">
                          {/* Tags */}
                          {post.tags && post.tags.length > 0 && (
                            <div className="mb-3 flex gap-2 flex-wrap">
                              <span className="inline-block bg-[#f0f4ff] text-[#2563eb] text-xs font-bold px-2 py-0.5 rounded border border-[#c7d9ff]">
                                {post.tags[0]}
                              </span>
                            </div>
                          )}

                          {/* Title & Description */}
                          <h3 className="text-base font-bold text-[#0f172a] mb-2 leading-snug group-hover:text-[#2563eb] transition-colors line-clamp-2 flex-grow">
                            {post.title}
                          </h3>
                          <p className="text-sm text-[#64748b] leading-relaxed mb-4 line-clamp-2">
                            {post.description}
                          </p>

                          {/* Footer */}
                          <div className="flex items-center justify-between pt-4 border-t border-[#e2e8f0] mt-auto">
                            <div className="text-xs text-[#64748b]">
                              {formatDate(post.date)}
                            </div>
                            <span className="text-[#2563eb] font-semibold text-xs">Read →</span>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
