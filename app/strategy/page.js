export const metadata = {
  title: 'AI Industry Strategy',
  description: 'Strategic analysis of how AI is reshaping industries. For leaders who need to make decisions, not just follow headlines.',
}

export default function StrategyPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fc]">
      {/* Header */}
      <div className="bg-[#0d1117] text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="inline-block bg-[#2563eb] text-white text-xs font-bold px-3 py-1 rounded mb-4 tracking-widest uppercase">
            Industry Strategy
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
            AI strategy for people who make decisions
          </h1>
          <p className="text-[#94a3b8] text-lg max-w-2xl">
            Not what AI can do. What it means for your market, your competitors, and your next move.
          </p>
        </div>
      </div>

      {/* Coming soon */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { label: 'Marketing & Advertising', desc: 'How AI is reshaping media buying, creative production, and audience targeting. What the SSP and DSP landscape looks like in 3 years.', status: 'Coming first' },
            { label: 'Finance & Professional Services', desc: 'From AI-assisted analysis to autonomous compliance monitoring. Where human judgment stays irreplaceable.', status: 'Coming soon' },
            { label: 'Education', desc: 'The AI tutor era is here. What institutions, teachers, and learners need to understand before they fall behind.', status: 'Coming soon' },
          ].map(v => (
            <div key={v.label} className="bg-white border border-[#e2e8f0] rounded-xl p-6">
              <div className={`inline-block text-xs font-bold px-2 py-1 rounded mb-4 ${v.status === 'Coming first' ? 'bg-[#fef3c7] text-[#d97706]' : 'bg-[#f1f5f9] text-[#64748b]'}`}>
                {v.status}
              </div>
              <h3 className="font-black text-[#0f172a] text-lg mb-3">{v.label}</h3>
              <p className="text-sm text-[#64748b] leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#0d1117] text-white rounded-2xl p-10 text-center">
          <h2 className="text-2xl font-black mb-3">Get strategy analysis in your inbox</h2>
          <p className="text-[#94a3b8] mb-6 max-w-lg mx-auto">
            Industry strategy pieces publish monthly. Straight to the point, no padding, no noise.
          </p>
          <a href="/#newsletter" className="inline-block bg-[#2563eb] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#1d4ed8] transition-colors">
            Subscribe to the newsletter &rarr;
          </a>
        </div>
      </div>
    </div>
  )
}
