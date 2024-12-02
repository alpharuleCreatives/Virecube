import React from "react";
import "./BusinessVision.scss";

const BusinessVision = () => {
  return (
    <div className="business-vision-container">
      <h1>
        <span className="outline">Business Vision Solution!</span>
      </h1>
      <p className="subtitle">
        We’re not here to deliver one-size-fits-all services. We work with you
        to craft unique solutions that align with your vision.
      </p>
      <p className="description">
        At Virecube, we design digital strategies and build applications that
        adapt to your specific business needs. Our technology consulting
        services ensure you’re not just prepared for the future—you’re leading
        it.
      </p>
      <ul className="features-list">
        <li>Tailored Solutions for Every Industry</li>
        <li>End-to-End Digital Strategy</li>
        <li>Continuous Innovation</li>
        <li>Results-Driven Approach</li>
      </ul>
    </div>
  );
};

export default BusinessVision;
