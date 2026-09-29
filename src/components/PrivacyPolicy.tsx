export default function PrivacyPolicy() {
  const lastUpdated = 'September 26, 2026';

  return (
    <div id="privacy-policy-page" className="bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-extrabold text-[#1a3a42] mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-400 mb-10">Last updated: {lastUpdated}</p>

        <div className="prose prose-slate max-w-none space-y-8 text-[#3a5c63] leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-[#1a3a42] mb-2">1. Who we are</h2>
            <p>
              Nordic Group ("we", "us", "our") is a dental and medical supply sourcing and
              distribution company operating at nordicgr.com. This policy explains what
              information we collect from visitors and account holders, why we collect it,
              and how we use it.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1a3a42] mb-2">2. Information we collect</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                <strong>Account information:</strong> when you create an account to sign in
                (via email/password or Google sign-in), we receive your name and email
                address from our authentication provider, Clerk.
              </li>
              <li>
                <strong>Quote request information:</strong> when you submit a quote request
                through our product catalog, we collect your name, clinic name, phone
                number, and the list of products you are requesting a quote for.
              </li>
              <li>
                <strong>Contact form information:</strong> if you reach out through our
                contact form, we collect the details you provide, such as your name,
                contact information, and message.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1a3a42] mb-2">3. How we use your information</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>To identify you as a returning customer and manage your account.</li>
              <li>To prepare and send you price quotes for the products you request, via WhatsApp or email.</li>
              <li>To respond to inquiries submitted through our contact form.</li>
              <li>To understand which products our customers are most interested in, so we can improve our catalog and service.</li>
            </ul>
            <p className="mt-2">
              We do not sell your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1a3a42] mb-2">4. Third-party services</h2>
            <p>
              We use the following third-party services to operate our website:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 mt-2">
              <li><strong>Clerk</strong> — for account creation and sign-in (including optional Google sign-in).</li>
              <li><strong>Vercel</strong> — for hosting our website.</li>
            </ul>
            <p className="mt-2">
              These providers process data on our behalf and are bound by their own
              privacy and security commitments.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1a3a42] mb-2">5. Data retention</h2>
            <p>
              We retain account and quote request information for as long as necessary to
              provide our services and maintain business records, or until you ask us to
              delete it.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1a3a42] mb-2">6. Your rights</h2>
            <p>
              You can ask us to access, correct, or delete the personal information we
              hold about you at any time by contacting us using the details below.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1a3a42] mb-2">7. Contact us</h2>
            <p>
              If you have questions about this Privacy Policy or how your information is
              handled, contact us at{' '}
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
