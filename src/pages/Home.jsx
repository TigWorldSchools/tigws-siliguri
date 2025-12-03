import React, { useState } from 'react';
import SEOHead from '../components/SEOHead.jsx';
import AboutSection from '../components/AboutSection.jsx';
import MissionSection from '../components/MissionSection.jsx';
import LegacySection from '../components/LegacySection.jsx';
import FounderSection from '../components/FounderSection.jsx';
import WhyTigSection from '../components/WhyTigSection.jsx';
import ApplicationForm from '../components/ApplicationForm.jsx';
import AdmissionModal from '../components/AdmissionModal';
import { getCampusConfig, getCampusSEO } from '../utils/campusConfig.js';

const Home = ({ campus = 'siliguri' }) => {
  const campusData = getCampusConfig(campus);
  const seoData = getCampusSEO(campus, 'home');
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
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        url={`/${campus}`}
        image={`/img/about/${campus}/first_pic.jpg`}
      />
      
      <main>
        <section className="hero-section" style={{
          position: 'relative',
          overflow: 'hidden'
        }} role="banner" aria-label={`Welcome to ${campusData.name}`}>
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
            <source src={`${campusData.bannerVideo}`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="hero-content">
            <h1 className="hero-title">{campusData.hero.title}<br/>{campusData.hero.subtitle}</h1>
            <button className="hero-cta" onClick={handleCtaClick} aria-label="Open admission enquiry form for 2026-2027">
              Admission Enquiry 2026-2027
              <i className="fas fa-arrow-right hero-arrow" aria-hidden="true"></i>
            </button>
          </div>
        </section>

        <AboutSection campus={campus} />
        <MissionSection campus={campus} />
        <LegacySection campus={campus} />
        <FounderSection campus={campus} />
        <WhyTigSection campus={campus} />
        <ApplicationForm campus={campus} />
      </main>
      
      <AdmissionModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default Home;
