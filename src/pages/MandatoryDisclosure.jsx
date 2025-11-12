import React, { useState, useEffect } from "react";
import "./MandatorySection.css";

const MandatorySection = () => {
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
  const generalInfo = [
    {
      id: 1,
      info: "NAME OF THE SCHOOL",
      details: "Techno India Group World School, Siliguri",
    },
    { id: 2, info: "AFFILIATION NO (IF APPLICABLE)", details: "2430441" },
    { id: 3, info: "SCHOOL CODE", details: "16330" },
    {
      id: 4,
      info: "COMPLETE ADDRESS WITH PIN CODE",
      details:
        "Himachal Vihar, Behind City Centre, Near Passport Office, Siliguri West Bengal – 734010",
    },
    {
      id: 5,
      info: "PRINCIPAL NAME & QUALIFICATION",
      details: "Mrs. Malancha Ghosh",
    },
    {
      id: 6,
      info: "PRINCIPAL QUALIFICATION",
      details: "M.A. in English, B.Ed.",
    },
    { id: 7, info: "SCHOOL EMAIL ID", details: "admin.slg@tigws.in" },
    {
      id: 8,
      info: "CONTACT DETAILS (LANDLINE/MOBILE)",
      details: "+91 9733018000",
    },
  ];

  const documents = [
    {
      id: 1,
      info: "COPIES OF AFFILIATION/UPGRADATION LETTER AND RECENT EXTENSION OF AFFILIATION, IF ANY",
      link: "#",
    },
    {
      id: 2,
      info: "COPIES OF SOCIETIES/TRUST/COMPANY/REGISTRATION/ RENEWAL CERTIFICATE, AS APPLICABLE",
      link: "/pdf/siliguri-mpd/TRUST_1.pdf",
    },
    {
      id: 3,
      info: "COPY OF NO OBJECTION CERTIFICATE (NOC) ISSUED, IF APPLICABLE, BY THE STATE GOVT./UT",
      link: "/pdf/siliguri-mpd/NOC_1.pdf",
    },
    {
      id: 4,
      info: "COPIES OF RECOGNITION CERTIFICATE UNDER RTE ACT., 2009. AND ITS RENEWAL IF APPLICABLE",
      link: "/pdf/siliguri-mpd/RECOGNITION_CERTIFICATE_1.pdf",
    },
    {
      id: 5,
      info: "COPY OF VALID BUILDING SAFETY CERTIFICATE AS PER THE NATIONAL BUILDING CODE",
      link: "/pdf/siliguri-mpd/BUILDING_SAFETY_CERTIFICATE.pdf",
    },
    {
      id: 6,
      info: "COPY OF VALID FIRE SAFETY CERTIFICATE ISSUED BY THE COMPETENT AUTHORITY",
      link: "/pdf/siliguri-mpd/FIRE_SAFETY_CERTIFICATE_1.pdf",
    },
    {
      id: 7,
      info: "COPY OF THE SELF CERTIFICATION SUBMITTED BY THE SCHOOL FOR AFFILIATION/UPGRADATION/EXTENSION OF AFFILIATION",
      link: "/pdf/siliguri-mpd/SELF-CERTIFICATION.pdf",
    },
    {
      id: 8,
      info: "COPIES OF VALID WATER, HEALTH AND SANITATION CERTIFICATES",
      link: "/pdf/siliguri-mpd/WATER,_HEALTH_AND_SANITATION.pdf",
    },
  ];

  const academics = [
    {
      id: 1,
      info: "FEE STRUCTURE OF THE SCHOOL",
      link: "/pdf/siliguri-mpd/FEE_STRUCTURE.pdf",
    },
    { id: 2, info: "ANNUAL ACADEMIC CALENDAR", link: "#" },
    { id: 3, info: "LIST OF SCHOOL MANAGEMENT COMMITTEE(SMC)", link: "#" },
    {
      id: 4,
      info: "LIST OF PARENTS TEACHERS ASSOCIATION(PTA) MEMBERS",
      link: "#",
    },
    {
      id: 5,
      info: "ANNUAL REPORT",
      link: "/pdf/siliguri-mpd/ANNUAL_REPORT_siliguri.pdf",
    },
    {
      id: 6,
      info: "DETAILS OF CURRICULUM",
      link: "https://cbseacademic.nic.in/curriculum_2025.html",
    },
    {
      id: 7,
      info: "SAMPLE OF TRANSFER CERTIFICATE",
      link: "/pdf/siliguri-mpd/SAMPLE_OF_TC_siliguri.pdf",
    },
    {
      id: 8,
      info: "DETAILS OF TEACHERS TRAINING",
      link: "/pdf/siliguri-mpd/Details_of_Teachers_Training.pdf",
    },
    {
      id: 9,
      info: "STAFF STATEMENT 2024-25",
      link: "/pdf/siliguri-mpd/STAFF_STATEMENT_2024-25_TIGWS.pdf",
    },
    {
      id: 10,
      info: "SELF AFFIDAVIT",
      link: "/pdf/siliguri-mpd/SELF-AFFIDAVIT.pdf",
    },
  ];

  const staffInfo = [
    { id: 1, info: "PRINCIPAL", details: "01" },
    { id: 2, info: "TOTAL NO. OF TEACHERS", details: "35" },
    { id: 3, info: "PGT", details: "0" },
    { id: 4, info: "TGT", details: "10" },
    { id: 5, info: "PRT", details: "13" },
    { id: 6, info: "TEACHERS SECTION RATIO", details: "1:5" },
    { id: 7, info: "DETAILS OF SPECIAL EDUCATOR", details: "01" },
    {
      id: 8,
      info: "DETAILS OF COUNSELLOR AND WELLNESS TEACHER",
      details: "01",
    },
  ];

  const infrastructure = [
    {
      id: 1,
      info: "TOTAL CAMPUS AREA OF THE SCHOOL (IN SQ. MTR.)",
      details: "12,140.569",
    },
    {
      id: 2,
      info: "NO. AND SIZE OF THE CLASS ROOMS (IN SQ. MTR.)",
      details: "15 classrooms (46.50 sq.m each)",
    },
    {
      id: 3,
      info: "NO. AND SIZE OF LABORATORIES INCLUDING COMPUTER LABS (IN SQ. MTR.)",
      details: "6 Labs (Average 75 sq.m each)",
    },
    { id: 4, info: "INTERNET FACILITY", details: "Yes" },
    { id: 5, info: "NO. OF GIRLS TOILETS", details: "30" },
    { id: 6, info: "NO. OF BOYS TOILETS", details: "NA" },
    {
      id: 7,
      info: "LINK OF YOUTUBE VIDEO OF THE INSPECTION OF SCHOOL COVERING THE INFRASTRUCTURE OF THE SCHOOL",
      details: (
        <a
          href="https://www.youtube.com/watch?v=BbcLCNIAyCs" target="_blank"
          className="click-link"
        >
          Click Here
        </a>
      ),
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="page-hero d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: "url(/img/banner_images/page_banner.jpg)",
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
