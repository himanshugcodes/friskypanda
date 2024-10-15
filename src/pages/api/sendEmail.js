import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, phone, message } = req.body;

    // Create a transporter object for sending emails
    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com", // Hostinger's SMTP server
      port: 465, // Use 587 for TLS or 465 for SSL
      secure: true, // Set to true if using port 465 (SSL)
      auth: {
        user: process.env.EMAIL_USER, // Your Hostinger email (web@friskypanda.in)
        pass: process.env.EMAIL_PASS, // Your Hostinger email password
      },
    });

    // Email options to send to the admin
    const adminMailOptions = {
      from: process.env.EMAIL_USER, // Must match the authenticated email (web@friskypanda.in)
      to: process.env.ADMIN_EMAIL, // Admin's email to receive the form submission
      subject: `New contact form submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    };

    // Email options to send receipt to the user
    const userMailOptions = {
      from: process.env.EMAIL_USER, // Must be the same authenticated email
      to: email, // The user's email filled in the form
      subject: "Thank you for contacting us!",
      text: `Hello ${name},\n\nThank you for getting in touch! We have received your message\n\nWe will get back to you as soon as possible.\n\nBest regards,\nFrisky Panda Team\n\n+91 90054 36999`,
    };

    try {
      // Send email to the admin
      const adminInfo = await transporter.sendMail(adminMailOptions);
      console.log("Admin email sent: " + adminInfo.response);

      // Send receipt email to the user
      const userInfo = await transporter.sendMail(userMailOptions);
      console.log("User receipt email sent: " + userInfo.response);

      // Respond with success
      res.status(200).json({ message: "Emails sent successfully" });
    } catch (error) {
      console.error("Error while sending emails:", error);
      res
        .status(500)
        .json({ message: "Error sending emails", error: error.message });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
