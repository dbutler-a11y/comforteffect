"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";

function PayPalUpsellSuccessContent() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<"processing" | "success" | "error">("processing");
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    const processPayment = async () => {
      try {
        // Extract PayPal parameters from URL
        const paymentId = searchParams.get("paymentId");
        const token = searchParams.get("token");
        const payerId = searchParams.get("PayerID");

        // Log for debugging (remove in production)
        console.log("PayPal Upsell Success Parameters:", { paymentId, token, payerId });

        // If we have the required PayPal parameters, process the payment
        if (payerId && (paymentId || token)) {
          // In a real implementation, you would:
          // 1. Send these parameters to your backend
          // 2. Execute the PayPal payment
          // 3. Store upgrade details in your database
          // 4. Send confirmation email

          // Simulate API call delay
          await new Promise((resolve) => setTimeout(resolve, 1500));

          // Store upsell info in localStorage
          const upsellData = {
            paymentId: paymentId || token,
            payerId,
            timestamp: new Date().toISOString(),
            amount: 47,
            product: "Advanced Mastery System",
          };

          localStorage.setItem("comfortEffectUpsell", JSON.stringify(upsellData));

          setStatus("success");
        } else {
          // No PayPal parameters - might be direct access
          setStatus("success");
        }
      } catch (error) {
        console.error("Upsell payment processing error:", error);
        setErrorMessage(
          "There was an issue processing your upgrade. Please contact support if you were charged."
        );
        setStatus("error");
      }
    };

    processPayment();
  }, [searchParams]);

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

      {status === "processing" && (
        <section className="min-h-screen flex items-center justify-center">
          <div className="max-w-md mx-auto px-6 text-center fade-up">
            {/* Loading Spinner */}
            <div className="w-20 h-20 mx-auto mb-8 relative">
              <div className="absolute inset-0 border-4 border-zinc-100 rounded-full"></div>
              <div className="absolute inset-0 border-4 border-transparent border-t-zinc-900 rounded-full animate-spin"></div>
            </div>

            <h1 className="text-2xl font-semibold text-zinc-900 mb-3">
              Processing Your Upgrade
            </h1>
            <p className="text-zinc-500">
              Please wait while we confirm your Advanced Mastery System purchase.
            </p>
          </div>
        </section>
      )}

      {status === "success" && (
        <>
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
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                VIP Upgrade Complete
              </div>

              {/* Main Headline */}
              <h1 className="heading-xl text-zinc-900 mb-4">
                Welcome to Advanced Mastery!
              </h1>

              {/* Subheadline */}
              <p className="body-lg max-w-xl mx-auto">
                You now have access to our complete Advanced Mastery System.
                You&apos;re taking your transformation to the next level.
              </p>
            </div>
          </section>

          {/* What You Unlocked Section */}
          <section className="py-8">
            <div className="max-w-3xl mx-auto px-6">
              <div className="card-elevated rounded-2xl p-6 md:p-8">
                <h2 className="text-lg font-semibold text-zinc-900 mb-6 text-center">
                  What You&apos;ve Unlocked
                </h2>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-4 bg-zinc-50 rounded-xl">
                    <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-amber-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-zinc-900 mb-1">
                        12 Advanced Video Modules
                      </h3>
                      <p className="text-xs text-zinc-500">
                        Deep-dive training on mastering confidence in any situation
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-zinc-50 rounded-xl">
                    <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-amber-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-zinc-900 mb-1">
                        VIP Community Access
                      </h3>
                      <p className="text-xs text-zinc-500">
                        Connect with fellow high-achievers in our exclusive group
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-zinc-50 rounded-xl">
                    <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-amber-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-zinc-900 mb-1">
                        Weekly Live Q&A Sessions
                      </h3>
                      <p className="text-xs text-zinc-500">
                        Get personalized guidance and answers to your questions
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-zinc-50 rounded-xl">
                    <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-amber-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-zinc-900 mb-1">
                        Personal Progress Tracking
                      </h3>
                      <p className="text-xs text-zinc-500">
                        Track your journey with our advanced progress dashboard
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Order Summary */}
          <section className="py-8">
            <div className="max-w-xl mx-auto px-6">
              <div className="card-elevated rounded-2xl p-6 md:p-8">
                <h2 className="text-lg font-semibold text-zinc-900 mb-6">
                  Upgrade Summary
                </h2>

                <div className="space-y-4">
                  <div className="flex justify-between items-start pb-4 border-b border-zinc-100">
                    <div>
                      <div className="text-base font-medium text-zinc-900">
                        Advanced Mastery System
                      </div>
                      <div className="text-sm text-zinc-500 mt-1">
                        VIP upgrade package
                      </div>
                    </div>
                    <div className="text-base font-semibold text-zinc-900">$47.00</div>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-500">Access Type</span>
                    <span className="text-zinc-900">Lifetime Access</span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-500">Status</span>
                    <span className="text-emerald-600 font-medium">Active</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Next Steps */}
          <section className="section-padding bg-zinc-50">
            <div className="max-w-3xl mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="heading-lg text-zinc-900 mb-4">
                  What&apos;s Next
                </h2>
                <p className="body-lg max-w-xl mx-auto">
                  Here&apos;s how to get started with your Advanced Mastery System.
                </p>
              </div>

              <div className="space-y-6">
                <div className="card-elevated rounded-xl p-6 md:p-8">
                  <div className="flex gap-5">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-zinc-900 text-white rounded-full flex items-center justify-center text-sm font-medium">
                        1
                      </div>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-zinc-900 mb-2">
                        Check Your Email
                      </h3>
                      <p className="text-sm text-zinc-500 leading-relaxed">
                        We&apos;ve sent your VIP access credentials and login details to your
                        email. You&apos;ll receive links to the video modules and community.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card-elevated rounded-xl p-6 md:p-8">
                  <div className="flex gap-5">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-zinc-900 text-white rounded-full flex items-center justify-center text-sm font-medium">
                        2
                      </div>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-zinc-900 mb-2">
                        Access Your Original Downloads
                      </h3>
                      <p className="text-sm text-zinc-500 leading-relaxed mb-4">
                        Continue with your Comfort Effect bundle downloads while you wait
                        for your VIP materials.
                      </p>
                      <Link
                        href="/download/toolkit"
                        className="btn-primary inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium"
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
                    </div>
                  </div>
                </div>

                <div className="card-elevated rounded-xl p-6 md:p-8">
                  <div className="flex gap-5">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-zinc-900 text-white rounded-full flex items-center justify-center text-sm font-medium">
                        3
                      </div>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-zinc-900 mb-2">
                        Join Our Next Live Session
                      </h3>
                      <p className="text-sm text-zinc-500 leading-relaxed">
                        Our next live Q&A session details will be in your welcome email.
                        Come prepared with your questions!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Support Section */}
          <section className="py-12">
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
                  VIP Support
                </h3>
                <p className="text-sm text-zinc-500 mb-4 max-w-md mx-auto">
                  As a VIP member, you have priority access to our support team.
                  We&apos;re here to help you succeed.
                </p>
                <a
                  href="mailto:vip@comforteffect.com"
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
                  vip@comforteffect.com
                </a>
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
                    href="mailto:vip@comforteffect.com"
                    className="hover:text-zinc-900 transition-colors"
                  >
                    VIP Support
                  </a>
                </div>
              </div>

              <div className="divider my-8"></div>

              <div className="text-center text-xs text-zinc-400">
                &copy; 2025 Eula Properties LLC. All rights reserved.
              </div>
            </div>
          </footer>
        </>
      )}

      {status === "error" && (
        <section className="min-h-screen flex items-center justify-center">
          <div className="max-w-md mx-auto px-6 text-center fade-up">
            {/* Error Icon */}
            <div className="w-20 h-20 mx-auto bg-red-50 rounded-full flex items-center justify-center mb-8">
              <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>

            <h1 className="text-2xl font-semibold text-zinc-900 mb-3">
              Something Went Wrong
            </h1>
            <p className="text-zinc-500 mb-6">{errorMessage}</p>

            <div className="space-y-3">
              <a
                href="mailto:info@eulaproperties.com"
                className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium"
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
                Contact Support
              </a>

              <Link
                href="/download/toolkit"
                className="btn-secondary block w-full px-6 py-3 rounded-full text-sm font-medium"
              >
                Go to Downloads
              </Link>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

export default function PayPalUpsellSuccessPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-white flex items-center justify-center">
          <div className="max-w-md mx-auto px-6 text-center">
            <div className="w-20 h-20 mx-auto mb-8 relative">
              <div className="absolute inset-0 border-4 border-zinc-100 rounded-full"></div>
              <div className="absolute inset-0 border-4 border-transparent border-t-zinc-900 rounded-full animate-spin"></div>
            </div>
            <h1 className="text-2xl font-semibold text-zinc-900 mb-3">
              Loading...
            </h1>
          </div>
        </main>
      }
    >
      <PayPalUpsellSuccessContent />
    </Suspense>
  );
}
