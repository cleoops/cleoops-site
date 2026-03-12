---
title: "Your AI Agent Needs Permission From Amazon, Not Just From You"
description: "A federal court ruled that user consent is not enough for AI agents to access protected accounts. Platform authorization is now a legal requirement."
date: "2026-03-12"
category: "News"
readTime: "8 min read"
---

A federal judge just redrew the map of what AI agents can do.

On March 10, San Francisco federal court Judge Maxine Chesney granted Amazon a preliminary injunction blocking Perplexity's Comet AI browser from accessing password-protected Amazon accounts. The key ruling: user permission is insufficient. Platform authorization is required.

Quote from the ruling: "Amazon has provided strong evidence that Perplexity, through its Comet browser, accesses...the user's password-protected account without authorization by Amazon."

Perplexity must stop immediately and destroy any Amazon data obtained.

This is the first federal court ruling establishing legal boundaries for agentic AI. It is not a narrow e-commerce dispute. It is a precedent that reshapes how enterprises deploy autonomous AI agents across any third-party platform.

**What actually happened**

Perplexity built Comet, an AI browser agent that can log into your accounts, make purchases, and automate shopping on your behalf. You explicitly grant the agent permission. You authenticate. You authorize each action. Perplexity is transparent about what the agent can do.

Amazon sued anyway, arguing that even with user consent, Perplexity's access to Amazon's systems violated Amazon's terms of service and Amazon's own authorization requirements.

Amazon won. The judge agreed. User permission, even explicit user permission, does not trump platform authorization.

That ruling has consequences far beyond shopping.

**Why this matters for programmatic ad tech**

Programmatic advertising runs on trust between platforms. An advertiser's agent makes real-time bids on your exchange. The DSP's agent accesses audience data, pricing signals, and inventory from the SSP. These are all mediated by APIs and formal integrations.

What happens when an enterprise deploys an AI agent that does not route through formal APIs?

Example: A brand's AI agent, designed to optimize campaigns across multiple ad platforms, gains the ability to "use the web like a human." It logs into a DMP directly (with explicit brand authorization), extracts audience segments, and feeds them into the brand's DSP. The brand gave permission. The agent acted appropriately.

But the DMP did not authorize that integration. The agent accessed systems that require DMP permission, not just brand permission. [This mirrors the structural shift we identified in enterprise vs. government AI vendor selection](/blog/enterprise-vs-government-ai-market-split.md) — institutional control (platform, government) supersedes individual authorization when conflicts arise.

Under the Amazon ruling, the DMP can sue the brand and the AI agent vendor and win.

This is the legal framework that just became precedent.

**The "computer use" capability is now legally constrained**

A major AI capability released in the past year is "computer use" or "browser automation." Claude has it. GPT-4 can do it. Perplexity Comet is built on it. The feature lets AI agents navigate websites, fill forms, and interact with systems as if a human were using them.

The pitch: "Your AI can do anything a human can do on the web."

The Amazon ruling says: "No, it cannot. Your AI can do anything a human can do if the platform authorizes it."

That is a fundamental constraint on the "computer use" feature.

For enterprises deploying AI agents on third-party platforms:

- You cannot use an AI agent to access competitor platforms without those platforms' explicit authorization
- You cannot use an AI agent to access data warehouses, APIs, or systems you do not have formal integration agreements with
- User permission is not enough. Platform permission is binding.

This applies to DSPs, SSPs, exchanges, data marketplaces, and any system that requires authorization to access.

**What this means for your brand's AI strategy**

If you are using AI agents to automate campaign management, programmatic buying, or audience research:

First, audit your integrations. Are you accessing any third-party systems with user credentials alone? If so, you are now at legal risk.

Second, understand that "computer use" AI agents cannot access protected systems without explicit platform authorization. That includes systems you currently use manually.

Third, recognize that SSPs, DSPs, and exchanges will now need to publish policies about how AI agents can access their systems. Until they do, agent access is legally ambiguous.

Fourth, plan for a world where AI agent access requires formal integration agreements, not just API keys or credentials. This is expensive. It slows deployment. It limits flexibility.

The Amazon ruling makes platform authorization a binding legal requirement, not just a business expectation.

**What platforms will do in response**

Expect three changes:

First, SSPs, DSPs, and ad networks will explicitly restrict AI agent access. Some will say "yes, here is how agents can access our systems safely." Others will say "no agents allowed, only direct human access or formal API integrations."

Second, the major ad platforms will publish AI agent policies within weeks. Who is authorized? How? What are the limits? What data can agents access?

Third, there will be a new category of API: "agent-safe APIs." These will be designed to handle autonomous agent interaction, with rate limits, permission matrices, and audit trails specifically built for agents.

The burden is on platforms, but it will eventually flow to agencies and brands deploying agents.

**The deeper precedent**

The Amazon ruling establishes a principle: platform control over access supersedes user control.

You own your Amazon account. Amazon still controls access to Amazon's systems. You can give another party (a human or an AI agent) permission to use your account, but that does not override Amazon's own authorization requirements.

This extends platform power significantly. It says: platforms can set rules about who and what can access their systems, regardless of user wishes.

For ad tech, this is particularly important because the entire industry is built on trust between platforms. An SSP trusts that a DSP accessing inventory is authorized. An exchange trusts that a bid coming from an agency is legitimate.

Now you need to add another layer: platforms trust that any agent accessing their system is authorized by the platform, not just by the user.

That raises the barrier for AI agent deployment at scale.

**What you should do immediately**

If you are deploying or planning to deploy AI agents in your programmatic workflow:

1. Review all third-party system access. If an agent accesses a DSP, exchange, DMP, or data warehouse with user credentials alone (even if the user explicitly authorized it), you are now at legal risk. Secure explicit platform authorization first.

2. Wait for your platforms to publish AI agent policies before deploying agents. Do not assume platform authorization by default. Ask.

3. Plan for formal integration requirements for any agent-based automation. A "computer use" agent that browses the web is cheaper to build than an API integration. But it is now legally risky. The API integration is the safer path.

4. If you are an agency managing AI agent workflows for clients, brief your clients on the legal risk. They need to understand that giving an agent access to their account does not automatically grant access to third-party systems.

5. If you are a platform (ad exchange, DMP, audience data provider), publish your AI agent policy now. Clarity reduces liability risk.

The Amazon ruling is only preliminary (it grants an injunction, not a final judgment), but federal judges rarely reverse preliminary injunctions. This precedent is likely to hold.

Programmatic automation is now legally constrained in ways it was not 48 hours ago.

---

## Frequently Asked Questions

**Q: Does this mean I cannot use an AI agent to automate my ad buying?**

A: You can use an AI agent if the platforms you are accessing explicitly authorize agent access. Until they do, you are at legal risk. The safest path is using formal APIs designed for agent interaction, not browser automation.

**Q: What if I am the only user of my account? Do I still need platform permission?**

A: Yes. The ruling is clear: platform authorization is independent of user consent. You can consent all you want, but if Amazon (or your DSP, or your DMP) does not authorize agent access, you are violating their terms of service and exposing yourself to legal action.

**Q: Will my ad platforms let AI agents access their systems?**

A: Probably, but on their terms. They will build agent-safe APIs with rate limits, permission controls, and audit trails. You will need formal agreements with each platform. That takes time and negotiation. Do not assume automatic platform approval.

