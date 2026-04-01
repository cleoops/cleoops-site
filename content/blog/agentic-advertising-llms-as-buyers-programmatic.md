---
title: "The Next DSP Doesn't Have a UI. It Has a Prompt."
description: "AI agents are beginning to make purchasing decisions, influence product selection, and act as intermediaries between brands and consumers. Here's what agentic advertising means for the programmatic stack."
date: "2026-04-01"
category: "Analysis"
readTime: "7 min read"
---

Programmatic advertising was built on a premise: humans make purchase decisions, and we target those humans with ads. The media plan, the audience segment, the bidding strategy — all of it is designed to influence a human who will ultimately decide.

That premise is beginning to break down.

AI agents are increasingly making or heavily influencing decisions that brands have historically reached through advertising. A consumer asking an AI assistant which laptop to buy, which insurance to purchase, or which restaurant to book is not conducting a search — they are delegating a decision. The agent provides a recommendation. The consumer frequently accepts it.

The advertising industry has not caught up with what this means.

## How the Decision Path Is Changing

The traditional purchase funnel runs from awareness through consideration to purchase, with advertising operating across all three stages. Display and video ads build awareness. Search and social ads drive consideration and capture intent. Retargeting closes purchase.

The agent-mediated purchase funnel looks different. The consumer expresses a need to an AI system. The agent gathers information from sources it considers authoritative — websites it has indexed, content it has been trained on, live search results it can access. It synthesizes a recommendation. The consumer acts on it.

In this model, the advertising touchpoints that mattered in the traditional funnel may not exist. The consumer did not see a display ad. They did not conduct a Google search. They asked an agent. The agent's answer was shaped by what the agent had access to and what the agent's training or retrieval weighed as authoritative.

For brands, this creates a new and poorly understood influence problem: how do you reach a decision that is being made by software rather than directly by a person?

## What the LLM Citation Data Shows

Independent research tracking which brands and publishers appear in AI-generated answers across 26 consumer categories reveals a pattern that has significant implications for advertising strategy.

LLMs do not cite based on advertising spend. The brands that appear most frequently in AI-generated recommendations are the ones with the strongest presence in the indexed content AI systems train on and retrieve from — authoritative reviews, structured comparison content, published studies, editorial coverage. The brands absent from AI recommendations are frequently those whose visibility was built primarily through paid media rather than earned authority.

The publishers that dominate AI citations are similarly revealing: free, structured, accessible content providers consistently outperform paywalled publishers. NerdWallet appears more often than the Wall Street Journal in financial recommendations. Wirecutter appears more often than most magazine review sites. The selection criterion is accessibility and structure, not authority in the traditional editorial sense.

This data describes a world where decades of paid media investment may not transfer to the AI-mediated recommendation layer. Share of voice in the algorithmic feed does not equal share of voice in the AI answer.

## The Three Channels That Matter in Agentic Advertising

Brands and agencies are beginning to identify the channels through which AI-mediated decisions can be influenced. Three are currently actionable:

**LLM citation optimisation.** Structuring content so that it is accessible, accurate, and useful enough that AI systems retrieve it when answering questions in relevant categories. This is not traditional SEO — the optimization signals are different. AI systems weight factual accuracy, structured format, citation depth, and content freshness differently than search ranking algorithms do. Brands that invest in content designed to be cited by AI (rather than ranked by search) are building a presence in the channel that search budgets do not touch.

**Sponsored intelligence.** Perplexity launched a paid advertising model in 2025 that allows brands to appear within AI-generated answers for relevant queries. This is the clearest direct analogue to search advertising in the AI layer: a brand pays to be present when a user asks a relevant question. The CPMs are currently high relative to display; the intent signal is substantially stronger than display. Other AI answer platforms are developing equivalent products.

**AI agent integration.** As AI agents gain the ability to take actions — booking travel, placing orders, comparing prices — the question of how brands integrate into the action layer becomes critical. OpenAI, Anthropic, and Google are all building API-level agent capabilities that allow third-party services to be called by AI agents. Being integrated at this layer — available to agents as a callable service — is the functional equivalent of appearing in a shopping feed. It does not exist yet at scale. It will.

## What the Programmatic Stack Needs to Become

The traditional DSP-SSP-publisher architecture was designed for display and video advertising served to human audiences. It is not designed for the AI-mediated channel.

Several things need to change or emerge:

**Publisher monetisation for AI-cited content.** Publishers whose content is retrieved and cited by AI systems currently receive no revenue from that citation. The content is used; the publisher is not compensated. This is an unsustainable dynamic that the industry needs to resolve — either through licensing arrangements (which some publishers are pursuing with LLM providers), through traffic attribution models, or through new advertising formats attached to AI-generated answers.

**Brand measurement that captures AI influence.** Current measurement frameworks track impressions, clicks, and conversions from identified channels. They do not capture the influence of AI-generated recommendations on purchase behaviour. A consumer who bought a brand because an AI recommended it may show up as direct traffic or unattributed conversion. Brand measurement that does not account for AI influence will increasingly misattribute causation.

**Intent signals from the AI layer.** The queries users submit to AI assistants are the strongest intent signals available — more specific, more contextual, and more decision-proximate than search queries. Programmatic systems that can access and act on AI query intent (with appropriate privacy frameworks) will have a structural advantage over those operating only on traditional signals. This is the thesis behind intent enrichment: not replacing the programmatic auction, but informing it with signals that the auction currently cannot see.

The advertising industry spent twenty years adapting from print to digital, from digital to mobile, from mobile to social. The adaptation to AI-mediated decisions is the next version of that transition.

The difference is the pace. The AI agent layer is not a new platform being gradually adopted. It is being deployed into an existing ecosystem at the rate the LLM infrastructure allows — which is faster than any previous technology transition. The companies and teams that understand the implications now, while the architecture is still forming, will have substantially more influence over how it is built than those who engage after the defaults are set.

The next DSP is being designed right now. It will not look like what exists today.
