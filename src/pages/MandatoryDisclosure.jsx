import React, { useState, useEffect } from "react";
import "./MandatorySection.css";
import { useLocation } from "react-router-dom";
import { getCampusConfig } from '../utils/campusConfig.js';

const MandatorySection = () => {
  const { pathname } = useLocation();
  const campus = pathname.split("/")[1] || "siliguri";
  const campusData = getCampusConfig(campus);

  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = "Mandatory Disclosure";

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

  const Mandatory = campusData?.MandatorySection || {};

  const generalInfo = Mandatory.generalInfo || [];
  const documents = Mandatory.documents || [];
  const academics = Mandatory.academics || [];
  const staffInfo = Mandatory.staffInfo || [];
  const infrastructure = Mandatory.infrastructure || [];

  return (
    <>
      {/* Hero Section */}
      <section
        className="page-hero d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: `url(/img/banner_images/${campus}/page_banner.jpg)`,
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
            {!isTypingComplete && <span className="cursor">|</span>}
          </h1>
        </div>
      </section>
      <div class="schooldetails py-3">
        <div className="container school-info">
          {/* A) GENERAL INFORMATION */}
          <section className="info-section">
            <h2 className="section-title">A) GENERAL INFORMATION</h2>
            <div className="table-responsive">
              <table className="info-table">
                <thead>
                  <tr>
                    <th>SL NO.</th>
                    <th>INFORMATION</th>
                    <th>DETAILS</th>
                  </tr>
                </thead>
                <tbody>
                  {generalInfo.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.info}</td>
                      <td>{item.details}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* B) DOCUMENTS AND INFORMATION */}
          <section className="info-section">
            <h2 className="section-title">B) DOCUMENTS AND INFORMATION</h2>
            <div className="table-responsive">
              <table className="info-table">
                <thead>
                  <tr>
                    <th>SL NO.</th>
                    <th>DOCUMENTS/INFORMATION</th>
                    <th>UPLOAD DOCUMENTS</th>
                  </tr>
                </thead>
                <tbody>
                  {documents.map((doc) => (
                    <tr key={doc.id}>
                      <td>{doc.id}</td>
                      <td>{doc.info}</td>
                      <td>
                        {doc.link && doc.link !== "#" ? (
                          <a href={doc.link} target="_blank" rel="noopener noreferrer" className="click-link">
                            Click here
                          </a>
                        ) : (
                          "NA"
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/*  C) RESULT AND ACADEMICS  */}
          <section className="info-section">
            <h2 className="section-title">C) RESULT AND ACADEMICS</h2>
            <div className="table-responsive">
              <table className="info-table">
                <thead>
                  <tr>
                    <th>SL NO.</th>
                    <th>DOCUMENTS/INFORMATION</th>
                    <th>UPLOAD DOCUMENTS</th>
                  </tr>
                </thead>
                <tbody>
                  {academics.map((doc) => (
                    <tr key={doc.id}>
                      <td>{doc.id}</td>
                      <td>{doc.info}</td>
                      <td>
                        {doc.link && doc.link !== "#" ? (
                          <a href={doc.link} target="_blank" rel="noopener noreferrer" className="click-link">
                            Click here
                          </a>
                        ) : (
                          "NA"
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* D) STAFF INFORMATION */}
          <section className="info-section">
            <h2 className="section-title">
              D) STAFF (TEACHING & NON-TEACHING) INFORMATION
            </h2>
            <div className="table-responsive">
              <table className="info-table">
                <thead>
                  <tr>
                    <th>SL NO.</th>
                    <th>INFORMATION</th>
                    <th>DETAILS</th>
                  </tr>
                </thead>
                <tbody>
                  {staffInfo.map((staff) => (
                    <tr key={staff.id}>
                      <td>{staff.id}</td>
                      <td>{staff.info}</td>
                      <td>{staff.details}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* E) SCHOOL INFRASTRUCTURE INFORMATION */}
          <section className="info-section">
            <h2 className="section-title">
              E) SCHOOL INFRASTRUCTURE INFORMATION
            </h2>
            <div className="table-responsive">
              <table className="info-table">
                <thead>
                  <tr>
                    <th>SL NO.</th>
                    <th>INFORMATION</th>
                    <th>DETAILS</th>
                  </tr>
                </thead>
                <tbody>
                  {infrastructure.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.info}</td>
                      <td>{item.details}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default MandatorySection;
