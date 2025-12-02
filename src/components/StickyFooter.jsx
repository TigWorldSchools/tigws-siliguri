import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import { Link, useLocation } from 'react-router-dom';
import './StickyFooter.css';
import { getCampusConfig } from '../utils/campusConfig.js';

const StickyFooter = () => {
  const { pathname } = useLocation();
  const campus = pathname.split("/")[1] || "siliguri";
  const campusData = getCampusConfig(campus);

  const [showArrowShoot, setShowArrowShoot] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [footerInView, setFooterInView] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    const interval = setInterval(() => {
      setShowArrowShoot(true);
      setTimeout(() => setShowArrowShoot(false), 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const checkFooterVisibility = () => {
      setFooterInView(window.footerInView || false);
    };

    const interval = setInterval(checkFooterVisibility, 100);
    return () => clearInterval(interval);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible || footerInView) return null;

  return (
    <AnimatePresence>
      {isVisible && !footerInView && (
        <motion.div 
          className="sticky-footer"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <button className="close-btn" onClick={handleClose}>
            <i className="fas fa-times"></i>
          </button>
          <div className="sticky-footer-content">
            <span className="sticky-footer-text">Let's secure your child's future</span>
            <div className="arrow-animation">➤</div>
            <div className="sticky-footer-contacts">
              <a href={`tel:${campusData.contact.phone}`} className="sticky-footer-contact-item pulse-phone">
                <i className="fas fa-phone sticky-footer-icon"></i>
                <span className="sticky-footer-contact-text">{campusData.contact.phone}</span>
              </a>
              <a href={`mailto:${campusData.contact.email}`} className="sticky-footer-contact-item pulse-email">
                <i className="fas fa-envelope sticky-footer-icon"></i>
                <span className="sticky-footer-contact-text">{campusData.contact.email}</span>
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyFooter;
