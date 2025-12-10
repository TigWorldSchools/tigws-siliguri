import React, { useState, useEffect } from "react";
import "./StudentCapacity.css";
import { useLocation } from "react-router-dom";
import { getCampusConfig} from '../../utils/campusConfig.js';

const StudentCapacity = () => {
  const { pathname } = useLocation();
  const campus = pathname.split("/")[1] || "siliguri";
  const campusData = getCampusConfig(campus);

  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const pdfUrl = campusData.StudentCapacity.StudentCapacityPDFLink;
  const fullText = "Student Capacity";

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

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

  const studentData = campusData.StudentCapacity.studentData;
  const handleDownload = () => {
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = "student-capacity.pdf";
      link.click();
  };
  return (
    <>
      {/* ===== Page Banner ===== */}
      <section
        className="page-hero d-flex align-items-center justify-content-center"
        style={{
          backgroundImage:
            `url(/img/banner_images/${campus}/page_banner.jpg)`,
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

      {/* ===== Student Capacity Table ===== */}
      <section className="curriculum-section py-5" style={{ backgroundColor: "rgb(0, 24, 69)", color: "#ffffff" }}>
        <div className="container booklist">
        
          <div className="studentlisthead">
          <div className="text-center" style={{ 
            paddingLeft: window.innerWidth > 768 ? '350px' : '10px',
            paddingRight: window.innerWidth > 768 ? '0' : '10px',
            paddingTop: '10px',
            paddingBottom: '10px'
          }}>
          <h2 style={{ color: 'rgb(0, 24, 69)' }}>The Number of Students Class Wise</h2>
          </div>
          {pdfUrl && (
              <button className="listbtn fade-in-cta" onClick={handleDownload}>
                    <i className="fas fa-download listofbook-icon"></i>
                    <span className="listofbook-contact-text">Download</span>
              </button>
          )}
          </div>
          <div className="table-responsive">
            <table className="student-table ">
            <thead>
              <tr>
                <th>Class</th>
                <th>Total Number of Sections (For Running Classes)</th>
                <th>Maximum Per	class Intake</th>
                <th>Total Number of Girls</th>
                <th>Total Number of Boys</th>
                <th>Total Number of Trans-
                  Gender
                </th>
                <th>Total Number of Students</th>
                <th>Total Number of
                  CWSN
                  (Boys,GirIs & Trans- Gender)
                </th>
              </tr>
            </thead>
            <tbody>
              {studentData && studentData.length > 0 ? (
                  studentData.map((row, index) => (
                    <tr key={index}>
                      <td>{row.class}</td>
                      <td>{row.totalSections}</td>
                      <td>{row.maxIntake}</td>
                      <td>{row.girls}</td>
                      <td>{row.boys}</td>
                      <td>{row.transGender}</td>
                      <td>{row.totalStudents}</td>
                      <td>{row.cwsn}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" style={{ textAlign: "center", fontWeight: "600" }}>
                      No data available
                    </td>
                  </tr>
                )}
            </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default StudentCapacity;
