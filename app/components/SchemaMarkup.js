// SchemaMarkup.js — JSON-LD structured data for Google + LLM indexing
// Supports: Article, HowTo, FAQPage, BreadcrumbList, Organization, WebSite

export function SchemaOrganization() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Cleoops",
    "url": "https://cleoops.com",
    "logo": "https://cleoops.com/logo.png",
    "description": "Independent AI resource for professionals, creators, and business owners. Practical guides, tool reviews, and industry strategy.",
    "founder": {
      "@type": "Person",
      "name": "Cleoops Editorial Team",
      "jobTitle": "Independent AI Analysis",
      "url": "https://cleoops.com/about"
    },
    "sameAs": [
      "https://twitter.com/cleoops7"
    ]
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function SchemaWebSite() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Cleoops",
    "url": "https://cleoops.com",
    "description": "The independent AI practitioner's resource. Practical guides, reviews, and strategy for professionals using AI.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://cleoops.com/blog?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function SchemaBlogPost({ post, url }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.description,
    "url": url,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Person",
      "name": "Cleoops Editorial",
      "url": "https://cleoops.com/about",
      "jobTitle": "Independent AI Analysis"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Cleoops",
      "url": "https://cleoops.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://cleoops.com/logo.png"
      }
    },
    "mainEntityOfPage": { "@type": "WebPage", "@id": url },
    "keywords": post.tags?.join(', ') || 'AI, artificial intelligence',
    "articleSection": "AI Guides",
    "inLanguage": "en-US"
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function SchemaBreadcrumb({ items }) {
  // items: [{ name, url }]
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": item.name,
      "item": item.url
    }))
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function SchemaFAQ({ faqs }) {
  // faqs: [{ question, answer }]
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function SchemaHowTo({ title, description, steps, totalTime }) {
  // steps: [{ name, text }], totalTime: 'PT10M'
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": title,
    "description": description,
    "totalTime": totalTime || "PT5M",
    "step": steps.map((step, i) => ({
      "@type": "HowToStep",
      "position": i + 1,
      "name": step.name,
      "text": step.text
    }))
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
