import './LandingPage.scss'
import Header from '../components/layout/Header/Header';
import Footer from '../components/layout/Footer/Footer';
import HeroSection from '../components/HeroSection/HeroSection';
import ContactUs from '../components/ContactUs/ContactUs';
import DecentralizedFuture from '../components/DecentralizedFuture/DecentralizedFuture';
import BusinessVision from '../components/BusinessVision/BusinessVision';
import WhyVirecube from '../components/WhyVirecube/WhyVirecube';
import Testimonials from '../components/Testimonials/Testimonials';
import Roadmap from '../assets/images/roadmap.png'
import InnovatingSection from '../components/InnovatingSection/InnovatingSection';

const LandingPage = () => {
  return (
    <>
      <Header />

      <div className="landing-page">
      <HeroSection />
        <DecentralizedFuture />
        <InnovatingSection />
        <BusinessVision />
        <div className='roadmap'>
          <img src={Roadmap} />
        </div>
        <Testimonials />
        <WhyVirecube />
        <div className="future-container">
          <div className="future-text">
            Let’s Build the Future Together <span className="arrow">↗</span>
          </div>
        </div>
        <ContactUs />
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
