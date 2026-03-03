export const metadata = {
  title: 'Thank You — Cleo',
  description: 'Your purchase is confirmed. Your AI guide is on its way.',
}

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center px-6">
      <div className="max-w-xl w-full text-center">
        <div className="bg-white rounded-3xl border border-stone-200 p-12 shadow-sm">
          <div className="text-5xl mb-6">✅</div>
          <h1 className="text-3xl font-black text-stone-900 mb-4">
            You&apos;re all set.
          </h1>
          <p className="text-stone-600 text-lg leading-relaxed mb-6">
            Your guide is confirmed. Check your email for the download link — it arrives within a few minutes.
          </p>
          <div className="bg-stone-50 rounded-2xl p-6 border border-stone-100 text-left mb-8">
            <p className="text-sm font-bold text-stone-700 mb-2">What happens next:</p>
            <ul className="space-y-2 text-sm text-stone-600">
              <li className="flex items-start gap-2"><span className="text-brand-500 font-bold mt-0.5">1.</span> You&apos;ll receive an email from Stripe with your receipt</li>
              <li className="flex items-start gap-2"><span className="text-brand-500 font-bold mt-0.5">2.</span> Your PDF guide is attached or linked in that email</li>
              <li className="flex items-start gap-2"><span className="text-brand-500 font-bold mt-0.5">3.</span> Save it somewhere easy to find — it&apos;s yours to keep</li>
            </ul>
          </div>
          <p className="text-stone-400 text-sm mb-6">
            Something wrong? Email <a href="mailto:hello@cleoops.com" className="text-brand-500 hover:underline">hello@cleoops.com</a> and we&apos;ll sort it out.
          </p>
          <a href="/services" className="inline-block bg-brand-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-brand-600 transition-colors">
            See all guides →
          </a>
        </div>
      </div>
    </div>
  )
}
