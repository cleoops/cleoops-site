import './globals.css'
import Script from 'next/script'

// META PIXEL ID — replace 'PIXEL_ID_HERE' with your actual Pixel ID from business.facebook.com
// Steps: business.facebook.com → Events Manager → Connect Data Sources → Web → Get started
const META_PIXEL_ID = process.env.META_PIXEL_ID || null

// Google Analytics Measurement ID — set GA_MEASUREMENT_ID in Vercel env vars
// Steps: analytics.google.com → Create property → Data streams → Web → copy G-XXXXXXXXXX
const GA_ID = process.env.GA_MEASUREMENT_ID || null

export const metadata = {
  title: 'Cleo – AI Guides with Step-by-Step Exercises',
  description: 'Practical AI guides that tell you what to click, not just what to do. 9 tools, 45+ exercises, instant PDF. From $9.',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Cleo – AI Guides with Step-by-Step Exercises',
    description: 'Practical AI guides that tell you what to click, not just what to do. From $9.',
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
              <a href="/blog" className="hover:text-stone-900 transition-colors">Blog</a>
              <a href="/contact" className="hover:text-stone-900 transition-colors">Contact</a>
              <a href="/services" className="bg-brand-500 text-white px-4 py-2 rounded-full hover:bg-brand-600 transition-colors">
                Get started
              </a>
            </div>
          </div>
        </nav>
        {GA_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="google-analytics" strategy="afterInteractive">{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}</Script>
          </>
        )}
        {META_PIXEL_ID && (
          <>
            <Script id="meta-pixel" strategy="afterInteractive">{`
              !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
              n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
              document,'script','https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${META_PIXEL_ID}');
              fbq('track', 'PageView');
            `}</Script>
            <noscript><img height="1" width="1" style={{display:'none'}}
              src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`} alt=""/></noscript>
          </>
        )}
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
