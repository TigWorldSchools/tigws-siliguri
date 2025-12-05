import React, { useState, useEffect, useCallback, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./KolkataGallery.css";
import { getCampusConfig } from '../utils/campusConfig.js';
import { useLocation } from "react-router-dom";

const KolkataGallery = () => {
  const titleRef = useRef(null);
  const { pathname } = useLocation();
  const campus = pathname.split("/")[1] || "kolkata";
  const campusData = getCampusConfig(campus);

  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const fullText = "Gallery";

  const images = campusData.gallery;

  console.log(images);

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

  // Smooth scroll on hash navigation
  useEffect(() => {
    const hash = window.location.hash;
    const scrollToElement = (id) => {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    };

    if (hash === "#why-tigws") setTimeout(() => scrollToElement("why-tigws"), 500);
    else if (hash === "#legacy") setTimeout(() => scrollToElement("legacy"), 500);
    else if (hash === "#other-campuses")
      setTimeout(() => scrollToElement("other-campuses"), 500);
    else window.scrollTo(0, 0);
  }, []);

  // Lightbox Controls
  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const showNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const showPrev = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") showNext();
      else if (e.key === "ArrowLeft") showPrev();
      else if (e.key === "Escape") closeLightbox();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, showNext, showPrev]);

  return (
    <>
      {/* Gallery Section */}
      <div className="gallery-pg-section section-bg py-5 mb-5" id="gallery-pg">
        <div className="container">
          <h2 ref={titleRef} className="founder-title">Gallery</h2>
          <div className="row g-4">
            {images.map((img, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="gallery-pg-single">
                  <div
                    className="gallery-pg-item"
                    onClick={() => openLightbox(index)}
                  >
                    <img src={img.image} alt={`gallery-${index}`} />
                    <div className="gallery-pg-overlay"></div>
                    <div className="gallery-pg-icon">
                      <span>+</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="gallery-pg-lightbox" onClick={closeLightbox}>
          <span className="gallery-pg-close-btn" onClick={closeLightbox}>
            &times;
          </span>

          <button
            className="gallery-pg-nav-btn gallery-pg-prev"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
          >
            ‹
          </button>

          <img
            src={images[currentIndex].image}
            alt={`preview-${currentIndex}`}
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="gallery-pg-nav-btn gallery-pg-next"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
          >
            ›
          </button>
        </div>
      )}
    </>
  );
};

export default KolkataGallery;
