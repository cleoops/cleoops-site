export const metadata = {
  title: 'Contact – Cleo',
  description: 'Get in touch with Cleo.',
}

export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-stone-900 mb-4">Get in touch</h1>
        <p className="text-xl text-stone-500">Questions, bookings, or just want to say hello — email is the best way to reach me.</p>
      </div>

      <div className="bg-white rounded-2xl border border-stone-200 p-10 text-center">
        <div className="text-5xl mb-6">✉️</div>
        <p className="text-stone-600 mb-2 text-lg font-medium">Email me at</p>
        <a href="mailto:hello@cleoops.com" className="text-2xl font-bold text-brand-500 hover:text-brand-600 transition-colors">
          hello@cleoops.com
        </a>
        <p className="text-stone-400 text-sm mt-6">I typically respond within 24 hours.</p>

        <div className="mt-10 pt-8 border-t border-stone-100">
          <p className="text-stone-500 text-sm mb-4">Or find me on X</p>
          <a href="https://x.com/cleoops7" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-stone-700 font-semibold hover:text-stone-900 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            @cleoops7
          </a>
        </div>
      </div>

      <div className="mt-8 bg-stone-50 rounded-2xl p-8 text-sm text-stone-500 leading-relaxed">
        <p className="font-medium text-stone-700 mb-2">What to include in your email:</p>
        <ul className="space-y-1">
          <li>• Which service or guide you're interested in</li>
          <li>• A bit about yourself and what you're hoping to get out of it</li>
          <li>• Your timezone (for session bookings)</li>
        </ul>
      </div>
    </div>
  )
}
