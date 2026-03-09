'use client'
import { useEffect } from 'react'

const DISQUS_SHORTNAME = process.env.NEXT_PUBLIC_DISQUS_SHORTNAME || ''

export default function Comments({ slug, title }) {
  useEffect(() => {
    if (!DISQUS_SHORTNAME || typeof window === 'undefined') return
    window.disqus_config = function () {
      this.page.url = `https://cleoops.com/blog/${slug}`
      this.page.identifier = slug
      this.page.title = title
    }
    if (window.DISQUS) {
      window.DISQUS.reset({ reload: true, config: window.disqus_config })
    } else {
      const script = document.createElement('script')
      script.src = `https://${DISQUS_SHORTNAME}.disqus.com/embed.js`
      script.setAttribute('data-timestamp', +new Date())
      script.async = true
      document.body.appendChild(script)
    }
  }, [slug, title])

  if (!DISQUS_SHORTNAME) return null

  return (
    <div className="mt-12 pt-8 border-t border-[#e2e8f0]">
      <h2 className="text-xl font-black text-[#0f172a] mb-6">Discussion</h2>
      <div id="disqus_thread" />
      <noscript>
        Please enable JavaScript to view comments.
      </noscript>
    </div>
  )
}
