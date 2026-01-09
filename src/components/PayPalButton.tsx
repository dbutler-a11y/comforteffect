"use client";

import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface PayPalButtonProps {
  amount?: string;
  productName?: string;
}

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
        createOrder={async (data, actions) => {
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
          } catch (error) {
            console.error("Error creating order:", error);
            alert("Failed to create order. Please try again.");
            throw error;
          }
        }}
        onApprove={async (data, actions) => {
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
          } catch (error) {
            setIsProcessing(false);
            console.error("Error capturing order:", error);
            alert("Payment failed. Please try again or contact support.");
          }
        }}
        onError={(err) => {
          setIsProcessing(false);
          console.error("PayPal error:", err);
          alert("An error occurred with PayPal. Please try again.");
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
