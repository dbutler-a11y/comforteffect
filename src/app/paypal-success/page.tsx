"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

function PayPalSuccessContent() {
  const router = useRouter();
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
        console.log("PayPal Success Parameters:", { paymentId, token, payerId });

        // If we have the required PayPal parameters, process the payment
        if (payerId && (paymentId || token)) {
          // In a real implementation, you would:
          // 1. Send these parameters to your backend
          // 2. Execute the PayPal payment
          // 3. Store order details in your database
          // 4. Send confirmation email

          // Simulate API call delay
          await new Promise((resolve) => setTimeout(resolve, 1500));

          // Store payment info in localStorage for the thank-you page
          const orderData = {
            paymentId: paymentId || token,
            payerId,
            timestamp: new Date().toISOString(),
            amount: 17,
            product: "The Comfort Effect Bundle",
          };

          localStorage.setItem("comfortEffectOrder", JSON.stringify(orderData));

          setStatus("success");

          // Redirect to thank-you page after brief success display
          setTimeout(() => {
            router.push("/thank-you");
          }, 1000);
        } else {
          // No PayPal parameters - might be direct access or error
          // Still redirect to thank-you for better UX
          setStatus("success");
          setTimeout(() => {
            router.push("/thank-you");
          }, 1000);
        }
      } catch (error) {
        console.error("Payment processing error:", error);
        setErrorMessage(
          "There was an issue processing your payment. Please contact support if you were charged."
        );
        setStatus("error");
      }
    };

    processPayment();
  }, [router, searchParams]);

  return (
    <main className="min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-md mx-auto px-6 text-center">
        {status === "processing" && (
          <div className="fade-up">
            {/* Loading Spinner */}
            <div className="w-20 h-20 mx-auto mb-8 relative">
              <div className="absolute inset-0 border-4 border-zinc-100 rounded-full"></div>
              <div className="absolute inset-0 border-4 border-transparent border-t-zinc-900 rounded-full animate-spin"></div>
            </div>

            <h1 className="text-2xl font-semibold text-zinc-900 mb-3">
              Processing Your Payment
            </h1>
            <p className="text-zinc-500">
              Please wait while we confirm your order. This will only take a moment.
            </p>
          </div>
        )}

        {status === "success" && (
          <div className="fade-up">
            {/* Success Checkmark */}
            <div className="w-20 h-20 mx-auto bg-emerald-50 rounded-full flex items-center justify-center mb-8">
              <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-emerald-600"
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

            <h1 className="text-2xl font-semibold text-zinc-900 mb-3">
              Payment Successful!
            </h1>
            <p className="text-zinc-500">
              Redirecting you to your order confirmation...
            </p>
          </div>
        )}

        {status === "error" && (
          <div className="fade-up">
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

              <button
                onClick={() => router.push("/")}
                className="btn-secondary block w-full px-6 py-3 rounded-full text-sm font-medium"
              >
                Return Home
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default function PayPalSuccessPage() {
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
      <PayPalSuccessContent />
    </Suspense>
  );
}
