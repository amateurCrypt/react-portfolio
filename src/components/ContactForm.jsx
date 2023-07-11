import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Optional: Validate the form fields before sending the data
    // Example validation: check if the email is in a valid format
    if (!validateEmail(formData.email)) {
      // Display error message or handle invalid email
      return;
    }

    // Display a loading message
    setResponseMessage('Sending message...');

    // Simulate sending the form data to a server (in this case, simply log the data)
    setTimeout(() => {
      console.log('Form data:', formData);

      // Display a success message
      setResponseMessage('Message sent successfully!');

      // Reset the form fields
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }, 2000); // Simulate a 2-second delay for the server response
  };

  const validateEmail = (email) => {
    // This is a basic email validation function.
    // You can use a more robust validation method if needed.
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div>

      <div className="about">
        <h1>Contact</h1>
        
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
      <div>{responseMessage}</div>
    </div>
  );
};

export default ContactForm;
