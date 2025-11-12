import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "./StudentTestimonials.css";

const testimonials = [
  {
    text: "The blend of WACE and CBSE was the perfect launchpad for my MIT admission.",
    name: "Aarav Shah",
    designation: "2023",
  },
  {
    text: "TIGWS gave me the confidence to pursue biomedical research in Australia.",
    name: "Riya Sen",
    designation: "Class of 2022",
  },
  {
    text: "The teachers here are very supportive and always encourage creative learning.",
    name: "Ishita Verma",
    designation: "Batch of 2021",
  },
  {
    text: "I loved how TIGWS balanced academics and extracurriculars, preparing me for college life abroad.",
    name: "Karan Patel",
    designation: "Class of 2020",
  },
];

const StudentTestimonials = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const fullText = "Student Testimonials";

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Typing animation for banner heading
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
      {/* ======= Banner Section ======= */}
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
        <div className="hero-overlay"></div>
        <div className="container text-center" style={{ zIndex: 2 }}>
          <h1
            className="display-3 text-white"
            style={{
              fontSize: "3.2rem",
              fontWeight: "600",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
            }}
          >
            {displayedText}
            {!isTypingComplete && <span className="cursor">|</span>}
          </h1>
        </div>
      </section>

      {/* ======= Testimonials Section ======= */}
      <section>
        <div className="testimonials-section testimonials">
          <div className="container">
            <div className="d-flex flex-column flex-lg-row justify-content-between align-items-start gap-5">
              <div className="left mb-4 mb-lg-0">
                <h2>Student Testimonials</h2>
                <p>
                  Your opinion matters, and by providing feedback, you contribute
                  to the continuous enhancement of our academic programs, support
                  services, and campus life.
                </p>
              </div>

              <div className="testimonials-slider-container">
                <Swiper
                  modules={[Navigation, Autoplay]}
                  spaceBetween={30}
                  slidesPerView={1}
                  loop={true}
                  navigation={{
                    nextEl: ".swiper-button-next-custom",
                    prevEl: ".swiper-button-prev-custom",
                  }}
                  autoplay={{
                    delay: 5000, // autoplay every 5 seconds
                    disableOnInteraction: false,
                  }}
                  speed={1000}
                  breakpoints={{
                    0: { slidesPerView: 1 },
                    768: { slidesPerView: 1 },
                  }}
                  className="swiper"
                >
                  {testimonials.map((t, index) => (
                    <SwiperSlide key={index} className="testimonial-card">
                      <p className="text">{t.text}</p>
                      <div className="author d-flex justify-content-between align-items-end">
                        <div>
                          <h5>{t.name}</h5>
                          <span>{t.designation}</span>
                        </div>
                        <div className="quote">
                          <img src="/img/principal/quote.png" alt="quote" />
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                
                <div className="arrows d-flex justify-content-center gap-3 mt-4">
                  <button className="swiper-button-prev-custom testimonials-prev-btn">
                    <i className="fas fa-arrow-left"></i>
                  </button>
                  <button className="swiper-button-next-custom testimonials-next-btn">
                    <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StudentTestimonials;
