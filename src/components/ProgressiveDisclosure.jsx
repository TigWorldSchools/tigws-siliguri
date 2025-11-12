import React, { useState } from 'react';

const ProgressiveDisclosure = () => {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleItem = (index) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const items = [
    {
      icon: 'fas fa-school',
      title: 'Premier Institution',
      summary: 'Eastern India\'s leading all-girls\' residential school in Siliguri.',
      fullText: 'Techno India Group World School, Siliguri stands as Eastern India\'s leading all-girls\' residential institution, nestled in the serene greens of Siliguri, the cultural and commercial heart of North Bengal and the North-East. Our campus provides a safe, dynamic, and future-focused environment where young women grow with confidence, purpose, and pride.'
    },
    {
      icon: 'fas fa-leaf',
      title: 'Holistic Growth',
      summary: 'Nurturing academics, wellness, creativity, and physical excellence.',
      fullText: 'Set amidst nature, the school nurtures holistic growth, harmonizing academics, wellness, creativity, and physical excellence. Our comprehensive approach ensures students develop intellectually, emotionally, physically, and spiritually in a balanced manner.'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Safety & Security',
      summary: '24×7 residential care with secure infrastructure.',
      fullText: 'Safety remains our highest priority, ensured through 24×7 residential care, secure infrastructure, and a compassionate mentorship system. Our comprehensive security measures and caring staff create a protective environment where students can focus on learning and growth.'
    },
    {
      icon: 'fas fa-trophy',
      title: 'Excellence & Achievement',
      summary: 'Sports and cultural pursuits from local to global competitions.',
      fullText: 'A vibrant mix of sports and cultural pursuits empowers students to explore their talents, from classical arts to global competitions, every achievement is valued and celebrated. We provide platforms for students to showcase their abilities and reach their full potential.'
    },
    {
      icon: 'fas fa-globe',
      title: 'Global Standards',
      summary: 'NEP-aligned CBSE curriculum with Australian WACE Programme.',
      fullText: 'With an NEP-aligned CBSE curriculum and the globally recognized Australian WACE Programme, we bridge Eastern values with Western innovation, preparing girls to dream boldly and achieve globally. Our international partnerships ensure world-class education standards.'
    },
    {
      icon: 'fas fa-heart',
      title: 'Mindful Living',
      summary: 'Limited screen-time policy for balanced, confident lives.',
      fullText: 'Our limited screen-time policy encourages focus, creativity, and emotional balance, helping students lead healthy, mindful, and confident lives. At TIG World School, we don\'t just educate; We empower girls to lead, innovate, and shape a brighter world.'
    }
  ];

  return (
    <div className="row g-3">
      {items.map((item, index) => (
        <div key={index} className="col-12">
          <div 
            className="card" 
            style={{ 
              backgroundColor: 'rgb(0, 24, 69)', 
              border: '2px solid #C3AB6B', 
              borderRadius: '15px',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onClick={() => toggleItem(index)}
          >
            <div className="card-body p-4">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <i 
                    className={item.icon} 
                    style={{ 
                      fontSize: '1.8rem', 
                      color: '#C3AB6B', 
                      marginRight: '15px' 
                    }}
                  ></i>
                  <div>
                    <h5 style={{ color: '#C3AB6B', fontWeight: '600', margin: '0' }}>
                      {item.title}
                    </h5>
                    <p style={{ 
                      color: 'white', 
                      fontSize: '1rem', 
                      lineHeight: '1.6', 
                      margin: '5px 0 0 0' 
                    }}>
                      {expandedItems[index] ? item.fullText : item.summary}
                    </p>
                  </div>
                </div>
                <i 
                  className={`fas fa-chevron-${expandedItems[index] ? 'up' : 'down'}`}
                  style={{ 
                    color: '#C3AB6B', 
                    fontSize: '1.2rem',
                    transition: 'transform 0.3s ease'
                  }}
                ></i>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProgressiveDisclosure;
