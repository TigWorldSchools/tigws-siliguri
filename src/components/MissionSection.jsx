import React, { memo, useCallback } from 'react';
import './MissionSection.css';

const MissionSection = memo(() => {
  const handleCardClick = useCallback(() => {
    if (navigator.vibrate) {
      navigator.vibrate(40);
    }
  }, []);

  return (
    <section className="mission-section">
      <div className="mission-container">
        <div className="mission-left">
          <img
            src="/img/about/mission_vision.jpg"
            alt="TIGWS Admission"
            className="mission-image"
          />
        </div>

        <div className="mission-right">
          <div className="mission-card" onClick={handleCardClick}>
            <div className="card-content">
              <h3 className="card-title">Our Mission</h3>
              <p className="card-text">
                To empower every girl to become a confident, independent, and empathetic global citizen by fostering academic excellence, emotional intelligence, and social responsibility.
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
                To create a world-class learning environment where Eastern roots meet Western innovation, preparing girls to excel on global platforms while staying deeply connected to their cultural identity.
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
                Aligned with the National Education Policy (NEP) and the internationally recognized Australian WACE Programme, TIG World School bridges global standards with Indian values.
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

export default MissionSection;
