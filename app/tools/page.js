export const metadata = {
  title: 'AI Tools Directory',
  description: 'Every AI tool worth knowing about — independently tested and reviewed by the Cleoops team.',
}

const tools = [
  { name: 'ChatGPT', by: 'OpenAI', category: 'General AI', desc: 'The most widely used AI assistant. Best for general tasks, coding, and brainstorming.', url: 'https://chat.openai.com', badge: 'Editor Pick' },
  { name: 'Claude', by: 'Anthropic', category: 'General AI', desc: 'The best AI for long documents, nuanced writing, and complex reasoning. Strong safety focus.', url: 'https://claude.ai', badge: 'Editor Pick' },
  { name: 'Gemini', by: 'Google', category: 'General AI', desc: 'Google\'s flagship AI — deeply integrated with Google Workspace and search.', url: 'https://gemini.google.com', badge: null },
  { name: 'Perplexity', by: 'Perplexity AI', category: 'Research', desc: 'AI-powered search with real-time web access and cited sources. Excellent for research.', url: 'https://perplexity.ai', badge: 'Editor Pick' },
  { name: 'Midjourney', by: 'Midjourney', category: 'Image Generation', desc: 'The gold standard for AI image generation. Unmatched aesthetic quality.', url: 'https://midjourney.com', badge: null },
  { name: 'Runway', by: 'Runway', category: 'Video AI', desc: 'Professional-grade AI video generation and editing. Used by major studios.', url: 'https://runwayml.com', badge: null },
  { name: 'Notion AI', by: 'Notion', category: 'Productivity', desc: 'AI built into your workspace — summarise, write, and organise without switching tabs.', url: 'https://notion.so', badge: null },
  { name: 'Jasper', by: 'Jasper', category: 'Marketing', desc: 'AI writing platform built specifically for marketing teams and content at scale.', url: 'https://jasper.ai', badge: null },
  { name: 'ElevenLabs', by: 'ElevenLabs', category: 'Voice AI', desc: 'The most realistic AI voice generation available. Used for podcasts, video and narration.', url: 'https://elevenlabs.io', badge: null },
  { name: 'Cursor', by: 'Anysphere', category: 'Coding', desc: 'AI-native code editor that understands your entire codebase. The developer favourite.', url: 'https://cursor.sh', badge: 'Editor Pick' },
  { name: 'You.com', by: 'You.com', category: 'Research', desc: 'AI-powered search engine with real-time web access, code execution, and multi-model support. Strong alternative to Perplexity.', url: 'https://you.com', badge: null },
]

const categories = [...new Set(tools.map(t => t.category))]

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fc]">
      {/* Header */}
      <div className="bg-[#0d1117] text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="inline-block bg-[#2563eb] text-white text-xs font-bold px-3 py-1 rounded mb-4 tracking-widest uppercase">
            AI Tools Directory
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
            Every AI tool worth knowing
          </h1>
          <p className="text-[#94a3b8] text-lg max-w-2xl">
            Independently assessed. No sponsored rankings. Updated as the landscape changes.
          </p>
        </div>
      </div>

      {/* Quiz CTA */}
      <div className="bg-[#2563eb] text-white py-4">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between flex-wrap gap-4">
          <p className="font-semibold">Not sure which AI tool is right for you?</p>
          <a href="/tools/ai-quiz" className="bg-white text-[#2563eb] font-bold px-5 py-2 rounded-lg text-sm hover:bg-[#f0f4ff] transition-colors">
            Take the 2-minute quiz &rarr;
          </a>
        </div>
      </div>

      {/* Tools grid by category */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {categories.map(cat => (
          <div key={cat} className="mb-12">
            <h2 className="text-xs font-bold text-[#64748b] tracking-widest uppercase mb-6 pb-2 border-b border-[#e2e8f0]">
              {cat}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {tools.filter(t => t.category === cat).map(tool => (
                <a
                  key={tool.name}
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border border-[#e2e8f0] rounded-xl p-5 hover:border-[#2563eb] hover:shadow-md transition-all group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-bold text-[#0f172a] text-lg group-hover:text-[#2563eb] transition-colors">
                        {tool.name}
                      </h3>
                      <span className="text-xs text-[#64748b]">{tool.by}</span>
                    </div>
                    {tool.badge && (
                      <span className="text-xs bg-[#f0fdf4] text-[#16a34a] border border-[#bbf7d0] font-bold px-2 py-1 rounded">
                        {tool.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-[#475569] leading-relaxed">{tool.desc}</p>
                  <div className="mt-4 text-xs text-[#2563eb] font-semibold group-hover:underline">
                    Visit {tool.name} &rarr;
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}

        {/* More coming */}
        <div className="text-center py-12 border-t border-[#e2e8f0]">
          <p className="text-[#64748b] mb-2">More tools added weekly.</p>
          <p className="text-sm text-[#94a3b8]">Spotted a tool we should review? <a href="/contact" className="text-[#2563eb] hover:underline">Let us know.</a></p>
        </div>
      </div>
    </div>
  )
}
