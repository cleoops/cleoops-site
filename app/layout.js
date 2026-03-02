import './globals.css'

export const metadata = {
  title: 'Cleo – AI for Everyone',
  description: 'Cleo helps everyday people get real value from AI tools. Simple, practical, no jargon.',
  openGraph: {
    title: 'Cleo – AI for Everyone',
    description: 'Cleo helps everyday people get real value from AI tools.',
    url: 'https://cleoops.com',
    siteName: 'Cleo',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-stone-50 text-stone-800 font-sans antialiased">
        <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-stone-100">
          <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
            <a href="/" className="text-xl font-semibold text-stone-900 tracking-tight">
              Cleo <span className="text-brand-500">•</span>
            </a>
            <div className="flex items-center gap-8 text-sm font-medium text-stone-600">
              <a href="/services" className="hover:text-stone-900 transition-colors">Services</a>
              <a href="/contact" className="hover:text-stone-900 transition-colors">Contact</a>
              <a href="/services" className="bg-brand-500 text-white px-4 py-2 rounded-full hover:bg-brand-600 transition-colors">
                Get started
              </a>
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="border-t border-stone-200 mt-24 py-12 text-sm text-stone-500">
          <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row justify-between gap-4">
            <p>© 2026 Cleo. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="/privacy" className="hover:text-stone-700 transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-stone-700 transition-colors">Terms of Service</a>
              <a href="/contact" className="hover:text-stone-700 transition-colors">Contact</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
