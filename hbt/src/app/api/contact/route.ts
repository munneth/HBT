import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactFormData = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

// Email sending function for contact form
async function sendContactEmail(formData: ContactFormData) {
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
        name: "HBT Inc. Contact Form",
        address: process.env.EMAIL_USER || "your-email@gmail.com",
      },
      to: process.env.CONTACT_EMAIL || "info@hbt.com",
      subject: `New Contact Form Submission from ${formData.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Contact Details</h3>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${formData.email}">${
        formData.email
      }</a></p>
          ${
            formData.phone
              ? `<p><strong>Phone:</strong> <a href="tel:${formData.phone}">${formData.phone}</a></p>`
              : ""
          }
        </div>
        
        <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #007bff; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Message</h3>
          <p style="white-space: pre-wrap; line-height: 1.6;">${
            formData.message
          }</p>
        </div>
        
        <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
        <p style="color: #666; font-size: 14px;">
          <em>This email was sent from the HBT Inc. website contact form.</em><br>
          <strong>Submitted on:</strong> ${new Date().toLocaleString()}
        </p>
        
        <div style="margin-top: 20px; padding: 15px; background-color: #e3f2fd; border-radius: 5px;">
          <p style="margin: 0; color: #1976d2;">
            <strong>Quick Reply:</strong> Click <a href="mailto:${
              formData.email
            }?subject=Re: Your message to HBT Inc." style="color: #1976d2;">here</a> to reply directly to ${
        formData.name
      }.
          </p>
        </div>
      `,
      replyTo: formData.email, // This allows you to reply directly to the sender
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log("Contact email sent successfully:", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Error sending contact email:", error);
    return { success: false, error: error };
  }
}

export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        {
          error:
            "Missing required fields: name, email, and message are required",
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

    // Send contact email
    const emailResult = await sendContactEmail(body);

    if (emailResult.success) {
      return NextResponse.json({
        message:
          "Contact form submitted successfully. We'll get back to you soon!",
        messageId: emailResult.messageId,
      });
    } else {
      console.error("Contact email sending failed:", emailResult.error);
      return NextResponse.json(
        {
          error:
            "Failed to send contact form. Please try again later or contact us directly.",
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
