import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./StudentPathway.css";

const StudentPathway = () => {
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

        if (activeHeight > 770) activeHeight = 770;

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

  
  const stepsData = [
    {
      number: 1,
      title: "Grade 9-10: Foundation (CBSE Core)",
      text: `Students in Grades 9–10 engage in a strong academic foundation built on the NCERT-prescribed curriculum. The learning environment promotes curiosity, conceptual clarity, and deeper subject understanding. The school is in the process of obtaining affiliation with the Central Board of Secondary Education (CBSE), ensuring students receive a holistic, nationally recognized education that prepares them for higher studies.`,
    },
    {
      number: 2,
      title: "Grade 11-12: WACE / CBSE Dual Certification",
      text: `Students can pursue a unique dual certification through the NEP-aligned CBSE curriculum and the Australian WACE Programme. This distinctive combination bridges Eastern academic excellence with Western innovation, offering students a global perspective and expanding their university and career opportunities both in India and abroad. The program empowers learners to think critically, communicate effectively, and adapt confidently to a rapidly changing world.`,
    },
    {
      number: 3,
      title: "Counselling & Career Guidance",
      text: `Our dedicated counselling and career guidance cell helps students identify their strengths, interests, and aptitudes through structured assessments and one-on-one mentoring. With personalized guidance, students make informed decisions on selecting their academic streams and careers, matching their skills and passions. This support fosters confidence and clarity in the students.`,
    },
    {
      number: 4,
      title: "University Admissions",
      text: `Students experience direct exposure to one of India’s largest and most reputed educational networks - the Techno India Group network. It enriches their journey from PG to PhD. With over three decades of academic excellence, the Group’s universities and colleges offer diverse programs in Engineering, Technology, Management, Humanities, Social Sciences, and more. Our students benefit from seamless transition opportunities, industry partnerships, and a strong focus on innovation and research-driven learning.`,
    },
    {
      number: 5,
      title: "Alumni Success Stories",
      text: `Our Alumni stand as proud ambassadors of Techno India Group World School’s values and vision. They have gone on to excel in renowned universities, professional fields, and entrepreneurial ventures across the globe. Their success reflects the school’s commitment to nurturing well-rounded individuals equipped with the knowledge, confidence, and integrity to lead and inspire others.`,
    },
  ];

  return (
    <>      
      <section
        className="page-hero d-flex align-items-center justify-content-center student-pathway"
        style={{
          backgroundImage:
            "url(/img/banner_images/page_banner.jpg)",
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
          <div className="row">
            <div className="rts-research-section__content text-left">
              <p className="title-description">
                Embarking on the frontiers of knowledge, Medicine Research is a
                dynamic and groundbreaking endeavor dedicated to unraveling the
                mysteries of health and disease. At the innovation and
                compassionate care, researchers in medicine tirelessly explore,
                question, and innovate to shape the future of healthcare.
              </p>
            </div>
          </div>         
          <div className="student-pathway mt-5" id="studentPathway" ref={pathwayRef}>
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
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
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
