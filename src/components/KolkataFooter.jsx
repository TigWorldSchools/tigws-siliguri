import React from 'react';
import { motion } from 'framer-motion';
import './StickyFooter.css';

const KolkataFooter = () => {


  return (
    <>
      <motion.div 
        className="sticky-footer"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="sticky-footer-content">
          <span className="sticky-footer-text">Let's secure your child's future</span>
          <div className="arrow-animation">➤</div>
          <div className="sticky-footer-contacts">
            <a href="/kolkata" className="sticky-footer-contact-item pulse-email">
              <i className="fas fa-globe"></i>
              <span className="sticky-footer-contact-text">www.tigworldschools.com/kolkata</span>
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default KolkataFooter;
