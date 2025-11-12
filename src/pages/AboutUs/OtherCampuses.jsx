import React, { useState, useEffect } from 'react';

const OtherCampuses = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  
  const fullText = "OTHER CAMPUSES";

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
    window.scrollTo(0, 0);
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
      
      <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 style={{ color: '#001845', fontWeight: '700', fontSize: '2.5rem', marginBottom: '1rem' }}>
              OUR CAMPUS NETWORK
            </h2>
            <p style={{ color: '#666', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
              Discover our world-class educational facilities across different locations
            </p>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-6 col-12">
              <div 
                className="campus-card h-100" 
                style={{ 
                  border: 'none', 
                  borderRadius: '20px', 
                  overflow: 'hidden', 
                  boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  background: 'white',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 25px 50px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.1)';
                }}
              >
                <div className="position-relative" style={{ overflow: 'hidden' }}>
                  <img 
                    src="https://tigws-demo.tigps.in/assets/img/campuses/kolkata.jpg" 
                    alt="TIGWS Kolkata Campus"
                    className="card-img-top"
                    style={{ 
                      height: '280px', 
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                  />
                  <div className="position-absolute top-0 start-0 w-100 h-100" style={{
                    background: 'linear-gradient(45deg, rgba(0,24,69,0.8) 0%, transparent 50%)',
                    opacity: 0.7
                  }}></div>
                  <div className="position-absolute top-0 end-0 m-3">
                    <span className="badge" style={{ 
                      background: 'linear-gradient(135deg, #C3AB6B, #D4AF37)', 
                      color: 'white', 
                      fontSize: '0.9rem', 
                      padding: '10px 15px',
                      borderRadius: '25px',
                      fontWeight: '600',
                      boxShadow: '0 4px 15px rgba(195,171,107,0.3)'
                    }}>
                      <i className="fas fa-university me-2"></i>Campus
                    </span>
                  </div>
                  <div className="position-absolute bottom-0 start-0 p-3">
                    <div className="badge" style={{
                      background: 'rgba(255,255,255,0.9)',
                      color: '#001845',
                      fontSize: '0.8rem',
                      padding: '8px 12px',
                      borderRadius: '15px',
                      fontWeight: '600'
                    }}>
                      <i className="fas fa-clock me-1"></i>Coming Soon
                    </div>
                  </div>
                </div>
                <div className="card-body p-4" style={{ background: 'linear-gradient(135deg, #fff 0%, #f8f9fa 100%)' }}>
                  <div className="mb-3">
                    <h3 className="card-title mb-2" style={{ 
                      color: '#001845', 
                      fontWeight: '800', 
                      fontSize: '1.6rem',
                      lineHeight: '1.2',
                      letterSpacing: '-0.5px'
                    }}>
                      TIGWS Kolkata
                    </h3>
                    <div className="d-flex align-items-center mb-3">
                      <div style={{
                        width: '40px',
                        height: '3px',
                        background: 'linear-gradient(90deg, #C3AB6B, #D4AF37)',
                        borderRadius: '2px',
                        marginRight: '10px'
                      }}></div>
                      <span style={{ 
                        color: '#C3AB6B', 
                        fontSize: '0.85rem', 
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                      }}>Cultural Capital</span>
                    </div>
                  </div>
                  <div className="mb-4" style={{
                    background: 'linear-gradient(135deg, rgba(195,171,107,0.05), rgba(212,175,55,0.05))',
                    padding: '20px',
                    borderRadius: '12px',
                    border: '1px solid rgba(195,171,107,0.1)'
                  }}>
                    <p className="card-text mb-0" style={{ 
                      color: '#444', 
                      fontSize: '1.05rem', 
                      lineHeight: '1.7',
                      fontWeight: '500',
                      margin: '0'
                    }}>
                      <i className="fas fa-quote-left" style={{ color: '#C3AB6B', fontSize: '0.8rem', marginRight: '8px' }}></i>
                      Our upcoming flagship campus in the heart of India's cultural capital, bringing world-class education to Kolkata
                      <i className="fas fa-quote-right" style={{ color: '#C3AB6B', fontSize: '0.8rem', marginLeft: '8px' }}></i>
                    </p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="text-muted small">
                      <i className="fas fa-calendar-alt me-1"></i>Launch: 2024
                    </div>
                    <button 
                      className="btn" 
                      style={{
                        background: 'linear-gradient(135deg, #C3AB6B, #D4AF37)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '25px',
                        padding: '8px 20px',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'scale(1.05)';
                        e.target.style.boxShadow = '0 8px 20px rgba(195,171,107,0.4)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'scale(1)';
                        e.target.style.boxShadow = 'none';
                      }}
                    >
                      <i className="fas fa-info-circle me-2"></i>Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 col-12">
              <div 
                className="campus-card h-100" 
                style={{ 
                  border: 'none', 
                  borderRadius: '20px', 
                  overflow: 'hidden', 
                  boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  background: 'white',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 25px 50px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.1)';
                }}
              >
                <div className="position-relative" style={{ overflow: 'hidden' }}>
                  <img 
                    src="https://tigws-demo.tigps.in/assets/img/campuses/malda.jpg" 
                    alt="TIGWS Malda Campus"
                    className="card-img-top"
                    style={{ 
                      height: '280px', 
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                  />
                  <div className="position-absolute top-0 start-0 w-100 h-100" style={{
                    background: 'linear-gradient(45deg, rgba(0,24,69,0.8) 0%, transparent 50%)',
                    opacity: 0.7
                  }}></div>
                  <div className="position-absolute top-0 end-0 m-3">
                    <span className="badge" style={{ 
                      background: 'linear-gradient(135deg, #28a745, #20c997)', 
                      color: 'white', 
                      fontSize: '0.9rem', 
                      padding: '10px 15px',
                      borderRadius: '25px',
                      fontWeight: '600',
                      boxShadow: '0 4px 15px rgba(40,167,69,0.3)'
                    }}>
                      <i className="fas fa-check-circle me-2"></i>Active
                    </span>
                  </div>
                </div>
                <div className="card-body p-4" style={{ background: 'linear-gradient(135deg, #fff 0%, #f8f9fa 100%)' }}>
                  <div className="mb-3">
                    <h3 className="card-title mb-2" style={{ 
                      color: '#001845', 
                      fontWeight: '800', 
                      fontSize: '1.6rem',
                      lineHeight: '1.2',
                      letterSpacing: '-0.5px'
                    }}>
                      TIGWS Malda
                    </h3>
                    <div className="d-flex align-items-center mb-3">
                      <div style={{
                        width: '40px',
                        height: '3px',
                        background: 'linear-gradient(90deg, #28a745, #20c997)',
                        borderRadius: '2px',
                        marginRight: '10px'
                      }}></div>
                      <span style={{ 
                        color: '#28a745', 
                        fontSize: '0.85rem', 
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                      }}>Established Campus</span>
                    </div>
                  </div>
                  <div className="mb-3" style={{
                    background: 'linear-gradient(135deg, rgba(40,167,69,0.05), rgba(32,201,151,0.05))',
                    padding: '15px',
                    borderRadius: '12px',
                    border: '1px solid rgba(40,167,69,0.1)'
                  }}>
                    <div className="d-flex align-items-start">
                      <i className="fas fa-map-marker-alt" style={{ color: '#28a745', fontSize: '1.1rem', marginTop: '2px', marginRight: '12px' }}></i>
                      <div>
                        <p className="mb-1" style={{ color: '#333', fontSize: '1rem', fontWeight: '600', lineHeight: '1.4' }}>
                          Sukhandighi, GP-Bhabuk
                        </p>
                        <p className="mb-0" style={{ color: '#666', fontSize: '0.9rem', lineHeight: '1.4' }}>
                          PO & PS Malda, 732142, Dist. Malda, West Bengal
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center" style={{
                      background: 'linear-gradient(135deg, #e3f2fd, #f3e5f5)',
                      padding: '8px 15px',
                      borderRadius: '20px',
                      border: '1px solid rgba(195,171,107,0.2)'
                    }}>
                      <i className="fas fa-phone" style={{ color: '#C3AB6B', marginRight: '8px' }}></i>
                      <span style={{ color: '#001845', fontWeight: '600', fontSize: '0.9rem' }}>8967826765</span>
                    </div>
                    <button 
                      className="btn" 
                      style={{
                        background: 'linear-gradient(135deg, #001845, #003d82)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '25px',
                        padding: '8px 20px',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'scale(1.05)';
                        e.target.style.boxShadow = '0 8px 20px rgba(0,24,69,0.4)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'scale(1)';
                        e.target.style.boxShadow = 'none';
                      }}
                    >
                      <i className="fas fa-external-link-alt me-2"></i>Visit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OtherCampuses;
