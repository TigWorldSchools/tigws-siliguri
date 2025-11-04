import React, { useState, useEffect } from "react"; // Add useState and useEffect
import './LifeAtTIGWS.css';

const lifeItems = [
  {
    id: '01',
    icon: 'img/icons/academic.png',
    title: 'Academics',
    description:
      'Genomic Medicine: Investigating the role of genetics in health and disease to personalize medical treatments.',
  },
  {
    id: '02',
    icon: '/img/icons/stem.png',
    title: 'STEM Innovation',
    description:
      'Conducting controlled experiments to evaluate the safety and efficacy of new medical drugs or interventions.',
  },
  {
    id: '03',
    icon: '/img/icons/arts.png',
    title: 'Performing Arts',
    description:
      'Addressing population-level health issues, studying epidemiology, preventive measures, and health policy.',
  },
  {
    id: '04',
    icon: '/img/icons/sport.png',
    title: 'Sports & Fitness',
    description:
      'Genomic Medicine: Investigating the role of genetics in health and disease to personalize medical treatments.',
  },
  {
    id: '05',
    icon: '/img/icons/sustainability.png',
    title: 'Sustainability & Outreach',
    description:
      'Conducting controlled experiments to evaluate the safety and efficacy of new medical drugs or interventions.',
  },
  {
    id: '06',
    icon: '/img/icons/replacement.png',
    title: 'International Exchange',
    description:
      'Addressing population-level health issues, studying epidemiology, preventive measures, and health policy.',
  },

];
const LifeAtTIGWS  = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const fullText = "Life At TIGWS";

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

  useEffect(() => {
    // Handle hash navigation
    const hash = window.location.hash;
    const scrollToElement = (id) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    if (hash === "#why-tigws") setTimeout(() => scrollToElement("why-tigws"), 500);
    else if (hash === "#legacy") setTimeout(() => scrollToElement("legacy"), 500);
    else if (hash === "#other-campuses") setTimeout(() => scrollToElement("other-campuses"), 500);
    else window.scrollTo(0, 0); // Scroll to top for other cases
  }, []);

  return (
    <>
      {/* Page Banner Section */}
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
          <div className="">
            <div className="rts-research-section__content text-left">
              <div className="research-image mb-4">                
              </div>            
              <p className="title-description">
                Embarking on the frontiers of knowledge, Medicine Research is a
                dynamic and groundbreaking endeavor dedicated to unraveling the
                mysteries of health and disease. At the intersection of
                innovation and compassionate care, researchers in medicine
                tirelessly explore, question, and innovate to shape the future
                of healthcare.
              </p>
            </div>
          </div>        
           <div className="research__items mt-5">
            <div className="row justify-content-sm-center justify-content-md-start g-5">
              {lifeItems.map((item) => (
                <div key={item.id} className="col-lg-4 col-md-6 col-sm-11">
                  <div className="research-procedure">
                    <div className="rt-serial">{item.id}</div>
                    <div className="icon mb-3">
                      <img src={item.icon} alt={item.title} />
                    </div>
                    <h5>{item.title}</h5>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LifeAtTIGWS ;