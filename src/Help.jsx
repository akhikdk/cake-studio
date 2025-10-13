import React from "react";
import "./Help.css";
import Nav from "./Nav";

function Help() {
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

  
      <section className="help-section">
        <div className="help-wrapper">
          <h1 className="help-title">Help & Support</h1>
          <p className="help-subtitle">Have questions? We're here to help.</p>

       
          <div className="faq-list">
            <div className="faq-item">
              <h3>1. How can I place an order?</h3>
              <p>
                You can place an order by visiting our bakery in person, calling us directly, or using our website’s order form (coming soon).
              </p>
            </div>

            <div className="faq-item">
              <h3>2. Do you make custom cakes?</h3>
              <p>
                Yes! We specialize in customized cakes. You can choose the flavor, shape, decoration, and even upload photos for photo cakes.
              </p>
            </div>

            <div className="faq-item">
              <h3>3. How far in advance should I order?</h3>
              <p>
                For custom cakes, we recommend ordering at least 2–3 days in advance. For regular items, same-day orders are often available.
              </p>
            </div>

            <div className="faq-item">
              <h3>4. Do you offer delivery services?</h3>
              <p>
                Currently, we offer delivery within Kannur. Please call us for delivery availability and charges before placing your order.
              </p>
            </div>

            <div className="faq-item">
              <h3>5. Can I cancel or change my order?</h3>
              <p>
                Yes, but we require a minimum of 24 hours' notice for cancellations or changes to avoid material waste and preparation delays.
              </p>
            </div>
          </div>

         
          <div className="support-info">
            <h3>Still Need Help?</h3>
            <p>
              Contact our customer care team at <strong>+91 98765 43210</strong> or email us at <strong>support@cakestudio.com</strong>.
            </p>
            <p>
              We’re available Monday to Saturday, 9 AM to 7 PM.
            </p>
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

export default Help;
