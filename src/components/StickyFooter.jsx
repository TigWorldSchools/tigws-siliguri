import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import './StickyFooter.css';

const StickyFooter = () => {
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
              <a href="tel:9733018000" className="sticky-footer-contact-item pulse-phone">
                <i className="fas fa-phone sticky-footer-icon"></i>
                <span className="sticky-footer-contact-text">9733018000</span>
              </a>
              <a href="mailto:info@tigworldschool.in" className="sticky-footer-contact-item pulse-email">
                <i className="fas fa-envelope sticky-footer-icon"></i>
                <span className="sticky-footer-contact-text">info@tigworldschool.in</span>
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyFooter;
