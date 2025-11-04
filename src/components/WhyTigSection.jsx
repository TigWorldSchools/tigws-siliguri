import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './WhyTigSection.css';

const WhyTigSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [flipped, setFlipped] = useState({});
  const timers = useRef({});

  const features = [
    {
      image: "img/academics/point4.jpg",
      title: "Technology & Excellence",
      description: "Modern digital classrooms, advanced labs, and expert educators blend innovation with inspiration."
    },
    {
      image: "img/academics/point5.jpg",
      title: "Personalized Learning",
      description: "Small class sizes and strong mentorship ensure focused academic support and emotional well-being."
    },
    {
      image: "img/academics/point6.jpg",
      title: "Future-Ready Pathways",
      description: "Skill-based learning and global exposure prepare students for top universities and careers worldwide."
    },
    {
      image: "img/academics/point1.jpg",
      title: "Safe & Inclusive Campus",
      description: "24x7 care, secure facilities, and anti-bullying policies create a respectful environment for all."
    },
    {
      image: "img/academics/point2.jpg",
      title: "Global Curriculum",
      description: "Dual CBSE and Australian WACE Programme builds academic rigor and international readiness."
    },
    {
      image: "img/academics/point3.jpg",
      title: "Holistic Growth",
      description: "Sports, arts, and community initiatives develop discipline, teamwork, and leadership skills."
    }
  ];

  const handleFlip = (index, flip) => {
    if (timers.current[index]) clearTimeout(timers.current[index]);
    
    setFlipped(prev => ({ ...prev, [index]: flip }));
    
    if (flip) {
      timers.current[index] = setTimeout(() => {
        setFlipped(prev => ({ ...prev, [index]: false }));
      }, 5000);
    }
  };

  useEffect(() => {
    return () => {
      Object.values(timers.current).forEach(timer => clearTimeout(timer));
    };
  }, []);

  return (
    <section className="why-tig-section">
      <div className="why-tig-container">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="why-tig-title">Why Choose TIG World School</h2>
          <p className="why-tig-subtitle">Excellence in Education, Empowerment for Life</p>
        </motion.div>

        <div ref={ref} className="why-tig-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flip-card"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => handleFlip(index, true)}
              onMouseLeave={() => handleFlip(index, false)}
              onClick={() => handleFlip(index, !flipped[index])}
            >
              <div className={`flip-card-inner ${flipped[index] ? 'flipped' : ''}`}>
                <div className="flip-card-front">
                  <img src={feature.image} alt={feature.title} />
                  <div className="flip-card-overlay">
                    <h3>{feature.title}</h3>
                  </div>
                </div>
                <div className="flip-card-back">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyTigSection;