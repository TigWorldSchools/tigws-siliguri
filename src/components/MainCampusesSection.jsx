import React from 'react';
import './AboutSection.css';
import './MainFooter.css';

const MainCampusesSection = () => {
  const campuses = [
    {
      name: 'TIGWS Malda',
      description: 'Our established campus in Malda offers world-class education with modern facilities.',
      image: '/img/campuses/tigws-malda.jpg',
      url: '#',
      cta: 'Explore Campus'
    },
    {
      name: 'TIGWS Siliguri',
      description: 'Eastern India\'s premier all-girls residential school launching soon in Siliguri.',
      image: '/img/about/first_pic.jpg',
      url: '/siliguri',
      cta: 'Explore Campus'
    },
    {
      name: 'TIGWS Kolkata',
      description: 'Our flagship campus in Kolkata setting new standards in global education.',
      image: '/img/about/first_pic.jpg',
      url: '#',
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
