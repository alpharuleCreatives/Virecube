import React from "react";
import BlobImage from '../../assets/images/blob-icon.png'
import BecknPowerLogoVertical from '../../assets/images/becknPowerLogoVertical.png'
import "./DecentralizedFuture.scss";

const DecentralizedFuture = () => {
    return (
        <div className="decentralized-container">
            <div className="decentralized-container-inner-upper-outer-logo">
                <div className="left-section">
                    <img src={BecknPowerLogoVertical} />
                </div>
            </div>
            <div className="decentralized-container-inner-upper-outer-content">
                <div className="decentralized-container-inner-upper">
                    <div className="decentralized-container-inner-upper2">
                        <div className="section-left"></div>
                        <div className="section-right">
                            <div className="section-right-inner">
                                The <span className="highlight">Decentralized</span> Future
                            </div>
                        </div>
                    </div>
                    <div className="decentralized-container-inner-upper3"></div>
                </div>
                <div className="decentralized-container-inner">

                    <div className="right-section">
                        <div className="intro-text">
                            Revolutionize Your Business with Beckn
                        </div>
                        <div className="description">
                            At Virecube, we specialize in unlocking the potential of Beckn, a decentralized
                            protocol that empowers businesses with secure, real-time engagement.
                            Imagine seamless connectivity across all channels, creating hyper-local
                            experiences that truly resonate with your customers.
                        </div>
                        <div className="sub-heading">
                            Transforming complexity into simplicity!
                        </div>
                        <ul className="features">
                            <li>Hyper-Local Solutions: Deliver personalized services in real time.</li>
                            <li>Seamless Integration: Easily incorporate Beckn into your existing systems.</li>
                            <li>Customer-First Approach: Create meaningful connections at scale.</li>
                        </ul>
                        <button className="learn-more">Learn More</button>
                    </div>
                    <div className="decentralized-container-inner3">
                        <div className="blob">
                            <img src={BlobImage} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DecentralizedFuture;
