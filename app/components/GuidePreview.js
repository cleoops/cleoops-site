'use client'

import { useState } from 'react'

export default function GuidePreview({ emoji, title, description, price, sampleTitle, sampleContent, guideLink }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-all">
      {/* Card Header */}
      <div className="p-6 border-b border-stone-100">
        <div className="flex items-start justify-between mb-4">
          <div className="text-4xl">{emoji}</div>
          <div className="text-right">
            <div className="text-3xl font-black text-brand-500">${price}</div>
            <div className="text-xs text-stone-500">one-time</div>
          </div>
        </div>
        <h3 className="text-xl font-black text-stone-900 mb-2">{title}</h3>
        <p className="text-stone-600 text-sm mb-6">{description}</p>

        {/* Toggle Button */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="inline-flex items-center gap-2 text-brand-500 font-semibold text-sm hover:text-brand-600 transition-colors"
        >
          <span>{expanded ? '▼' : '▶'}</span>
          {expanded ? 'Hide sample' : 'See sample'}
        </button>
      </div>

      {/* Expandable Preview Section */}
      {expanded && (
        <div className="border-t border-stone-100 p-6 bg-stone-50">
          {/* Sample Title */}
          <h4 className="text-lg font-bold text-stone-900 mb-4">{sampleTitle}</h4>

          {/* Sample Content */}
          <div className="prose prose-sm max-w-none text-stone-700 mb-6">
            <p className="text-sm leading-relaxed whitespace-pre-wrap">{sampleContent}</p>
          </div>

          {/* CTA Button */}
          <a
            href={guideLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-500 text-white px-6 py-3 rounded-full font-bold text-base hover:bg-brand-600 transition-colors"
          >
            Get this guide ${price}
          </a>
        </div>
      )}
    </div>
  )
}
