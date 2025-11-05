import React, { useState, useEffect, useRef } from 'react';
import './ApplicationForm.css';
import SuccessPopup from './SuccessPopup';

const ApplicationForm = () => {
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
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (imageRef.current) observer.observe(imageRef.current);
    if (formRef.current) observer.observe(formRef.current);

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (value.trim()) {
      setCompletedFields(prev => ({ ...prev, [name]: true }));
    } else {
      setCompletedFields(prev => ({ ...prev, [name]: false }));
    }
  };

  const validateEmail = (email) => {
    return email.includes('@') && email.includes('.com');
  };

  const validatePhone = (phone) => {
    return /^\d{10}$/.test(phone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setShowSuccessPopup(true);
    setFormData({
      parentName: '',
      studentName: '',
      phone: '',
      email: '',
      grade: '',
      city: ''
    });
    setCompletedFields({});
  };

  const handleCloseSuccessPopup = () => {
    setShowSuccessPopup(false);
  };

  const getCompletionPercentage = () => {
    const totalFields = 6;
    const completedCount = Object.values(completedFields).filter(Boolean).length;
    return (completedCount / totalFields) * 100;
  };

  return (
    <>
      <section className="application-section">
      <div className="application-container">
        <h2 ref={titleRef} className="application-title">APPLY FOR ADMISSION</h2>
        
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${getCompletionPercentage()}%` }}
          ></div>
        </div>

        <div className="application-content">
          <div ref={imageRef} className="application-image-section">
            <img 
              src="/img/admission/admission_pic.jpg" 
              alt="Student Application" 
              className="application-image" 
            />
          </div>

          <div ref={formRef} className="application-form-section">
            <form onSubmit={handleSubmit} className="ultimate-form">
              <div className="form-row">
                <div className="form-field">
                  <input
                    id="parentName"
                    type="text"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleInputChange}
                    className={`expanding-input ${completedFields.parentName ? 'completed' : ''}`}
                    required
                    aria-label="Parent's name"
                  />
                  <label htmlFor="parentName" className={`floating-label ${formData.parentName ? 'active' : ''}`}>
                    Parent's Name
                  </label>
                  {completedFields.parentName && <span className="check-mark">✓</span>}
                </div>

                <div className="form-field">
                  <input
                    id="studentName"
                    type="text"
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleInputChange}
                    className={`expanding-input ${completedFields.studentName ? 'completed' : ''}`}
                    required
                    aria-label="Student's name"
                  />
                  <label htmlFor="studentName" className={`floating-label ${formData.studentName ? 'active' : ''}`}>
                    Student's Name
                  </label>
                  {completedFields.studentName && <span className="check-mark">✓</span>}
                </div>
              </div>

              <div className="form-field">
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`expanding-input ${
                    formData.phone && validatePhone(formData.phone) ? 'completed valid' : 
                    formData.phone && !validatePhone(formData.phone) ? 'invalid' : ''
                  }`}
                  required
                  maxLength="10"
                  pattern="[0-9]{10}"
                  aria-label="Phone number"
                />
                <label htmlFor="phone" className={`floating-label ${formData.phone ? 'active' : ''}`}>
                  Phone Number
                </label>
                {formData.phone && validatePhone(formData.phone) && <span className="check-mark">✓</span>}
                {formData.phone && !validatePhone(formData.phone) && <span className="error-mark">✗</span>}
              </div>

              <div className="form-field">
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`expanding-input ${
                    formData.email && validateEmail(formData.email) ? 'completed valid' : 
                    formData.email && !validateEmail(formData.email) ? 'invalid' : ''
                  }`}
                  required
                  aria-label="Email address"
                />
                <label htmlFor="email" className={`floating-label ${formData.email ? 'active' : ''}`}>
                  Email Address
                </label>
                {formData.email && validateEmail(formData.email) && <span className="check-mark">✓</span>}
                {formData.email && !validateEmail(formData.email) && <span className="error-mark">✗</span>}
              </div>

              <div className="form-field">
                <select
                  id="grade"
                  name="grade"
                  value={formData.grade}
                  onChange={handleInputChange}
                  className={`expanding-input ${completedFields.grade ? 'completed' : ''}`}
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
                <label htmlFor="grade" className={`floating-label ${formData.grade ? 'active' : ''}`}>
                  Grade
                </label>
                {completedFields.grade && <span className="check-mark">✓</span>}
              </div>

              <div className="form-field">
                <select
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className={`expanding-input ${completedFields.city ? 'completed' : ''}`}
                  required
                  aria-label="Select city"
                >
                  <option value="" disabled hidden></option>
                  <option value="kolkata">Kolkata</option>
                  <option value="malda">Malda</option>
                  <option value="siliguri">Siliguri</option>
                </select>
                <label htmlFor="city" className={`floating-label ${formData.city ? 'active' : ''}`}>
                  City
                </label>
                {completedFields.city && <span className="check-mark">✓</span>}
              </div>

              <div
                className="form-cta-wrap"
                style={{
                  marginTop: '28px',         /* push button down */
                  overflow: 'visible',      /* ensure not clipped */
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                <button
                  type="submit"
                  className={`hero-cta ${isSubmitting ? 'submitting' : ''}`}
                  disabled={isSubmitting}
                  aria-label="Submit admission enquiry form"
                  style={{
                    position: 'relative',
                    zIndex: 10                 /* keep visible above nearby elements */
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner"></span>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Enquiry
                      <i className="fas fa-arrow-right hero-arrow"></i>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    
    <SuccessPopup 
      isVisible={showSuccessPopup} 
      onClose={handleCloseSuccessPopup} 
    />
    </>
  );
};

export default ApplicationForm;