import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Log the POST request data to console
    console.log("=== APPLICATION POST REQUEST ===");
    console.log("Timestamp:", new Date().toISOString());
    console.log("Received Data:", JSON.stringify(body, null, 2));
    console.log("=== END APPLICATION POST ===");
    
    // Validate that we received data
    if (!body || Object.keys(body).length === 0) {
      return NextResponse.json(
        { error: "No data received" },
        { status: 400 }
      );
    }
    
    // You can add additional processing here (save to database, generate PDF, etc.)
    // For now, we'll just log and return success
    
    return NextResponse.json({
      success: true,
      message: "Application data received successfully",
      timestamp: new Date().toISOString(),
      fieldsReceived: Object.keys(body).length,
    });
  } catch (error) {
    console.error("Error processing application:", error);
    return NextResponse.json(
      { error: "Failed to process application" },
      { status: 500 }
    );
  }
}

