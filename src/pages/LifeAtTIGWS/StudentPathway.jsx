import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./StudentPathway.css";
import { getCampusConfig, getCampusSEO } from '../../utils/campusConfig.js';
import { useLocation } from "react-router-dom";

const StudentPathway = () => {
  const { pathname } = useLocation();
  const campus = pathname.split("/")[1] || "siliguri";

  const campusData = getCampusConfig(campus);

  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const pathwayRef = useRef(null);
  const stepsRef = useRef([]);

  const fullText = "Student Pathway";

  // ===== Typewriter Effect =====
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

  // ===== Hash Navigation =====
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

  // ===== Scroll Animation (Timeline Active Step + Line Height) =====
  useEffect(() => {
    const steps = stepsRef.current;
    const pathway = pathwayRef.current;

    const activateStep = () => {
      if (!steps || !pathway || steps.length === 0) return;
      
      let middle = window.innerHeight / 2;
      let activeIndex = 0;

      steps.forEach((step, index) => {
        if (!step) return;
        const rect = step.getBoundingClientRect();
        const distance = Math.abs(rect.top + rect.height / 2 - middle);
        if (
          steps[activeIndex] &&
          distance <
          Math.abs(
            steps[activeIndex].getBoundingClientRect().top +
              steps[activeIndex].offsetHeight / 2 -
              middle
          )
        ) {
          activeIndex = index;
        }
      });

      steps.forEach((s) => s && s.classList.remove("active"));
      if (steps[activeIndex]) {
        steps[activeIndex].classList.add("active");
        
        const activeStep = steps[activeIndex];
        const rect = activeStep.getBoundingClientRect();
        const containerTop = pathway.getBoundingClientRect().top;
        let activeHeight = rect.top - containerTop + rect.height / 2;

        if (window.innerWidth < 600) {
          activeHeight = 1800;
        } else {
          if (activeHeight > 880) activeHeight = 898;
        }

        pathway.style.setProperty("--active-line-height", `${activeHeight}px`);
      }
    };

    window.addEventListener("scroll", activateStep);
    window.addEventListener("load", activateStep);
    activateStep();

    return () => {
      window.removeEventListener("scroll", activateStep);
      window.removeEventListener("load", activateStep);
    };
  }, []);

  const stepsData = campusData.studentPathway;

  return (
    <>      
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
      <section className="life-section py-5" id="lifeattigws">
        <div className="container">         
          <div className="student-pathway" id="studentPathway" ref={pathwayRef}>
            {stepsData.map((step, index) => (
              <div
                className={`step ${index === 0 ? "active" : ""}`}
                key={index}
                ref={(el) => {
                  if (el) stepsRef.current[index] = el;
                }}
              >
                <div className="step-number">{step.number}</div>
                <div className="step-content">
                  <h3>{step.grade}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default StudentPathway;
