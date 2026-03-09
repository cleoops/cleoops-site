'use client'
import { useEffect } from 'react'

// Google AdSense leaderboard slot
// Props: slotId (string) — the ad unit slot ID from AdSense
export default function AdSlot({ slotId }) {
  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && window.adsbygoogle) {
        (window.adsbygoogle = window.adsbygoogle || []).push({})
      }
    } catch {}
  }, [])

  if (!slotId || slotId === 'PENDING') return null

  const publisherId = process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID
  if (!publisherId) return null

  return (
    <div className="flex justify-center my-6 overflow-hidden">
      <ins
        className="adsbygoogle"
        style={{ display: 'block', width: '728px', height: '90px' }}
        data-ad-client={publisherId}
        data-ad-slot={slotId}
        data-ad-format="horizontal"
        data-full-width-responsive="false"
      />
    </div>
  )
}
