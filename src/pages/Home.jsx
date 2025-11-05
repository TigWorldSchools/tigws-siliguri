import React, { useState } from 'react';
import SEOHead from '../components/SEOHead.jsx';
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
      <SEOHead 
        title="TIGWS Siliguri - Premier All-Girls Residential School | Techno India Group World School"
        description="Techno India Group World School Siliguri - Eastern India's premier all-girls residential school offering CBSE & Australian WACE curriculum. Admissions open for 2026-27. Excellence in education, empowerment for life."
        keywords="TIGWS Siliguri, girls school, residential school, CBSE, WACE, Techno India Group, North Bengal, Siliguri education, all girls school, boarding school, international curriculum, admissions 2026-27"
        url="/"
        image="/img/about/first_pic.jpg"
      />
      
      <main>
        <section className="hero-section" style={{
          position: 'relative',
          overflow: 'hidden'
        }} role="banner" aria-label="Welcome to TIGWS Siliguri">
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
            <button className="hero-cta" onClick={handleCtaClick} aria-label="Open admission enquiry form for 2026-2027">
              Admission Enquiry 2026-2027
              <i className="fas fa-arrow-right hero-arrow" aria-hidden="true"></i>
            </button>
          </div>
        </section>

        <AboutSection />
        <MissionSection />
        <LegacySection />
        <FounderSection />
        <WhyTigSection />
        <ApplicationForm />
      </main>
      
      <AdmissionModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default Home;