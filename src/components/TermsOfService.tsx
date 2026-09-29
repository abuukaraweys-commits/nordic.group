export default function TermsOfService() {
  const lastUpdated = 'September 26, 2026';

  return (
    <div id="terms-of-service-page" className="bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-extrabold text-[#1a3a42] mb-2">Terms of Service</h1>
        <p className="text-sm text-gray-400 mb-10">Last updated: {lastUpdated}</p>

        <div className="prose prose-slate max-w-none space-y-8 text-[#3a5c63] leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-[#1a3a42] mb-2">1. About Nordic Group</h2>
            <p>
              Nordic Group ("we", "us", "our") operates nordicgr.com, a catalog of dental and
              medical supplies sourced and distributed to clinics. By creating an account or
              using this website, you agree to these Terms of Service.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1a3a42] mb-2">2. Accounts</h2>
            <p>
              To request quotes and access certain features, you may create an account using
              email/password or Google sign-in through our authentication provider, Clerk. You
              are responsible for keeping your account credentials secure and for all activity
              under your account.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1a3a42] mb-2">3. Our catalog and quotes</h2>
            <p>
              Product listings on this website are informational and do not display prices.
              Submitting a quote request does not create a binding order. Any sale, price, and
              delivery terms are agreed separately between you and Nordic Group, typically via
              WhatsApp or email, once we respond to your request.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1a3a42] mb-2">4. Acceptable use</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>You will provide accurate information when creating an account or requesting a quote.</li>
              <li>You will not use this website for any unlawful purpose or to misrepresent your clinic or organization.</li>
              <li>You will not attempt to disrupt, reverse-engineer, or gain unauthorized access to this website or its systems.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1a3a42] mb-2">5. Product information</h2>
            <p>
              We make reasonable efforts to keep product descriptions, images, and specifications
              accurate. However, availability, packaging, and specifications may change, and
              final details are confirmed at the time of quotation.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1a3a42] mb-2">6. Limitation of liability</h2>
            <p>
              To the extent permitted by law, Nordic Group is not liable for indirect,
              incidental, or consequential damages arising from your use of this website. This
              does not limit any liability that cannot be excluded under applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1a3a42] mb-2">7. Changes to these terms</h2>
            <p>
              We may update these Terms of Service from time to time. Continued use of this
              website after an update means you accept the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1a3a42] mb-2">8. Contact us</h2>
            <p>
              If you have questions about these Terms of Service, contact us at{' '}
              <a href="mailto:info@nordicgr.com" className="text-[#2c8fa0] font-semibold hover:underline">
                info@nordicgr.com
              </a>{' '}
              or via WhatsApp at{' '}
              <span className="font-semibold text-[#1a3a42]">+252 61 745 3777</span>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
