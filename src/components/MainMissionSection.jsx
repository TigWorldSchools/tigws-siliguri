import React, { memo, useCallback } from 'react';
import './MissionSection.css';
import './MainMissionSection.css';

const MainMissionSection = memo(() => {
  const handleCardClick = useCallback(() => {
    if (navigator.vibrate) {
      navigator.vibrate(40);
    }
  }, []);

  return (
    <section className="mission-section main-mission">
      <div className="mission-container">
        <div className="mission-left">
          <img
            src="/img/about/our_mission_image.jpg"
            alt="TIGWS Mission"
            className="mission-image"
          />
        </div>

        <div className="mission-right">
          <div className="mission-card" onClick={handleCardClick}>
            <div className="card-content">
              <h3 className="card-title">Our Mission</h3>
              <p className="card-text">
                To empower every student to evolve into a confident, compassionate, and visionary global citizen. 
                <br/>We nurture academic brilliance alongside emotional intelligence, creativity, and leadership, enabling learners to discover their true potential and lead lives of purpose, impact, and innovation. Rooted in inclusivity, safety, and forward-thinking pedagogy, we inspire students to shape a better world with courage and conviction.
              </p>
              <button className="card-arrow">
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>

          <div className="mission-card" onClick={handleCardClick}>
            <div className="card-content">
              <h3 className="card-title">Our Vision</h3>
              <p className="card-text">
                To establish a transformative learning environment where Eastern heritage harmonizes with Western innovation. 
                <br/>We aspire to cultivate changemakers, individuals of intellect, resilience, and influence, who transcend boundaries, drive progress, and redefine excellence on the world stage while remaining grounded in cultural integrity and values.
              </p>
              <button className="card-arrow">
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>

          <div className="mission-card" onClick={handleCardClick}>
            <div className="card-content">
              <h3 className="card-title">Global Outlook</h3>
              <p className="card-text">
                In alignment with the National Education Policy (NEP) and alongwith with accredited international academic curriculums, Techno India Group World Schools integrates international standards with Indian ethos. 
                <br/>This unique synergy equips our students with the adaptability, global competence, and moral foundation to thrive as future-ready leaders in an interconnected world.
              </p>
              <button className="card-arrow">
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default MainMissionSection;
