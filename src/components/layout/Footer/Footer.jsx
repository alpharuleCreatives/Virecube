import './Footer.scss';
import Logo from "../../../assets/images/vireCube_logo.svg";
import InstaLogo from "../../../assets/images/insta-logo.svg";
import XLogo from "../../../assets/images/X-logo.svg";
import FacebookLogo from "../../../assets/images/fb-logo.svg";
import Button from '../../common/Button/Button';

const Footer = () => {

  const handleAppointmentClick = () => {
    window.open('https://calendly.com/connect-virecube', '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="footer">
      {/* Main Wrapper */}
      <div className="footer__wrapper">

        {/* Upper Div */}
        <div className="footer__upper">
          <div className="footer__branding">
            <div className="footer__logo">
              <img src={Logo} alt="Virecube Logo" className="footer__logo-image" />
            </div>
            <div className="footer__company-name">Virecube</div>
          </div>
          <div className="footer__social">
            <a href="#" className="footer__icon">
              <img src={InstaLogo} alt="Instagram" className="footer__social-image" />
            </a>
            <a href="#" className="footer__icon">
              <img src={FacebookLogo} alt="Facebook" className="footer__social-image" />
            </a>
            <a href="#" className="footer__icon">
              <img src={XLogo} alt="Twitter" className="footer__social-image" />
            </a>
          </div>
        </div>

        {/* Separator Line */}
        <div className="footer__separator"></div>

        {/* Lower Div */}
        <div className="footer__lower">
          <div className="footer__links-row">
            {/* First Column */}
            <div className="footer__links">
              <a href="#" className="footer__link">About Us</a>
              <a href="#" className="footer__link">Our Services</a>
              <a href="#" className="footer__link">Case Studies</a>
            </div>

            {/* Second Column */}
            <div className="footer__links">
              <a href="#" className="footer__link">Careers</a>
              <a href="#" className="footer__link">Blog</a>
              <a href="#" className="footer__link">Contact</a>
            </div>

            {/* Third Column */}
            <div className="footer__contact">
              <div className="footer__contact-title">Contact Info:
              </div>
              <div className="footer__contact-info">connect@virecube.com </div>
             
              <Button text="Book an Appointment" onClick={handleAppointmentClick}/>
            </div>
          </div>

          {/* Fourth Div */}
          <div className="footer__copyright">
            © 2024 Virecube Consulting. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
