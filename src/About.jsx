import React from "react";
import "./About.css";
import Nav from "./Nav";

function About() {
  return (
    <>
      <Nav />

      <div className="main-about">
        <div className="about-container">
          <h1>About Us</h1>
          <p>
            Welcome to <strong>Cake Studio</strong>, where edible art meets unforgettable flavor.
            We specialize in crafting custom cakes and confections that are as beautiful as they are delicious.
            Whether you're celebrating a birthday, wedding, baby shower, or any of life's sweet moments, our team
            is passionate about bringing your vision to life—one slice at a time.
            <br /><br />
            At Cake Studio, every creation is made from scratch using the finest ingredients,
            hand-picked for quality and taste. From elegant tiered wedding cakes to whimsical cupcakes and sculpted treats,
            we blend creativity with craftsmanship to design desserts that leave a lasting impression.
            <br /><br />
            We don’t just bake cakes—we create experiences.
            <br /><br />
            Let us make your next celebration truly extraordinary.
          </p>
        </div>

        <footer className="footer">
          <div className="footer-content">
            <h2>Cake Studio</h2>
            <p>Sweet moments, beautifully baked.</p>

            <div className="social-icons">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <img
                  src="https://img.icons8.com/?size=48&id=yGcWL8copNNQ&format=png"
                  alt="Facebook"
                />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <img
                  src="https://e7.pngegg.com/pngimages/750/461/png-clipart-instagram-application-logo-logo-computer-icons-instagram-miscellaneous-text-thumbnail.png"
                  alt="Instagram"
                />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <img
                  src="https://abs.twimg.com/responsive-web/client-web/icon-ios.77d25eba.png"
                  alt="Twitter"
                />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
              >
                <img
                  src="https://img.freepik.com/premium-vector/vector-logo-pinterest-icon-logotype-vector-social-media-icon_901408-459.jpg"
                  alt="Pinterest"
                />
              </a>
            </div>

            <p className="copyright">
              &copy; 2025 Cake Studio. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default About;
