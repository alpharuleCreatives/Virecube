import React from "react";
import Bolt from "../../assets/images/bolt.png"
import "./InnovatingSection.scss";

const features = [
  {
    title: "Technology Consulting",
    description: "Expert insights on emerging technologies to keep you ahead of the curve.",
  },
  {
    title: "Beckn Integration",
    description:
      "Harness the decentralized power of the Beckn protocol to create secure, real-time interactions.",
  },
  {
    title: "Digital Payments Strategy",
    description:
      "Designing future-proof strategies that align technology with business growth.",
  },
  {
    title: "Application Development",
    description:
      "Building groundbreaking, scalable applications designed for the next era of business.",
  },
];

const InnovatingSection = () => {
  return (
    <div className="innovating-section">
      <h1>Innovating Today, Leading Tomorrow!</h1>
      <div className="content">
        <div className="placeholder-box">
          {/* Placeholder for an image or video */}
        </div>
        <div className="features">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
            <div className="feature-title">{feature.title}</div>
      <div className="feature-description">{feature.description}</div>
      <div className="bottom-left-bolt"></div>
      <div className="bottom-right-bolt"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InnovatingSection;
