export const metadata = {
  title: 'Disclaimer',
  description: 'Important disclaimers and disclosures for Cleoops.com',
}

export default function Disclaimer() {
  const updated = 'March 9, 2026'

  return (
    <div className="min-h-screen bg-[#f8f9fc]">
      <div className="bg-[#0d1117] text-white py-12">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl font-black mb-2">Disclaimer</h1>
          <p className="text-[#94a3b8] text-sm">Last updated: {updated}</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-white border border-[#e2e8f0] rounded-2xl p-8 prose prose-slate max-w-none">

          <h2>1. For Informational Purposes Only</h2>
          <p>All content published on Cleoops.com — including articles, guides, tool reviews, analysis, and newsletters — is provided for general informational and educational purposes only. Nothing on this site constitutes professional advice of any kind, including but not limited to legal, financial, medical, business, or investment advice.</p>
          <p>Do not make business, financial, legal, or career decisions based solely on content published here. Always consult a qualified professional before taking action based on information you read on this site.</p>

          <h2>2. No Warranties on Accuracy</h2>
          <p>The AI industry moves fast. Product features, pricing, company details, and market conditions change constantly. While we make every reasonable effort to ensure accuracy at the time of publication, Cleoops.com makes no representations or warranties — express or implied — that any content on this site is complete, current, or error-free.</p>
          <p>We accept no liability for any loss or damage arising from your reliance on information published here.</p>

          <h2>3. Tool Reviews and Assessments</h2>
          <p>Reviews and assessments of AI tools reflect our independent editorial assessment at the time of testing. AI tools change rapidly and our assessments may not reflect the current state of any product. We do not guarantee that a tool will perform as described in our reviews for your specific use case.</p>

          <h2>4. Affiliate Relationships</h2>
          <p>Cleoops.com may earn a commission if you purchase a product or service through links on this site. Where affiliate relationships exist, we will disclose this clearly within the relevant content. The existence of an affiliate relationship does not influence our editorial assessment of any product. We do not recommend products solely because we earn a commission on them.</p>

          <h2>5. AI-Assisted Content</h2>
          <p>Some content on Cleoops.com is produced with the assistance of AI tools. All AI-assisted content is reviewed and edited by our editorial team before publication. We are committed to accuracy and editorial integrity regardless of the tools used in production.</p>

          <h2>6. External Links</h2>
          <p>This site contains links to third-party websites and services. We are not responsible for the content, privacy practices, or accuracy of any external site. The inclusion of a link does not constitute endorsement.</p>

          <h2>7. Investment and Financial Decisions</h2>
          <p>Nothing on this site should be interpreted as investment advice or a recommendation to buy, sell, or hold any security, asset, or financial product. Market data, valuations, and funding figures cited on this site are sourced from public reports and are included for context only.</p>

          <h2>8. Limitation of Liability</h2>
          <p>To the maximum extent permitted by applicable law, Cleoops.com and its operators shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of, or inability to use, this site or any content published here.</p>

          <h2>9. Governing Law</h2>
          <p>This disclaimer is governed by and construed in accordance with the laws of England and Wales. Any disputes arising in connection with this disclaimer shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>

          <h2>10. Changes to This Disclaimer</h2>
          <p>We reserve the right to update this disclaimer at any time. Continued use of this site following any changes constitutes your acceptance of the updated disclaimer.</p>

          <h2>Contact</h2>
          <p>Questions about this disclaimer? <a href="/contact" className="text-[#2563eb] hover:underline">Contact us here.</a></p>

        </div>
      </div>
    </div>
  )
}
