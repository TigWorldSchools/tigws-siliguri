import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Career.css";
const Career = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [step, setStep] = useState(1);
  const [selectedPost, setSelectedPost] = useState("");

  const fullText = "Join Our Team";

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

  const handleNext = () => {
    if (!selectedPost) {
      alert("Please select a post before proceeding.");
      return;
    }
    setStep(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <>
      {/* Page Banner Section */}
      <section
        className="page-hero d-flex align-items-center justify-content-center"
        style={{
          backgroundImage:
            "url(img/banner_images/career_banner.jpg)",
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

      {/* Career Images Section */}
      <section
        className="curriculum-section py-5 career"
        style={{ backgroundColor: "rgb(0, 24, 69)", color: "#ffffff" }}
      >
        <Container>
          <Row className="align-items-center gy-5 text-center">
            <Col xs={12} sm={6} md={3}>
              <img
                src="img/career/image_1.jpg"
                alt="Meeting notes"
                className="img-fluid"
              />
            </Col>
            <Col xs={12} sm={6} md={3} className="offset-up">
              <img
                src="img/career/image_2.jpg"
                alt="Team discussion"
                className="img-fluid"
              />
            </Col>
            <Col xs={12} sm={6} md={3}>
              <img
                src="img/career/image_3.jpg"
                alt="Presentation"
                className="img-fluid"
              />
            </Col>
            <Col xs={12} sm={6} md={3} className="offset-up">
              <img
                src="img/career/image_4.jpg"
                alt="Success ladder"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      

      {/* ===== Career Form Section ===== */}
      <div className="career-form text-center py-5">
        <h2>Discover opportunity with us</h2>

        {/* Step 1 */}
        {step === 1 && (
          <section className="active" id="step1">
            <div className="container my-5">
              <div className="job-form-wrapper">
                <form id="step1Form">
                  <h3 className="jobapp-heading-uniq">
                    Select the post you are applying for
                  </h3>
                  <select
                    id="post"
                    className="job-select"
                    required
                    value={selectedPost}
                    onChange={(e) => setSelectedPost(e.target.value)}
                  >
                    <option value="">Please select</option>
                    <option value="Principal">Principal</option>
                    <option value="Vice Principal">Vice Principal</option>
                    <option value="Maths Teacher">Maths Teacher</option>
                    <option value="Science Teacher">Science Teacher</option>
                  </select>
                  <br />
                  <button
                    type="button"
                    className="hero-cta mt-3"
                    onClick={handleNext}
                  >
                    Next
                    <i className="fas fa-arrow-right hero-arrow"></i>
                  </button>
                </form>
              </div>
            </div>
          </section>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <section className="" id="step2">
            <div className="container my-5">
              <div className="jobapp-container-uniq">
                <h3 className="jobapp-heading-uniq">Job application form</h3>
                <form className="jobapp-form-uniq" onSubmit={handleSubmit}>
                  <div>
                    <label className="jobapp-label-uniq" htmlFor="name">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="jobapp-input-uniq"
                      placeholder="Enter Your Name"
                      required
                    />
                  </div>

                  <div>
                    <label className="jobapp-label-uniq" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="jobapp-input-uniq"
                      placeholder="Enter Your Email"
                      required
                    />
                  </div>

                  <div>
                    <label className="jobapp-label-uniq" htmlFor="phone">
                      Phone No
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="jobapp-input-uniq"
                      placeholder="Enter Your Phone No"
                      required
                    />
                  </div>

                  <div>
                    <label className="jobapp-label-uniq">
                      Select the post you are applying for
                    </label>
                    <select className="jobapp-select-uniq" value={selectedPost}>
                      <option>{selectedPost}</option>
                    </select>
                  </div>

                  <div>
                    <label className="jobapp-label-uniq">
                      Your current employment status
                    </label>
                    <div className="jobapp-radio-group-uniq">
                      <label className="jobapp-radio-box-uniq">
                        <input type="radio" name="employment" value="employed" />{" "}
                        Employed
                      </label>
                      <label className="jobapp-radio-box-uniq">
                        <input
                          type="radio"
                          name="employment"
                          value="unemployed"
                        />{" "}
                        Un-Employed
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="jobapp-label-uniq">&nbsp;</label>
                    <div className="jobapp-radio-group-uniq">
                      <label className="jobapp-radio-box-uniq">
                        <input
                          type="radio"
                          name="employment"
                          value="self-employed"
                        />{" "}
                        Self-Employed
                      </label>
                      <label className="jobapp-radio-box-uniq">
                        <input type="radio" name="employment" value="student" />{" "}
                        Student
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="jobapp-label-uniq">
                      Upload your resume
                    </label>
                    <label className="jobapp-file-wrapper-uniq">
                      <input type="file" name="resume" />
                      Choose file or drag file
                    </label>
                  </div>

                  <div>
                    <label className="jobapp-label-uniq">&nbsp;</label>
                    <button type="submit" className="jobapp-submit-uniq">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        )}
      </div>
     </section>
      
    </>
  );
};

export default Career;