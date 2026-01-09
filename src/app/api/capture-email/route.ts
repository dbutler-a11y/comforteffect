import { NextRequest, NextResponse } from "next/server";

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Valid sources for tracking where the email was captured
const VALID_SOURCES = [
  "hero-lead-magnet",
  "footer-newsletter",
  "exit-intent",
  "sidebar",
  "blog-post",
  "landing-page",
] as const;

type EmailSource = typeof VALID_SOURCES[number] | string;

interface CaptureEmailRequest {
  name: string;
  email: string;
  source: EmailSource;
}

interface CaptureEmailResponse {
  success: boolean;
  message?: string;
  error?: string;
}

export async function POST(request: NextRequest): Promise<NextResponse<CaptureEmailResponse>> {
  try {
    // Parse request body
    const body = await request.json();
    const { name, email, source } = body as CaptureEmailRequest;

    // Validate required fields
    if (!name || typeof name !== "string") {
      return NextResponse.json(
        { success: false, error: "Name is required" },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { success: false, error: "Email is required" },
        { status: 400 }
      );
    }

    if (!source || typeof source !== "string") {
      return NextResponse.json(
        { success: false, error: "Source is required" },
        { status: 400 }
      );
    }

    // Validate name length
    const trimmedName = name.trim();
    if (trimmedName.length < 1 || trimmedName.length > 100) {
      return NextResponse.json(
        { success: false, error: "Name must be between 1 and 100 characters" },
        { status: 400 }
      );
    }

    // Validate email format
    const trimmedEmail = email.trim().toLowerCase();
    if (!EMAIL_REGEX.test(trimmedEmail)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    // Validate email length
    if (trimmedEmail.length > 254) {
      return NextResponse.json(
        { success: false, error: "Email address is too long" },
        { status: 400 }
      );
    }

    // Validate source length
    const trimmedSource = source.trim();
    if (trimmedSource.length > 50) {
      return NextResponse.json(
        { success: false, error: "Invalid source" },
        { status: 400 }
      );
    }

    // TODO: Connect to Prisma to store the email
    // For now, we'll log the submission and return success
    // This will be replaced with actual database storage later

    console.log("[Email Capture]", {
      name: trimmedName,
      email: trimmedEmail,
      source: trimmedSource,
      timestamp: new Date().toISOString(),
      ip: request.headers.get("x-forwarded-for") || "unknown",
      userAgent: request.headers.get("user-agent") || "unknown",
    });

    // Simulate a small delay to prevent spam detection bypass
    await new Promise((resolve) => setTimeout(resolve, 100));

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: "Email captured successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    // Handle JSON parse errors
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { success: false, error: "Invalid request body" },
        { status: 400 }
      );
    }

    // Log unexpected errors
    console.error("[Email Capture Error]", error);

    // Return generic error response
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}

// Handle unsupported methods
export async function GET(): Promise<NextResponse<CaptureEmailResponse>> {
  return NextResponse.json(
    { success: false, error: "Method not allowed" },
    { status: 405 }
  );
}
