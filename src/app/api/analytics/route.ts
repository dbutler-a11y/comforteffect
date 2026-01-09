import { NextRequest, NextResponse } from "next/server";

// Analytics event types
export interface AnalyticsEvent {
  eventType: string;
  sessionDuration?: number;
  scrollDepth?: number;
  pageUrl?: string;
  referrer?: string;
  userAgent?: string;
  timestamp?: string;
  metadata?: Record<string, unknown>;
}

// Response type
interface AnalyticsResponse {
  success: boolean;
  message: string;
  eventId?: string;
}

/**
 * Generate a unique event ID
 */
function generateEventId(): string {
  return `evt_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
}

/**
 * POST /api/analytics
 * Accepts analytics event data and logs/stores it
 */
export async function POST(request: NextRequest): Promise<NextResponse<AnalyticsResponse>> {
  try {
    const body = await request.json() as AnalyticsEvent;

    // Validate required fields
    if (!body.eventType) {
      return NextResponse.json(
        { success: false, message: "eventType is required" },
        { status: 400 }
      );
    }

    // Extract additional context from request
    const userAgent = request.headers.get("user-agent") || undefined;
    const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown";

    // Build the analytics event
    const event: AnalyticsEvent & { ip: string; receivedAt: string } = {
      ...body,
      userAgent: body.userAgent || userAgent,
      timestamp: body.timestamp || new Date().toISOString(),
      ip,
      receivedAt: new Date().toISOString(),
    };

    const eventId = generateEventId();

    // Log the event (in production, this would be stored in a database)
    if (process.env.NODE_ENV === "development") {
      console.log("[Analytics Event]", {
        eventId,
        ...event,
      });
    }

    // TODO: Store in database when Prisma schema is extended
    // Example:
    // await prisma.analyticsEvent.create({
    //   data: {
    //     id: eventId,
    //     eventType: event.eventType,
    //     sessionDuration: event.sessionDuration,
    //     scrollDepth: event.scrollDepth,
    //     pageUrl: event.pageUrl,
    //     referrer: event.referrer,
    //     userAgent: event.userAgent,
    //     metadata: event.metadata ? JSON.stringify(event.metadata) : null,
    //     ip: event.ip,
    //     createdAt: new Date(event.timestamp),
    //   },
    // });

    return NextResponse.json({
      success: true,
      message: "Event recorded successfully",
      eventId,
    });
  } catch (error) {
    console.error("[Analytics Error]", error);

    return NextResponse.json(
      { success: false, message: "Failed to process analytics event" },
      { status: 500 }
    );
  }
}

/**
 * GET /api/analytics
 * Health check endpoint
 */
export async function GET(): Promise<NextResponse> {
  return NextResponse.json({
    status: "healthy",
    service: "analytics",
    timestamp: new Date().toISOString(),
  });
}
