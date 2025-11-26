import React, { useEffect, useRef, useState } from 'react';
import './LegacySection.css';

const LegacySection = () => {
  const titleRef = useRef(null);
  const timelineRef = useRef(null);
  const [visibleItems, setVisibleItems] = useState([]);

  const milestones = [
    {
      year: "1985",
      description: "Founded by the Roychowdhury brothers in West Bengal.",
      position: "top"
    },
    {
      year: "1990s",
      description: "Expanded into higher education with engineering and management colleges.",
      position: "bottom"
    },
    {
      year: "2000s",
      description: "Established a wide network of Techno India Group Public Schools across India.",
      position: "top"
    },
    {
      year: "2012",
      description: "Launched Techno India University, West Bengal – the state's first private university.",
      position: "bottom"
    },
    {
      year: "2015",
      description: "Diversified into healthcare, media, innovation, and entrepreneurship initiatives.",
      position: "top"
    },
    {
      year: "2025",
      description: "India's leading educational conglomerate with a global alumni network, educating lakhs of students every year.",
      position: "bottom"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            if (entry.target === timelineRef.current) {
              milestones.forEach((_, index) => {
                setTimeout(() => {
                  setVisibleItems(prev => [...prev, index]);
                }, index * 1000);
              });
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (timelineRef.current) observer.observe(timelineRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="legacy-section">
      <div className="legacy-container">
        <h2 ref={titleRef} className="legacy-title">LEGACY OF TIG</h2>
        <div ref={timelineRef} className="timeline-container">
          <div className="timeline-line"></div>
          {milestones.map((milestone, index) => (
            <div key={index} className={`timeline-item ${milestone.position} ${visibleItems.includes(index) ? 'visible' : ''}`} style={{ left: `${(index / (milestones.length - 1)) * 100}%` }}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-year">{milestone.year}</div>
                <div className="timeline-description">{milestone.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LegacySection;
