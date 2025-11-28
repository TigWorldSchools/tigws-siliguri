import React, { useState, useEffect } from 'react';
import './AdmissionModal.css';
import { submitToGoogleSheets, createMailtoLink } from '../utils/googleSheets';

const AdmissionModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    parentName: '',
    studentName: '',
    phone: '',
    email: '',
    grade: '',
    city: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [completedFields, setCompletedFields] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      
      const handleEscape = (e) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      
      document.addEventListener('keydown', handleEscape);
      
      return () => {
        document.removeEventListener('keydown', handleEscape);
      };
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const validateEmail = (email) => {
    return email.includes('@') && email.includes('.com');
  };

  const validatePhone = (phone) => {
    return /^\d{10}$/.test(phone);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    if (value.trim()) {
      if (field === 'email') {
        setCompletedFields(prev => ({ ...prev, [field]: validateEmail(value) }));
      } else if (field === 'phone') {
        setCompletedFields(prev => ({ ...prev, [field]: validatePhone(value) }));
      } else {
        setCompletedFields(prev => ({ ...prev, [field]: true }));
      }
    } else {
      setCompletedFields(prev => ({ ...prev, [field]: false }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Track admission enquiry event
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'admission_enquiry_submit', {
        event_category: 'form_submission',
        event_label: 'modal_form',
        value: 1
      });
    }
    
    try {
      // Submit to Google Sheets with modal source
      const result = await submitToGoogleSheets({
        ...formData,
        source: 'TIGWS Modal Enquiry'
      });
      
      // Show success message
      setShowSuccess(true);
      
      // Reset form after delay
      setTimeout(() => {
        setFormData({
          parentName: '',
          studentName: '',
          phone: '',
          email: '',
          grade: '',
          city: ''
        });
        setCompletedFields({});
        setShowSuccess(false);
        onClose();
      }, 3000);
      
      // Log submission method for debugging
      console.log('Modal form submitted via:', result.method);
    } catch (error) {
      console.error('Modal form submission error:', error);
      
      // Offer mailto fallback
      const userWantsEmail = window.confirm(
        'There was an error submitting your enquiry online. Would you like to send it via email instead?'
      );
      
      if (userWantsEmail) {
        const mailtoLink = createMailtoLink({
          ...formData,
          source: 'TIGWS Modal Enquiry'
        });
        window.location.href = mailtoLink;
        
        // Still show success popup since user chose email option
        setShowSuccess(true);
        setTimeout(() => {
          setFormData({
            parentName: '',
            studentName: '',
            phone: '',
            email: '',
            grade: '',
            city: ''
          });
          setCompletedFields({});
          setShowSuccess(false);
          onClose();
        }, 3000);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  console.log('Modal render - isOpen:', isOpen);
  
  if (!isOpen) return null;

  if (showSuccess) {
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(10px)',
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: window.innerWidth <= 480 ? '20px' : '40px'
      }}>
        <div style={{
          backgroundColor: 'white',
          padding: window.innerWidth <= 480 ? '30px 20px' : '40px',
          borderRadius: window.innerWidth <= 480 ? '12px' : '15px',
          border: '3px solid #28a745',
          textAlign: 'center',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
          maxWidth: window.innerWidth <= 480 ? '280px' : '320px',
          width: '100%'
        }}>
          <div style={{ 
            fontSize: window.innerWidth <= 480 ? '2.5rem' : '3rem', 
            color: '#28a745', 
            marginBottom: window.innerWidth <= 480 ? '15px' : '20px' 
          }}>✓</div>
          <h3 style={{ 
            color: 'rgb(0, 24, 69)', 
            marginBottom: '10px',
            fontSize: window.innerWidth <= 480 ? '1.3rem' : '1.5rem'
          }}>Success!</h3>
          <p style={{ 
            color: '#666', 
            margin: 0,
            fontSize: window.innerWidth <= 480 ? '0.9rem' : '1rem'
          }}>Your enquiry has been submitted successfully.</p>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      backdropFilter: 'blur(10px)',
      zIndex: 99999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: window.innerWidth <= 480 ? '10px' : '20px'
    }} onClick={onClose}>
      <div style={{
        backgroundColor: 'white',
        padding: window.innerWidth <= 480 ? '20px' : window.innerWidth <= 768 ? '25px' : '30px',
        paddingTop: window.innerWidth <= 480 ? '35px' : window.innerWidth <= 768 ? '40px' : '30px',
        borderRadius: window.innerWidth <= 480 ? '12px' : '15px',
        border: '2px solid #C3AB6B',
        maxWidth: window.innerWidth <= 480 ? '320px' : window.innerWidth <= 768 ? '380px' : '400px',
        width: '100%',
        position: 'relative',
        maxHeight: window.innerWidth <= 768 ? '85vh' : 'auto',
        overflowY: window.innerWidth <= 768 ? 'auto' : 'visible',
        margin: window.innerWidth <= 480 ? '0 auto' : '0'
      }} onClick={(e) => e.stopPropagation()}>
        <button 
          onClick={onClose}
          aria-label="Close admission enquiry modal"
          style={{
            position: 'absolute',
            top: window.innerWidth <= 480 ? '10px' : window.innerWidth <= 768 ? '10px' : '15px',
            right: window.innerWidth <= 480 ? '10px' : window.innerWidth <= 768 ? '15px' : '15px',
            background: 'white',
            color: 'rgb(0, 24, 69)',
            border: '2px solid #C3AB6B',
            width: window.innerWidth <= 480 ? '35px' : '40px',
            height: window.innerWidth <= 480 ? '35px' : '40px',
            borderRadius: '50%',
            cursor: 'pointer',
            fontSize: window.innerWidth <= 480 ? '16px' : '18px',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
            zIndex: 10
          }}
          onMouseOver={(e) => {
            e.target.style.transform = 'scale(1.1) rotate(90deg)';
            e.target.style.background = 'linear-gradient(135deg, rgb(163, 145, 97), rgb(183, 165, 117))';
            e.target.style.color = 'white';
            e.target.style.boxShadow = '0 8px 25px rgba(163, 145, 97, 0.4)';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'scale(1) rotate(0deg)';
            e.target.style.background = 'white';
            e.target.style.color = 'rgb(0, 24, 69)';
            e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
          }}
        >
          ×
        </button>
        
        <h2 style={{
          fontSize: window.innerWidth <= 480 ? '1.3rem' : window.innerWidth <= 768 ? '1.5rem' : '1.8rem',
          fontWeight: '700',
          color: 'rgb(0, 24, 69)',
          marginBottom: window.innerWidth <= 480 ? '15px' : '20px',
          textAlign: 'center',
          marginTop: window.innerWidth <= 480 ? '5px' : '0'
        }}>Admission Enquiry</h2>

        <div>
          <form onSubmit={handleSubmit} className="admission-form">
            {/* Parent's Name and Student's Name side-by-side */}
            <div className="form-row" style={{ gap: '16px', marginBottom: window.innerWidth <= 480 ? '12px' : '18px' }}>
              <div style={{ flex: 1, position: 'relative' }}>
                <input
                  id="modal-parentName"
                  type="text"
                  className={`expanding-input ${completedFields.parentName ? 'completed' : ''}`}
                  value={formData.parentName}
                  onChange={(e) => handleInputChange('parentName', e.target.value)}
                  required
                  aria-label="Parent's name"
                />
                <label htmlFor="modal-parentName" className={`floating-label ${formData.parentName ? 'active' : ''}`}>
                  Parent's Name *
                </label>
                {completedFields.parentName && <span className="check-mark">✓</span>}
              </div>

              <div style={{ flex: 1, position: 'relative' }}>
                <input
                  id="modal-studentName"
                  type="text"
                  className={`expanding-input ${completedFields.studentName ? 'completed' : ''}`}
                  value={formData.studentName}
                  onChange={(e) => handleInputChange('studentName', e.target.value)}
                  required
                  aria-label="Student's name"
                />
                <label htmlFor="modal-studentName" className={`floating-label ${formData.studentName ? 'active' : ''}`}>
                  Student's Name *
                </label>
                {completedFields.studentName && <span className="check-mark">✓</span>}
              </div>
            </div>

            <div style={{ position: 'relative', marginBottom: window.innerWidth <= 480 ? '15px' : '20px' }}>
              <input
                id="modal-phone"
                type="tel"
                className={`expanding-input ${
                  formData.phone && validatePhone(formData.phone) ? 'completed valid' : 
                  formData.phone && !validatePhone(formData.phone) ? 'invalid' : ''
                }`}
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                required
                maxLength="10"
                pattern="[0-9]{10}"
                aria-label="Phone number"
              />
              <label htmlFor="modal-phone" className={`floating-label ${formData.phone ? 'active' : ''}`}>
                Phone Number *
              </label>
              {formData.phone && validatePhone(formData.phone) && <span className="check-mark">✓</span>}
              {formData.phone && !validatePhone(formData.phone) && <span className="error-mark">✗</span>}
            </div>

            <div style={{ position: 'relative', marginBottom: window.innerWidth <= 480 ? '15px' : '20px' }}>
              <input
                id="modal-email"
                type="email"
                className={`expanding-input ${
                  formData.email && validateEmail(formData.email) ? 'completed valid' : 
                  formData.email && !validateEmail(formData.email) ? 'invalid' : ''
                }`}
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required
                aria-label="Email address"
              />
              <label htmlFor="modal-email" className={`floating-label ${formData.email ? 'active' : ''}`}>
                Email Address *
              </label>
              {formData.email && validateEmail(formData.email) && <span className="check-mark">✓</span>}
              {formData.email && !validateEmail(formData.email) && <span className="error-mark">✗</span>}
            </div>

            <div style={{ position: 'relative', marginBottom: window.innerWidth <= 480 ? '20px' : '25px' }}>
              <select
                id="modal-grade"
                className={`expanding-input ${completedFields.grade ? 'completed' : ''}`}
                value={formData.grade}
                onChange={(e) => handleInputChange('grade', e.target.value)}
                required
                aria-label="Select grade or class"
              >
                <option value="" disabled hidden></option>
                <option value="1">Class 1</option>
                <option value="2">Class 2</option>
                <option value="3">Class 3</option>
                <option value="4">Class 4</option>
                <option value="5">Class 5</option>
                <option value="6">Class 6</option>
                <option value="7">Class 7</option>
                <option value="8">Class 8</option>
                <option value="9">Class 9</option>
                <option value="10">Class 10</option>
              </select>
              <label htmlFor="modal-grade" className={`floating-label ${formData.grade ? 'active' : ''}`}>
                Grade/Class *
              </label>
              {completedFields.grade && <span className="check-mark">✓</span>}
            </div>

            <div style={{ position: 'relative', marginBottom: window.innerWidth <= 480 ? '15px' : '20px' }}>
              <select
                id="modal-city"
                className={`expanding-input ${completedFields.city ? 'completed' : ''}`}
                value={formData.city}
                onChange={(e) => handleInputChange('city', e.target.value)}
                required
                aria-label="Select city"
              >
                <option value="" disabled hidden></option>
                <option value="kolkata">Kolkata</option>
                <option value="malda">Malda</option>
                <option value="siliguri">Siliguri</option>
              </select>
              <label htmlFor="modal-city" className={`floating-label ${formData.city ? 'active' : ''}`}>
                City *
              </label>
              {completedFields.city && <span className="check-mark">✓</span>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="header-apply-btn"
              aria-label="Submit admission enquiry form"
              style={{
                background: 'white',
                color: 'rgb(0, 24, 69)',
                border: '2px solid transparent',
                padding: window.innerWidth <= 480 ? '12px 20px' : '15px 30px',
                fontSize: window.innerWidth <= 480 ? '1rem' : '1.1rem',
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
                display: 'block',
                width: '100%'
              }}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdmissionModal;
