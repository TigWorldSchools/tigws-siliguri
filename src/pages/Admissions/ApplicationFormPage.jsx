import React, { useState, useEffect } from "react";
import SEOHead from '../../components/SEOHead.jsx';
import ApplicationForm from '../../components/ApplicationForm.jsx';
import { useLocation } from "react-router-dom";

 const ApplicationFormPage = () => {
  const { pathname } = useLocation();
  const campus = pathname.split("/")[1] || "siliguri"
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const fullText = "Application Form";

  useEffect(() => {
    const chars = fullText.split("");
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < chars.length) {
        setDisplayedText(chars.slice(0, index + 1).join(""));
        index++;
      } else {
        clearInterval(typingInterval);
        setIsTypingComplete(true);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, []);

  

  return (
    <>
      <SEOHead 
        title="Admission Application Form | TIGWS Siliguri - Apply Online Now"
        description="Apply for admission to TIGWS Siliguri online. Secure your daughter's future at North Bengal's premier all-girls residential school. CBSE & WACE curriculum available."
        keywords="TIGWS admission form, Siliguri school admission, girls school application, CBSE admission, residential school form, North Bengal school admission"
        url="/siliguri/application-form"
        image="/img/admission/admission_pic.jpg"
      />
      {/* Page Banner Section */}
      <section
        className="page-hero d-flex align-items-center justify-content-center"
        style={{
          backgroundImage:
            `url(/img/banner_images/${campus}/page_banner.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "400px",
          position: "relative",
        }}
      >
        <div
          className="hero-overlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        ></div>
        <div
          className="container text-center"
          style={{ position: "relative", zIndex: 2 }}
        >
          <h1
            className="display-3 text-white font-weight-bold"
            style={{
              fontSize: "3.2rem",
              fontWeight: "600",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
              lineHeight: "1.2",
            }}
          >
            {displayedText}
            {!isTypingComplete && (
              <span
                className="cursor"
                style={{ animation: "blink 1s infinite" }}
              >
                |
              </span>
            )}
          </h1>
        </div>
      </section>

      {/* Curriculum Section */}
      <section>
        
    <div className="page-content">
      <ApplicationForm />
    </div>
      </section>
    </>
  );
};

export default ApplicationFormPage;
