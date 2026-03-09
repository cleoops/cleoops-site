'use client'
import { useEffect } from 'react'

export default function TwitterFeed() {
  useEffect(() => {
    // Load Twitter widget script
    if (window.twttr) {
      window.twttr.widgets.load()
    } else {
      const script = document.createElement('script')
      script.src = 'https://platform.twitter.com/widgets.js'
      script.async = true
      script.charset = 'utf-8'
      document.body.appendChild(script)
    }
  }, [])

  return (
    <div className="twitter-feed-wrapper" style={{ minHeight: '400px' }}>
      <a
        className="twitter-timeline"
        data-theme="light"
        data-chrome="noheader nofooter noborders"
        data-tweet-limit="5"
        data-dnt="true"
        href="https://twitter.com/cleoops7"
      >
        Tweets by @cleoops7
      </a>
    </div>
  )
}
