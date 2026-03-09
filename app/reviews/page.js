export const metadata = {
  title: 'AI Tool Reviews',
  description: 'Independently tested AI tool reviews. Real benchmarks, real conclusions — no affiliate bias.',
}

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fc]">
      {/* Header */}
      <div className="bg-[#0d1117] text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="inline-block bg-[#2563eb] text-white text-xs font-bold px-3 py-1 rounded mb-4 tracking-widest uppercase">
            Reviews
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
            AI tool reviews you can trust
          </h1>
          <p className="text-[#94a3b8] text-lg max-w-2xl">
            Every tool is tested on real tasks before we write a word. No press releases. No sponsored content. Just honest assessments.
          </p>
        </div>
      </div>

      {/* Coming soon content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-white border border-[#e2e8f0] rounded-2xl p-12 text-center max-w-2xl mx-auto">
          <div className="text-5xl mb-6">🔬</div>
          <h2 className="text-2xl font-black text-[#0f172a] mb-4">Reviews launching soon</h2>
          <p className="text-[#64748b] mb-6 leading-relaxed">
            We are running structured benchmarks across the top AI tools right now. Our methodology: 20 standardised tasks per tool, scored blind, published with full data.
          </p>
          <p className="text-sm text-[#94a3b8] mb-8">
            First reviews: ChatGPT vs Claude vs Gemini head-to-head. AI writing tools shootout. Best AI for small business.
          </p>
          <a href="/blog" className="inline-block bg-[#2563eb] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#1d4ed8] transition-colors">
            Read our analysis in the meantime &rarr;
          </a>
        </div>

        {/* What to expect */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: '📊', title: 'Benchmarked', desc: 'Every review uses the same 20 standardised tasks so results are comparable across tools.' },
            { icon: '🔒', title: 'Independent', desc: 'No vendor relationships. No paid placements. We pay for the tools we review.' },
            { icon: '🔄', title: 'Updated', desc: 'AI tools change fast. Reviews are updated when major versions ship, not left to go stale.' },
          ].map(item => (
            <div key={item.title} className="bg-white border border-[#e2e8f0] rounded-xl p-6">
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-bold text-[#0f172a] mb-2">{item.title}</h3>
              <p className="text-sm text-[#64748b] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
