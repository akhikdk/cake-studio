import React, { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Nav from "./Nav";

function Demo() {
  const [mode, setMode] = useState("light");

  const changeMode = () => {
    setMode(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className={`main-container ${mode}-mode`}>
      
      <section className="hero-section">
     
        <header className="navbar">
          <img
            className="logo"
            src="https://cakestudiokannur.com/images/ftr-logo.png"
            alt="Cake Studio Logo"
          />
          <Nav />
        </header>

     
        <div className="theme-toggle-wrapper">
          <label className="theme-toggle-btn">
            <input
              type="checkbox"
              onChange={changeMode}
              checked={mode === "dark"}
            />
            <span className="slider">
              <span className="icon sun">🌞</span>
              <span className="icon moon">🌙</span>
            </span>
          </label>
        </div>

       
        <div className="hero-content">
          <h1>Welcome to Cake Studio</h1>
          <p>Crafting happiness, one slice at a time.</p>
        </div>
      </section>

      <section className="about-section">
        <div className="about-wrapper">
          <h2 className="section-title">
            The Fascinating Story of the Most Loved Bakery Brand in Kerala
          </h2>

          <p className="about-text">
            Cake Studio is the outcome of some visionary entrepreneurs stepping
            into the baking industry with a promising venture. Since the launch
            date back to five years, we have disrupted the way people buy bakery
            products.
          </p>

          <p className="about-text">
            From introducing the modern baking culture of live cake making for
            customers with quality raw materials imported from foreign countries
            to offering premium and Cake Studio-only products at our bakeries,
            we have achieved tremendous success owing to a great deal of passion
            and determination.
          </p>

          <p className="about-text">
            We gave no compromise on the value of quality since the beginning
            with quality appliances, premium imported raw materials, hygiene
            confectionaries, expert bakers and staff, and internationally
            inspired unique recipes, all for achieving the mission and setting
            on a journey for a splendid vision.
          </p>

          <p className="about-text">
            Our partners travelled around the globe to understand the quality of
            food cultures and recipes to bring such quality to Kannur. We have a
            wide range of product lines consisting of flavourful cakes,
            palatable pastries, customized cakes on demand, photo cakes, and
            plenty of other delicious options for customers.
          </p>
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

export default Demo;
