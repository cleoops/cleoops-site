'use client'

import { useState } from 'react'
import Link from 'next/link'

const questions = [
  {
    id: 1,
    text: 'What best describes you?',
    options: [
      { label: '🎵 Musician / Producer', value: 'musician' },
      { label: '📷 Photographer', value: 'photographer' },
      { label: '🎬 Video Creator', value: 'video' },
      { label: '👩‍🏫 Teacher', value: 'teacher' },
      { label: '💼 Job Seeker', value: 'jobseeker' },
      { label: '🚀 Just getting started with AI', value: 'beginner' },
    ],
  },
  {
    id: 2,
    text: "What's your biggest goal with AI?",
    options: [
      { label: 'Save time', value: 'save-time' },
      { label: 'Create better content', value: 'content' },
      { label: 'Learn something new', value: 'learn' },
      { label: 'Get a better job', value: 'job' },
      { label: 'Automate boring tasks', value: 'automate' },
    ],
  },
  {
    id: 3,
    text: 'How would you describe your AI experience?',
    options: [
      { label: 'Total beginner', value: 'none' },
      { label: 'Tried it a few times', value: 'few' },
      { label: 'Use it occasionally', value: 'occasional' },
      { label: 'Use it regularly', value: 'regular' },
    ],
  },
]

const guides = {
  musician: {
    name: 'AI for Musicians',
    price: '$19',
    url: 'https://buy.stripe.com/4gM6oGfFXfGe4hAaQafjG01',
    emoji: '🎵',
  },
  photographer: {
    name: 'AI for Photographers',
    price: '$19',
    url: 'https://buy.stripe.com/bJeaEW2TbeCa5lE6zUfjG06',
    emoji: '📷',
  },
  video: {
    name: 'AI for Video Creators',
    price: '$19',
    url: 'https://buy.stripe.com/dRm5kCalD65E9BUaQafjG07',
    emoji: '🎬',
  },
  teacher: {
    name: 'AI for Teachers',
    price: '$19',
    url: 'https://buy.stripe.com/dRmbJ0alD9hQ29s4rMfjG08',
    emoji: '👩‍🏫',
  },
  jobseeker: {
    name: 'AI for Job Seekers',
    price: '$19',
    url: 'https://buy.stripe.com/28E00i79r2Ts8xQ4rMfjG09',
    emoji: '💼',
  },
  beginner: {
    name: 'AI Starter Guide',
    price: '$9',
    url: 'https://buy.stripe.com/eVq00idxP3XwdSa8I2fjG00',
    emoji: '🚀',
  },
}

function getBulletPoints(role, goal, experience) {
  const bullets = {
    musician: [
      'Use Suno and Moises to generate ideas and practise 10× faster',
      'Identify any chord in seconds and fix home recordings with AI audio repair',
      'Build a full AI-assisted production workflow from scratch',
    ],
    photographer: [
      'Slash editing time by 40% with Lightroom AI masking and Denoise',
      'Upscale and restore photos to print quality using Topaz Gigapixel',
      'Remove objects, extend backgrounds, and generate skies with Adobe Firefly',
    ],
    video: [
      'Edit a 20-minute video in under an hour using Descript text-based editing',
      'Repurpose one long video into 10 Shorts automatically with Opus Clip',
      'Clone your voice with ElevenLabs and grow with AI-driven SEO via TubeBuddy',
    ],
    teacher: [
      'Write a full lesson plan in 2 minutes with a single ChatGPT prompt',
      'Adapt any reading material to any level instantly using Diffit',
      'Generate quizzes, grading feedback, and parent newsletters in minutes',
    ],
    jobseeker: [
      'Tailor your CV to every job description with ChatGPT keyword matching',
      'Write specific, compelling cover letters with Claude in under 5 minutes',
      'Prep for interviews with AI mock sessions and research salaries with Perplexity',
    ],
    beginner: [
      'Try 9 AI tools with 45+ step-by-step exercises — no tech skills needed',
      'Understand exactly what ChatGPT, Claude, Gemini, and Perplexity are each good for',
      'Build an AI workflow you can actually use every day, starting today',
    ],
  }

  const result = [...(bullets[role] || bullets.beginner)]

  // Personalise one bullet based on goal
  if (goal === 'save-time' && role === 'beginner') {
    result[2] = 'Identify which 2–3 AI tools will save you the most time in your daily routine'
  } else if (goal === 'job' && role !== 'jobseeker') {
    result[2] = 'Apply AI tools to write stronger job applications and prep for interviews'
  } else if (goal === 'automate' && role === 'beginner') {
    result[2] = 'Set up automations with Notion AI and Otter.ai to run in the background'
  }

  // Add experience-based note
  if (experience === 'none' || experience === 'few') {
    result[0] = '✦ ' + result[0] + ' — no prior experience needed'
  }

  return result
}

