import React from "react";
import ImageOne from "../../assets/images/CuttingEdgeTechnology.png"
import ImageTwo from "../../assets/images/ClientCentricApproach.png"
import ImageThree from "../../assets/images/ProvenExpertise.png"
import "./WhyVirecube.scss";

const WhyVirecube = () => {
  return (
    <div className="why-virecube-container" >
      <div className="content">
        <div className="heading-virecubewhy">Why Virecube?</div>
        <h2>Innovation is at our core</h2>
        <p className="intro">
          We don’t just deliver solutions—we create pathways for long-term
          success. At Virecube, our expert team understands the challenges of
          modern businesses and applies future-forward strategies to make sure
          you stay ahead in a rapidly changing landscape.
        </p>
        <div className="features">
          <div className="feature">
            <div className="icon">
              <img src={ImageTwo} alt="CuttingEdgeTechnology"/>
            </div>
            <h3>Cutting-Edge Technology</h3>
            <p>Always at the forefront of the latest advancements.</p>
          </div>
          <div className="feature">
            <div className="icon">
            <img src={ImageOne} alt="ClientCentricApproach"/>
            </div>
            <h3>Client-Centric Approach</h3>
            <p>Solutions built around your unique needs.</p>
          </div>
          <div className="feature">
            <div className="icon">
            <img src={ImageThree} alt="ProvenExpertise"/>
            </div>
            <h3>Proven Expertise</h3>
            <p>A track record of driving growth and innovation.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyVirecube;
