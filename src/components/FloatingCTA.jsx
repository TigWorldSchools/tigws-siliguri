import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './FloatingCTA.css';

const FloatingCTA = ({ onOpenModal }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Check if hero or footer is in view
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.1 });
  const { ref: footerRef, inView: footerInView } = useInView({ threshold: 0.1 });

  useEffect(() => {
    // Auto-expand after 3 seconds, then collapse after 5 seconds
    const expandTimer = setTimeout(() => setIsExpanded(true), 3000);
    const collapseTimer = setTimeout(() => setIsExpanded(false), 8000);

    return () => {
      clearTimeout(expandTimer);
      clearTimeout(collapseTimer);
    };
  }, []);

  useEffect(() => {
    // Hide in hero and footer sections
    setIsVisible(!heroInView && !footerInView);
  }, [heroInView, footerInView]);

  if (!isVisible) return (
    <>
      <div ref={heroRef} style={{ position: 'absolute', top: 0, height: '100vh', width: '1px' }} />
      <div ref={footerRef} style={{ position: 'absolute', bottom: 0, height: '1px', width: '1px' }} />
    </>
  );

  return (
    <>
      <div ref={heroRef} style={{ position: 'absolute', top: 0, height: '100vh', width: '1px' }} />
      <div ref={footerRef} style={{ position: 'absolute', bottom: 0, height: '1px', width: '1px' }} />
      
      <motion.div
        className={`floating-cta ${isExpanded ? 'expanded' : ''}`}
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
        onClick={() => {
          console.log('CTA clicked');
          onOpenModal();
        }}
      >
        <div className="cta-icon">
          <i className="fas fa-graduation-cap"></i>
        </div>
        
        <motion.div
          className="cta-text"
          initial={{ width: 0, opacity: 0 }}
          animate={{ 
            width: isExpanded ? 'auto' : 0, 
            opacity: isExpanded ? 1 : 0 
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <span>Admission Enquiry</span>
        </motion.div>

        <div className="cta-pulse"></div>
      </motion.div>
    </>
  );
};

export default FloatingCTA;