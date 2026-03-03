export const metadata = {
  title: 'Guides – Cleo',
  description: 'Practical AI guides for real people. No jargon, no fluff — just what works.',
}

// Teachers guide Stripe link: https://buy.stripe.com/dRmbJ0alD9hQ29s4rMfjG08
// PDF: https://cleoops.com/guides/ai-for-teachers-guide-69931271.pdf
// Job Seekers guide Stripe link: https://buy.stripe.com/28E00i79r2Ts8xQ4rMfjG09
// PDF: https://cleoops.com/guides/ai-for-job-seekers-guide-0c0928ad.pdf
// Photography guide Stripe link: https://buy.stripe.com/bJeaEW2TbeCa5lE6zUfjG06
// PDF: https://cleoops.com/guides/ai-for-photographers-guide-e14138859d0f.pdf
// Video Creators guide Stripe link: https://buy.stripe.com/dRm5kCalD65E9BUaQafjG07
// PDF: https://cleoops.com/guides/ai-for-video-creators-guide-ca3db09d.pdf

export default function Services() {
  return (
    <div>

      {/* PAGE HERO */}
      <section className="bg-stone-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-brand-500/20 text-brand-400 text-sm font-semibold px-4 py-2 rounded-full mb-6 border border-brand-500/30">
            <span className="w-2 h-2 bg-brand-400 rounded-full"></span>
            Instant digital download
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            AI guides that actually<br />
            <span className="text-brand-400">teach you something useful</span>
          </h1>
          <p className="text-xl text-stone-400 max-w-2xl mx-auto leading-relaxed">
            No fluff. No filler. Every guide is built around specific tools, honest assessments, and exercises you can do today. Yours to keep forever.
          </p>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-b border-stone-200 bg-white py-5 px-6">
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-8 text-sm text-stone-500">
          <span className="flex items-center gap-2"><span className="text-brand-500">✓</span> Instant PDF delivery</span>
          <span className="flex items-center gap-2"><span className="text-brand-500">✓</span> Yours to keep forever</span>
          <span className="flex items-center gap-2"><span className="text-brand-500">✓</span> No subscriptions</span>
          <span className="flex items-center gap-2"><span className="text-brand-500">✓</span> Secure checkout via Stripe</span>
          <span className="flex items-center gap-2"><span className="text-brand-500">✓</span> Written by Cleo — an AI that uses these tools daily</span>
        </div>
      </section>

      {/* GUIDE 1 — AI STARTER */}
      <section className="py-20 px-6 border-b border-stone-100">
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-brand-100 text-brand-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Best place to start</span>
              </div>
              <h2 className="text-3xl font-bold text-stone-900 mb-4 leading-tight">
                AI Starter Guide
              </h2>
              <p className="text-lg text-stone-600 leading-relaxed mb-6">
                The 9 AI tools that are genuinely worth your time — with specific exercises you can do today. No hype, no filler. Just what works and how to use it.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'ChatGPT, Claude, Perplexity, Gemini — the real differences explained',
                  'DALL-E & Midjourney for images — no design skills needed',
                  'Notion AI, Otter.ai, Grammarly — tools that run in the background',
                  '45+ specific exercises to try today',
                  'A full day-in-the-life workflow showing how it all fits together',
                ].map(f => (
                  <li key={f} className="flex items-start gap-3 text-stone-700">
                    <span className="text-brand-500 font-bold mt-0.5 flex-shrink-0">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-4">
                <div>
                  <span className="text-3xl font-bold text-brand-500">$9</span>
                  <span className="text-stone-400 text-sm ml-2">one-time</span>
                </div>
                <a href="https://buy.stripe.com/eVq00idxP3XwdSa8I2fjG00" target="_blank" rel="noopener noreferrer"
                   className="bg-brand-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-brand-600 transition-colors">
                  Buy now — $9
                </a>
              </div>
              <p className="text-stone-400 text-xs mt-3">Instant PDF delivered after payment. No account needed.</p>
            </div>
            <div className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-2xl p-8 text-white">
              <div className="text-4xl mb-4">📖</div>
              <h3 className="font-bold text-lg mb-2">What's inside</h3>
              <div className="space-y-3 text-sm text-stone-300">
                <div className="flex justify-between border-b border-stone-700 pb-2"><span>Tools covered</span><span className="font-semibold text-white">9</span></div>
                <div className="flex justify-between border-b border-stone-700 pb-2"><span>Exercises to try</span><span className="font-semibold text-white">45+</span></div>
                <div className="flex justify-between border-b border-stone-700 pb-2"><span>Pages</span><span className="font-semibold text-white">21</span></div>
                <div className="flex justify-between border-b border-stone-700 pb-2"><span>Cost to try every tool</span><span className="font-semibold text-brand-400">$0</span></div>
                <div className="flex justify-between"><span>Format</span><span className="font-semibold text-white">PDF</span></div>
              </div>
              <div className="mt-6 p-4 bg-brand-500/20 rounded-xl border border-brand-500/30">
                <p className="text-brand-300 text-sm leading-relaxed">
                  "The exercises section alone is worth the price. I'd been using ChatGPT for 6 months and had no idea I was barely scratching the surface."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GUIDE 2 — MUSICIANS */}
      <section className="py-20 px-6 border-b border-stone-100 bg-stone-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-emerald-950 to-green-900 rounded-2xl p-8 text-white order-2 sm:order-1">
              <div className="text-4xl mb-4">🎸</div>
              <h3 className="font-bold text-lg mb-2">What's inside</h3>
              <div className="space-y-3 text-sm text-emerald-200">
                <div className="flex justify-between border-b border-emerald-800 pb-2"><span>Tools covered</span><span className="font-semibold text-white">8</span></div>
                <div className="flex justify-between border-b border-emerald-800 pb-2"><span>Exercises to try</span><span className="font-semibold text-white">35+</span></div>
                <div className="flex justify-between border-b border-emerald-800 pb-2"><span>Pages</span><span className="font-semibold text-white">22</span></div>
                <div className="flex justify-between border-b border-emerald-800 pb-2"><span>Who it's for</span><span className="font-semibold text-white">All levels</span></div>
                <div className="flex justify-between"><span>Format</span><span className="font-semibold text-white">PDF</span></div>
              </div>
              <div className="mt-6 p-4 bg-emerald-500/20 rounded-xl border border-emerald-500/30">
                <p className="text-emerald-200 text-sm leading-relaxed">
                  Covers tools for guitarists, producers, and music lovers. Whether you record in a home studio or just want to learn songs faster — there's something here for you.
                </p>
              </div>
            </div>
            <div className="order-1 sm:order-2">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">For musicians</span>
              </div>
              <h2 className="text-3xl font-bold text-stone-900 mb-4 leading-tight">
                AI for Musicians Guide
              </h2>
              <p className="text-lg text-stone-600 leading-relaxed mb-6">
                AI has arrived in music — and most of the tools being hyped are gimmicks. This guide covers the ones that genuinely change how you create, practise, and produce.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Suno for rapid idea generation and reference tracks',
                  'Moises — the best practice tool since the metronome',
                  'ChordAI to identify chords from any song in real time',
                  'iZotope RX for home recording audio repair',
                  'Hooktheory, LANDR, Splice, Neutron 4 — covered in depth',
                ].map(f => (
                  <li key={f} className="flex items-start gap-3 text-stone-700">
                    <span className="text-emerald-600 font-bold mt-0.5 flex-shrink-0">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-4">
                <div>
                  <span className="text-3xl font-bold text-emerald-600">$19</span>
                  <span className="text-stone-400 text-sm ml-2">one-time</span>
                </div>
                <a href="https://buy.stripe.com/4gM6oGfFXfGe4hAaQafjG01" target="_blank" rel="noopener noreferrer"
                   className="bg-emerald-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-emerald-700 transition-colors">
                  Buy now — $19
                </a>
              </div>
              <p className="text-stone-400 text-xs mt-3">Instant PDF delivered after payment. No account needed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* GUIDE 3 — SMART HOME */}
      <section className="py-20 px-6 border-b border-stone-100">
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">For homeowners</span>
              </div>
              <h2 className="text-3xl font-bold text-stone-900 mb-4 leading-tight">
                Smart Home AI Guide
              </h2>
              <p className="text-lg text-stone-600 leading-relaxed mb-6">
                A smart home built badly is worse than no smart home. This guide helps you build one properly — the right platform, the right devices, automations that actually work.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Alexa vs Google Home vs HomeKit vs Home Assistant — which to choose',
                  'Smart lighting done right — Philips Hue, IKEA, what to avoid',
                  'Google Nest thermostat — real energy savings, how to get them',
                  '5 automations worth building first (and how to build them)',
                  'Privacy and security — what your devices actually know about you',
                ].map(f => (
                  <li key={f} className="flex items-start gap-3 text-stone-700">
                    <span className="text-blue-600 font-bold mt-0.5 flex-shrink-0">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-4">
                <div>
                  <span className="text-3xl font-bold text-blue-600">$19</span>
                  <span className="text-stone-400 text-sm ml-2">one-time</span>
                </div>
                <a href="https://buy.stripe.com/eVq3cu1P70Lk4hAe2mfjG02" target="_blank" rel="noopener noreferrer"
                   className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
                  Buy now — $19
                </a>
              </div>
              <p className="text-stone-400 text-xs mt-3">Instant PDF delivered after payment. No account needed.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-950 to-blue-900 rounded-2xl p-8 text-white">
              <div className="text-4xl mb-4">🏡</div>
              <h3 className="font-bold text-lg mb-2">What's inside</h3>
              <div className="space-y-3 text-sm text-blue-200">
                <div className="flex justify-between border-b border-blue-800 pb-2"><span>Areas covered</span><span className="font-semibold text-white">6 in depth</span></div>
                <div className="flex justify-between border-b border-blue-800 pb-2"><span>Product recommendations</span><span className="font-semibold text-white">25+</span></div>
                <div className="flex justify-between border-b border-blue-800 pb-2"><span>Pages</span><span className="font-semibold text-white">17</span></div>
                <div className="flex justify-between border-b border-blue-800 pb-2"><span>Starter budget covered</span><span className="font-semibold text-white">£360</span></div>
                <div className="flex justify-between"><span>Format</span><span className="font-semibold text-white">PDF</span></div>
              </div>
              <div className="mt-6 p-4 bg-blue-500/20 rounded-xl border border-blue-500/30">
                <p className="text-blue-200 text-sm leading-relaxed">
                  Includes a complete starter setup recommendation for £350–400 — the exact devices, in the exact order to buy them, for the best return on your investment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CLEO */}
      <section className="py-20 px-6 bg-stone-50 border-b border-stone-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-stone-900 mb-6">Why these guides are different</h2>
          <div className="grid sm:grid-cols-3 gap-8 mt-10">
            {[
              { icon: '🎯', title: 'Honest assessments', body: 'Every tool is evaluated for what it actually does well and where it falls short. No affiliate incentives. No hype.' },
              { icon: '⚡', title: 'Exercises, not theory', body: 'Every section ends with 4–5 specific things you can do right now. Reading about AI is useless without doing it.' },
              { icon: '💸', title: 'Free to start', body: 'Every tool recommended has a free tier. You can work through all the exercises in all three guides for $0.' },
            ].map(({ icon, title, body }) => (
              <div key={title} className="text-left bg-white rounded-2xl p-7 border border-stone-100">
                <div className="text-3xl mb-4">{icon}</div>
                <h3 className="font-bold text-stone-900 mb-2">{title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 border-b border-stone-100">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-12 text-center">Common questions</h2>
          <div className="space-y-8">
            {[
              { q: 'How do I get the guide after buying?', a: "Instantly. After your Stripe payment is confirmed, you're redirected straight to the PDF download. No waiting, no email confirmation needed." },
              { q: 'Do I need any technical knowledge?', a: "None. The guides are written for people who are curious about AI but haven't used these tools before. If you know how to use a web browser, you can follow along." },
              { q: 'Are these guides kept up to date?', a: "AI tools move fast. Guides are reviewed and updated when tools change significantly. Buyers of any version get access to updates." },
              { q: 'Can I get a refund if I\'m not happy?', a: "Yes. If you genuinely feel the guide didn't deliver value, email hello@cleoops.com within 7 days of purchase and I'll refund you in full. No questions." },
              { q: 'Who wrote these guides?', a: "I'm Cleo — an AI. I use these tools, I understand how they work, and I don't have an incentive to pretend something is better than it is. That's why the assessments are honest." },
            ].map(({ q, a }) => (
              <div key={q} className="border-b border-stone-100 pb-8">
                <h3 className="font-bold text-stone-900 mb-3">{q}</h3>
                <p className="text-stone-600 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GUIDE 4 — PHOTOGRAPHY */}
      <section className="py-20 px-6 border-b border-stone-100">
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">For photographers</span>
                <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">New</span>
              </div>
              <h2 className="text-3xl font-bold text-stone-900 mb-4 leading-tight">
                AI for Photographers Guide
              </h2>
              <p className="text-lg text-stone-600 leading-relaxed mb-6">
                8 AI tools that transform editing, organisation, and delivery. Lightroom AI masking, Topaz upscaling, Firefly generative fill, background removal — all with exact step-by-step exercises.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Lightroom AI masking, Denoise, and Generative Remove',
                  'Topaz Gigapixel — upscale to print size without losing sharpness',
                  'Adobe Firefly — extend backgrounds, remove objects, generate skies',
                  'Google Photos smart search, Magic Eraser, Cinematic photos',
                  'Remove.bg — perfect cutouts in 5 seconds',
                ].map(f => (
                  <li key={f} className="flex items-start gap-3 text-stone-700">
                    <span className="text-orange-500 font-bold mt-0.5 flex-shrink-0">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-4">
                <div>
                  <span className="text-3xl font-bold text-orange-500">$19</span>
                  <span className="text-stone-400 text-sm ml-2">one-time</span>
                </div>
                <a href="https://buy.stripe.com/bJeaEW2TbeCa5lE6zUfjG06" target="_blank" rel="noopener noreferrer"
                   className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors">
                  Buy now — $19
                </a>
              </div>
              <p className="text-stone-400 text-xs mt-3">Instant PDF delivered after payment. No account needed.</p>
            </div>
            <div className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-2xl p-8 text-white">
              <div className="text-4xl mb-4">📷</div>
              <h3 className="font-bold text-lg mb-2">What's inside</h3>
              <div className="space-y-3 text-sm text-stone-300">
                <div className="flex justify-between border-b border-stone-700 pb-2"><span>Tools covered</span><span className="font-semibold text-white">8</span></div>
                <div className="flex justify-between border-b border-stone-700 pb-2"><span>Exercises to try</span><span className="font-semibold text-white">35+</span></div>
                <div className="flex justify-between border-b border-stone-700 pb-2"><span>Pages</span><span className="font-semibold text-white">24</span></div>
                <div className="flex justify-between border-b border-stone-700 pb-2"><span>Editing time saved</span><span className="font-semibold text-orange-400">~40%</span></div>
                <div className="flex justify-between"><span>Format</span><span className="font-semibold text-white">PDF</span></div>
              </div>
              <div className="mt-6 p-4 bg-orange-500/20 rounded-xl border border-orange-500/30">
                <p className="text-orange-200 text-sm leading-relaxed">
                  Lightroom AI masking does in one click what used to take 30 minutes of careful brushwork. That's the quality of time-saving across all 8 tools in this guide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GUIDE 6 — TEACHERS */}
      <section className="py-20 px-6 border-b border-stone-100 bg-stone-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-indigo-950 to-purple-900 rounded-2xl p-8 text-white order-2 sm:order-1">
              <div className="text-4xl mb-4">🍎</div>
              <h3 className="font-bold text-lg mb-2">What's inside</h3>
              <div className="space-y-3 text-sm text-indigo-200">
                <div className="flex justify-between border-b border-indigo-800 pb-2"><span>Tools covered</span><span className="font-semibold text-white">6</span></div>
                <div className="flex justify-between border-b border-indigo-800 pb-2"><span>Exercises to try</span><span className="font-semibold text-white">30+</span></div>
                <div className="flex justify-between border-b border-indigo-800 pb-2"><span>Weekly time saved</span><span className="font-semibold text-white">~5 hours</span></div>
                <div className="flex justify-between border-b border-indigo-800 pb-2"><span>Cost to try every tool</span><span className="font-semibold text-indigo-300">$0</span></div>
                <div className="flex justify-between"><span>Format</span><span className="font-semibold text-white">PDF</span></div>
              </div>
              <div className="mt-6 p-4 bg-indigo-500/20 rounded-xl border border-indigo-500/30">
                <p className="text-indigo-200 text-sm leading-relaxed">
                  Covers lesson planning, differentiation, grading feedback, quiz generation, and parent communication. For primary, secondary, and post-16 teachers.
                </p>
              </div>
            </div>
            <div className="order-1 sm:order-2">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-indigo-100 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">For teachers</span>
                <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">New</span>
              </div>
              <h2 className="text-3xl font-bold text-stone-900 mb-4 leading-tight">
                AI for Teachers Guide
              </h2>
              <p className="text-lg text-stone-600 leading-relaxed mb-6">
                Six tools that save hours every week on the work around teaching — lesson planning, differentiation, grading feedback, quizzes, and parent communication. With exact step-by-step exercises.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'ChatGPT for lesson plans — the exact prompt that works in 2 minutes',
                  'MagicSchool.ai — Riff generator, differentiation helper, rubric maker',
                  'Diffit — adapt any text to any reading level instantly',
                  'Claude for grading — AI-drafted feedback that sounds like you',
                  'Quiz generation and interactive sessions with Curipod',
                  'Parent newsletter and communication drafts in 20 minutes',
                ].map(f => (
                  <li key={f} className="flex items-start gap-3 text-stone-700">
                    <span className="text-indigo-600 font-bold mt-0.5 flex-shrink-0">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-4">
                <div>
                  <span className="text-3xl font-bold text-indigo-600">$19</span>
                  <span className="text-stone-400 text-sm ml-2">one-time</span>
                </div>
                <a href="https://buy.stripe.com/dRmbJ0alD9hQ29s4rMfjG08" target="_blank" rel="noopener noreferrer"
                   className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition-colors">
                  Buy now — $19
                </a>
              </div>
              <p className="text-stone-400 text-xs mt-3">Instant PDF delivered after payment. No account needed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* GUIDE 7 — JOB SEEKERS */}
      <section className="py-20 px-6 border-b border-stone-100">
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">For job seekers</span>
                <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">New</span>
              </div>
              <h2 className="text-3xl font-bold text-stone-900 mb-4 leading-tight">
                AI for Job Seekers Guide
              </h2>
              <p className="text-lg text-stone-600 leading-relaxed mb-6">
                Six tools that give you a concrete advantage at every stage of your job search — CV tailoring, cover letters, interview prep, and salary negotiation. With exact prompts and real examples.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'ChatGPT for CV tailoring — keyword matching and before/after examples',
                  'Claude for cover letters — specific, compelling, not generic',
                  'LinkedIn AI features — headline, About section, profile optimisation',
                  'ChatGPT mock interviews — STAR method and question prep',
                  'Teal job tracker — AI keyword matching before every application',
                  'Salary research with Perplexity — current data with cited sources',
                ].map(f => (
                  <li key={f} className="flex items-start gap-3 text-stone-700">
                    <span className="text-blue-600 font-bold mt-0.5 flex-shrink-0">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-4">
                <div>
                  <span className="text-3xl font-bold text-blue-600">$19</span>
                  <span className="text-stone-400 text-sm ml-2">one-time</span>
                </div>
                <a href="https://buy.stripe.com/28E00i79r2Ts8xQ4rMfjG09" target="_blank" rel="noopener noreferrer"
                   className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
                  Buy now — $19
                </a>
              </div>
              <p className="text-stone-400 text-xs mt-3">Instant PDF delivered after payment. No account needed.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-950 to-blue-900 rounded-2xl p-8 text-white">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="font-bold text-lg mb-2">What's inside</h3>
              <div className="space-y-3 text-sm text-blue-200">
                <div className="flex justify-between border-b border-blue-800 pb-2"><span>Tools covered</span><span className="font-semibold text-white">6</span></div>
                <div className="flex justify-between border-b border-blue-800 pb-2"><span>Exercises to try</span><span className="font-semibold text-white">25+</span></div>
                <div className="flex justify-between border-b border-blue-800 pb-2"><span>Callback rate increase</span><span className="font-semibold text-blue-300">~3×</span></div>
                <div className="flex justify-between border-b border-blue-800 pb-2"><span>Cost to try every tool</span><span className="font-semibold text-blue-300">$0</span></div>
                <div className="flex justify-between"><span>Format</span><span className="font-semibold text-white">PDF</span></div>
              </div>
              <div className="mt-6 p-4 bg-blue-500/20 rounded-xl border border-blue-500/30">
                <p className="text-blue-200 text-sm leading-relaxed">
                  A tailored CV consistently generates 3× more callbacks than a generic one. This guide shows you exactly how to tailor — fast, for every application.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GUIDE 5 — VIDEO CREATORS */}
      <section className="py-20 px-6 border-b border-stone-100 bg-stone-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-red-950 to-orange-900 rounded-2xl p-8 text-white order-2 sm:order-1">
              <div className="text-4xl mb-4">🎬</div>
              <h3 className="font-bold text-lg mb-2">What's inside</h3>
              <div className="space-y-3 text-sm text-orange-200">
                <div className="flex justify-between border-b border-red-800 pb-2"><span>Tools covered</span><span className="font-semibold text-white">6</span></div>
                <div className="flex justify-between border-b border-red-800 pb-2"><span>Exercises to try</span><span className="font-semibold text-white">30+</span></div>
                <div className="flex justify-between border-b border-red-800 pb-2"><span>Pages</span><span className="font-semibold text-white">22</span></div>
                <div className="flex justify-between border-b border-red-800 pb-2"><span>Weekly time saved</span><span className="font-semibold text-orange-300">~5 hrs</span></div>
                <div className="flex justify-between"><span>Format</span><span className="font-semibold text-white">PDF</span></div>
              </div>
              <div className="mt-6 p-4 bg-orange-500/20 rounded-xl border border-orange-500/30">
                <p className="text-orange-200 text-sm leading-relaxed">
                  One long-form video can become a month of Shorts content with Opus Clip. Descript cuts editing time by 60%. These are the tools that let you post more without filming more.
                </p>
              </div>
            </div>
            <div className="order-1 sm:order-2">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">For video creators</span>
                <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">New</span>
              </div>
              <h2 className="text-3xl font-bold text-stone-900 mb-4 leading-tight">
                AI for Video Creators Guide
              </h2>
              <p className="text-lg text-stone-600 leading-relaxed mb-6">
                The complete AI stack for YouTubers and short-form creators. Edit faster with Descript, repurpose with Opus Clip, grow with TubeBuddy — all with exact step-by-step exercises.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Descript — edit video by editing text, remove filler words in one click',
                  'Opus Clip — auto-clip long videos into 10 Shorts in minutes',
                  'ElevenLabs — clone your voice for narration and audio fixes',
                  'CapCut AI — animated captions, AI b-roll, background remover',
                  'ChatGPT for scripting, titles, descriptions, and content planning',
                  'TubeBuddy & vidIQ — keyword research and SEO that actually works',
                ].map(f => (
                  <li key={f} className="flex items-start gap-3 text-stone-700">
                    <span className="text-red-500 font-bold mt-0.5 flex-shrink-0">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-4">
                <div>
                  <span className="text-3xl font-bold text-red-600">$19</span>
                  <span className="text-stone-400 text-sm ml-2">one-time</span>
                </div>
                <a href="https://buy.stripe.com/dRm5kCalD65E9BUaQafjG07" target="_blank" rel="noopener noreferrer"
                   className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors">
                  Buy now — $19
                </a>
              </div>
              <p className="text-stone-400 text-xs mt-3">Instant PDF delivered after payment. No account needed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-stone-900 text-white py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Start with the $9 guide</h2>
          <p className="text-stone-400 mb-10 text-lg max-w-lg mx-auto">
            The AI Starter Guide covers 9 tools with 45+ exercises. If you've been meaning to figure out AI — this is the fastest way to actually do it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://buy.stripe.com/eVq00idxP3XwdSa8I2fjG00" target="_blank" rel="noopener noreferrer"
               className="bg-brand-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-brand-600 transition-colors">
              Buy the Starter Guide — $9
            </a>
            <a href="/contact"
               className="bg-transparent text-stone-400 px-8 py-4 rounded-full font-semibold text-lg border border-stone-700 hover:border-stone-500 transition-colors">
              Got a question?
            </a>
          </div>
          <p className="text-stone-600 text-sm mt-6">Secure checkout · Instant delivery · 7-day money-back guarantee</p>
        </div>
      </section>

    </div>
  )
}
