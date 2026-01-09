"use client";

import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { ReactNode } from "react";

interface PayPalProviderProps {
  children: ReactNode;
}

// PayPal Client ID - must be set in environment variables
const PAYPAL_CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;

if (!PAYPAL_CLIENT_ID) {
  console.error("NEXT_PUBLIC_PAYPAL_CLIENT_ID is not set. PayPal payments will not work.");
}

export default function PayPalProvider({ children }: PayPalProviderProps) {
  // If no client ID, render children without PayPal (will show error in PayPalButton)
  if (!PAYPAL_CLIENT_ID) {
    return <>{children}</>;
  }

  const initialOptions = {
    clientId: PAYPAL_CLIENT_ID,
    currency: "USD",
    intent: "capture",
    components: "buttons",
    "enable-funding": "paypal",
    "disable-funding": "credit,card",
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      {children}
    </PayPalScriptProvider>
  );
}
