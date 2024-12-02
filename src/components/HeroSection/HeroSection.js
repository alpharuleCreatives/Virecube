import React from "react";
import Button from "../common/Button/Button";
import "./HeroSection.scss";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Unlock the future of
          <br />
          <span>Digital Transformation</span>
        </h1>
        <h4 className="hero-subtitle">
          Pioneering innovation with Beckn-powered solutions to drive tomorrow’s
          business success.
        </h4>
        <div className="hero-buttons">
          <Button text="Book an Appointment" />
          <Button text="Learn More" className="btn-learn-more" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
