import React, { useEffect, useRef, useState } from 'react';
import './AboutSection.css';

const MainAboutSection = () => {
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const [showCta, setShowCta] = useState(false);
  const hasAnimatedRef = useRef(false);
  
  const fullText = "Techno India Group World School stands as a beacon of global education, blending academic excellence with innovation. Guided by expert faculty and supported by world-class infrastructure, our sprawling campuses offer state-of-the-art labs, smart classrooms, and collaborative learning spaces. Strong industry partnerships and a focus on research prepare students for the challenges of tomorrow. With opportunities of global exposure and holistic development, Techno India Group World School nurtures curious minds into confident global citizens, setting a new benchmark far beyond the traditional boundaries of public education.";

  const handleCtaClick = () => {
    if (navigator.vibrate) {
      navigator.vibrate(40);
    }
    const element = document.getElementById('campuses');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === titleRef.current && !hasAnimatedRef.current) {
              entry.target.classList.add('animate-in');
              hasAnimatedRef.current = true;
              setTimeout(() => setShowCta(true), 500);
            }
            if (entry.target === imageRef.current) {
              entry.target.classList.add('slide-in-right');
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-section" aria-labelledby="about-title">
      <div className="about-container">
        <h2 id="about-title" ref={titleRef} className="about-title">TECHNO INDIA GROUP WORLD SCHOOL</h2>
        <div className="about-content">
          <div className="about-left-section">
            <div className="about-text-wrapper">
              <p className="about-text">
                {fullText}
              </p>
              {showCta && (
                <button className="about-cta fade-in-cta" onClick={handleCtaClick} aria-label="Explore our campuses">
                  Explore Campuses
                  <i className="fas fa-arrow-right cta-arrow" aria-hidden="true"></i>
                </button>
              )}
            </div>
          </div>
          <div ref={imageRef} className="about-right-section">
            <div className="about-image-container">
              <img 
                src="/img/about/first_pic.jpg" 
                alt="TIGWS campus building showcasing modern architecture and green surroundings" 
                className="about-image parallax-image"
                loading="lazy"
                width="600"
                height="400"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainAboutSection;
