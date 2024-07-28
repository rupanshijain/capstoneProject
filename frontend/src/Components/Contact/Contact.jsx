import React from 'react';
import './Contact.css';

const Contact = () => {
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
              <li><strong>Address:</strong> 123 albert Street, Building City, ON 12345</li>
            </ul>
          </div>
          <div className="contact-form">
            <h2>Contact Form</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" required></textarea>
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
