import React, { useState, useEffect } from "react";
import { Container, Row, Modal } from "react-bootstrap";
import "./ListOfBooks.css";
import { useLocation } from "react-router-dom";
import { getCampusConfig} from '../../utils/campusConfig.js';

const ListOfBooks = () => {
  const { pathname } = useLocation();
  const campus = pathname.split("/")[1] || "siliguri";
  const campusData = getCampusConfig(campus);

  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const pdfUrl = campusData.BookList.bookPDFLink;
  const fullText = "List Of Books";

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

  const bookData = campusData.BookList.bookData;
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "book-list.pdf";
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

      {/* ===== List of Books Buttons ===== */}
      <section
        className="curriculum-section py-5"
        style={{ backgroundColor: "rgb(0, 24, 69)", color: "#ffffff" }}
      >
        <div className="container booklist">
          <div className="booklisthead">
          <div className="text-center" style={{ 
            paddingLeft: window.innerWidth > 768 ? '450px' : '0px',
            paddingRight: window.innerWidth > 768 ? '0' : '20px',
            paddingTop: '10px',
            paddingBottom: '10px'
          }}>
          <h2 style={{ color: 'rgb(0, 24, 69)' }}>Book List - Session 2024-25</h2>
          </div>
          {pdfUrl && (
            <button className="listbtn fade-in-cta" onClick={handleDownload}>
              <i className="fas fa-download listofbook-icon"></i>
              <span className="listofbook-contact-text">Download</span>
            </button>
          )}
          </div>

          {bookData.map((cls, index) => (
            <div key={index} className="class-section">
              <h3>{cls.class}</h3>
              <table className="book-table">
                <thead>
                  <tr>
                    <th>SL. No</th>
                    <th>Subject</th>
                    <th>Book Titles</th>
                  </tr>
                </thead>
                <tbody>
                  {cls.books.map((book, i) => (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{book.subject}</td>
                      <td>
                        <ul>
                          {book.titles.map((title, tIndex) => (
                            <li key={tIndex}>{title}</li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </section>



    </>
  );
};

export default ListOfBooks;



