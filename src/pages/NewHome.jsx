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
        title="Best Girls School in Siliguri | TIGWS - Techno India Group World School"
        description="Top-rated all-girls residential school in Siliguri, North Bengal. CBSE & WACE curriculum, world-class facilities, holistic education. Admissions open 2026-27. Call now!"
        keywords="best girls school Siliguri, residential school North Bengal, CBSE school Siliguri, WACE curriculum, all girls boarding school, Techno India Group, TIGWS Siliguri, top school West Bengal"
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
