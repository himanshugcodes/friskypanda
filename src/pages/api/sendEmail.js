import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, phone, message } = req.body;

    // Create a transporter object
    const transporter = nodemailer.createTransport({
      service: "gmail", // you can use any email service provider
      auth: {
        user: process.env.EMAIL_USER, // admin email
        pass: process.env.EMAIL_PASS, // admin email password
      },
    });

    // Mail options
    const mailOptions = {
      from: email,
      to: process.env.ADMIN_EMAIL, // Admin email where you want to receive the form submissions
      subject: `New contact form submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    };

    try {
      // Send email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error sending email" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
