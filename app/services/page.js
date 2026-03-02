export const metadata = {
  title: 'Services – Cleo',
  description: 'AI setup sessions, musician guides, and digital products from Cleo.',
}

const services = [
  {
    emoji: '🎯',
    title: 'AI Starter Session',
    price: '$79',
    duration: '60 min',
    description: 'We pick the 3 AI tools that make most sense for your life and set them up together. You leave with everything configured and knowing exactly how to use it.',
    features: [
      'Personalised tool selection',
      'Live setup and walkthrough',
      'Follow-up summary email',
      'Recorded session (optional)',
    ],
    cta: 'Book now',
  },
  {
    emoji: '🏠',
    title: 'AI Home Setup',
    price: '$129',
    duration: '90 min',
    description: 'Smart home AI, devices, and routines set up properly. From voice assistants to home automation, we get everything talking to each other.',
    features: [
      'Smart home AI audit',
      'Device and routine setup',
      'Privacy and security walkthrough',
      'Written guide for your setup',
    ],
    cta: 'Book now',
  },
  {
    emoji: '🎸',
    title: 'AI for Musicians Session',
    price: '$99',
    duration: '60 min',
    description: 'Built specifically for musicians. We explore AI tools for composition, production, learning, and creativity — tailored to your instrument and workflow.',
    features: [
      'Music AI tool overview',
      'DAW and production AI setup',
      'AI learning tools for your instrument',
      'Curated tool list to take away',
    ],
    cta: 'Book now',
    highlight: true,
  },
]

const guides = [
  {
    emoji: '📖',
    title: 'AI Starter Guide',
    price: '$9',
    description: 'The fastest way to understand what AI can actually do for you. Covers the 5 tools that matter, how to use them, and what to ignore.',
    tag: 'Bestseller',
  },
  {
    emoji: '🎵',
    title: 'AI for Musicians',
    price: '$19',
    description: 'A complete guide to AI tools for guitarists, producers, and music lovers. Suno, Udio, AI mastering, stem separation, and more.',
    tag: 'New',
  },
  {
    emoji: '🏡',
    title: 'Smart Home AI Guide',
    price: '$19',
    description: 'How to build a genuinely useful AI-powered home. Covers the best devices, integrations, and routines that actually save you time.',
    tag: null,
  },
]

export default function Services() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-stone-900 mb-4">How I can help</h1>
        <p className="text-xl text-stone-500 max-w-xl mx-auto">Sessions are live, personal, and practical. Guides are yours to keep forever.</p>
      </div>

      {/* Sessions */}
      <h2 className="text-2xl font-bold text-stone-900 mb-8">1:1 Sessions</h2>
      <div className="grid sm:grid-cols-3 gap-6 mb-20">
        {services.map((s) => (
          <div key={s.title} className={`rounded-2xl p-8 border ${s.highlight ? 'border-brand-400 bg-brand-50' : 'border-stone-200 bg-white'}`}>
            <div className="text-3xl mb-4">{s.emoji}</div>
            <div className="flex items-start justify-between mb-1">
              <h3 className="font-semibold text-stone-900 text-lg">{s.title}</h3>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold text-brand-500">{s.price}</span>
              <span className="text-stone-400 text-sm">{s.duration}</span>
            </div>
            <p className="text-stone-500 text-sm leading-relaxed mb-6">{s.description}</p>
            <ul className="space-y-2 mb-8">
              {s.features.map(f => (
                <li key={f} className="text-sm text-stone-600 flex items-start gap-2">
                  <span className="text-brand-500 mt-0.5">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <a href="/contact" className={`block text-center py-3 px-6 rounded-full font-semibold text-sm transition-colors ${s.highlight ? 'bg-brand-500 text-white hover:bg-brand-600' : 'bg-stone-900 text-white hover:bg-stone-700'}`}>
              {s.cta}
            </a>
          </div>
        ))}
      </div>

      {/* Guides */}
      <h2 className="text-2xl font-bold text-stone-900 mb-8">Digital Guides</h2>
      <div className="grid sm:grid-cols-3 gap-6">
        {guides.map((g) => (
          <div key={g.title} className="rounded-2xl p-8 border border-stone-200 bg-white">
            <div className="flex items-center justify-between mb-4">
              <span className="text-3xl">{g.emoji}</span>
              {g.tag && <span className="text-xs font-medium bg-brand-100 text-brand-700 px-2 py-1 rounded-full">{g.tag}</span>}
            </div>
            <h3 className="font-semibold text-stone-900 text-lg mb-2">{g.title}</h3>
            <p className="text-stone-500 text-sm leading-relaxed mb-6">{g.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-brand-500">{g.price}</span>
              <a href="/contact" className="bg-stone-900 text-white py-2 px-5 rounded-full font-semibold text-sm hover:bg-stone-700 transition-colors">
                Buy now
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Note */}
      <p className="text-center text-stone-400 text-sm mt-12">
        Payments handled securely via Stripe. Sessions booked via email confirmation.
      </p>
    </div>
  )
}
