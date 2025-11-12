import React, { useState, useEffect } from 'react';

const Criteria = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = "Admission Criteria";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

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
      <section
        className="page-hero d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: "url(/img/banner_images/page_banner.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
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
        <div className="container text-center" style={{ position: "relative", zIndex: 2 }}>
          <h1
            className="display-3 text-white font-weight-bold"
            style={{
              fontSize: "3.2rem",
              fontWeight: "600",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
            }}
          >
            {displayedText}
            {!isTypingComplete && <span className="cursor" style={{ animation: "blink 1s infinite" }}>|</span>}
          </h1>
        </div>
      </section>

      <section className="py-5" style={{ backgroundColor: "rgb(0, 24, 69)", minHeight: "60vh" }}>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-12 order-lg-1 order-1 text-center">
              <h2 style={{ 
                color: "#C3AB6B", 
                fontSize: "3rem", 
                fontWeight: "700",
                textTransform: "uppercase",
                letterSpacing: "2px"
              }}>
                COMING SOON
              </h2>
            </div>
            <div className="col-lg-6 col-12 order-lg-2 order-2 text-center mb-4">
              <img 
                src="/img/gallery/image_3.jpg" 
                alt="Coming Soon" 
                className="img-fluid"
                style={{ maxWidth: "400px", borderRadius: "15px" }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Criteria;
