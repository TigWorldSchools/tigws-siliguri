import React, { useState, useEffect, useRef } from "react";
import "./ExtraCurricular.css";
import { useLocation } from "react-router-dom";
import { getCampusConfig} from '../../utils/campusConfig.js';

const ExtraCurricular = () => {
  const { pathname } = useLocation();
  const campus = pathname.split("/")[1] || "siliguri";
  const campusData = getCampusConfig(campus);

  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Extra Curricular";

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Typing animation
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

  // Intersection observer for animations
  const animatedRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    animatedRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Section data
  const sections = campusData.ExtraCurricularSection;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % sections.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + sections.length) % sections.length);
  };

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [sections.length]);

  return (
    <>
      {/* Hero Section */}
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
        <div className="container text-center" style={{ position: "relative", zIndex: 2 }}>
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
            {!isTypingComplete && <span className="cursor">|</span>}
          </h1>
        </div>
      </section>

      {/* Extra Curricular Section */}
      <section id="extracurricular" className="rts-campus rts-section-padding py-5">
        <div className="container pb--20">
          <div className="carousel-wrapper">
            <div className="carousel-content">
              <div className="carousel-image-wrapper">
                <img src={sections[currentIndex].img} alt={sections[currentIndex].title} className="campus-video-img" />
                <div className="video-overlay-box">
                  <h3 className="overlay-title">{sections[currentIndex].title}</h3>
                  <p className="overlay-text">{sections[currentIndex].text}</p>
                </div>
              </div>
            </div>
            <div className="carousel-controls">
              <button className="carousel-btn prev-btn" onClick={handlePrev}>‹</button>
              <button className="carousel-btn next-btn" onClick={handleNext}>›</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ExtraCurricular;
