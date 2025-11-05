import React, { useState, useEffect } from 'react';
import SEOHead from '../../components/SEOHead.jsx';
import WhyTigSection from '../../components/WhyTigSection.jsx';
import LegacySection from '../../components/LegacySection.jsx';
import MissionSection from '../../components/MissionSection.jsx';
import ProgressiveDisclosure from '../../components/ProgressiveDisclosure.jsx';
import './About.css';

const cardData = [
  {
    icon: 'fas fa-school',
    title: 'World-Class Infrastructure',
    description: 'Our state-of-the-art campus features modern classrooms, advanced laboratories, well-equipped libraries, and comprehensive sports facilities.',
    image: 'img/about/world_class_infrastructure.jpg'
  },
  {
    icon: 'fas fa-trophy',
    title: 'Academic Excellence',
    description: 'Our students consistently achieve outstanding results in national and international examinations, reflecting our commitment to academic excellence and holistic development.',
    image: 'img/about/academic_excellence.jpg'
  },
  {
    icon: 'fas fa-heart',
    title: 'Holistic Development',
    description: 'We focus on nurturing every aspect of a student\'s personality - intellectual, emotional, physical, and social development through comprehensive programs and activities.',
    image: 'img/about/holistic_development.jpg'
  },
  {
    icon: 'fas fa-globe',
    title: 'Global Standards',
    description: 'Our curriculum follows international standards while maintaining strong roots in Indian values and culture, preparing students for global opportunities.',
    image: 'img/about/global_standards.jpg'
  }
];

