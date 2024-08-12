import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/contact/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const result = await response.json();
      setFormData({
        name: '',
        email: '',
        message: ''
      })
      console.log('Success:', result);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <main className="contact-main">
      <header className="contact-header">
        <h1>Contact Us</h1>
      </header>
      <section className="contact-content">
        <div className="container">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>If you have any questions or would like to discuss your project, please feel free to contact us using the form below or through the following contact details.</p>
            <ul>
              <li><strong>Phone:</strong> +1 (123) 456-7890</li>
              <li><strong>Email:</strong> info@pinewoodconstruction.com</li>
              <li><strong>Address:</strong> 123 Albert Street, Building City, ON 12345</li>
            </ul>
          </div>
          <div className="contact-form">
            <h2>Contact Form</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
              </div>
              <button type="submit" className="submit-button">Submit</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