function getRecommendedGuide(answers) {
  const role = answers[0]
  if (['musician', 'photographer', 'video', 'teacher', 'jobseeker'].includes(role)) {
    return role
  }
  // Map goal-based fallback for "beginner"
  const goal = answers[1]
  if (goal === 'job') return 'jobseeker'
  if (goal === 'content') return 'video'
  return 'beginner'
}

export default function AIQuiz() {
  const [step, setStep] = useState(0) // 0 = intro, 1-3 = questions, 4 = result
  const [answers, setAnswers] = useState([])
  const [visible, setVisible] = useState(true)
  const [email, setEmail] = useState('')
  const [emailSubmitted, setEmailSubmitted] = useState(false)
  const [emailLoading, setEmailLoading] = useState(false)
  const [emailError, setEmailError] = useState('')

  const currentQuestion = step >= 1 && step <= 3 ? questions[step - 1] : null

  function transition(fn) {
    setVisible(false)
    setTimeout(() => {
      fn()
      setVisible(true)
    }, 280)
  }

  function handleAnswer(value) {
    const newAnswers = [...answers, value]
    setAnswers(newAnswers)
    transition(() => {
      if (step === 3) {
        setStep(4)
      } else {
        setStep(step + 1)
      }
    })
  }

  function restart() {
    transition(() => {
      setAnswers([])
      setStep(0)
      setEmail('')
      setEmailSubmitted(false)
      setEmailError('')
    })
  }

  async function handleEmailSubmit(e) {
    e.preventDefault()
    if (!email || !email.includes('@')) {
      setEmailError('Please enter a valid email')
      return
    }

    setEmailLoading(true)
    setEmailError('')

    try {
      const guideName = getRecommendedGuide(answers)
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          guide: guideName,
          source: 'quiz',
        }),
      })

      if (res.ok) {
        setEmailSubmitted(true)
        setEmail('')
      } else {
        setEmailError('Something went wrong. Please try again.')
      }
    } catch (err) {
      setEmailError('Connection error. Please try again.')
    } finally {
      setEmailLoading(false)
    }
  }

  const guide =
    step === 4 ? guides[getRecommendedGuide(answers)] : null
  const bullets =
    step === 4
      ? getBulletPoints(answers[0], answers[1], answers[2])
      : null

  return (
    <div
      style={{ background: '#1c1917', minHeight: '100vh' }}
      className="text-white flex flex-col items-center justify-start px-4 py-12"
    >
      {/* Progress bar */}
      {step >= 1 && step <= 3 && (
        <div className="w-full max-w-xl mb-8">
          <div className="flex justify-between text-xs text-stone-500 mb-2">
            <span>Question {step} of 3</span>
            <span>{Math.round((step / 3) * 100)}%</span>
          </div>
          <div className="w-full h-1.5 bg-stone-800 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${(step / 3) * 100}%`,
                background: '#f97316',
              }}
            />
          </div>
        </div>
      )}

      {/* Content wrapper with fade transition */}
      <div
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(8px)',
          transition: 'opacity 0.28s ease, transform 0.28s ease',
          width: '100%',
          maxWidth: '640px',
        }}
      >
        {/* INTRO */}
        {step === 0 && (
          <div className="text-center">
            <div
              className="inline-flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-full mb-8 border uppercase tracking-widest"
              style={{
                background: 'rgba(249,115,22,0.15)',
                borderColor: 'rgba(249,115,22,0.3)',
                color: '#fb923c',
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: '#f97316', animation: 'pulse 2s infinite' }}
              />
              Free · 3 questions · 60 seconds
            </div>
            <h1 className="text-4xl sm:text-5xl font-black mb-5 leading-tight">
              Find your perfect<br />
              <span style={{ color: '#f97316' }}>AI guide</span>
            </h1>
            <p className="text-stone-400 text-lg mb-10 max-w-md mx-auto leading-relaxed">
              Answer 3 quick questions and we'll match you with the guide that fits your life, goals, and experience level.
            </p>
            <button
              onClick={() => transition(() => setStep(1))}
              className="font-bold text-lg px-10 py-4 rounded-full transition-all hover:scale-105 active:scale-95"
              style={{ background: '#f97316', color: '#fff' }}
            >
              Start the quiz →
            </button>
            <p className="text-stone-600 text-sm mt-6">No email required. Instant recommendation.</p>
          </div>
        )}

        {/* QUESTIONS */}
        {step >= 1 && step <= 3 && currentQuestion && (
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-center mb-8 leading-snug">
              {currentQuestion.text}
            </h2>
            <div className="grid gap-3">
              {currentQuestion.options.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => handleAnswer(opt.value)}
                  className="w-full text-left px-6 py-4 rounded-2xl font-semibold text-base transition-all hover:scale-[1.02] active:scale-[0.98] border"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    borderColor: 'rgba(255,255,255,0.1)',
                    color: '#e7e5e4',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(249,115,22,0.15)'
                    e.currentTarget.style.borderColor = 'rgba(249,115,22,0.5)'
                    e.currentTarget.style.color = '#fff'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                    e.currentTarget.style.color = '#e7e5e4'
                  }}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* RESULT */}
        {step === 4 && guide && bullets && (
          <div className="text-center">
            <div className="text-5xl mb-4">{guide.emoji}</div>
            <p className="text-stone-400 uppercase tracking-widest text-xs font-bold mb-2">Your recommended guide</p>
            <h2 className="text-3xl sm:text-4xl font-black mb-2" style={{ color: '#f97316' }}>
              {guide.name}
            </h2>
            <p className="text-stone-400 mb-8 text-sm">Based on your answers — here's what you'll learn:</p>

            {/* Bullet points */}
            <div
              className="rounded-2xl p-6 mb-8 text-left space-y-4"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              {bullets.map((b, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-black flex-shrink-0 mt-0.5"
                    style={{ background: '#f97316', color: '#fff' }}
                  >
                    {i + 1}
                  </span>
                  <p className="text-stone-300 text-sm leading-relaxed">{b.replace('✦ ', '')}</p>
                </div>
              ))}
            </div>

            {/* Email capture form */}
            {!emailSubmitted && (
              <form onSubmit={handleEmailSubmit} className="mb-8">
                <div
                  className="rounded-2xl p-6 mb-6 text-center"
                  style={{ background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.3)' }}
                >
                  <p className="font-semibold text-stone-200 mb-4">
                    Get a free AI Starter Checklist delivered to your inbox
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      placeholder="Your email address"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value)
                        setEmailError('')
                      }}
                      className="flex-1 px-4 py-3 rounded-lg bg-stone-800 text-white placeholder-stone-500 border border-stone-700 focus:outline-none focus:border-orange-500 transition-colors"
                      disabled={emailLoading}
                    />
                    <button
                      type="submit"
                      className="px-6 py-3 rounded-lg font-semibold transition-all whitespace-nowrap"
                      style={{
                        background: '#f97316',
                        color: '#fff',
                        opacity: emailLoading ? 0.7 : 1,
                      }}
                      disabled={emailLoading}
                    >
                      {emailLoading ? 'Sending...' : 'Send me the checklist'}
                    </button>
                  </div>
                  {emailError && (
                    <p className="text-orange-300 text-sm mt-3">{emailError}</p>
                  )}
                  <p className="text-stone-500 text-xs mt-3">No spam. Unsubscribe anytime.</p>
                </div>
              </form>
            )}

            {/* Success message */}
            {emailSubmitted && (
              <div
                className="rounded-2xl p-6 mb-8 text-center"
                style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)' }}
              >
                <p className="text-green-300 font-semibold">✓ Check your inbox!</p>
                <p className="text-stone-400 text-sm mt-2">Your free checklist is on the way.</p>
              </div>
            )}

            {/* CTA */}
            <a
              href={guide.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full font-bold text-lg py-4 px-8 rounded-full transition-all hover:scale-[1.02] active:scale-[0.98] mb-4"
              style={{ background: '#f97316', color: '#fff' }}
            >
              Get your guide — {guide.price}
            </a>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/services"
                className="text-stone-400 text-sm py-3 px-6 rounded-full border border-stone-700 hover:border-stone-500 transition-colors"
              >
                See all guides
              </Link>
              <button
                onClick={restart}
                className="text-stone-500 text-sm py-3 px-6 rounded-full hover:text-stone-300 transition-colors"
              >
                Retake quiz
              </button>
            </div>
            <div className="flex justify-center gap-6 text-stone-600 text-xs mt-8">
              <span>🔒 Stripe secure checkout</span>
              <span>⚡ Instant PDF</span>
              <span>✓ Instant access</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
