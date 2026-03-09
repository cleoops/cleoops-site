import './globals.css'
import Script from 'next/script'
import { SchemaOrganization, SchemaWebSite } from './components/SchemaMarkup'

// META PIXEL ID — replace 'PIXEL_ID_HERE' with your actual Pixel ID from business.facebook.com
// Steps: business.facebook.com → Events Manager → Connect Data Sources → Web → Get started
const META_PIXEL_ID = process.env.META_PIXEL_ID || null

// Google Analytics Measurement ID — set GA_MEASUREMENT_ID in Vercel env vars
// Steps: analytics.google.com → Create property → Data streams → Web → copy G-XXXXXXXXXX
const GA_ID = process.env.GA_MEASUREMENT_ID || null

// Google Ads tag — fires alongside GA4 for conversion tracking
// Set GOOGLE_ADS_TAG in Vercel env vars (format: GT-XXXXXXXX)
const GADS_TAG = process.env.GOOGLE_ADS_TAG || 'GT-MJBB3L93'

// Google AdSense publisher ID
const ADSENSE_PUB = 'ca-pub-9894255279769461'

export const metadata = {
  title: { default: 'Cleoops – The Independent AI Resource', template: '%s | Cleoops' },
  // Google AdSense site verification (server-rendered for crawler visibility)
  other: { 'google-adsense-account': 'ca-pub-9894255279769461' },
  description: 'Practical AI guides, tool reviews, and industry strategy for professionals. The independent resource for people who use AI to get real work done.',
  keywords: ['AI tools', 'artificial intelligence', 'ChatGPT guide', 'Claude AI', 'AI for business', 'AI productivity', 'AI reviews', 'how to use AI'],
  authors: [{ name: 'Cleoops Editorial', url: 'https://cleoops.com' }],
  creator: 'Cleoops',
  publisher: 'Cleoops',
  metadataBase: new URL('https://cleoops.com'),
  alternates: { canonical: 'https://cleoops.com' },
  icons: { icon: '/favicon.ico', apple: '/apple-touch-icon.png' },
  openGraph: {
    title: 'Cleoops – The Independent AI Resource',
    description: 'Practical AI guides, tool reviews, and strategy for professionals. No hype. No conflicts of interest. Just AI that works.',
    url: 'https://cleoops.com',
    siteName: 'Cleoops',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cleoops – The Independent AI Resource',
    description: 'Practical AI guides, reviews, and strategy for professionals.',
    creator: '@cleoops7',
    site: '@cleoops7',
  },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large', 'max-video-preview': -1 },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || '',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#f8f9fc] text-[#0f172a] font-sans antialiased">
        {/* Utility Bar */}
        <div className="bg-[#0d1117] border-b border-[#1a1f2e] px-6 py-2 text-xs text-gray-400 font-medium">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <span>The Independent AI Resource</span>
            <a href="https://x.com/cleoops7" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              @cleoops7
            </a>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="sticky top-0 z-50 bg-[#0d1117]/95 backdrop-blur-sm border-b border-[#1a1f2e]">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <a href="/" className="text-2xl font-black text-white tracking-tight">
              CLEOOPS
            </a>
            <div className="flex items-center gap-1 text-sm font-semibold text-gray-300">
              <a href="/blog" className="px-4 py-2 hover:text-white transition-colors">News</a>
              <a href="/services" className="px-4 py-2 hover:text-white transition-colors">Guides</a>
              <a href="/reviews" className="px-4 py-2 hover:text-white transition-colors">Reviews</a>
              <a href="/tools" className="px-4 py-2 hover:text-white transition-colors">Tools</a>
              <a href="/strategy" className="px-4 py-2 hover:text-white transition-colors">Strategy</a>
              <button className="ml-4 px-6 py-2 bg-[#2563eb] text-white rounded-lg hover:bg-[#1d4ed8] transition-colors font-semibold">
                Newsletter
              </button>
            </div>
          </div>
        </nav>
        {GA_ID && (
          <>
            {/* Load once for both GA4 + Google Ads */}
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="google-tag" strategy="afterInteractive">{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
              gtag('config', '${GADS_TAG}');
            `}</Script>
          </>
        )}
        {ADSENSE_PUB && (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_PUB}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
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
        <SchemaOrganization />
        <SchemaWebSite />
        <main>{children}</main>
        <footer className="border-t border-[#e2e8f0] mt-32 py-16 text-sm text-[#64748b] bg-white">
          <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between gap-8">
            <div>
              <p className="font-bold text-[#0f172a] mb-1">CLEOOPS</p>
              <p className="text-xs">The Independent AI Resource</p>
            </div>
            <div className="flex gap-12">
              <div>
                <p className="font-semibold text-[#0f172a] text-xs mb-3">Product</p>
                <div className="flex flex-col gap-2">
                  <a href="/services" className="hover:text-[#0f172a] transition-colors">Guides</a>
                  <a href="/blog" className="hover:text-[#0f172a] transition-colors">News</a>
                  <a href="/tools" className="hover:text-[#0f172a] transition-colors">Tools</a>
                </div>
              </div>
              <div>
                <p className="font-semibold text-[#0f172a] text-xs mb-3">Legal</p>
                <div className="flex flex-col gap-2">
                  <a href="/privacy" className="hover:text-[#0f172a] transition-colors">Privacy</a>
                  <a href="/terms" className="hover:text-[#0f172a] transition-colors">Terms</a>
                  <a href="/contact" className="hover:text-[#0f172a] transition-colors">Contact</a>
                </div>
              </div>
              <div>
                <p className="font-semibold text-[#0f172a] text-xs mb-3">Social</p>
                <div className="flex flex-col gap-2">
                  <a href="https://x.com/cleoops7" target="_blank" rel="noopener noreferrer" className="hover:text-[#0f172a] transition-colors">X / Twitter</a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#0f172a] transition-colors">LinkedIn</a>
                </div>
              </div>
            </div>
            <div className="text-right text-xs">
              <p>© 2026 Cleoops, Inc.</p>
              <p>All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
