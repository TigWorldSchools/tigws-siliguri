import React, { useEffect, useRef } from 'react';
import './PrincipalQuote.css';

const PrincipalQuote = () => {
  const titleRef = useRef(null);
  const leftSectionRef = useRef(null);
  const centerSectionRef = useRef(null);
  const rightSectionRef = useRef(null);

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
    if (leftSectionRef.current) observer.observe(leftSectionRef.current);
    if (centerSectionRef.current) observer.observe(centerSectionRef.current);
    if (rightSectionRef.current) observer.observe(rightSectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="founder-section">
      <div className="founder-container">
        <h2 ref={titleRef} className="founder-title">Principal’s Message</h2>
        <div className="founder-content">
          <div ref={leftSectionRef} className="founder-left-section">
            <p className="founder-quotes">
                Dear Parents, <br />
                You have traversed years with TECHNO INDIA GROUP WORLD SCHOOL with your precious children enrolled in the institution, believing in its motto and vision and here we welcome you again with vibrant sunshine, with the TECHNO INDIA GROUP incurring colossal infrastructure for the institution befitting its stature and brand. As we assure you of pedagogy oriented with CBSE, our motto is to drive the school towards its transcending glory and etch the saga of long lasting relationship with you all. <br />
                We as a team shall impart CBSE curriculum to your wards in a way not experienced earlier, which will be conducive to the goal of NATIONAL EDUCATION POLICY, 2020. Our children shall be provided with the insight of change that we have already initiated and CBSE curriculum intricately woven into high-stake Entrance Examinations of National level. We are working tirelessly towards this goal of a World School so as to impart the qualities of a global citizen to our children. <br />
                I would extend my heartiest gratitude for the support you extended till date and beseech you to believe in us in future as you have done so far. My door is open to you at all points on which you need clarification and I am ready at all times to sort resolution to your problems and doubts. Ushering a new session for TECHNO INDIA WORLD SCHOOL, MALDA, I request your cooperation so that we can walk together to the newer heights and brighter days.
            </p>
          </div>
          
          <div ref={centerSectionRef} className="founder-center-section">
            <div className="founder-image-container">
              <img 
                src="/img/principal/malda_principal.jpg" 
                alt="Nilanjana K Jha" 
                className="founder-image" 
              />
            </div>
            <div className="founder-details">
              <h4 className="founder-name">Nilanjana K Jha</h4>
              <p className="founder-designation">Principal</p>
              <p className="founder-designation">TECHNO INDIA WORLD SCHOOL, MALDA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrincipalQuote;
