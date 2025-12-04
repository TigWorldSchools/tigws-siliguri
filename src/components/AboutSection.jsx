import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AboutSection.css';
import { getCampusConfig } from '../utils/campusConfig.js';

const AboutSection = ({ campus = 'siliguri' }) => {
  const campusData = getCampusConfig(campus);
  const navigate = useNavigate();
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const [showCta, setShowCta] = useState(false);
  const hasAnimatedRef = useRef(false);
  
  const fullText = campusData.about.description;
  const imageURL = campusData.about.aboutImage;


  const handleCtaClick = () => {
    if (navigator.vibrate) {
      navigator.vibrate(40);
    }
    navigate(`/${campus}/about`);
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
        <h2 id="about-title" ref={titleRef} className="about-title">{campusData.fullName.toUpperCase()}</h2>
        <div className="about-content">
          <div className="about-left-section">
            <div className="about-text-wrapper">
              <p className="about-text">
                {fullText}
              </p>
              {campus !== 'kolkata' && showCta && (
                <button
                  className="about-cta fade-in-cta"
                  onClick={handleCtaClick}
                  aria-label={`Read more about TIGWS ${campus}`}
                >
                  Read More
                  <i className="fas fa-arrow-right cta-arrow" aria-hidden="true"></i>
                </button>
              )}
            </div>
          </div>
          <div ref={imageRef} className="about-right-section">
            <div className="about-image-container">
              <img 
                src={imageURL} 
                alt={`TIGWS ${campus} campus building showcasing modern architecture and green surroundings`} 
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

export default AboutSection;
