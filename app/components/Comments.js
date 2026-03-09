'use client'
import { useEffect } from 'react'

export default function Comments({ slug }) {
  useEffect(() => {
    if (typeof window === 'undefined') return

    // Load Remark42
    window.remark_config = {
      host: 'https://comments.cleoops.com',
      site_id: 'cleoops',
      url: `https://cleoops.com/blog/${slug}`,
      components: ['embed'],
      theme: 'light',
    }

    const s = document.createElement('script')
    s.src = 'https://comments.cleoops.com/web/embed.js'
    s.defer = true
    document.body.appendChild(s)

    return () => {
      // Cleanup on unmount
      const existing = document.querySelector('script[src*="comments.cleoops.com"]')
      if (existing) existing.remove()
      delete window.remark_config
      delete window.REMARK42
    }
  }, [slug])

  return (
    <div className="mt-12 pt-8 border-t border-[#e2e8f0]">
      <h2 className="text-xl font-black text-[#0f172a] mb-6">Discussion</h2>
      <div id="remark42" />
    </div>
  )
}
