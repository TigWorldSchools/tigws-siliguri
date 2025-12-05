import React from 'react';
import './AboutSection.css';
import './MainFooter.css';

const MainCampusesSection = () => {
  const campuses = [ 
    {
      name: 'TIGWS Siliguri',
      description: 'Eastern India\'s premier all-girls residential school launching soon in Siliguri.',
      image: '/img/campuses/tigws-siliguri.jpg',
      url: '/siliguri',
      cta: 'Explore Campus'
    },
    {
      name: 'TIGWS Malda',
      description: 'Co-educational day school in Malda offering CBSE curriculum with holistic development and expert sports training.',
      image: '/img/campuses/tigws-malda.jpg',
      url: '/malda',
      cta: 'Explore Campus'
    },
    {
      name: 'TIGWS Kolkata',
      description: 'Our flagship campus in Kolkata setting new standards in global education.',
      image: '/img/campuses/master_kolkata.jpg',
      url: '/kolkata',
      cta: 'Explore Campus'
    }
  ];

  return (
    <section className="about-section campuses-section">
      <div className="about-container">
        <h2 className="about-title">OUR CAMPUSES</h2>
        
        <div className="campuses-grid">
          {campuses.map((campus, index) => (
            <div key={index} className="campus-card">
              <div className="campus-image">
                <img src={campus.image} alt={campus.name} />
              </div>
              <div className="campus-content">
                <h3 className="campus-name">{campus.name}</h3>
                <p className="campus-description">{campus.description}</p>
                <a href={campus.url} className="campus-cta">
                  {campus.cta}
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainCampusesSection;
