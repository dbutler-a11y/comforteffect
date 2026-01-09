"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function ThankYouPage() {
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes in seconds
  const [orderDate] = useState(() => {
    const now = new Date();
    return now.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  });

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => Math.max(0, prev - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const actionSteps = [
    {
      number: 1,
      title: "Check Your Email",
      description:
        "Your purchase confirmation and receipt have been sent to your inbox. Check your spam folder if you don't see it within a few minutes.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      number: 2,
      title: "Download Your Toolkit",
      description:
        "Access all 6 products in your bundle immediately. Click below to go to your download page.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      ),
      hasAction: true,
    },
    {
      number: 3,
      title: "Start the 21-Day Challenge",
      description:
        "Begin with Day 1 of the workbook. Set aside 15-20 minutes each morning for your transformation exercises.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      number: 4,
      title: "Join the Community",
      description:
        "Connect with fellow Comfort Effect members for support, accountability, and shared wins. Check your email for the invite link.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-lg font-semibold tracking-tight">
            The Comfort Effect
          </Link>
          <Link
            href="/download/toolkit"
            className="btn-primary px-5 py-2.5 rounded-full text-sm font-medium"
          >
            Access Downloads
          </Link>
        </div>
      </nav>

      {/* Hero Section - Celebration */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          {/* Success Checkmark */}
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto bg-emerald-50 rounded-full flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-emerald-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Badge */}
          <div className="badge mb-6 mx-auto">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
            Order Confirmed
          </div>

          {/* Main Headline */}
          <h1 className="heading-xl text-zinc-900 mb-4">
            Your order is complete!
          </h1>

          {/* Subheadline */}
          <p className="body-lg max-w-xl mx-auto">
            Congratulations on taking the first step toward unstoppable confidence.
            Your transformation journey begins right now.
          </p>
        </div>
      </section>

      {/* Order Summary */}
      <section className="py-8">
        <div className="max-w-xl mx-auto px-6">
          <div className="card-elevated rounded-2xl p-6 md:p-8">
            <h2 className="text-lg font-semibold text-zinc-900 mb-6">
              Order Summary
            </h2>

            <div className="space-y-4">
              <div className="flex justify-between items-start pb-4 border-b border-zinc-100">
                <div>
                  <div className="text-base font-medium text-zinc-900">
                    The Comfort Effect Bundle
                  </div>
                  <div className="text-sm text-zinc-500 mt-1">
                    Complete 6-product toolkit
                  </div>
                </div>
                <div className="text-base font-semibold text-zinc-900">$17.00</div>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-zinc-500">Order Date</span>
                <span className="text-zinc-900">{orderDate}</span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-zinc-500">Access Type</span>
                <span className="text-zinc-900">Lifetime Access</span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-zinc-500">Delivery</span>
                <span className="text-emerald-600 font-medium">Instant Digital Download</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Action Plan Section */}
      <section className="section-padding bg-zinc-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-zinc-900 mb-4">
              Your Next Steps
            </h2>
            <p className="body-lg max-w-xl mx-auto">
              Follow this action plan to get the most out of your Comfort Effect toolkit.
            </p>
          </div>

          <div className="space-y-6">
            {actionSteps.map((step) => (
              <div
                key={step.number}
                className="card-elevated rounded-xl p-6 md:p-8"
              >
                <div className="flex gap-5">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-zinc-900 text-white rounded-full flex items-center justify-center text-sm font-medium">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-zinc-400">{step.icon}</span>
                      <h3 className="text-base font-semibold text-zinc-900">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-sm text-zinc-500 leading-relaxed">
                      {step.description}
                    </p>
                    {step.hasAction && (
                      <Link
                        href="/download/toolkit"
                        className="btn-primary inline-flex items-center gap-2 mt-4 px-5 py-2.5 rounded-full text-sm font-medium"
                      >
                        Go to Downloads
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-12 border-b border-zinc-100">
        <div className="max-w-3xl mx-auto px-6">
          <div className="card-elevated rounded-2xl p-6 md:p-8 text-center">
            <div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-zinc-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-zinc-900 mb-2">
              Need Help?
            </h3>
            <p className="text-sm text-zinc-500 mb-4 max-w-md mx-auto">
              Our support team is here for you. If you have any questions about
              your order or need assistance getting started, we&apos;re just an email away.
            </p>
            <a
              href="mailto:info@eulaproperties.com"
              className="btn-secondary inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              info@eulaproperties.com
            </a>
          </div>
        </div>
      </section>

      {/* Upsell Banner */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto px-6">
          <div className="card-elevated rounded-3xl overflow-hidden">
            {/* Timer Banner */}
            <div className="bg-zinc-900 text-white px-6 py-3 text-center">
              <div className="flex items-center justify-center gap-2 text-sm">
                <svg
                  className="w-4 h-4 text-amber-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>
                  Special offer expires in{" "}
                  <span className="font-semibold text-amber-400 number-highlight">
                    {formatTime(timeLeft)}
                  </span>
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 md:p-10">
              <div className="text-center">
                <div className="badge mb-4 mx-auto">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                  One-Time Offer
                </div>

                <h2 className="heading-lg text-zinc-900 mb-3">
                  Unlock the Advanced Mastery System
                </h2>

                <p className="body-lg max-w-xl mx-auto mb-6">
                  Take your transformation to the next level with our premium
                  coaching modules, exclusive masterclasses, and VIP community access.
                </p>

                <div className="flex flex-wrap justify-center gap-4 text-sm text-zinc-500 mb-8">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-emerald-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    12 Advanced Video Modules
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-emerald-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Weekly Live Q&A Sessions
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-emerald-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    VIP Community Access
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-emerald-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Personal Progress Tracking
                  </div>
                </div>

                <div className="mb-6">
                  <span className="text-sm text-zinc-400 line-through">
                    $297 Value
                  </span>
                  <div className="text-4xl font-semibold text-zinc-900 mb-1">
                    $47
                  </div>
                  <p className="text-xs text-zinc-500">
                    84% off — Today only
                  </p>
                </div>

                <button className="btn-primary w-full sm:w-auto px-10 py-4 rounded-full text-base font-medium mb-4">
                  Upgrade My Order
                </button>

                <p className="text-xs text-zinc-400">
                  Same 30-day money-back guarantee applies
                </p>
              </div>
            </div>
          </div>

          {/* No Thanks Link */}
          <div className="text-center mt-6">
            <Link
              href="/download/toolkit"
              className="text-sm text-zinc-400 hover:text-zinc-600 transition-colors"
            >
              No thanks, take me to my downloads
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-zinc-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <div className="text-base font-semibold text-zinc-900 mb-1">
                The Comfort Effect
              </div>
              <p className="text-xs text-zinc-400">By Eula Properties LLC</p>
            </div>

            <div className="flex gap-6 text-xs text-zinc-400">
              <a href="#" className="hover:text-zinc-900 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-zinc-900 transition-colors">
                Terms of Service
              </a>
              <a
                href="mailto:info@eulaproperties.com"
                className="hover:text-zinc-900 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="divider my-8"></div>

          <div className="text-center text-xs text-zinc-400">
            &copy; 2025 Eula Properties LLC. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
