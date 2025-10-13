import React from "react";
import "./Contact.css";
import Nav from "./Nav";

function Contact() {
  return (
    <div className="main-container">

      <header className="navbar">
        <img
          className="logo"
          src="https://cakestudiokannur.com/images/ftr-logo.png"
          alt="Cake Studio Logo"
        />
        <Nav />
      </header>

 
      <section className="contact-section">
        <div className="contact-wrapper">
          <h1 className="contact-title">Get in Touch</h1>
          <p className="contact-subtitle">
            We'd love to hear from you! Whether you have a question, feedback, or just want to say hello.
          </p>

          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" required placeholder="Enter your name" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" required placeholder="Enter your email" />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required placeholder="Write your message here..."></textarea>
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>

          <div className="contact-info">
            <h3>Visit Us</h3>
            <p>Cake Studio, Kannur, Kerala</p>
            <p>Phone: +91 98765 43210</p>
            <p>Email: info@cakestudio.com</p>
          </div>
        </div>
      </section>

     
      <footer className="footer">
        <div className="footer-content">
          <h2>Cake Studio</h2>
          <p>Sweet moments, beautifully baked.</p>

          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <img src="https://img.icons8.com/?size=48&id=yGcWL8copNNQ&format=png" alt="Facebook" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <img src="https://e7.pngegg.com/pngimages/750/461/png-clipart-instagram-application-logo-logo-computer-icons-instagram-miscellaneous-text-thumbnail.png" alt="Instagram" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <img src="https://abs.twimg.com/responsive-web/client-web/icon-ios.77d25eba.png" alt="Twitter" />
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
              <img src="https://img.freepik.com/premium-vector/vector-logo-pinterest-icon-logotype-vector-social-media-icon_901408-459.jpg" alt="Pinterest" />
            </a>
          </div>

          <p className="copyright">
            &copy; 2025 Cake Studio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Contact;
