'use client'

import { useState } from 'react'

export default function EmailCapture({ source = 'website', source_label = 'homepage' }) {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email')
      return
    }

    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          source,
        }),
      })

      if (res.ok) {
        setSubmitted(true)
        setEmail('')
      } else {
        setError('Something went wrong. Please try again.')
      }
    } catch (err) {
      setError('Connection error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div
        className="rounded-2xl p-8 text-center"
        style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)' }}
      >
        <p className="text-green-400 font-bold text-lg mb-2">✓ Check your inbox!</p>
        <p className="text-stone-600">Your free AI Starter Checklist is on the way.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            setError('')
          }}
          className="flex-1 px-6 py-4 rounded-lg bg-stone-100 text-stone-900 placeholder-stone-500 border border-stone-300 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all font-medium"
          disabled={loading}
        />
        <button
          type="submit"
          className="px-8 py-4 rounded-lg font-bold transition-all whitespace-nowrap"
          style={{
            background: '#f97316',
            color: '#fff',
            opacity: loading ? 0.7 : 1,
          }}
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Get the free checklist'}
        </button>
      </div>
      {error && (
        <p className="text-orange-600 text-sm mt-3 font-medium">{error}</p>
      )}
      <p className="text-stone-600 text-sm mt-3">No spam. Unsubscribe anytime.</p>
    </form>
  )
}
