import React, { useState } from 'react';
import SEOHead from '../components/SEOHead.jsx';
import MainAboutSection from '../components/MainAboutSection.jsx';
import MainMissionSection from '../components/MainMissionSection.jsx';
import LegacySection from '../components/LegacySection.jsx';
import FounderSection from '../components/FounderSection.jsx';
import MainCampusesSection from '../components/MainCampusesSection.jsx';
import AdmissionModal from '../components/AdmissionModal.jsx';
import '../components/ResponsiveHomepage.css';

const NewHome = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleCtaClick = () => {
    if (navigator.vibrate) {
      navigator.vibrate(40);
    }
    setIsModalOpen(true);
  };
  return (
    <>
      <SEOHead 
        title="Techno India Group World School - Global Education Excellence"
        description="Techno India Group World School stands as a beacon of global education, blending academic excellence with innovation across multiple campuses including Siliguri, Malda, and Kolkata."
        keywords="TIGWS, Techno India Group World School, global education, international curriculum, campuses, Siliguri, Malda, Kolkata"
        url="/"
        image="/img/about/first_pic.jpg"
      />
      
      <main>
        <section id="hero" className="hero-section" style={{
          position: 'relative',
          overflow: 'hidden'
        }} role="banner" aria-label="Welcome to TIGWS">
          <video 
            className="hero-video"
            autoPlay 
            muted 
            loop 
            playsInline
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: -1
            }}
          >
            <source src="/videos/TIGWS_Siliguri.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="hero-content">
            <h1 className="hero-title">Welcome to<br />Techno India Group World School</h1>
            <button className="hero-cta" onClick={handleCtaClick} aria-label="Open admission enquiry form">
              Admission Enquiry 2026-2027
              <i className="fas fa-arrow-right hero-arrow" aria-hidden="true"></i>
            </button>
          </div>
        </section>

        <section id="about">
          <MainAboutSection />
        </section>
        
        <section id="mission">
          <MainMissionSection />
        </section>
        
        <section id="legacy">
          <LegacySection />
        </section>
        
        <section id="founders">
          <FounderSection />
        </section>
        
        <section id="campuses">
          <MainCampusesSection />
        </section>
      </main>
      
      <AdmissionModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default NewHome;