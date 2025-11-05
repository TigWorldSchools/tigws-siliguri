import React, { useEffect, useRef } from 'react';
import './FounderSection.css';

const FounderSection = () => {
  const titleRef = useRef(null);
  const leftSectionRef = useRef(null);
  const centerSectionRef = useRef(null);
  const rightSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (leftSectionRef.current) observer.observe(leftSectionRef.current);
    if (centerSectionRef.current) observer.observe(centerSectionRef.current);
    if (rightSectionRef.current) observer.observe(rightSectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="founder-section">
      <div className="founder-container">
        <h2 ref={titleRef} className="founder-title">FOUNDER'S DESK</h2>
        <div className="founder-content">
          <div ref={leftSectionRef} className="founder-left-section">
            <h3 className="founder-perspective-title">Founder's Perspective</h3>
            <p className="founder-quotes">
              "A well-planned education system creates dynamic possibilities for students 
              to excel at a global level. To build their academic integrity in this 21st Century world,
               immense importance is given to digital learning right from the beginning"
            </p>
            <p className="founder-perspective-text">
              I envision a future where our students not only excel academically but also grow into 
              compassionate, visionary, and resilient individuals who will make a positive impact on 
              their communities and beyond. Together, we embark on a journey of transformation– nurturing 
              brilliance, and fostering a world of strong and empowered women who will shape the future not 
              only in India, but throughout the world!
            </p>
          </div>
          
          <div ref={centerSectionRef} className="founder-center-section">
            <div className="founder-image-container">
              <img 
                src="/img/principal/founder_desk.jpg" 
                alt="Sri Satyam Roychowdhury" 
                className="founder-image" 
              />
            </div>
            <div className="founder-details">
              <h4 className="founder-name">Sri Satyam Roychowdhury</h4>
              <p className="founder-designation">Founder & Managing Director Techno India Group</p>
              <p className="founder-designation">Chancellor Sister Nivedita University</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;