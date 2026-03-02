export const metadata = {
  title: 'Services – Cleo',
  description: 'AI setup sessions, musician guides, and digital products from Cleo.',
}

const guides = [
  {
    emoji: '📖',
    title: 'AI Starter Guide',
    price: '$9',
    description: 'The fastest way to understand what AI can actually do for you. Covers the 5 tools that matter, how to use them, and what to ignore.',
    tag: 'Best place to start',
    buyUrl: 'https://buy.stripe.com/eVq00idxP3XwdSa8I2fjG00',
  },
  {
    emoji: '🎵',
    title: 'AI for Musicians Guide',
    price: '$19',
    description: 'A complete guide to AI tools for guitarists, producers, and music lovers. Suno, Udio, AI mastering, stem separation, and more.',
    tag: 'New',
    buyUrl: 'https://buy.stripe.com/4gM6oGfFXfGe4hAaQafjG01',
  },
  {
    emoji: '🏡',
    title: 'Smart Home AI Guide',
    price: '$19',
    description: 'How to build a genuinely useful AI-powered home. Covers the best devices, integrations, and routines that actually save you time.',
    tag: null,
    buyUrl: 'https://buy.stripe.com/eVq3cu1P70Lk4hAe2mfjG02',
  },
]

const sessions = [
  {
    emoji: '🎯',
    title: 'AI Starter Session',
    price: '$79',
    duration: '60 min',
    description: 'We pick the 3 AI tools that make most sense for your life and set them up together. You leave with everything configured and knowing exactly how to use it.',
    features: ['Personalised tool selection','Live setup and walkthrough','Follow-up summary email','Recorded session (optional)'],
    buyUrl: 'https://buy.stripe.com/dRm7sKbpH1PoaFY5vQfjG03',
  },
  {
    emoji: '🎸',
    title: 'AI for Musicians Session',
    price: '$99',
    duration: '60 min',
    description: 'Built for musicians. We explore AI tools for composition, production, learning, and creativity -- tailored to your instrument and workflow.',
    features: ['Music AI tool overview','DAW and production AI setup','AI learning tools for your instrument','Curated tool list to take away'],
    highlight: true,
    buyUrl: 'https://buy.stripe.com/00w6oG3XfbpYaFY4rMfjG04',
  },
  {
    emoji: '🏠',
    title: 'AI Home Setup',
    price: '$129',
    duration: '90 min',
    description: 'Smart home AI, devices, and routines set up properly. From voice assistants to home automation, we get everything working together.',
    features: ['Smart home AI audit','Device and routine setup','Privacy and security walkthrough','Written guide for your setup'],
    buyUrl: 'https://buy.stripe.com/eVqfZgfFXbpY01kaQafjG05',
  },
]

export default function Services() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-stone-900 mb-4">How I can help</h1>
        <p className="text-xl text-stone-500 max-w-xl mx-auto">Start with a guide if you want to go at your own pace. Book a session if you want it done with me, live.</p>
      </div>

      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-stone-900">Digital Guides</h2>
        <span className="text-sm text-stone-400">From $9 -- yours to keep forever</span>
      </div>
      <div className="grid sm:grid-cols-3 gap-6 mb-20">
        {guides.map((g) => (
          <div key={g.title} className="rounded-2xl p-8 border border-stone-200 bg-white hover:border-brand-300 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <span className="text-3xl">{g.emoji}</span>
              {g.tag && <span className="text-xs font-medium bg-brand-100 text-brand-700 px-2 py-1 rounded-full">{g.tag}</span>}
            </div>
            <h3 className="font-semibold text-stone-900 text-lg mb-2">{g.title}</h3>
            <p className="text-stone-500 text-sm leading-relaxed mb-6">{g.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-brand-500">{g.price}</span>
              <a href={g.buyUrl} target="_blank" rel="noopener noreferrer" className="bg-stone-900 text-white py-2 px-5 rounded-full font-semibold text-sm hover:bg-stone-700 transition-colors">
                Buy now
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-12 text-center mb-12">
        <div className="text-4xl mb-4">🗓️</div>
        <h2 className="text-xl font-bold text-stone-700 mb-2">1:1 Sessions — Coming Soon</h2>
        <p className="text-stone-400 text-sm max-w-sm mx-auto">Personalised AI setup sessions are in the works. Drop your email below and I'll let you know when they're available.</p>
        <a href="/contact" className="inline-block mt-6 bg-stone-900 text-white py-2 px-6 rounded-full font-semibold text-sm hover:bg-stone-700 transition-colors">
          Get notified
        </a>
      </div>
    </div>
  )
}
