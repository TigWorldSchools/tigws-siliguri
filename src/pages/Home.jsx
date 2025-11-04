import React, { useState } from 'react';
import AboutSection from '../components/AboutSection.jsx';
import MissionSection from '../components/MissionSection.jsx';
import LegacySection from '../components/LegacySection.jsx';
import FounderSection from '../components/FounderSection.jsx';
import WhyTigSection from '../components/WhyTigSection.jsx';
import ApplicationForm from '../components/ApplicationForm.jsx';
import AdmissionModal from '../components/AdmissionModal';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleCtaClick = () => {
    if (navigator.vibrate) {
      navigator.vibrate(40);
    }
    setIsModalOpen(true);
  };

  return (
    <>
      <section className="hero-section">
        <video className="hero-video" autoPlay muted loop>
          <source src="video/TIGWS_Siliguri.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-content">
          <h1 className="hero-title">Welcome to<br />Techno India Group World School</h1>
          <button className="hero-cta" onClick={handleCtaClick}>
            Admission Enquiry 2026-2027
            <i className="fas fa-arrow-right hero-arrow"></i>
          </button>
        </div>
      </section>

      <AboutSection />
      <MissionSection />
      <LegacySection />
      <FounderSection />
      <WhyTigSection />
      <ApplicationForm />
      
      <AdmissionModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default Home;