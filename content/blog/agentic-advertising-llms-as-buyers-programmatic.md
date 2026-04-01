---
title: "The Next DSP Doesn't Have a UI. It Has a Prompt."
description: "AI assistants with 900 million weekly users are already influencing purchase decisions, and the first advertising products are live. Here's what the data shows and what it means for the programmatic stack."
date: "2026-04-01"
category: "Analysis"
readTime: "7 min read"
---

ChatGPT reached 900 million weekly active users in February 2026, according to an OpenAI announcement reported by TechCrunch. Users submit over 2 billion queries daily. A growing share of those queries are purchase-adjacent: product comparisons, service recommendations, buying decisions.

The advertising industry has started to pay attention. The data on why is becoming hard to ignore.

## The Conversion Signal

In November 2025, Microsoft Clarity published a study analysing traffic patterns across more than 1,200 publisher and news websites. The finding: AI-referred traffic converts at approximately three times the rate of traditional channels. Copilot referrals converted at 17 times the rate of direct traffic in the study. Perplexity referrals converted at 7 times the rate.

The caveat the study was careful to include: AI referrals still account for less than 1% of total web traffic. The conversion quality is high. The volume is not yet.

A separate data point arrived in March 2026, when Criteo joined OpenAI's advertising pilot in ChatGPT. In the announcement, Criteo cited its own February data: US clients saw traffic referred from LLM platforms convert at approximately 1.5 times the rate of other referral channels. Criteo characterised this as reflecting "the high-intent nature of these AI experiences."

The conversion premium across multiple studies is directionally consistent, even if the magnitude varies by source and methodology.

## What Is Already Live

Perplexity launched a paid advertising product in 2025. The format is sponsored follow-up questions, which are AI-generated prompts that appear alongside direct answers, labelled as sponsored. The product runs on a CPM basis. Perplexity has stated that advertiser relationships do not influence the content of organic answers. Indeed was among the first advertising partners.

In March 2026, Criteo and OpenAI announced an advertising pilot running within ChatGPT. OpenAI is developing the commercial advertising product; Criteo is activating its advertiser base (reported as $4 billion in annual spend across 17,000 advertisers) within the pilot. The format details have not been publicly disclosed.

Two AI platforms with meaningful user scale now have active advertising products. A third, the largest, is in pilot.

## What the Citation Data Shows

Independent research tracking which brands and publishers appear in AI-generated answers across 25 consumer categories, across approximately 56,600 queries run against four AI models (including Perplexity, Claude, GPT, and Gemini), shows significant variation in which publishers and brands receive citations.

In the data, youtube.com appeared in 8,899 query responses. Reddit.com appeared in 1,046. NerdWallet appeared in 806 across 12 categories, compared to 736 appearances for Forbes across 25 categories. In the Automotive category, the most-cited brands were Hyundai (cited in 33% of queries), Tesla (27%), and Kia (27%).

What the data does not reveal is why these patterns exist. Citation frequency may reflect content accessibility, training data composition, retrieval weighting, recency, or other factors; the research does not establish causation. The pattern is observable; the mechanism is not yet confirmed.

## The Programmatic Stack Implications

Three specific changes are underway or coming for programmatic advertising:

**A new high-intent channel is forming.** Perplexity's and OpenAI's advertising products represent a category of inventory that did not exist two years ago: advertisements served within AI-generated answers at the moment of expressed decision intent. The conversion data suggests this intent signal is stronger than traditional programmatic signals. CPMs for this inventory reflect that premium: third-party analysis of Perplexity's advertising puts effective CPMs above $50, though the company does not publicly disclose rates.

**Publisher revenue attribution is unresolved.** When an AI platform generates an answer using content from a publisher's website and then sells advertising against that answer, the publisher whose content contributed to the answer receives no share of the advertising revenue. The tension between AI platforms' content use and publisher monetisation is active litigation and licensing territory. How it resolves will shape whether publishers have economic incentive to produce content that AI systems can retrieve.

**Measurement frameworks do not currently capture AI influence.** Standard programmatic attribution models track impressions and clicks from identified ad-serving channels. A consumer who makes a purchase decision following an AI recommendation, without clicking an ad, registers as direct or unattributed traffic in current analytics. Microsoft Clarity's AI traffic filter, launched in August 2025, is an early attempt to separate AI referral attribution. Most brands do not yet have measurement in place to quantify AI's role in their conversion funnels.

## The Open Questions

AI-referred traffic is converting at high rates but represents under 1% of total web traffic. The advertising products that exist are early-stage pilots with limited scale. The publisher monetisation model is unresolved.

What is clear is the direction: 900 million weekly ChatGPT users submitting 2 billion daily queries represents a query volume that will generate advertising inventory at scale when the commercial products are built. The conversion data from Microsoft Clarity and Criteo indicates the intent quality of that inventory. The open question is timeline and structure: how quickly the advertising products scale, and how the economics are distributed across platforms, publishers, and advertisers.

The programmatic infrastructure built for display and video was designed for a world where humans conduct searches and browse pages. The AI query layer is a different context, with different intent signals and different delivery mechanisms. How the existing programmatic stack adapts, or whether new infrastructure emerges alongside it, is the open architectural question for the industry.

---

*Sources: TechCrunch (February 27, 2026): ChatGPT 900M weekly users. Microsoft Clarity blog (November 2025): AI traffic conversion study, 1,200+ websites. Criteo press release (March 2026): OpenAI advertising pilot, 1.5x conversion data. Business Insider (July 2025): Perplexity advertising format and CPM model. Dataslayer (November 2025): Perplexity CPM estimates. LLM Citation Tracker (Cleoops, 56,600 queries, 25 categories, March-April 2026): publisher and brand citation data.*
