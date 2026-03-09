'use client'
import { useState, useEffect, useRef, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Fuse from 'fuse.js'

function SearchContent() {
  const searchParams = useSearchParams()
  const initialQuery = searchParams.get('q') || ''
  const [query, setQuery] = useState(initialQuery)
  const [results, setResults] = useState([])
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const fuseRef = useRef(null)

  useEffect(() => {
    fetch('/api/posts')
      .then(r => r.json())
      .then(data => {
        setPosts(data)
        fuseRef.current = new Fuse(data, {
          keys: [
            { name: 'title', weight: 0.5 },
            { name: 'description', weight: 0.3 },
            { name: 'category', weight: 0.1 },
            { name: 'tags', weight: 0.1 },
          ],
          threshold: 0.4,
          includeScore: true,
        })
        setLoading(false)
        if (initialQuery) {
          const r = fuseRef.current.search(initialQuery)
          setResults(r.map(x => x.item))
        } else {
          setResults(data.slice(0, 12))
        }
      })
  }, [])

  function handleSearch(val) {
    setQuery(val)
    if (!fuseRef.current) return
    if (!val.trim()) {
      setResults(posts.slice(0, 12))
      return
    }
    const r = fuseRef.current.search(val)
    setResults(r.map(x => x.item))
  }

  return (
    <div className="min-h-screen bg-[#f8f9fc]">
      {/* SEARCH HEADER */}
      <div className="bg-[#0d1117] py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-white text-3xl font-black mb-6">Search</h1>
          <div className="relative">
            <input
              type="text"
              value={query}
              onChange={e => handleSearch(e.target.value)}
              placeholder="Search articles, topics, tools..."
              autoFocus
              className="w-full px-6 py-4 pr-14 rounded-xl text-[#0f172a] text-lg font-medium placeholder-[#94a3b8] bg-white border-2 border-transparent focus:border-[#2563eb] focus:outline-none transition-colors"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[#94a3b8]">
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
            </div>
          </div>
          {!loading && (
            <p className="text-white/40 text-sm mt-3">
              {query ? `${results.length} result${results.length !== 1 ? 's' : ''} for "${query}"` : `${posts.length} articles`}
            </p>
          )}
        </div>
      </div>

      {/* RESULTS */}
      <div className="max-w-3xl mx-auto px-6 py-8">
        {loading ? (
          <div className="text-center py-16 text-[#64748b]">Loading...</div>
        ) : results.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-[#0f172a] font-black text-xl mb-2">No results found</p>
            <p className="text-[#64748b]">Try a different search term</p>
          </div>
        ) : (
          <div className="space-y-4">
            {results.map(post => (
              <a key={post.slug} href={`/blog/${post.slug}`}
                className="group flex flex-col sm:flex-row gap-4 bg-white border border-[#e2e8f0] rounded-xl p-5 hover:border-[#2563eb] hover:shadow-md transition-all">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-black uppercase tracking-widest text-[#2563eb]">
                      {post.category || 'Analysis'}
                    </span>
                    <span className="text-[#e2e8f0]">&bull;</span>
                    <span className="text-xs text-[#94a3b8]">{post.date}</span>
                    <span className="text-[#e2e8f0]">&bull;</span>
                    <span className="text-xs text-[#94a3b8]">{post.readTime || '4 min read'}</span>
                  </div>
                  <h2 className="text-[#0f172a] font-black text-lg leading-tight mb-2 group-hover:text-[#2563eb] transition-colors">
                    {post.title}
                  </h2>
                  {post.description && (
                    <p className="text-[#64748b] text-sm leading-relaxed line-clamp-2">{post.description}</p>
                  )}
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#f8f9fc] flex items-center justify-center text-[#64748b]">Loading...</div>}>
      <SearchContent />
    </Suspense>
  )
}
