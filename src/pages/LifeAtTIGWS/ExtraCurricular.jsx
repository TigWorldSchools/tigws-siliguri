import React, { useState, useEffect, useRef } from "react";
import "./ExtraCurricular.css";

const ExtraCurricular = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
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
  const sections = [
    {
      title: "Sports And Yoga",
      text: `Our school places a strong emphasis on activities and sports to promote physical and mental fitness, teamwork, and resilience among students. Students are encouraged to participate in a variety of games and activities such as handball, badminton, volleyball, cycling, running, calisthenics, aerobics and yoga.`,
      img: "img/extra_curricular/sports_yoga.jpg",
      reverse: false,
    },
    {
      title: "Dance",
      text: `Through dance students learn teamwork and improvisational skills. Dance also enables students to better understand and analyse themselves by helping them to grow their real potential. Students at TIGWS learn pure form of Bharatnatyam and Rabindra Nritya.`,
      img: "img/extra_curricular/dance.jpg",
      reverse: true,
    },
    {
      title: "Music",
      text: `Music can help students to focus, relax, feel motivated, improve memory and make the process more enjoyable. Students at TIGWS learn Indian vocal music, Western music and Rabindra Sangeet as well as violin.`,
      img: "img/extra_curricular/music.jpg",
      reverse: false,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="page-hero d-flex align-items-center justify-content-center"
        style={{
          backgroundImage:
            "url(img/banner_images/page_banner.jpg)",
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
          {sections.map((sec, index) => (
            <div
              key={index}
              className={`row g-40 align-items-center mb-5 ${
                sec.reverse ? "flex-row-reverse" : ""
              }`}
            >
              <div className="col-lg-6">
                <div
                  ref={(el) => (animatedRefs.current[index * 2] = el)}
                  className={`rts-left-section ${
                    sec.reverse ? "fade-right" : "fade-left"
                  }`}
                >
                  <h3 className="campus__life--single--title extra-curricular-title">
                    {sec.title}
                  </h3>
                  <div className="left-section-content extra-curricular-text">
                    <p>{sec.text}</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div
                  ref={(el) => (animatedRefs.current[index * 2 + 1] = el)}
                  className={`rts-right-section rt-relative ${
                    sec.reverse ? "fade-left" : "fade-right"
                  }`}
                >
                  <div className="campus-video">
                    <img src={sec.img} alt={sec.title} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ExtraCurricular;