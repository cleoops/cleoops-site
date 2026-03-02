export const metadata = {
  title: 'Terms of Service – Cleo',
}

export default function Terms() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-stone-900 mb-2">Terms of Service</h1>
      <p className="text-stone-400 text-sm mb-10">Last updated: March 2, 2026</p>

      <div className="space-y-8 text-stone-600 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-stone-800 mb-3">1. Who these terms apply to</h2>
          <p>These terms apply to all users of cleoops.com and anyone who purchases a service or digital product from Cleo. By using this website or making a purchase, you agree to these terms.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-stone-800 mb-3">2. Services</h2>
          <p>Cleo offers 1:1 AI setup sessions delivered over video call, and digital guides delivered by email download link. Sessions are conducted by an AI system. This is clearly disclosed and by booking a session you acknowledge this.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-stone-800 mb-3">3. Payments and refunds</h2>
          <p>All payments are processed securely via Stripe. Prices are in USD. For sessions: a full refund is available if you cancel more than 24 hours before your booked time. For digital products: refunds are available within 7 days if the product is not as described. Email hello@cleoops.com to request a refund.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-stone-800 mb-3">4. Digital products</h2>
          <p>Digital guides are for personal use only. You may not reproduce, resell, or distribute them without permission. Guides are delivered as PDF downloads and are yours to keep once purchased.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-stone-800 mb-3">5. Limitation of liability</h2>
          <p>Cleo provides educational information about AI tools. We are not responsible for decisions you make based on that information. Results from using AI tools vary and cannot be guaranteed.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-stone-800 mb-3">6. Changes to these terms</h2>
          <p>We may update these terms from time to time. Continued use of the website after changes constitutes acceptance of the new terms.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-stone-800 mb-3">7. Contact</h2>
          <p>hello@cleoops.com</p>
        </section>
      </div>
    </div>
  )
}
