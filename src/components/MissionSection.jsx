import React, { memo, useCallback } from 'react';
import './MissionSection.css';
import { useLocation } from "react-router-dom";
import { getCampusConfig } from '../utils/campusConfig.js';


const MissionSection = () => {
  const { pathname } = useLocation();
  const campus = pathname.split("/")[1] || "siliguri";
  
  const campusData = getCampusConfig(campus);

  const handleCardClick = useCallback(() => {
    if (navigator.vibrate) {
      navigator.vibrate(40);
    }
  }, []);
  const mission_vission = campusData.missionVission;


  return (
    <section className="mission-section">
      <div className="mission-container">
        <div className="mission-left">
          <img
            src={`/img/about/${campus}/mission_vision.jpg`}
            alt="TIGWS Admission"
            className="mission-image"
          />
        </div>

        <div className="mission-right">
          {mission_vission.map((feature, index) => (
            <div className="mission-card" onClick={handleCardClick}>
              <div className="card-content">
                <h3 className="card-title">{feature.title}</h3>
                <p className="card-text">
                  {feature.description}
                </p>
                <button className="card-arrow">
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

};

export default MissionSection;
