import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Nav from "./Nav";
function Demo() {
  return (
    <div className="main-container">
      <section className="hero-section">
        <header className="navbar">
          <img
            className="logo"
            src="https://cakestudiokannur.com/images/ftr-logo.png"
            alt="Cake Studio Logo"
          />
      <Nav/>
        </header>

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
            Cake Studio is the outcome of some visionary entrepreneurs stepping into the baking industry with a promising venture. Since the launch date back to five years, we have disrupted the way people buy bakery products.
          </p>
          <p className="about-text">
            From introducing the modern baking culture of live cake making for customers with quality raw materials imported from foreign countries to offering premium and Cake Studio only products at our bakeries, we have achieved tremendous success owing to a great deal of passion and determination.
          </p>
          <p className="about-text">
            We gave no compromise on the value of quality since the beginning with quality appliances, premium imported raw materials, hygiene confectionaries, expert bakers and staff, and internationally inspired unique recipes, all for achieving the mission and setting on a journey for a splendid vision.
          </p>
          <p className="about-text">
            Our partners travelled around the globe to understand the quality of food cultures and recipes to bring such quality to Kannur. We have a wide range of product lines consisting of flavourful cakes, palatable pastries, customized cakes on demand, photo cakes, and plenty of other delicious options for customers.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Demo;
