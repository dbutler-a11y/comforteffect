import { NextRequest, NextResponse } from "next/server";

interface ApplicationData {
  name: string;
  email: string;
  goals: string;
}

interface ValidationError {
  field: string;
  message: string;
}

function validateApplicationData(data: unknown): {
  valid: boolean;
  errors: ValidationError[];
  sanitizedData?: ApplicationData;
} {
  const errors: ValidationError[] = [];

  if (typeof data !== "object" || data === null) {
    return {
      valid: false,
      errors: [{ field: "body", message: "Invalid request body" }],
    };
  }

  const { name, email, goals } = data as Record<string, unknown>;

  // Validate name
  if (typeof name !== "string" || !name.trim()) {
    errors.push({ field: "name", message: "Name is required" });
  } else if (name.trim().length < 2) {
    errors.push({ field: "name", message: "Name must be at least 2 characters" });
  } else if (name.trim().length > 100) {
    errors.push({ field: "name", message: "Name must be less than 100 characters" });
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (typeof email !== "string" || !email.trim()) {
    errors.push({ field: "email", message: "Email is required" });
  } else if (!emailRegex.test(email.trim())) {
    errors.push({ field: "email", message: "Please enter a valid email address" });
  } else if (email.trim().length > 254) {
    errors.push({ field: "email", message: "Email is too long" });
  }

  // Validate goals
  if (typeof goals !== "string" || !goals.trim()) {
    errors.push({ field: "goals", message: "Please tell us about your goals" });
  } else if (goals.trim().length < 20) {
    errors.push({
      field: "goals",
      message: "Please provide more detail (at least 20 characters)",
    });
  } else if (goals.trim().length > 2000) {
    errors.push({
      field: "goals",
      message: "Goals description must be less than 2000 characters",
    });
  }

  if (errors.length > 0) {
    return { valid: false, errors };
  }

  // Return sanitized data
  return {
    valid: true,
    errors: [],
    sanitizedData: {
      name: (name as string).trim(),
      email: (email as string).trim().toLowerCase(),
      goals: (goals as string).trim(),
    },
  };
}

export async function POST(request: NextRequest) {
  try {
    // Parse JSON body
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid JSON in request body" },
        { status: 400 }
      );
    }

    // Validate the data
    const validation = validateApplicationData(body);

    if (!validation.valid) {
      return NextResponse.json(
        {
          error: "Validation failed",
          details: validation.errors,
        },
        { status: 400 }
      );
    }

    const { sanitizedData } = validation;

    // Here you would typically:
    // 1. Store the application in a database
    // 2. Send a notification email to the team
    // 3. Send a confirmation email to the applicant
    // 4. Add to a CRM or mailing list

    // For now, we'll log the application (in production, replace with actual storage)
    console.log("New coaching application received:", {
      ...sanitizedData,
      timestamp: new Date().toISOString(),
      ip: request.headers.get("x-forwarded-for") || "unknown",
    });

    // Simulate a small delay for realistic UX
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: "Application submitted successfully",
        data: {
          name: sanitizedData!.name,
          email: sanitizedData!.email,
          submittedAt: new Date().toISOString(),
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error processing coaching application:", error);

    return NextResponse.json(
      {
        error: "An unexpected error occurred. Please try again later.",
      },
      { status: 500 }
    );
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    { error: "Method not allowed" },
    { status: 405 }
  );
}

export async function PUT() {
  return NextResponse.json(
    { error: "Method not allowed" },
    { status: 405 }
  );
}

export async function DELETE() {
  return NextResponse.json(
    { error: "Method not allowed" },
    { status: 405 }
  );
}
