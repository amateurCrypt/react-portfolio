const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const port = 3001; // Choose a port for your server

// Enable JSON parsing for request bodies
app.use(express.json());

// Handle form submission
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  // Optional: Validate the form fields before sending the email
  // Example validation: check if the email is in a valid format
  if (!validateEmail(email)) {
    // Return an error response
    return res.status(400).json({ error: 'Invalid email format' });
  }

  // Create a transporter object using your email provider's SMTP settings
  const transporter = nodemailer.createTransport({
    // Replace the following details with your own SMTP configuration
    host: 'smtp.office365.com',
    port: 587,
    secure: false,
    auth: {
      user: 'qasim.khokhar@hotmail.com',
      pass: 'LD[A]I0eh{;K8A{msOJ2',
    },
  });

  // Configure the email message
  const mailOptions = {
    from: email,
    to: 'qasim.khokhar@hotmail.com',
    subject: 'New message from contact form',
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      // Return an error response
      console.error('Error sending email:', error);
      return res.status(500).json({ error: 'An error occurred while sending the email' });
    }
    // Return a success response
    console.log('Email sent:', info.response);
    res.json({ message: 'Message sent successfully' });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

function validateEmail(email) {
  // This is a basic email validation function.
  // You can use a more robust validation method if needed.
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
