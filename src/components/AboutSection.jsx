import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AboutSection.css';

const AboutSection = () => {
  const navigate = useNavigate();
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const [showCta, setShowCta] = useState(false);
  const hasAnimatedRef = useRef(false);
  
  const fullText = "Techno India Group World School, Siliguri is Eastern India's premier all-girls' residential school, a sanctuary of learning nestled in the serene green lap of Siliguri, the socio-cultural and commercial hub of North Bengal. We are committed to nurturing confident, compassionate, and future-ready girls through an education that blends Indian values with global excellence. Our campus is a vibrant ecosystem where academic brilliance meets character building, creativity, and wellness, empowering every girl to lead with purpose, pride, and integrity.";

  const handleCtaClick = () => {
    if (navigator.vibrate) {
      navigator.vibrate(40);
    }
    navigate('/about');
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
        <h2 id="about-title" ref={titleRef} className="about-title">TECHNO INDIA GROUP WORLD SCHOOL SILIGURI</h2>
        <div className="about-content">
          <div className="about-left-section">
            <div className="about-text-wrapper">
              <p className="about-text">
                {fullText}
              </p>
              {showCta && (
                <button className="about-cta fade-in-cta" onClick={handleCtaClick} aria-label="Read more about TIGWS Siliguri">
                  Read More
                  <i className="fas fa-arrow-right cta-arrow" aria-hidden="true"></i>
                </button>
              )}
            </div>
          </div>
          <div ref={imageRef} className="about-right-section">
            <div className="about-image-container">
              <img 
                src="img/about/first_pic.jpg" 
                alt="TIGWS Siliguri campus building showcasing modern architecture and green surroundings" 
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
