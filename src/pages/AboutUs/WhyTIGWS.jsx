import React, { useState, useEffect } from 'react';
import WhyTigSection from '../../components/WhyTigSection.jsx';

const WhyTIGWS = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  
  const fullText = "WHY TIGWS";

  useEffect(() => {
    const chars = fullText.split('');
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < chars.length) {
        setDisplayedText(chars.slice(0, index + 1).join(''));
        index++;
      } else {
        clearInterval(typingInterval);
        setIsTypingComplete(true);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="page-content">
      <section 
        className="page-hero d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: 'url\(/img/banner_images/page_banner.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '400px',
          position: 'relative'
        }}
      >
        <div 
          className="hero-overlay"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
          }}
        ></div>
        <div className="container text-center" style={{ position: 'relative', zIndex: 2 }}>
          <h1 
            className="display-3 text-white font-weight-bold"
            style={{ 
              fontSize: '3.2rem',
              fontWeight: '600',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
              lineHeight: '1.2'
            }}
          >
            {displayedText}
            {!isTypingComplete && <span className="cursor" style={{ animation: 'blink 1s infinite' }}>|</span>}
          </h1>
        </div>
      </section>
      
      <WhyTigSection />
    </div>
  );
};

export default WhyTIGWS;
