import React, { useState, useEffect, useCallback, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Gallery.css";
import { useLocation } from "react-router-dom";
import { getCampusConfig } from '../../utils/campusConfig.js';

const Gallery = () => {
  const { pathname } = useLocation();
  const campus = pathname.split("/")[1] || "siliguri";
  const campusData = getCampusConfig(campus);
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const fullText = "Gallery";
  const galleryRef = useRef([]);

  const images = campusData.gallery;

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

  // Gallery flip animation
  useEffect(() => {
    const cards = Array.from(document.querySelectorAll('.gallery-card'));
    const dotsContainer = document.querySelector('.gallery-dots');
    if (cards.length && dotsContainer) {
      let currentSet = 0;
      const isMobile = window.innerWidth <= 768;
      const itemsPerSet = isMobile ? 1 : 3;
      const totalSets = Math.ceil(cards.length / itemsPerSet);
      
      dotsContainer.innerHTML = '';
      for (let i = 0; i < totalSets; i++) {
        const dot = document.createElement('div');
        dot.className = 'dot';
        dot.addEventListener('click', () => showSet(i));
        dotsContainer.appendChild(dot);
      }
      
      const dots = document.querySelectorAll('.dot');
      
      function showSet(setIndex) {
        currentSet = setIndex;
        const start = setIndex * itemsPerSet;
        const end = start + itemsPerSet;
        
        cards.forEach((card, i) => {
          if (i >= start && i < end) {
            card.classList.add('active');
          } else {
            card.classList.remove('active');
          }
        });
        
        dots.forEach((dot, i) => {
          dot.classList.toggle('active', i === setIndex);
        });
      }
      
      function next() {
        currentSet = (currentSet + 1) % totalSets;
        showSet(currentSet);
      }
      
      showSet(0);
      
      const rotationInterval = setInterval(() => {
        next();
      }, 5000);

      return () => {
        clearInterval(rotationInterval);
      };
    }
  }, [images.length]);

  return (
    <>
      {/* Hero Section */}
      <section
        className="gallery-pg-hero d-flex align-items-center justify-content-center"
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
          className="gallery-pg-hero-overlay"
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
            className="gallery-pg-title text-white font-weight-bold"
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
                className="gallery-pg-cursor"
                style={{ animation: "blink 1s infinite" }}
              >
                |
              </span>
            )}
          </h1>
        </div>
      </section>

      {/* Gallery Section */}
      <div className="gallery-pg-section section-bg py-5" id="gallery-pg">
        <div className="gallery-track">
          {images.map((img, index) => (
            <div 
              key={index} 
              className="gallery-card"
              onClick={() => openLightbox(index)}
            >
              <img src={img.image} alt={`gallery-${index}`} />
            </div>
          ))}
        </div>
        <div className="gallery-dots"></div>
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

export default Gallery;
