import Image from 'next/image'
import { getAllPosts } from '@/lib/blog'
import TwitterFeed from './components/TwitterFeed'
import { getCoverImage } from '@/lib/images'
import EmailCapture from './components/EmailCapture'
import AdSlot from './components/AdSlot'

export default function Home() {
  const posts = getAllPosts()
  const latestPosts = posts.slice(0, 3)

  return (
    <div className="bg-[#f8f9fc]">

      {/* ── HERO — Publication Statement ── */}
      <section className="relative overflow-hidden bg-[#0d1117] min-h-[520px] flex items-center border-b border-[#1a1f2e] py-20 px-6">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1600&auto=format&fit=crop&q=60"
            alt=""
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1117] via-[#0d1117]/80 to-transparent" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="mb-12">
            <span className="inline-block bg-[#2563eb]/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-6 border border-[#2563eb]/50]">INDEPENDENT PUBLICATION</span>
            <h1 className="text-5xl sm:text-6xl font-black text-white leading-[1.1] mb-6">
              The Independent AI Resource
            </h1>
            <p className="text-xl text-[#94a3b8] max-w-2xl leading-relaxed">
              News, guides, and strategy for people who actually use AI to get work done. No hype. No affiliate bias. Practical, step-by-step.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 items-center">
            <button className="px-6 py-3 bg-[#2563eb] text-white font-semibold rounded-lg hover:bg-[#1d4ed8] transition-colors">
              Subscribe to newsletter
            </button>
            <a href="/services" className="px-6 py-3 border border-white text-white font-semibold rounded-lg hover:border-[#94a3b8] transition-colors">
              Browse guides
            </a>
          </div>
        </div>
      </section>

      {/* ── LATEST NEWS — Accenture-style portrait cards ── */}
      <section className="py-16 px-6 bg-[#000]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <h2 className="text-3xl font-black text-white">What&apos;s trending in AI</h2>
            <a href="/blog" className="flex items-center gap-2 text-white text-sm font-semibold hover:text-[#60a5fa] transition-colors">
              View all <span className="bg-[#2563eb] rounded-full w-6 h-6 flex items-center justify-center text-xs">→</span>
            </a>
          </div>

          {latestPosts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {latestPosts.slice(0, 4).map(post => (
                <a
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col bg-[#111] rounded-xl overflow-hidden hover:bg-[#1a1a1a] transition-all"
                  style={{ minHeight: '420px' }}
                >
                  {/* TEXT TOP */}
                  <div className="p-5 flex-1">
                    <p className="text-[#60a5fa] text-xs font-bold tracking-widest uppercase mb-3">
                      {post.category || (post.tags && post.tags[0]) || 'NEWS'}
                    </p>
                    <h3 className="text-white font-black text-lg leading-snug group-hover:text-[#60a5fa] transition-colors line-clamp-3">
                      {post.title}
                    </h3>
                  </div>
                  {/* IMAGE BOTTOM */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={getCoverImage(post.slug, post.tags || [])}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="bg-[#111] rounded-xl p-12 text-center">
              <p className="text-[#64748b]">Stories coming soon.</p>
            </div>
          )}
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

      {/* ── TWITTER FEED ── */}
      <section className="py-16 px-6 bg-[#f8f9fc] border-b border-[#e2e8f0]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-xs font-bold text-[#64748b] tracking-widest uppercase mb-1">Live from X</p>
              <h2 className="text-2xl font-black text-[#0f172a]">@cleoops7</h2>
            </div>
            <a
              href="https://x.com/cleoops7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#0d1117] text-white text-sm font-bold px-4 py-2 rounded-lg hover:bg-[#1a1f2e] transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.629 5.905-5.629zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              Follow
            </a>
          </div>
          <div className="bg-white border border-[#e2e8f0] rounded-2xl overflow-hidden max-w-xl">
            <TwitterFeed />
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
