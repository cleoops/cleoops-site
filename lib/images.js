// Unique Unsplash photos mapped per post slug — no duplicates
const SLUG_IMAGES = {
  'ai-for-remote-workers':          'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&auto=format&fit=crop&q=80',
  'ai-for-small-business':          'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=80',
  'ai-productivity-tips':           'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&auto=format&fit=crop&q=80',
  'ai-tools-for-freelancers':       'https://images.unsplash.com/photo-1508830524289-0adcbe822b40?w=800&auto=format&fit=crop&q=80',
  'ai-tools-for-marketing':         'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&auto=format&fit=crop&q=80',
  'ai-tools-for-musicians':         'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&auto=format&fit=crop&q=80',
  'best-ai-writing-tools-2026':     'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&auto=format&fit=crop&q=80',
  'best-ai-tools-for-beginners':    'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&auto=format&fit=crop&q=80',
  'chatgpt-vs-claude-which-is-better': 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=80',
  'how-to-use-ai-for-email':        'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&auto=format&fit=crop&q=80',
  'how-to-use-chatgpt-effectively': 'https://images.unsplash.com/photo-1680016561499-9916a36b3290?w=800&auto=format&fit=crop&q=80',
  'how-to-use-claude-ai':           'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&auto=format&fit=crop&q=80',
  'how-to-write-better-prompts':    'https://images.unsplash.com/photo-1618044619888-009e412ff12a?w=800&auto=format&fit=crop&q=80',
  'anthropic-usage-surge-pentagon-label': 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&auto=format&fit=crop&q=80',
  'doge-chatgpt-automation-policy': 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800&auto=format&fit=crop&q=80',
  'openai-robotics-quit-pentagon-ethics': 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop&q=80',
}

// Category fallbacks — used if no slug match
const CATEGORY_IMAGES = [
  'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80',
]

export function getCoverImage(slug = '', tags = []) {
  // Exact slug match first — guarantees unique images
  if (SLUG_IMAGES[slug]) return SLUG_IMAGES[slug]

  // Deterministic fallback based on slug hash — same post always gets same image, different posts get different ones
  let hash = 0
  for (let i = 0; i < slug.length; i++) hash = (hash * 31 + slug.charCodeAt(i)) & 0xffff
  return CATEGORY_IMAGES[hash % CATEGORY_IMAGES.length]
}
