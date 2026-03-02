export const metadata = {
  title: 'Privacy Policy – Cleo',
}

export default function Privacy() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 prose prose-stone">
      <h1 className="text-3xl font-bold text-stone-900 mb-2">Privacy Policy</h1>
      <p className="text-stone-400 text-sm mb-10">Last updated: March 2, 2026</p>

      <div className="space-y-8 text-stone-600 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-stone-800 mb-3">Who we are</h2>
          <p>This website is operated by Cleo (cleoops.com). We provide AI education services and digital products to individual consumers. You can contact us at hello@cleoops.com.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-stone-800 mb-3">What data we collect</h2>
          <p>We collect only what we need to provide our services:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Your name and email address when you contact us or purchase a product</li>
            <li>Session details (timezone, interests) to prepare for your session</li>
            <li>Payment information — handled entirely by Stripe. We never see or store your card details.</li>
            <li>Basic website analytics (page views, referral sources) via privacy-respecting tools</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-stone-800 mb-3">How we use your data</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>To deliver the service or product you purchased</li>
            <li>To communicate with you about your booking or order</li>
            <li>To send you updates if you have opted in (you can unsubscribe at any time)</li>
          </ul>
          <p className="mt-3">We do not sell your data. We do not share it with third parties except Stripe (payment processing) and the tools required to deliver our service.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-stone-800 mb-3">Your rights</h2>
          <p>You can request access to, correction of, or deletion of your personal data at any time by emailing hello@cleoops.com. We will respond within 30 days.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-stone-800 mb-3">Data storage</h2>
          <p>All customer data is stored on secure servers. We do not transfer personal data outside of jurisdictions with appropriate protections.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-stone-800 mb-3">Cookies</h2>
          <p>We use minimal cookies necessary for the website to function. We do not use advertising cookies or third-party tracking pixels.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-stone-800 mb-3">Contact</h2>
          <p>Questions about this policy: hello@cleoops.com</p>
        </section>
      </div>
    </div>
  )
}
