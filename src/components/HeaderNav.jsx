import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';


const HeaderNav = ({ logoUrl, linkUrl, altText, menuItems, onOpenModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [activeLink, setActiveLink] = useState(0);
  const [clickedItem, setClickedItem] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdowns, setMobileDropdowns] = useState({});

  
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 });
  const { ref, inView } = useInView({ threshold: 0.1 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const timer = setTimeout(() => setIsLoading(false), 1000);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  // Close menu when clicking on menu items in mobile
  const handleMobileMenuClick = (index) => {
    handleLinkClick(index);
    if (isMobile) {
      setTimeout(() => closeMenu(), 300);
    }
  };
  
  // Close menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  const handleLinkClick = (index) => {
    setClickedItem(index);
    setActiveLink(index);
    
    setTimeout(() => {
      setClickedItem(null);
    }, 200);
    
    if (navigator.vibrate) {
      navigator.vibrate(30);
    }
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

  return (
    <motion.header 
      ref={ref}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`header sticky-top ${isScrolled ? 'scrolled' : ''} ${isLoading ? 'loading' : ''}`}
    >
      <div className="header__wrapper">
        <div className="header__logo">
          <Link to="/" className="header__logo--link">
            <img src={logoUrl} alt={altText} />
          </Link>
        </div>
        
        <div className={`header__menu ${isMenuOpen ? 'mobile-open' : ''}`}>
          <div className="navigation">
            <nav className="navigation__menu">
              <ul style={{ display: 'block', listStyle: 'none', margin: 0, padding: '20px 0' }}>
                {menuItems.map((item, index) => (
                  <li 
                    key={index} 
                    className={`navigation__menu--item ${activeLink === index ? 'active' : ''} ${clickedItem === index ? 'clicked' : ''} ${item.dropdown ? 'has-dropdown' : ''} ${mobileDropdowns[index] ? 'dropdown-open' : ''}`} 
                    style={{animationDelay: `${index * 0.1}s`}}
                    onMouseEnter={() => {
                      setActiveLink(index);
                      if (item.dropdown) handleDropdownEnter(index);
                    }}
                    onMouseLeave={() => {
                      if (item.dropdown) handleDropdownLeave();
                    }}
                  >
                    {item.dropdown && isMobile ? (
                      <div 
                        className="navigation__menu--item__link"
                        onClick={() => toggleMobileDropdown(index)}
                      >
                        <span>{item.label}</span>
                        <i className="fas fa-chevron-down dropdown-arrow"></i>
                      </div>
                    ) : (
                      <Link 
                        to={item.url} 
                        className="navigation__menu--item__link"
                        onClick={() => handleMobileMenuClick(index)}
                      >
                        <span>{item.label}</span>
                        {item.dropdown && <i className="fas fa-chevron-down dropdown-arrow"></i>}
                      </Link>
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
                              <Link 
                                to={dropItem.url} 
                                className="dropdown-link"
                                onClick={() => {
                                  if (isMobile) {
                                    closeMenu();
                                    setMobileDropdowns({});
                                  }
                                }}
                              >
                                {dropItem.label}
                              </Link>
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
            <div className={`menu__trigger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
              <div className="trigger-ripple"></div>
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="mobile-backdrop" 
            onClick={closeMenu}
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

export default HeaderNav;