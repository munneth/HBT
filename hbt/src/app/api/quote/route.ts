import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type QuoteFormData = {
  name: string;
  companyName: string;
  phone: string;
  email: string;
  pickupDate?: string;
  pickupZipcode?: string;
  deliveryDate?: string;
  deliveryZipCode?: string;
  weight?: string;
  commodity?: string;
  specialRequest?: string;
};

// Email sending function for quote form
async function sendQuoteEmail(formData: QuoteFormData) {
  try {
    // Create transporter (configure with your email service)
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || "smtp.gmail.com",
      port: parseInt(process.env.EMAIL_PORT || "587"),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER || "your-email@gmail.com",
        pass: process.env.EMAIL_PASS || "your-app-password",
      },
    });

    const mailOptions = {
      from: {
        name: "HBT Inc. Quote Request",
        address: process.env.EMAIL_USER || "your-email@gmail.com",
      },
      to: process.env.QUOTE_EMAIL || process.env.CONTACT_EMAIL || "info@hbt.com",
      subject: `New Quote Request from ${formData.name} - ${formData.companyName}`,
      html: `
        <h2>New Quote Request</h2>
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Contact Details</h3>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Company Name:</strong> ${formData.companyName}</p>
          <p><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
          <p><strong>Phone:</strong> <a href="tel:${formData.phone}">${formData.phone}</a></p>
        </div>
        
        <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #007bff; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Shipment Details</h3>
          ${formData.pickupDate ? `<p><strong>Requested Pickup Date:</strong> ${formData.pickupDate}</p>` : ""}
          ${formData.pickupZipcode ? `<p><strong>Pickup Zipcode:</strong> ${formData.pickupZipcode}</p>` : ""}
          ${formData.deliveryDate ? `<p><strong>Requested Delivery Date:</strong> ${formData.deliveryDate}</p>` : ""}
          ${formData.deliveryZipCode ? `<p><strong>Delivery Zip Code:</strong> ${formData.deliveryZipCode}</p>` : ""}
          ${formData.weight ? `<p><strong>Weight:</strong> ${formData.weight}</p>` : ""}
          ${formData.commodity ? `<p><strong>Commodity:</strong> ${formData.commodity}</p>` : ""}
        </div>

        ${formData.specialRequest ? `
        <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #28a745; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Special Request</h3>
          <p style="white-space: pre-wrap; line-height: 1.6;">${formData.specialRequest}</p>
        </div>
        ` : ""}
        
        <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
        <p style="color: #666; font-size: 14px;">
          <em>This quote request was submitted from the HBT Inc. website.</em><br>
          <strong>Submitted on:</strong> ${new Date().toLocaleString()}
        </p>
        
        <div style="margin-top: 20px; padding: 15px; background-color: #e3f2fd; border-radius: 5px;">
          <p style="margin: 0; color: #1976d2;">
            <strong>Quick Reply:</strong> Click <a href="mailto:${formData.email}?subject=Re: Your quote request to HBT Inc." style="color: #1976d2;">here</a> to reply directly to ${formData.name}.
          </p>
        </div>
      `,
      replyTo: formData.email, // This allows you to reply directly to the sender
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log("Quote email sent successfully:", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Error sending quote email:", error);
    return { success: false, error: error };
  }
}

export async function POST(request: Request) {
  try {
    const body: QuoteFormData = await request.json();

    // Validate required fields
    if (!body.name || !body.companyName || !body.email || !body.phone) {
      return NextResponse.json(
        {
          error:
            "Missing required fields: name, company name, email, and phone are required",
        },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Send quote email
    const emailResult = await sendQuoteEmail(body);

    if (emailResult.success) {
      return NextResponse.json({
        message:
          "Quote request submitted successfully. We'll send you a precise, all-in price within 24 hours!",
        messageId: emailResult.messageId,
      });
    } else {
      console.error("Quote email sending failed:", emailResult.error);
      return NextResponse.json(
        {
          error:
            "Failed to submit quote request. Please try again later or contact us directly.",
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error processing quote request:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}


