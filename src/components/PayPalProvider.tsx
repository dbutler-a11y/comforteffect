"use client";

import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { ReactNode } from "react";

interface PayPalProviderProps {
  children: ReactNode;
}

// PayPal Client ID - uses sandbox mode by default
const PAYPAL_CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "BAAb9kNx-9H5VD5hynZQZWwUUPhIGRWKwoStWifX0l55X56ranEwlxxi7lLh5p5yRyF2b-uqEa0fDbQYpI";

export default function PayPalProvider({ children }: PayPalProviderProps) {
  const initialOptions = {
    clientId: PAYPAL_CLIENT_ID,
    currency: "USD",
    intent: "capture",
    components: "buttons",
    // Enable sandbox mode for testing
    // Remove or set to false for production
    "enable-funding": "paypal",
    "disable-funding": "credit,card",
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      {children}
    </PayPalScriptProvider>
  );
}
