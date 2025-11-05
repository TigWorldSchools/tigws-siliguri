import React, { useEffect } from 'react';
import './SuccessPopup.css';

const SuccessPopup = ({ isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 4000); // Auto close after 4 seconds
      
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="success-popup-overlay" onClick={onClose}>
      <div className="success-popup" onClick={(e) => e.stopPropagation()}>
        <div className="success-icon">
          <div className="checkmark">
            <div className="checkmark-circle"></div>
            <div className="checkmark-stem"></div>
            <div className="checkmark-kick"></div>
          </div>
        </div>
        
        <h3 className="success-title">Application Submitted Successfully!</h3>
        <p className="success-message">
          Thank you for your interest in Techno India World Schools. 
          We will reach out to you shortly with further details.
        </p>
        
        <button className="success-close-btn" onClick={onClose}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default SuccessPopup;