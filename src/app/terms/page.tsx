"use client";

import Link from "next/link";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <header className="bg-white border-b border-zinc-200 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-semibold text-zinc-900">
            Comfort Effect
          </Link>
          <Link href="/" className="text-sm text-zinc-600 hover:text-zinc-900">
            ← Back to Home
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-zinc-900 mb-8">Terms of Service</h1>

        <div className="prose prose-zinc max-w-none space-y-6">
          <p className="text-zinc-600">
            Last updated: {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}
          </p>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-zinc-900">1. Acceptance of Terms</h2>
            <p className="text-zinc-600">
              By accessing or using the Comfort Effect website and services, you agree to be bound by
              these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-zinc-900">2. Description of Service</h2>
            <p className="text-zinc-600">
              Comfort Effect provides a 21-day confidence-building course designed to help individuals
              develop self-assurance and comfort in social and professional situations. The course
              includes audio lessons, written materials, and optional coaching services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-zinc-900">3. User Accounts</h2>
            <p className="text-zinc-600">
              To access certain features of our service, you may be required to provide your email
              address. You are responsible for maintaining the confidentiality of your account
              information and for all activities that occur under your account.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-zinc-900">4. Payment Terms</h2>
            <p className="text-zinc-600">
              Some services require payment. All payments are processed securely through PayPal.
              Prices are subject to change without notice. Refunds may be available upon request
              within 30 days of purchase, subject to our refund policy.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-zinc-900">5. Intellectual Property</h2>
            <p className="text-zinc-600">
              All content on this website, including text, graphics, logos, audio files, and course
              materials, is the property of Comfort Effect and is protected by copyright laws.
              You may not reproduce, distribute, or create derivative works without our written permission.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-zinc-900">6. User Conduct</h2>
            <p className="text-zinc-600">
              You agree not to:
            </p>
            <ul className="list-disc list-inside text-zinc-600 space-y-2">
              <li>Use the service for any unlawful purpose</li>
              <li>Share or redistribute course materials</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with the proper functioning of the service</li>
              <li>Impersonate any person or entity</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-zinc-900">7. Disclaimer</h2>
            <p className="text-zinc-600">
              The information provided through our service is for educational purposes only. Results
              may vary and are not guaranteed. We are not responsible for any decisions you make based
              on the information provided. Our services do not constitute professional therapy or
              medical advice.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-zinc-900">8. Limitation of Liability</h2>
            <p className="text-zinc-600">
              To the fullest extent permitted by law, Comfort Effect shall not be liable for any
              indirect, incidental, special, consequential, or punitive damages arising out of or
              related to your use of our services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-zinc-900">9. Modifications</h2>
            <p className="text-zinc-600">
              We reserve the right to modify these terms at any time. Continued use of the service
              after any changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-zinc-900">10. Contact Information</h2>
            <p className="text-zinc-600">
              For questions about these Terms of Service, please contact us at{" "}
              <a href="mailto:info@eulaproperties.com" className="text-zinc-900 underline">
                info@eulaproperties.com
              </a>.
            </p>
          </section>
        </div>
      </main>

      <footer className="border-t border-zinc-200 mt-16">
        <div className="max-w-4xl mx-auto px-6 py-8 text-center text-sm text-zinc-500">
          <p>&copy; {new Date().getFullYear()} Comfort Effect. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
