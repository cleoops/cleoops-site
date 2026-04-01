---
title: "OpenAI Releases GPT-5.4: 1M Token Context, Record Benchmarks, 33% Fewer Hallucinations"
description: "OpenAI launched GPT-5.4 on March 5, 2026 — its most capable model yet. Three variants: standard, Thinking, and Pro. Here's what changed and what it means for enterprise users."
date: "2026-04-01"
category: "News"
readTime: "4 min read"
---

OpenAI released GPT-5.4 on March 5, 2026 — the latest in its GPT-5 series, which launched in August 2025. The release introduces three variants, a 1 million token context window via API, a new tool-calling architecture, and measurably fewer hallucinations than its predecessor.

## What's New

**Three variants.** GPT-5.4 ships as a standard model, GPT-5.4 Thinking (a reasoning-optimised version that works through problems before answering), and GPT-5.4 Pro (optimised for high-performance tasks). The Thinking variant is the direct successor to GPT-5.2 Thinking, which had its extended thinking level inadvertently reduced in January and restored in February.

**1 million token context window via API.** This brings OpenAI's API context length in line with Gemini's headline number and is the largest OpenAI has offered. Prior GPT-5.x API context was significantly shorter. At 1 million tokens, the model can process entire codebases or large document archives in a single call.

**Record benchmark scores.** GPT-5.4 scored 83% on OpenAI's GDPval test for knowledge work tasks, and set new records on OSWorld-Verified and WebArena Verified — computer use benchmarks measuring how well the model navigates software interfaces autonomously. It also leads Mercor's APEX-Agents benchmark for professional skills in law and finance, described by Mercor's CEO as excelling at "long-horizon deliverables such as slide decks, financial models, and legal analysis."

**33% fewer hallucinations than GPT-5.2.** OpenAI reports individual claim error rates are 33% lower compared to GPT-5.2, and overall responses are 18% less likely to contain errors. The improvement in factual reliability is the metric enterprise customers have most consistently requested.

**Tool Search — new API tool-calling architecture.** Previously, system prompts had to define all available tools upfront, consuming tokens proportional to the number of tools. GPT-5.4's Tool Search system allows the model to look up tool definitions as needed, making requests faster and cheaper as tool counts grow. This is a meaningful efficiency gain for agentic applications with many connected tools.

## What It Means for Enterprise Users

The hallucination improvement is the most practically significant change for teams using GPT-5.4 in production workflows where factual accuracy matters — legal, financial, compliance, and research applications. A 33% reduction in claim-level errors compounds meaningfully across high-volume use.

The Tool Search architecture change matters for teams building agentic systems. As the number of tools an agent can call grows, the old approach became token-expensive and slow. Tool Search removes that scaling constraint, making large tool libraries more practical.

GPT-5.4 Thinking is the relevant variant for tasks requiring multi-step reasoning, complex analysis, or decisions where the reasoning chain needs to be auditable. The standard variant remains appropriate for high-volume, lower-complexity tasks.

## The Competitive Context

GPT-5.4 arrived approximately three weeks before Meta released Llama 4 and two weeks after Anthropic updated Claude 3.7. The frontier model providers are in sustained capability and pricing competition. GPT-5.4's hallucination reduction and computer use benchmark leadership are the clearest differentiators from this release — both address gaps that enterprise customers have explicitly flagged as blockers to deeper deployment.

GPT-5.1 models were retired from ChatGPT as of March 11, 2026. Users on legacy API integrations pointing at GPT-5.1 should migrate to GPT-5.4 or verify their API version targeting.
