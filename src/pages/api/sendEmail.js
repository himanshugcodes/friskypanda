import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, phone, message } = req.body;

    // Create a transporter object
    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com", // Hostinger's SMTP server
      port: 587, // Use 587 for TLS or 465 for SSL
      secure: false, // Set to true if using port 465 (SSL)
      auth: {
        user: process.env.EMAIL_USER, // Your Hostinger email (web@friskypanda.in)
        pass: process.env.EMAIL_PASS, // Your Hostinger email password
      },
    });

    // Define the email options
    const mailOptions = {
      from: process.env.EMAIL_USER, // Must match the authenticated email (web@friskypanda.in)
      to: process.env.ADMIN_EMAIL, // Admin email to receive the form (himanshu.gupta94150@gmail.com)
      subject: `New contact form submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    };

    try {
      // Try to send the email
      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent: " + info.response);
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error while sending email:", error);
      res
        .status(500)
        .json({ message: "Error sending email", error: error.message });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
