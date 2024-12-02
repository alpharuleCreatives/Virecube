import React from "react";
import ContactUsBg from '../../assets/images/contact-us.jpeg'
import "./ContactUs.scss";

const ContactUs = () => {
  return (
    <div className="contact-us-container" style={{backgroundImage: `url(${ContactUsBg})`}}>
      <div className="form-wrapper">
        <h1>Let’s Create Something Extraordinary Together</h1>
        <p>
          Are you ready to transform your business with cutting-edge digital
          strategies and Beckn-powered innovation? Contact Virecube today, and
          let’s build a future where your business thrives in the digital age.
        </p>
        <form>
          <div className="input-group">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
          </div>
          <div className="input-group">
            <input type="text" placeholder="Business Name" required />
            <input type="text" placeholder="Service of Interest" required />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
