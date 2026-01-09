"use client";

import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { useRouter } from "next/navigation";
import { useState, useCallback } from "react";

interface PayPalButtonProps {
  amount?: string;
  productName?: string;
}

type PaymentError = {
  message: string;
  type: "create" | "capture" | "paypal";
} | null;

// Loading spinner component
function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center py-4">
      <div className="relative">
        <div className="w-8 h-8 border-2 border-zinc-200 rounded-full"></div>
        <div className="w-8 h-8 border-2 border-zinc-900 border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
      </div>
      <span className="ml-3 text-sm text-zinc-500">Loading payment options...</span>
    </div>
  );
}

export default function PayPalButton({
  amount = "17.00",
  productName = "Comfort Effect Toolkit"
}: PayPalButtonProps) {
  const router = useRouter();
  const [{ isPending, isRejected }] = usePayPalScriptReducer();
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<PaymentError>(null);

  const clearError = useCallback(() => setError(null), []);

  if (isPending) {
    return <LoadingSpinner />;
  }

  if (isRejected) {
    return (
      <div className="text-center py-4">
        <p className="text-sm text-red-500 mb-2">Failed to load payment options</p>
        <button
          onClick={() => window.location.reload()}
          className="text-sm text-zinc-600 underline hover:text-zinc-900"
        >
          Click to retry
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Error Message */}
      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex items-start gap-2">
            <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div className="flex-1">
              <p className="text-sm text-red-700">{error.message}</p>
              <button
                onClick={clearError}
                className="text-xs text-red-600 underline hover:no-underline mt-1"
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Processing State */}
      {isProcessing && (
        <div className="mb-4 p-3 bg-zinc-50 rounded-lg flex items-center justify-center gap-2">
          <div className="w-4 h-4 border-2 border-zinc-900 border-t-transparent rounded-full animate-spin"></div>
          <span className="text-sm text-zinc-600">Processing your payment...</span>
        </div>
      )}

      <PayPalButtons
        style={{
          layout: "vertical",
          color: "black",
          shape: "pill",
          label: "pay",
          height: 48,
        }}
        disabled={isProcessing}
        forceReRender={[amount, productName]}
        createOrder={async () => {
          try {
            const response = await fetch("/api/process-payment", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                action: "create",
                amount,
                productName,
              }),
            });

            const orderData = await response.json();

            if (!response.ok) {
              throw new Error(orderData.error || "Failed to create order");
            }

            return orderData.orderId;
          } catch (err) {
            console.error("Error creating order:", err);
            setError({
              message: "Failed to create order. Please try again.",
              type: "create",
            });
            throw err;
          }
        }}
        onApprove={async (data) => {
          setIsProcessing(true);
          try {
            const response = await fetch("/api/process-payment", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                action: "capture",
                orderId: data.orderID,
              }),
            });

            const orderData = await response.json();

            if (!response.ok) {
              throw new Error(orderData.error || "Failed to capture order");
            }

            // Success - redirect to thank you page
            router.push("/thank-you");
          } catch (err) {
            setIsProcessing(false);
            console.error("Error capturing order:", err);
            setError({
              message: "Payment failed. Please try again or contact support.",
              type: "capture",
            });
          }
        }}
        onError={(err) => {
          setIsProcessing(false);
          console.error("PayPal error:", err);
          setError({
            message: "An error occurred with PayPal. Please try again.",
            type: "paypal",
          });
        }}
        onCancel={() => {
          setIsProcessing(false);
        }}
      />

      <p className="text-xs text-center text-zinc-400 mt-4">
        Secure payment powered by PayPal
      </p>
    </div>
  );
}
