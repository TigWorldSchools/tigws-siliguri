import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Curriculum.css";

const Curriculum = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const fullText = "Curriculum";

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Typing effect
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

  // Refs for animations
  const cbseImageRef = useRef(null);
  const cbseTextRef = useRef(null);
  const waceImageRef = useRef(null);
  const waceTextRef = useRef(null);

  // Scroll animations using Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            observer.unobserve(entry.target); // Trigger only once
          }
        });
      },
      { threshold: 0.15 }
    );

    [cbseImageRef, cbseTextRef, waceImageRef, waceTextRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Page Banner Section */}
      <section
        className="page-hero d-flex align-items-center justify-content-center"
        style={{
          backgroundImage:
            "url(/img/banner_images/page_banner.jpg)",
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
              <span className="cursor" style={{ animation: "blink 1s infinite" }}>
                |
              </span>
            )}
          </h1>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="curriculum-section py-5">
        <Container>
          {/* CBSE Curriculum */}
          <Row className="align-items-center mb-5">
            <Col lg={6} md={12} className="mb-3 mb-lg-0">
              <div ref={cbseImageRef} className="curriculum-image fade-left">
                <img
                  src={`${process.env.PUBLIC_URL}/img/academics/cbse_curriculum.jpg`}
                  alt="CBSE Curriculum"
                  className="img-fluid rounded shadow"
                />
              </div>
            </Col>
            <Col lg={6} md={12}>
              <div ref={cbseTextRef} className="curriculum-content fade-right">
                <h3 className="curriculum-title" style={{ color: "#C3AB6B" }}>
                  CBSE Curriculum
                </h3>
                <p  className="curriculum-text">
                  Techno India Group World School offers an environment that is
                  conducive to academic excellence. The curriculum encourages
                  deeper understanding of the subjects they learn. The school
                  follows the NCERT curriculum and is in the process to be affiliated to CBSE.
                </p>
                <p className="curriculum-text">
                  The school imparts soft skills like continual learning
                  aptitude, positive attitude, and innovative thinking.
                </p>
              </div>
            </Col>
          </Row>

          {/* WACE Curriculum */}
          <Row className="align-items-center flex-lg-row-reverse">
            <Col lg={6} md={12} className="mb-3 mb-lg-0">
              <div ref={waceImageRef} className="curriculum-image fade-right">
                <img
                  src={`${process.env.PUBLIC_URL}/img/academics/wace_curriculum.jpg`}
                  alt="WACE Curriculum"
                  className="img-fluid rounded shadow"
                />
              </div>
            </Col>
            <Col lg={6} md={12}>
              <div ref={waceTextRef} className="curriculum-content fade-left">
                <h3 className="curriculum-title">
                  WACE Curriculum
                </h3>
                <p className="curriculum-text">
                  We are proud to offer a NEP-aligned CBSE curriculum alongside
                  the Australian WACE Programme, forging a global academic bridge
                  between Eastern roots and Western aspirations.
                </p>
                <p className="curriculum-text">
                  Our limited screen time policy instills digital discipline,
                  focus, and creativity — ensuring girls grow up healthy,
                  balanced, and confident.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Curriculum;