const About = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [currentCard, setCurrentCard] = useState(0);
  
  const fullText = "ABOUT US";

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

  useEffect(() => {
    const autoSwipeInterval = setInterval(() => {
      setCurrentCard((prev) => (prev + 1) % cardData.length);
    }, 10000);

    return () => clearInterval(autoSwipeInterval);
  }, []);

  const handleHashNavigation = () => {
    const hash = window.location.hash;
    const headerHeight = 80;
    
    if (hash === '#why-tigws') {
      const element = document.getElementById('why-tigws');
      if (element) {
        const elementPosition = element.offsetTop - headerHeight;
        window.scrollTo({ top: elementPosition, behavior: 'smooth' });
      }
    } else if (hash === '#legacy') {
      const element = document.getElementById('legacy');
      if (element) {
        const elementPosition = element.offsetTop - headerHeight;
        window.scrollTo({ top: elementPosition, behavior: 'smooth' });
      }
    } else if (hash === '#other-campuses') {
      const element = document.getElementById('other-campuses');
      if (element) {
        const elementPosition = element.offsetTop - headerHeight;
        window.scrollTo({ top: elementPosition, behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Handle initial hash navigation
    handleHashNavigation();
    
    // Listen for hash changes with immediate response
    const handleHashChange = () => {
      handleHashNavigation();
    };
    
    window.addEventListener('hashchange', handleHashChange);
    
    // Listen for route changes (when clicking main About Us link)
    const handleRouteChange = () => {
      if (window.location.pathname === '/about' && !window.location.hash) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };
    
    window.addEventListener('popstate', handleRouteChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);
  
  // Also handle hash changes immediately when component updates
  useEffect(() => {
    handleHashNavigation();
  }, [window.location.hash]);

  return (
    <>
      <SEOHead 
        title="About TIGWS Siliguri - Premier All-Girls Residential School | Eastern India"
        description="Learn about Techno India Group World School Siliguri - Eastern India's premier all-girls residential school. World-class infrastructure, academic excellence, holistic development with CBSE & WACE curriculum."
        keywords="about TIGWS Siliguri, girls residential school, academic excellence, holistic development, world class infrastructure, CBSE WACE curriculum, North Bengal education"
        url="/about"
        image="/img/about/first_pic.jpg"
      />
      
      <main className="page-content">
      <section 
        className="page-hero d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: 'url(img/banner_images/page_banner.jpg)',
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
      
      <section className="py-5" style={{ backgroundColor: 'rgb(0, 24, 69)' }}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 
                className="text-center mb-5"
                style={{ 
                  fontSize: '2.5rem',
                  fontWeight: '600',
                  color: '#C3AB6B',
                  letterSpacing: '1px',
                  textTransform: 'uppercase'
                }}
              >
                TECHNO INDIA GROUP WORLD SCHOOL SILIGURI
              </h2>
            </div>
          </div>
          
          {/* Swipeable Cards Section */}
          <div className="row g-4">
            <div className="col-lg-6 col-12">
              <div 
                className="card h-100"
                style={{
                  backgroundColor: 'white',
                  border: 'none',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                }}
              >
                <img 
                  src={cardData[currentCard].image}
                  alt={cardData[currentCard].title}
                  className="card-img-top"
                  style={{
                    height: '350px',
                    objectFit: 'cover',
                    width: '100%'
                  }}
                />
              </div>
            </div>
            
            <div className="col-lg-6 col-12">
              <div 
                className="card h-100 d-flex align-items-center justify-content-center position-relative"
                style={{
                  backgroundColor: 'white',
                  border: 'none',
                  borderRadius: '20px',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                  padding: '40px',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 15px 35px rgba(195, 171, 107, 0.3)';
                  e.currentTarget.style.borderColor = '#C3AB6B';
                  const nextBtn = e.currentTarget.querySelector('.header-apply-btn');
                  if (nextBtn) {
                    nextBtn.style.background = 'linear-gradient(135deg, rgb(163, 145, 97), rgb(183, 165, 117))';
                    nextBtn.style.color = 'white';
                    nextBtn.style.transform = 'scale(1.05) translateY(-2px)';
                    nextBtn.style.boxShadow = '0 8px 25px rgba(163, 145, 97, 0.4)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                  e.currentTarget.style.borderColor = 'transparent';
                  const nextBtn = e.currentTarget.querySelector('.header-apply-btn');
                  if (nextBtn) {
                    nextBtn.style.background = 'white';
                    nextBtn.style.color = 'rgb(0, 24, 69)';
                    nextBtn.style.transform = 'scale(1) translateY(0)';
                    nextBtn.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
                  }
                }}
              >
                <div 
                  className="position-absolute"
                  style={{
                    top: '20px',
                    right: '20px'
                  }}
                >
                  <span 
                    className="header-apply-btn"
                    onClick={() => setCurrentCard((prev) => (prev + 1) % cardData.length)}
                    style={{
                      background: 'white',
                      color: 'rgb(0, 24, 69)',
                      border: '2px solid transparent',
                      padding: '8px 16px',
                      fontSize: '0.8rem',
                      fontWeight: '700',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      textShadow: 'none',
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                      position: 'relative',
                      overflow: 'hidden',
                      textTransform: 'uppercase',
                      animation: 'floatingCta 3s ease-in-out infinite',
                      textDecoration: 'none',
                      display: 'inline-block'
                    }}
                  >
                    NEXT →
                  </span>
                </div>
                
                <div className="text-start" onClick={() => setCurrentCard((prev) => (prev + 1) % cardData.length)} style={{ cursor: 'pointer' }}>
                  <div className="mb-3 text-center">
                    <i className={cardData[currentCard].icon} style={{ fontSize: '3rem', color: '#C3AB6B' }}></i>
                  </div>
                  <h3 
                    className="mb-4 text-center"
                    style={{
                      fontSize: '2rem',
                      fontWeight: '700',
                      color: '#C3AB6B',
                      lineHeight: '1.2'
                    }}
                  >
                    {cardData[currentCard].title}
                  </h3>
                  <p 
                    style={{
                      fontSize: '1.1rem',
                      lineHeight: '1.6',
                      color: 'rgb(0, 24, 69)',
                      textAlign: 'left'
                    }}
                  >
                    {cardData[currentCard].description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          
          {/* Navigation Dots */}
          <div className="row mt-4">
            <div className="col-12 text-center">
              <div className="d-flex justify-content-center align-items-center gap-2">
                {cardData.map((_, index) => (
                  <span 
                    key={index}
                    className="rounded-circle"
                    onClick={() => setCurrentCard(index)}
                    style={{
                      width: currentCard === index ? '12px' : '8px',
                      height: currentCard === index ? '12px' : '8px',
                      backgroundColor: currentCard === index ? '#C3AB6B' : 'rgba(195, 171, 107, 0.3)',
                      display: 'inline-block',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                  ></span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
      
      <MissionSection />
      
      <section className="py-5" style={{ backgroundColor: 'rgb(0, 24, 69)' }}>
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-lg-6 col-12">
              <div className="card h-100 d-flex flex-column justify-content-center" style={{ backgroundColor: 'white', border: '2px solid #C3AB6B', borderRadius: '15px', minHeight: '400px' }}>
                <div className="card-body p-4">
                  <h3 className="text-center mb-4" style={{ color: '#C3AB6B', fontSize: '2rem', fontWeight: '700' }}>
                    SHAPING FUTURES
                  </h3>
                  <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'rgb(0, 24, 69)', textAlign: 'justify' }}>
                    Techno India Group World School, Siliguri stands tall as Eastern India's foremost all-girls' residential institution, a true sanctuary of learning nestled amidst the tranquil greenery of Siliguri. With its state-of-the-art campus, modern infrastructure, and world-class amenities, the school offers a safe, inspiring, and empowering environment where excellence thrives in every form, academic achievement, character building, creativity, and holistic well-being.
                  </p>
                  <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'rgb(0, 24, 69)', textAlign: 'justify', marginTop: '20px' }}>
                    Driven by a team of passionate and accomplished educators, Techno India Group World School is committed to shaping confident, visionary young women who lead with purpose, pride, and integrity, ready to excel and make their mark on the world.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 col-12">
              <div className="card h-100" style={{ backgroundColor: 'white', border: 'none', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 8px 25px rgba(0,0,0,0.15)' }}>
                <img 
                  src="img/gallery/image_5.jpg"
                  alt="Shaping Futures"
                  className="img-fluid"
                  style={{ width: '100%', height: '538px', objectFit: 'cover', minHeight: '400px' ,maxHeight: '538spx'}}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <div id="why-tigws">
        <WhyTigSection />
      </div>
      
      <div id="legacy">
        <LegacySection />
      </div>
      
      <div id="other-campuses">
        <section className="py-5" style={{ backgroundColor: 'rgb(0, 24, 69)' }}>
          <div className="container">
            <h2 className="text-center mb-5" style={{ color: '#C3AB6B', fontSize: '2.5rem', fontWeight: '600' }}>
              OTHER CAMPUSES
            </h2>
            <div className="row g-4 justify-content-center">
              <div className="col-lg-5 col-md-6 col-12">
                <div 
                  className="position-relative overflow-hidden"
                  style={{ borderRadius: '15px', cursor: 'pointer' }}
                  onMouseEnter={(e) => {
                    const overlay = e.currentTarget.querySelector('.hover-overlay');
                    const img = e.currentTarget.querySelector('img');
                    overlay.style.opacity = '1';
                    overlay.style.transform = 'translateY(0%)';
                    img.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    const overlay = e.currentTarget.querySelector('.hover-overlay');
                    const img = e.currentTarget.querySelector('img');
                    overlay.style.opacity = '0';
                    overlay.style.transform = 'translateY(100%)';
                    img.style.transform = 'scale(1)';
                  }}
                >
                  <img 
                    src="img/campuses/tigws-malda.jpg" 
                    alt="Campus Image"
                    className="img-fluid"
                    style={{ transition: 'transform 0.6s ease' }}
                  />
                  <div 
                    className="hover-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                    style={{
                      background: 'linear-gradient(135deg, rgba(195,171,107,0.9), rgba(0,24,69,0.9))',
                      opacity: 0,
                      transform: 'translateY(100%)',
                      transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                    }}
                  >
                    <div className="text-center text-white p-4">
                      <h3 className="mb-3" style={{ fontSize: '2rem', fontWeight: '700', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
                        TIGWS Kolkata
                      </h3>
                      <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '20px' }}>
                        Our upcoming flagship campus in the cultural capital of India
                      </p>
                      <button 
                        className="hover-cta-btn"
                        style={{
                          background: 'white',
                          color: 'rgb(0, 24, 69)',
                          border: '2px solid transparent',
                          padding: '12px 25px',
                          fontSize: '14px',
                          fontWeight: '700',
                          borderRadius: '8px',
                          cursor: 'pointer',
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                          textShadow: 'none',
                          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                          position: 'relative',
                          overflow: 'hidden',
                          textTransform: 'uppercase',
                          animation: 'floatingCta 3s ease-in-out infinite',
                          textDecoration: 'none',
                          display: 'inline-block'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background = 'linear-gradient(135deg, rgb(163, 145, 97), rgb(183, 165, 117))';
                          e.target.style.color = 'white';
                          e.target.style.transform = 'scale(1.05) translateY(-2px)';
                          e.target.style.boxShadow = '0 8px 25px rgba(163, 145, 97, 0.4)';
                          e.target.style.textShadow = '0 2px 8px rgba(0, 0, 0, 0.3)';
                          e.target.style.borderColor = 'rgba(163, 145, 97, 0.8)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = 'white';
                          e.target.style.color = 'rgb(0, 24, 69)';
                          e.target.style.transform = 'scale(1) translateY(0)';
                          e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
                          e.target.style.textShadow = 'none';
                          e.target.style.borderColor = 'transparent';
                        }}
                        onMouseDown={(e) => {
                          e.target.style.transform = 'scale(0.98)';
                        }}
                        onMouseUp={(e) => {
                          e.target.style.transform = 'scale(1.05) translateY(-2px)';
                        }}
                      >
                        Coming Soon
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-5 col-md-6 col-12">
                <div 
                  className="position-relative overflow-hidden"
                  style={{ borderRadius: '15px', cursor: 'pointer' }}
                  onMouseEnter={(e) => {
                    const overlay = e.currentTarget.querySelector('.hover-overlay');
                    const img = e.currentTarget.querySelector('img');
                    overlay.style.opacity = '1';
                    overlay.style.transform = 'translateY(0%)';
                    img.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    const overlay = e.currentTarget.querySelector('.hover-overlay');
                    const img = e.currentTarget.querySelector('img');
                    overlay.style.opacity = '0';
                    overlay.style.transform = 'translateY(100%)';
                    img.style.transform = 'scale(1)';
                  }}
                >
                  <img 
                    src="img/campuses/tigws-malda.jpg" 
                    alt="Campus Image"
                    className="img-fluid"
                    style={{ transition: 'transform 0.6s ease' }}
                  />
                  <div 
                    className="hover-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                    style={{
                      background: 'linear-gradient(135deg, rgba(195,171,107,0.9), rgba(0,24,69,0.9))',
                      opacity: 0,
                      transform: 'translateY(100%)',
                      transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                    }}
                  >
                    <div className="text-center text-white p-4">
                      <h3 className="mb-3" style={{ fontSize: '1.8rem', fontWeight: '700', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
                        TIGWS Malda
                      </h3>
                      <p style={{ fontSize: '0.9rem', lineHeight: '1.5', marginBottom: '10px' }}>
                        Sukhandighi, GP-Bhabuk, PO & PS Malda, 732142, Dist. Malda, West Bengal, India
                      </p>
                      <div className="d-flex align-items-center justify-content-center mb-3">
                        <i className="fas fa-phone me-2" style={{ fontSize: '1rem' }}></i>
                        <span style={{ fontSize: '1rem', fontWeight: '600' }}>8967826765</span>
                      </div>
                      <button 
                        className="hover-cta-btn"
                        style={{
                          background: 'white',
                          color: 'rgb(0, 24, 69)',
                          border: '2px solid transparent',
                          padding: '12px 25px',
                          fontSize: '14px',
                          fontWeight: '700',
                          borderRadius: '8px',
                          cursor: 'pointer',
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                          textShadow: 'none',
                          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                          position: 'relative',
                          overflow: 'hidden',
                          textTransform: 'uppercase',
                          animation: 'floatingCta 3s ease-in-out infinite',
                          textDecoration: 'none',
                          display: 'inline-block'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background = 'linear-gradient(135deg, rgb(163, 145, 97), rgb(183, 165, 117))';
                          e.target.style.color = 'white';
                          e.target.style.transform = 'scale(1.05) translateY(-2px)';
                          e.target.style.boxShadow = '0 8px 25px rgba(163, 145, 97, 0.4)';
                          e.target.style.textShadow = '0 2px 8px rgba(0, 0, 0, 0.3)';
                          e.target.style.borderColor = 'rgba(163, 145, 97, 0.8)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = 'white';
                          e.target.style.color = 'rgb(0, 24, 69)';
                          e.target.style.transform = 'scale(1) translateY(0)';
                          e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
                          e.target.style.textShadow = 'none';
                          e.target.style.borderColor = 'transparent';
                        }}
                        onMouseDown={(e) => {
                          e.target.style.transform = 'scale(0.98)';
                        }}
                        onMouseUp={(e) => {
                          e.target.style.transform = 'scale(1.05) translateY(-2px)';
                        }}
                      >
                        Visit Campus
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      </main>
    </>
  );
};

export default About;