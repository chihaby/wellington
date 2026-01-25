import formData from "form-data";
import Mailgun from "mailgun.js";
import { NextRequest } from "next/server";

// Initialize Mailgun client
const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_API_KEY as string,
  url: "https://api.mailgun.net",
});

export async function POST(request: NextRequest) {
  try {
    const { name, email, message, token } = await request.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 }
      );
    }

    // Verify reCAPTCHA
    if (!token) {
      return new Response(
        JSON.stringify({ error: "reCAPTCHA token is missing" }),
        { status: 400 }
      );
    }

    const verifyUrl = "https://www.google.com/recaptcha/api/siteverify";
    const verifyResponse = await fetch(verifyUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    });

    const verifyData = await verifyResponse.json();

    if (!verifyData.success) {
      console.error("reCAPTCHA verification failed:", verifyData);
      return new Response(
        JSON.stringify({
          error: "reCAPTCHA verification failed",
          details: verifyData["error-codes"],
        }),
        { status: 400 }
      );
    }

    // Send email via Mailgun
    const data = {
      from: `${name} <noreply@${process.env.MAILGUN_DOMAIN}>`,
      to: "chihaby@gmail.com,christine@cmaaminc.com,cgray@wellingtonpropertyco.com,rdasilva@lohrealty.com",
      subject: "Contact Form Wellington CMA",
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      "h:Reply-To": email,
    };

    const mailgunDomain = process.env.MAILGUN_DOMAIN;
    if (!mailgunDomain) {
      throw new Error("MAILGUN_DOMAIN is not set in environment variables");
    }

    const result = await mg.messages.create(mailgunDomain, data);
    console.log("Email sent successfully:", result.id);

    return new Response(
      JSON.stringify({ success: true, messageId: result.id }),
      {
        status: 200,
      }
    );
  } catch (error: unknown) {
    let message = "Unknown error";
    if (error instanceof Error) {
      message = error.message;
      console.error("API error:", error);
    }
    return new Response(
      JSON.stringify({
        error: "Failed to send email",
        details: message,
      }),
      {
        status: 500,
      }
    );
  }
}
