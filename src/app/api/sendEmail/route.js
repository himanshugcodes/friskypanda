import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const emailTemplate = ({ title, bodyContent }) => `
  <table width="100%" cellpadding="0" cellspacing="0" style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 30px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          
          <!-- HEADER -->
          <tr>
            <td align="center" style="background-color: #2b2767; padding: 30px 40px;">
              <img src="https://friskypanda.in/assets/images/logo.png" alt="Frisky Panda" style="max-height: 60px;" />
            </td>
          </tr>

          <!-- BODY -->
          <tr>
            <td style="padding: 40px; color: #000000;">
              ${bodyContent}
            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td align="center" style="background-color: #2b2767; padding: 24px 40px;">
              <!-- Social Icons -->
              <table cellpadding="0" cellspacing="0" style="margin-bottom: 14px;">
                <tr>
                  <td style="padding: 0 8px;">
                    <a href="https://www.instagram.com/friskypanda.in/" style="text-decoration: none;">
                      <img src="https://cdn-icons-png.flaticon.com/32/2111/2111463.png" alt="Instagram" width="28" height="28" style="border-radius: 50%;" />
                    </a>
                  </td>
                  <td style="padding: 0 8px;">
                    <a href="https://www.facebook.com/people/Friskypandain/61571043293795/" style="text-decoration: none;">
                      <img src="https://cdn-icons-png.flaticon.com/32/733/733547.png" alt="Facebook" width="28" height="28" style="border-radius: 50%;" />
                    </a>
                  </td>
                  
                </tr>
              </table>
              <p style="color: #ffffff; font-size: 12px; margin: 0;">
                © ${new Date().getFullYear()} Frisky Panda. All Rights Reserved.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
`;

export async function POST(req) {
  const { name, email, phone, message } = await req.json();

  try {
    // ── Email to Admin ──────────────────────────────────────────
    await resend.emails.send({
      from: "Contact Form <web@friskypanda.in>",
      to: "web@friskypanda.in",
      subject: `New Contact Form Submission from ${name}`,
      html: emailTemplate({
        title: "New Contact Request",
        bodyContent: `
          <h2 style="color: #ee5c36; margin-top: 0;">New Contact Request</h2>
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">
                <span style="color: #888; font-size: 13px;">NAME</span><br/>
                <strong style="font-size: 15px;">${name}</strong>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">
                <span style="color: #888; font-size: 13px;">EMAIL</span><br/>
                <a href="mailto:${email}" style="color: #ee5c36; font-size: 15px;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">
                <span style="color: #888; font-size: 13px;">PHONE</span><br/>
                <strong style="font-size: 15px;">${phone || "N/A"}</strong>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0;">
                <span style="color: #888; font-size: 13px;">MESSAGE</span><br/>
                <p style="font-size: 15px; margin: 8px 0 0; line-height: 1.6;">${message}</p>
              </td>
            </tr>
          </table>
          <div style="margin-top: 28px; text-align: center;">
            <a href="mailto:${email}" style="background-color: #ee5c36; color: #ffffff; padding: 12px 28px; border-radius: 6px; text-decoration: none; font-weight: bold; font-size: 14px;">
              Reply to ${name}
            </a>
          </div>
        `,
      }),
    });

    // ── Confirmation Email to User ───────────────────────────────
    await resend.emails.send({
      from: "Frisky Panda <web@friskypanda.in>",
      to: email,
      subject: `We received your message, ${name}!`,
      html: emailTemplate({
        title: "Message Received",
        bodyContent: `
          <h2 style="color: #ee5c36; margin-top: 0;">Hey ${name}, we got your message! 🎉</h2>
          <p style="font-size: 15px; line-height: 1.7; color: #333;">
            Thank you for reaching out to <strong style="color: #2b2767;">Frisky Panda</strong>. 
            We've received your message and our team will get back to you shortly.
          </p>

          <div style="background-color: #f9f9f9; border-left: 4px solid #ee5c36; padding: 16px 20px; border-radius: 4px; margin: 24px 0;">
            <p style="margin: 0; font-size: 13px; color: #888;">YOUR MESSAGE</p>
            <p style="margin: 8px 0 0; font-size: 15px; color: #333; line-height: 1.6;">${message}</p>
          </div>

          <p style="font-size: 15px; line-height: 1.7; color: #333;">
            In the meantime, feel free to explore our activities and events!
          </p>

          <div style="margin-top: 28px; text-align: center;">
            <a href="https://friskypanda.in" style="background-color: #ee5c36; color: #ffffff; padding: 12px 28px; border-radius: 6px; text-decoration: none; font-weight: bold; font-size: 14px;">
              Visit Our Website
            </a>
          </div>

          <p style="margin-top: 32px; font-size: 14px; color: #666;">
            Warm regards,<br/>
            <strong style="color: #2b2767;">The Frisky Panda Team</strong>
          </p>
        `,
      }),
    });

    return Response.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Resend error:", error);
    return Response.json({ error: "Failed to send email" }, { status: 500 });
  }
}
