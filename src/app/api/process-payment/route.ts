import { NextRequest, NextResponse } from "next/server";

// PayPal API configuration - credentials must be set in environment variables
const PAYPAL_CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
const PAYPAL_CLIENT_SECRET = process.env.PAYPAL_CLIENT_SECRET;
const PAYPAL_API_URL = process.env.PAYPAL_MODE === "live"
  ? "https://api-m.paypal.com"
  : "https://api-m.sandbox.paypal.com";

// Validate configuration at startup
const isPayPalConfigured = Boolean(PAYPAL_CLIENT_ID && PAYPAL_CLIENT_SECRET);

// Get PayPal access token
async function getAccessToken(): Promise<string> {
  const auth = Buffer.from(`${PAYPAL_CLIENT_ID}:${PAYPAL_CLIENT_SECRET}`).toString("base64");

  const response = await fetch(`${PAYPAL_API_URL}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Authorization": `Basic ${auth}`,
    },
    body: "grant_type=client_credentials",
  });

  if (!response.ok) {
    throw new Error("Failed to get PayPal access token");
  }

  const data = await response.json();
  return data.access_token;
}

// Create PayPal order
async function createOrder(amount: string, productName: string) {
  const accessToken = await getAccessToken();

  const response = await fetch(`${PAYPAL_API_URL}/v2/checkout/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      intent: "CAPTURE",
      purchase_units: [
        {
          description: productName,
          amount: {
            currency_code: "USD",
            value: amount,
          },
        },
      ],
      application_context: {
        brand_name: "The Comfort Effect",
        landing_page: "NO_PREFERENCE",
        user_action: "PAY_NOW",
        return_url: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/thank-you`,
        cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/#get-started`,
      },
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    console.error("PayPal create order error:", errorData);
    throw new Error("Failed to create PayPal order");
  }

  return response.json();
}

// Capture PayPal order
async function captureOrder(orderId: string) {
  const accessToken = await getAccessToken();

  const response = await fetch(`${PAYPAL_API_URL}/v2/checkout/orders/${orderId}/capture`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    console.error("PayPal capture order error:", errorData);
    throw new Error("Failed to capture PayPal order");
  }

  return response.json();
}

export async function POST(request: NextRequest) {
  // Check if PayPal is configured before processing
  if (!isPayPalConfigured) {
    console.error("PayPal credentials not configured. Set NEXT_PUBLIC_PAYPAL_CLIENT_ID and PAYPAL_CLIENT_SECRET.");
    return NextResponse.json(
      { error: "Payment processing is not available. Please contact support." },
      { status: 503 }
    );
  }

  try {
    const body = await request.json();
    const { action, amount, productName, orderId } = body;

    if (action === "create") {
      // Create a new order
      if (!amount || !productName) {
        return NextResponse.json(
          { error: "Amount and product name are required" },
          { status: 400 }
        );
      }

      const order = await createOrder(amount, productName);
      return NextResponse.json({ orderId: order.id });
    }

    if (action === "capture") {
      // Capture an existing order
      if (!orderId) {
        return NextResponse.json(
          { error: "Order ID is required" },
          { status: 400 }
        );
      }

      const captureData = await captureOrder(orderId);

      // Here you can add additional logic like:
      // - Saving the transaction to your database
      // - Sending confirmation emails
      // - Updating user subscription status

      return NextResponse.json({
        success: true,
        transactionId: captureData.id,
        status: captureData.status,
      });
    }

    return NextResponse.json(
      { error: "Invalid action" },
      { status: 400 }
    );
  } catch (error) {
    console.error("Payment processing error:", error);
    return NextResponse.json(
      { error: "Payment processing failed" },
      { status: 500 }
    );
  }
}
