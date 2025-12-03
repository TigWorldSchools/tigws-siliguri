import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MainHeader = ({ onOpenModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdowns, setMobileDropdowns] = useState({});

  const isMobile = useMediaQuery({ maxWidth: 768 });
  const { ref, inView } = useInView({ threshold: 0.1 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdownEnter = (index) => {
    setActiveDropdown(index);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  const toggleMobileDropdown = (index) => {
    setMobileDropdowns(prev => ({
      [index]: !prev[index]
    }));
  };

  const menuItems = [
    { label: 'Home', action: () => scrollToSection('hero') },
    { label: 'About', action: () => scrollToSection('about') },
    { label: 'Legacy', action: () => scrollToSection('legacy') },
    { label: 'Founders', action: () => scrollToSection('founders') },
    { 
      label: 'Campuses', 
      action: () => scrollToSection('campuses'),
      dropdown: [
        { label: 'TIGWS Siliguri', url: '/siliguri' },
        { label: 'TIGWS Malda', url: '/malda' },
        { label: 'TIGWS Kolkata', url: '#' }
      ]
    },
    { label: 'Contact', action: () => scrollToSection('contact') }
  ];

  return (
    <motion.header 
      ref={ref}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`header sticky-top ${isScrolled ? 'scrolled' : ''}`}
    >
      <div className="header__wrapper">
        <div className="header__logo">
          <div onClick={() => scrollToSection('hero')} className="header__logo--link" style={{ cursor: 'pointer', background: 'transparent', border: 'none', padding: 0 }}>
            <img src="/img/logo/tigws_logo.png" alt="TIGWS" />
          </div>
        </div>
        
        <div className={`header__menu ${isMenuOpen ? 'mobile-open' : ''}`}>
          <div className="navigation">
            <nav className="navigation__menu">
              <ul style={{ display: 'block', listStyle: 'none', margin: 0, padding: '20px 0' }}>
                {menuItems.map((item, index) => (
                  <li 
                    key={index} 
                    className={`navigation__menu--item ${item.dropdown ? 'has-dropdown' : ''} ${mobileDropdowns[index] ? 'dropdown-open' : ''}`}
                    onMouseEnter={() => {
                      if (item.dropdown) handleDropdownEnter(index);
                    }}
                    onMouseLeave={() => {
                      if (item.dropdown) handleDropdownLeave();
                    }}
                  >
                    {item.dropdown && isMobile ? (
                      <button 
                        className="navigation__menu--item__link"
                        onClick={() => toggleMobileDropdown(index)}
                        aria-label={`Toggle ${item.label} submenu`}
                        aria-expanded={mobileDropdowns[index] || false}
                      >
                        <span>{item.label}</span>
                        <i className="fas fa-chevron-down dropdown-arrow"></i>
                      </button>
                    ) : (
                      <button 
                        className="navigation__menu--item__link"
                        onClick={item.action}
                      >
                        <span>{item.label}</span>
                        {item.dropdown && <i className="fas fa-chevron-down dropdown-arrow"></i>}
                      </button>
                    )}
                    {item.dropdown && (
                      <div className={`dropdown-menu ${ 
                        isMobile 
                          ? (mobileDropdowns[index] ? 'show' : '') 
                          : (activeDropdown === index ? 'show' : '')
                      }`}>
                        <ul>
                          {item.dropdown.map((dropItem, dropIndex) => (
                            <li key={dropIndex} className="dropdown-item">
                              <a 
                                href={dropItem.url} 
                                className="dropdown-link"
                                onClick={() => {
                                  if (isMobile) {
                                    setIsMenuOpen(false);
                                    setMobileDropdowns({});
                                  }
                                }}
                              >
                                {dropItem.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="d-none d-lg-block" style={{ marginLeft: '20px' }}>
          <button 
            onClick={onOpenModal}
            className="header-apply-btn"
            aria-label="Open admission enquiry form"
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
          >
            Apply Now
          </button>
        </div>
        
        <div className="header__right d-lg-none">
          <div className="header__right--item">
            <button 
              className={`menu__trigger ${isMenuOpen ? 'active' : ''}`} 
              onClick={toggleMenu}
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMenuOpen}
            >
              <span></span>
              <span></span>
              <span></span>
              <div className="trigger-ripple"></div>
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="mobile-backdrop" 
            onClick={() => setIsMenuOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default MainHeader;
