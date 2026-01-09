"use client";

import Link from "next/link";

export default function PrivacyPolicy() {
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
        <h1 className="text-3xl font-bold text-zinc-900 mb-8">Privacy Policy</h1>

        <div className="prose prose-zinc max-w-none space-y-6">
          <p className="text-zinc-600">
            Last updated: {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}
          </p>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-zinc-900">1. Information We Collect</h2>
            <p className="text-zinc-600">
              We collect information you provide directly to us, including your name and email address
              when you sign up for our 21-day confidence course or contact us. We also collect
              information about your use of our services through cookies and similar technologies.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-zinc-900">2. How We Use Your Information</h2>
            <p className="text-zinc-600">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-zinc-600 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Send you course materials and updates</li>
              <li>Respond to your comments and questions</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Monitor and analyze trends and usage</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-zinc-900">3. Information Sharing</h2>
            <p className="text-zinc-600">
              We do not sell, trade, or otherwise transfer your personal information to third parties
              without your consent, except as necessary to provide our services or as required by law.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-zinc-900">4. Data Security</h2>
            <p className="text-zinc-600">
              We implement appropriate security measures to protect your personal information against
              unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-zinc-900">5. Cookies</h2>
            <p className="text-zinc-600">
              We use cookies and similar tracking technologies to track activity on our website and
              hold certain information. You can instruct your browser to refuse all cookies or to
              indicate when a cookie is being sent.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-zinc-900">6. Your Rights</h2>
            <p className="text-zinc-600">
              You have the right to access, update, or delete your personal information at any time.
              To exercise these rights, please contact us at{" "}
              <a href="mailto:support@comforteffect.com" className="text-zinc-900 underline">
                support@comforteffect.com
              </a>.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-zinc-900">7. Changes to This Policy</h2>
            <p className="text-zinc-600">
              We may update this privacy policy from time to time. We will notify you of any changes
              by posting the new policy on this page.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-zinc-900">8. Contact Us</h2>
            <p className="text-zinc-600">
              If you have any questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:support@comforteffect.com" className="text-zinc-900 underline">
                support@comforteffect.com
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
