import React, { useState, useEffect } from "react"; // Add useState and useEffect
import './LifeAtTIGWS.css';

const lifeItems = [
  {
    id: '01',
    icon: '/img/icons/academic.png',
    title: 'Academics',
    description:
      'At Techno India Group World School, we cultivate academic excellence through an inspiring and future-ready learning environment. Rooted in Indian values and enriched by global perspectives, our NEP-aligned curriculum empowers students to think critically, innovate boldly, and grow holistically. We prepare every learner to dream fearlessly, adapt confidently, and achieve boundlessly in a rapidly evolving world.',
  },
  {
    id: '02',
    icon: '/img/icons/stem.png',
    title: 'STEM Innovation',
    description:
      'At Techno India Group World School, we inspire girls to lead with purpose, think creatively, and shape a better world with confidence and compassion. Guided by a limited screen-time policy and empowered by cutting-edge digital classrooms, our students learn to balance tradition with innovation. Here, education comes alive through curiosity, collaboration, and the joy of discovery, preparing every learner to embrace the future fearlessly.',
  },
  {
    id: '03',
    icon: '/img/icons/arts.png',
    title: 'Performing Arts',
    description:
      'At Techno India Group World School, we celebrate the creative spirit within every child, nurturing imagination and self-expression through music, dance, and the performing arts. In our state-of-the-art music hall, young talents discover their voice, build confidence, and experience the joy of creation. Here, artistic expression becomes a journey of growth, shaping students into confident, compassionate, and well-rounded individuals.',
  },
  {
    id: '04',
    icon: '/img/icons/sport.png',
    title: 'Sports & Fitness',
    description:
      'At Techno India Group World School, we believe that true education flourishes when physical vitality and mental well-being move in harmony. Our expansive campus, with its lush playgrounds and world-class sports facilities, inspires energy, teamwork, and confidence in every learner. Through diverse athletic pursuits—from swimming and tennis to rock climbing and adventure sports—students discover their strength, build resilience, and embrace the joy of movement.',
  },
  {
    id: '05',
    icon: '/img/icons/sustainability.png',
    title: 'Sustainability & Outreach',
    description:
      'At Techno India Group World School, sustainability is more than a practice, it’s a way of life. Through eco-conscious initiatives and meaningful community outreach, our students are encouraged to learn to lead with empathy, responsibility, and purpose. Together, we cultivate changemakers who care deeply for people, planet, and progress.',
  },
  {
    id: '06',
    icon: '/img/icons/replacement.png',
    title: 'International Exchange',
    description:
      'At Techno India Group World School, we strive to build global citizens who learn, connect, and grow beyond borders. Our international exchange initiatives inspire cultural understanding, empathy, and a spirit of collaboration that prepares students to thrive in an interconnected world.',
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
