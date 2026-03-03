export const posts = [
  {
    slug: 'how-to-use-chatgpt-for-beginners',
    title: "How to Use ChatGPT: A Beginner's Guide That Actually Tells You What to Type",
    date: '2026-03-03',
    excerpt: "Most beginner guides tell you ChatGPT is powerful and then leave you staring at a blank text box. This one doesn't. Here's exactly what to type — and why it works.",
    content: `
## What ChatGPT Actually Is (Plain English)

ChatGPT is a text prediction engine trained on a huge chunk of the internet. You type something, it predicts the most useful response. That's it. No magic, no consciousness — just very good pattern matching.

What makes it useful is that it's been tuned to be helpful, so instead of predicting random text, it predicts *useful* text in response to your request.

The practical implication: the quality of what you get out depends almost entirely on what you put in. A vague prompt gets a vague answer. A specific prompt gets something you can actually use.

---

## The Prompt Formula That Works

Most people type something like: *"Tell me about marketing."*

That's too vague. ChatGPT will give you a Wikipedia-style overview that's technically accurate and practically useless.

The formula that consistently works:

> **[Role] + [Task] + [Context] + [Format]**

- **Role:** Who should ChatGPT be? (e.g. "Act as a direct-response copywriter")
- **Task:** What do you want? (e.g. "Write a subject line for an email")
- **Context:** What's the situation? (e.g. "The email is to cold leads who downloaded a free checklist about home workouts")
- **Format:** How should the answer look? (e.g. "Give me 5 options, each under 10 words")

You don't always need all four parts — but the more specific you are, the better the output.

---

## 5 Exercises to Try Right Now

These are copy-paste prompts. Open ChatGPT, paste them in, and see what you get.

**Exercise 1: Explain something you're confused about**

> Act as a patient tutor. Explain [topic] as if I'm a smart person who has never encountered it before. Use a simple analogy. Then give me three follow-up questions I should ask to go deeper.

Replace \`[topic]\` with anything: compound interest, how vaccines work, what an algorithm is.

**Exercise 2: Improve your own writing**

> You are an editor who values clarity and directness. Here is something I wrote: [paste your text]. Rewrite it to be 30% shorter without losing any meaning. Then explain the three biggest changes you made.

**Exercise 3: Brainstorm faster**

> I need to [goal]. Give me 10 completely different approaches to doing this — not variations on the same idea, but genuinely distinct strategies. For each, write one sentence explaining why someone would choose it.

Replace \`[goal]\` with whatever you're working on: grow a newsletter, find a new job, name a product.

**Exercise 4: Prepare for a difficult conversation**

> I need to have a conversation with [person/role] about [topic]. It's likely to be uncomfortable because [reason]. Help me: 1) prepare three key points to make clearly, 2) anticipate two objections they might raise and how to respond, 3) suggest an opening line that's direct but not aggressive.

**Exercise 5: Turn information overload into a decision**

> I'm trying to decide between [Option A] and [Option B]. Here's what I know: [paste your notes or thinking]. Give me a structured comparison — pros, cons, and the one question I should answer before deciding.

---

## Common Mistakes Beginners Make

**Accepting the first answer.** ChatGPT gives you a starting point, not a final product. Push back. Say "that's too generic — make it more specific to [your situation]" or "give me a bolder version."

**Forgetting context.** ChatGPT doesn't know anything about you unless you tell it. Paste in relevant background. Share the actual document, the actual email, the actual problem.

**Treating it like a search engine.** It's not. Searching "best CRM for small business" on Google gives you reviews. Asking ChatGPT the same thing gives you a reasonable but generic answer. Use it for tasks, not lookups.

**Using it for facts without checking.** ChatGPT can hallucinate — confidently stating incorrect information. For factual claims that matter (medical, legal, financial), verify independently.

**Starting too big.** "Help me write a business plan" is overwhelming for both you and the model. Break it down: start with "help me write a one-paragraph description of my business idea."

---

## What to Try Next

Once you've run through those five exercises, you'll have a feel for the rhythm: prompt, review, refine. From there, the useful next steps are:

- **Custom instructions:** In ChatGPT settings, tell it who you are and how you like to receive information. It will apply this to every conversation.
- **Conversation continuity:** Don't start a new chat for every question. Build context over a conversation — ChatGPT gets more useful as you go.
- **Specific tools:** ChatGPT can browse the web, generate images (DALL-E), and run Python code. These are worth exploring once you're comfortable with basic prompting.

Want more exercises like these? I put together a full 45-exercise guide at [cleoops.com](https://cleoops.com) — from $9. It covers 9 AI tools with step-by-step walkthroughs for every exercise, so you're never staring at a blank screen wondering what to type.
    `.trim(),
  },
  {
    slug: 'ai-photo-editing-tools-that-work-2026',
    title: 'How to Use AI for Photo Editing: The Tools That Actually Work in 2026',
    date: '2026-03-03',
    excerpt: 'AI photo editing has moved well past one-click filters. These tools make specific, high-effort tasks genuinely fast — if you know which one to reach for.',
    content: `
## Why AI Editing Is Different from Filters

Filters adjust the look of a photo uniformly. AI editing tools understand what's in the photo.

That distinction matters. When Lightroom's AI masking selects a person's hair against a complex background, it's not applying a preset — it's analysing thousands of edge pixels and making per-pixel decisions. When Topaz Gigapixel upscales an image, it's not just interpolating between existing pixels; it's generating new detail based on patterns it learned from millions of photos.

The practical result: tasks that used to take an experienced editor 30 minutes now take 2. But these tools don't replace judgment. They replace repetition.

Here's what each major tool is actually good at.

---

## Lightroom AI Masking (Exact Steps)

Best for: Selective adjustments — sky, subject, background, specific objects.

**How to use it:**

1. Open your photo in Lightroom (desktop or mobile).
2. Go to the **Masking** panel (the circle icon in the right panel, or press **M**).
3. Click **Add New Mask**.
4. Choose your target: **Select Subject**, **Select Sky**, **Select Background**, or **Select Objects**.
5. For "Select Objects," hover over the element you want — Lightroom highlights it in blue. Click to confirm.
6. Review the mask overlay (press **O** to toggle it). If edges need refinement, use **Subtract** and paint over errors with the brush.
7. Apply your adjustments (exposure, colour, contrast) — they affect only the masked area.

The subject detection is genuinely impressive with people and animals. For complex objects or overlapping elements, "Select Objects" is more reliable than "Select Subject."

---

## Topaz Gigapixel for Upscaling

Best for: Making small or low-resolution images large enough to print or publish.

Gigapixel uses AI to upscale images while generating realistic detail — not just a blurry enlargement. A 12MP photo upscaled 4x looks sharper in Gigapixel than in Photoshop's bicubic interpolation.

**Practical workflow:**

1. Open your file in Topaz Gigapixel AI.
2. Set your output size. "2x" is the safe default. "4x" works well for portraits and landscapes; watch for artefacts in highly detailed textures.
3. Choose a model. **Standard V2** works for most photos. **High Fidelity** is better for images with fine detail (feathers, fur, fabric). **Low Resolution** handles noisy or heavily compressed images.
4. Preview a crop before exporting. Focus on edges and fine detail.
5. Export. Processing time depends on your hardware — GPU acceleration makes a significant difference.

Most useful for: photos taken on older cameras, screenshots that need to become graphics, or anything shot at high ISO that needs cleanup before upscaling.

---

## Adobe Firefly for Generative Fill

Best for: Removing objects, extending backgrounds, replacing elements.

Firefly is integrated into Photoshop as "Generative Fill." It's the best in-product generative tool currently available.

**To remove an object:**

1. Select the object using the **Object Selection Tool** (W). For complex edges, refine the selection with Select and Mask.
2. Expand the selection slightly (Select > Modify > Expand by 5–10px) to capture the edge context.
3. Press the **Generative Fill** button in the contextual toolbar. Leave the text prompt empty for seamless background filling.
4. Photoshop generates three variations. Cycle through them in the Properties panel.

**To extend a background:**

1. Use the Crop tool and drag the canvas beyond the photo edge.
2. Select the empty canvas area.
3. Click Generative Fill. Leave prompt empty or type a descriptor ("blue sky," "forest").

Results are best when the original background has consistent texture. Busy or complex backgrounds produce less predictable fills.

---

## Remove.bg for Backgrounds

Best for: Fast, clean background removal when you just need the subject isolated.

[Remove.bg](https://remove.bg) does one thing: removes backgrounds. It's faster than masking in Lightroom or Photoshop for simple cutouts because you don't need to open a full editing app.

**Workflow:**

1. Upload your image at remove.bg.
2. The tool returns a PNG with a transparent background, usually in under 10 seconds.
3. Download and drop into your design tool, Canva, Figma, or wherever you need it.

For portraits with clean separation from the background, it's nearly perfect. For hair against complex backgrounds, Lightroom or Photoshop masking gives better edge quality. Remove.bg is best when speed matters more than perfection.

---

## Which Tool for Which Job

| Task | Best Tool | Why |
|---|---|---|
| Selective exposure/colour adjustment | Lightroom AI Masking | Fast, non-destructive, integrated into editing workflow |
| Making small photos large | Topaz Gigapixel | Generates real detail rather than blurring |
| Removing objects or extending backgrounds | Adobe Firefly (Photoshop) | Highest quality generative fill available |
| Quick background removal | Remove.bg | Fastest for isolated subjects, no software required |
| Complex hair/fur masking for compositing | Photoshop Select and Mask | Most control over fine edges |

---

## The Honest Summary

None of these tools eliminate skill. What they eliminate is the tedious part of applying skill — the 20 minutes of painting a mask by hand, the back-and-forth of trying to clean up a noisy upscale, the painstaking clone-stamp work to remove a tourist from a landscape.

Start with Lightroom masking if you're already in that workflow. Add Firefly for object removal when it comes up. Use Gigapixel selectively — it's a specialist tool that earns its keep in specific situations.

If you want a step-by-step photography workflow covering these tools and more — including specific exercises for each — the [Cleo Photography Guide](https://buy.stripe.com/bJeaEW2TbeCa5lE6zUfjG06) walks through it all with exact prompts and screenshots.
    `.trim(),
  },
]
