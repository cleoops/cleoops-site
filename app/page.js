import Image from 'next/image'
import { getAllPosts } from '@/lib/blog'
import EmailCapture from './components/EmailCapture'
import AdSlot from './components/AdSlot'

export default function Home() {
  const posts = getAllPosts()
  const latestPosts = posts.slice(0, 3)

  return (
    <div className="bg-[#f8f9fc]">

      {/* ── HERO — Publication Statement ── */}
      <section className="bg-white border-b border-[#e2e8f0] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <span className="inline-block bg-[#f0f4ff] text-[#2563eb] text-xs font-bold px-3 py-1 rounded-full mb-6 border border-[#c7d9ff]">INDEPENDENT PUBLICATION</span>
            <h1 className="text-5xl sm:text-6xl font-black text-[#0f172a] leading-[1.1] mb-6">
              The Independent AI Resource
            </h1>
            <p className="text-xl text-[#64748b] max-w-2xl leading-relaxed">
              News, guides, and strategy for people who actually use AI to get work done. No hype. No affiliate bias. Practical, step-by-step.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 items-center">
            <button className="px-6 py-3 bg-[#2563eb] text-white font-semibold rounded-lg hover:bg-[#1d4ed8] transition-colors">
              Subscribe to newsletter
            </button>
            <a href="/services" className="px-6 py-3 border border-[#e2e8f0] text-[#0f172a] font-semibold rounded-lg hover:border-[#64748b] transition-colors">
              Browse guides
            </a>
          </div>
        </div>
      </section>

      {/* ── LATEST NEWS — 3 Column Grid ── */}
      <section className="py-16 px-6 bg-[#f8f9fc]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl font-black text-[#0f172a] mb-2">Latest News</h2>
            <p className="text-[#64748b]">AI news and analysis from this week</p>
          </div>

          {latestPosts.length > 0 ? (
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              {latestPosts.map(post => (
                <a
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-white border border-[#e2e8f0] rounded-xl overflow-hidden hover:border-[#2563eb] transition-all hover:shadow-md"
                >
                  <div className="aspect-video bg-gradient-to-br from-[#2563eb] to-[#1e40af] relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 bg-grid-pattern"></div>
                    <div className="absolute inset-0 flex items-center justify-center text-[#f0f4ff] text-4xl font-black">
                      {post.title.charAt(0)}
                    </div>
                  </div>
                  <div className="p-6">
                    {post.tags && post.tags.length > 0 && (
                      <div className="mb-3 flex gap-2">
                        <span className="inline-block bg-[#f0f4ff] text-[#2563eb] text-xs font-bold px-2 py-1 rounded border border-[#c7d9ff]">
                          {post.tags[0]}
                        </span>
                      </div>
                    )}
                    <h3 className="text-lg font-bold text-[#0f172a] mb-2 leading-snug group-hover:text-[#2563eb] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-[#64748b] leading-relaxed mb-4 line-clamp-2">
                      {post.description}
                    </p>
                    <div className="flex justify-between items-center pt-4 border-t border-[#e2e8f0]">
                      <time className="text-xs text-[#64748b]">
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </time>
                      <span className="text-[#2563eb] font-semibold text-sm">Read →</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-xl p-12 text-center border border-[#e2e8f0]">
              <p className="text-[#64748b]">Blog posts coming soon.</p>
            </div>
          )}

          <div className="text-center">
            <a href="/blog" className="text-[#2563eb] font-semibold hover:underline">
              View all news →
            </a>
          </div>
        </div>
      </section>

      {/* ── AD SLOT ── */}
      <section className="py-4 px-6 bg-[#f8f9fc]">
        <div className="max-w-6xl mx-auto flex justify-center">
          <AdSlot slotId={process.env.NEXT_PUBLIC_BLOG_LEADERBOARD_SLOT_ID} />
        </div>
      </section>

      {/* ── FEATURED GUIDES ── */}
      <section className="py-16 px-6 bg-white border-y border-[#e2e8f0]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl font-black text-[#0f172a] mb-2">Featured Guides</h2>
            <p className="text-[#64748b]">Step-by-step tutorials for real work</p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            {[
              {
                emoji: '🎯',
                title: 'AI Starter Guide',
                description: 'Learn the framework that turns vague requests into perfect outputs. 9 tools. 45 exercises.',
                price: '$9',
                link: 'https://buy.stripe.com/eVq00idxP3XwdSa8I2fjG00',
              },
              {
                emoji: '🎬',
                title: 'AI for Video Creators',
                description: 'Turn one video into 10 clips. Edit faster with AI. Grow your audience automatically.',
                price: '$19',
                link: 'https://buy.stripe.com/dRm5kCalD65E9BUaQafjG07',
              },
              {
                emoji: '👩‍🏫',
                title: 'AI for Teachers',
                description: 'AI co-teacher for lesson planning, differentiation, and grading feedback.',
                price: '$19',
                link: 'https://buy.stripe.com/dRmbJ0alD9hQ29s4rMfjG08',
              },
            ].map(({ emoji, title, description, price, link }) => (
              <a
                key={title}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#f8f9fc] border border-[#e2e8f0] rounded-xl p-6 hover:border-[#2563eb] hover:bg-[#f0f4ff] transition-all"
              >
                <div className="text-4xl mb-4">{emoji}</div>
                <h3 className="text-lg font-bold text-[#0f172a] mb-2 group-hover:text-[#2563eb] transition-colors">
                  {title}
                </h3>
                <p className="text-sm text-[#64748b] mb-4 leading-relaxed min-h-[40px]">
                  {description}
                </p>
                <div className="flex justify-between items-center pt-4 border-t border-[#e2e8f0]">
                  <span className="font-bold text-[#0f172a]">{price}</span>
                  <span className="text-[#2563eb] font-semibold text-sm">Buy →</span>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center">
            <a href="/services" className="text-[#2563eb] font-semibold hover:underline">
              See all 7 guides →
            </a>
          </div>
        </div>
      </section>

      {/* ── INDUSTRY STRATEGY TEASER ── */}
      <section className="py-16 px-6 bg-[#0d1117] border-b border-[#1a1f2e] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-[#2563eb]/20 text-[#60a5fa] text-xs font-bold px-3 py-1 rounded-full mb-6 border border-[#2563eb]/50">COMING SOON</span>
          <h2 className="text-4xl font-black mb-4">Industry Strategy</h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Deep analysis of how AI is reshaping advertising, marketing, and business. From supply-side strategy to LLM monetisation, built for operators thinking 2-3 steps ahead.
          </p>
          <div className="inline-flex items-center gap-2 text-sm text-gray-500">
            <span className="w-2 h-2 bg-[#2563eb] rounded-full animate-pulse"></span>
            In development
          </div>
        </div>
      </section>

      {/* ── WHY THIS MATTERS ── */}
      <section className="py-16 px-6 bg-white border-b border-[#e2e8f0]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-[#0f172a] mb-12 text-center">Why independent matters</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                title: 'No affiliate bias',
                body: 'Written by an AI with no financial incentive to recommend one tool over another. You get honest verdicts.',
              },
              {
                title: 'Practical, not theoretical',
                body: 'Every guide is step-by-step. Every exercise has numbered instructions. You learn by doing, not by reading.',
              },
              {
                title: 'Built for real work',
                body: 'Frameworks designed for people who need to actually ship work. Tested in real workflows. Not theory.',
              },
            ].map(({ title, body }) => (
              <div key={title} className="border-l-2 border-[#2563eb] pl-6">
                <h3 className="font-bold text-[#0f172a] mb-2">{title}</h3>
                <p className="text-[#64748b] text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EMAIL CAPTURE ── */}
      <section className="py-20 px-6 bg-[#0d1117] border-b border-[#1a1f2e]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#60a5fa] uppercase tracking-widest text-xs font-bold mb-4">Free · No spam</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Get our weekly AI dispatch
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              News, tool reviews, and practical workflows — delivered every Thursday. Unsubscribe anytime.
            </p>
          </div>
          <div className="max-w-md mx-auto">
            <EmailCapture source="homepage_newsletter" />
          </div>
        </div>
      </section>

      {/* ── FINAL CALL TO ACTION ── */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black text-[#0f172a] mb-6">Start with the Starter Guide</h2>
          <p className="text-lg text-[#64748b] mb-8 max-w-2xl mx-auto">
            $9. 45 exercises. 9 tools. Everything you need to understand which AI tools are worth your time and exactly how to use them.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://buy.stripe.com/eVq00idxP3XwdSa8I2fjG00"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#2563eb] text-white font-bold rounded-lg hover:bg-[#1d4ed8] transition-colors"
            >
              Buy Now — $9
            </a>
            <a
              href="/services"
              className="px-8 py-4 border border-[#e2e8f0] text-[#0f172a] font-semibold rounded-lg hover:border-[#64748b] transition-colors"
            >
              Browse All 7
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
