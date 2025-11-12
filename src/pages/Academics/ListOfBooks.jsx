import React, { useState, useEffect } from "react";
import { Container, Row, Modal } from "react-bootstrap";
import "./ListOfBooks.css";

const ListOfBooks = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const pdfUrl = "/pdf/book-list.pdf";
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

  const bookData = [
    {
      class: "Class I",
      books: [
        { subject: "ENGLISH", titles: ["Literature Reader For You - 1", "a) Grammar For You - 1", "b) Tune In Develop Your Listening and Speaking Skills BK-1 with CD", "Snow White (to enhance reading skill)"] },
        { subject: "MATHEMATICS", titles: ["Mathematics Made Easy 1", "Math Magic - 1"] },
        { subject: "EVS", titles: ["Earth & Universe For You - 1"] },
        { subject: "VALUE EDUCATION", titles: ["Values, Ethics & Life Skills For You - 1"] },
        { subject: "G.K", titles: ["Techno's Know & Grow with Derek BK. 1"] },
        { subject: "COMPUTER", titles: ["IT Beans BK - 1"] },
        { subject: "ART & CRAFT", titles: ["Art & Craft For You - 1"] },
        { subject: "BENGALI", titles: ["Bangla Porichoy - 1", "Bangla Porichoy WB - 1", "Likhte Likhte Sekho BK 1"] },
        { subject: "HINDI", titles: ["Rimjhim - 1", "Indradhanush BK - 1", "Vyakaran Mala - 1"] },
      ],
    },
    {
      class: "Class II",
      books: [
        { subject: "ENGLISH", titles: ["Literature Reader For You - 2", "a) Grammar For You - 2", "b) Tune In Develop Your Listening and Speaking Skills BK-2 with CD", "Fairy Tales Vol. 1 (to enhance reading skill)"] },
        { subject: "MATHEMATICS", titles: ["Mathematics Made Easy 2", "Math Magic - 2"] },
        { subject: "EVS", titles: ["Earth & Universe For You - 2"] },
        { subject: "VALUE EDUCATION", titles: ["Values, Ethics & Life Skills For You - 2"] },
        { subject: "G.K", titles: ["Techno's Know & Grow with Derek BK. 2"] },
        { subject: "COMPUTER", titles: ["IT Beans BK - 2"] },
        { subject: "ART & CRAFT", titles: ["Art & Craft For You - 2"] },
        { subject: "BENGALI", titles: ["Bangla Porichoy - 2", "Bangla Porichoy WB - 2", "Likhte Likhte Sekho BK 2"] },
        { subject: "HINDI", titles: ["Rimjhim - 2", "Indradhanush BK - 2", "Vyakaran Mala - 2"] },
      ],
    },
    {
      class: "Class III",
      books: [
        { subject: "ENGLISH", titles: ["Literature Reader For You - 3", "Grammar For You - 3", "Hibiscus Course Book - 3", "The Jungle Book (FOR READING SKILL)"] },
        { subject: "MATHEMATICS", titles: ["Maths Step BK 3", "Math Magic - 3", "Mental Calculations For You - 3"] },
        { subject: "SCIENCE", titles: ["Your Scientific Journey - 3"] },
        { subject: "VALUE EDUCATION", titles: ["Values, Ethics & Life Skills For You - 3"] },
        { subject: "G.K", titles: ["Techno’s Know & Grow with Derek BK. 3"] },
        { subject: "COMPUTER", titles: ["IT Beans BK - 3"] },
        { subject: "SOCIAL STUDIES", titles: ["Our Heritage - 3"] },
        { subject: "ART & CRAFT", titles: ["Art & Craft For You - 3"] },
        { subject: "BENGALI", titles: ["Bangla Porichoy - 3", "Bangla Porichoy WB - 3", "Little Likhte Sekho BK 3", "sishu bharati vyakaran and rachana part- 1"] },
        { subject: "HINDI", titles: ["Rimjhim - 3", "Indradhanush BK - 3", "Vyakaran Mala - 3"] },
      ],
    },
    {
      class: "CLASS: IV",
      books: [
        { subject: "ENGLISH", titles: ["Literature Reader For You - 4", "Grammar For You - 4", "HIBISCUS COURSE BOOK-4", "Jataka Stories (to enhance Reading Skills)"] },
        { subject: "MATHEMATICS", titles: ["Maths Step BK 4", "Math Magic - 4", "Mental Calculations For You - 4"] },
        { subject: "SCIENCE", titles: ["Your Scientific Journey - 4"] },
        { subject: "VALUE EDUCATION", titles: ["Values, Ethics & Life Skills For You - 4"] },
        { subject: "G.K", titles: ["Techno's Know & Grow with Derek BK. 4"] },
        { subject: "COMPUTER", titles: ["IT Beans BK - 4"] },
        { subject: "SOCIAL STUDIES", titles: ["OUR HERITAGE -4"] },
        { subject: "ART & CRAFT", titles: ["Art & Craft For You - 4"] },
        { subject: "BENGALI", titles: ["Bangla Porichoy - 4", "Bangla Porichoy WB - 4", "Little Likhte Sekho BK 4", "sishu bharati vyakaran and rachana part- 1"] },
        { subject: "HINDI", titles: ["Rimjhim - 4", "Indradhanush BK - 4", "Vyakaran Mala - 4"] },
      ],
    },
    {
      class: "CLASS: V",
      books: [
        {
          subject: "ENGLISH",
          titles: [
            "Literature Reader For You - 5",
            "Grammar For You - 5",
            "HIBISCUS COURSE BOOK-5",
            "The Wit & Wisdom of Tenali Raman & Birbal (Easy Reader) ( FOR READING SKILL)"
          ]
        },
        {
          subject: "MATHEMATICS",
          titles: [
            "Maths Step BK 5",
            "Math Magic - 5",
            "Mental Calculations For You - 5"
          ]
        },
        { subject: "SCIENCE", titles: ["Your Scientific Journey - 5"] },
        { subject: "VALUE EDUCATION", titles: ["Values, Ethics & Life Skills For You - 5"] },
        { subject: "G.K", titles: ["Techno's Know & Grow with Derek BK. 5"] },
        {
          subject: "COMPUTER",
          titles: ["Cyber Apps BK - 5"]
        },
        { subject: "SOCIAL STUDIES", titles: ["OUR HERITAGE -5"] },
        { subject: "ART & CRAFT", titles: ["Art & Craft For You - 5"] },
        {
          subject: "BENGALI 2nd Language",
          titles: [
            "Bangla Porichoy - 5",
            "Bangla Porichoy WB - 5",
            "Bangla Vyakaran - 5",
            "Golpo Pather Asar"
          ]
        },
        {
          subject: "HINDI 2nd Language",
          titles: [
            "Rimjhim - 5",
            "Indradhanush Bk - 5",
            "Vyakaran Mala - 5",
            
          ]
        },
        {
          subject: "3rd Language HINDI",
          titles: [
            "Rimjhim Text - 1",
            "Rimjhim Workbook 1"
          ]
        },
        {
          subject: "3rd Language BENGALI",
          titles: ["Sahaj Path BK - 1"]
        }
      ]
    },
    {
      class: "CLASS: VI",
      books: [
        {
          subject: "ENGLISH",
          titles: [
            "Literature Reader For You - 6",
            "Grammar For You - 6",
            "HIBISCUS COURSE BOOK-6",
            "Best of O Henry ( FOR READING SKILL)"
          ]
        },
        {
          subject: "MATHEMATICS",
          titles: [
            "Maths - 6",
            "Mathamatics - 6 (R S Agarwal )",
            "Lab Manual (Together with Mathematics) For Std. VI"
          ]
        },
        {
          subject: "SCIENCE",
          titles: [
            "Science Around Us - 6",
            "Science - 6",
            "Science Lab Exploration Book - 6"
          ]
        },
        {
          subject: "G.K",
          titles: [
            "Techno's Know & Grow with Derek BK. 6"
          ]
        },
        {
          subject: "COMPUTER",
          titles: [
            "Cyber Apps BK - 6"
          ]
        },
        {
          subject: "SOCIAL STUDIES",
          titles: [
            "OUR HERITAGE -6",
            "Our Past - History",
            "Earth - Our habitat - Geography",
            "Social and Political Life - Civics",
            "Map Practice Geography & History BK-6"
          ]
        },
        {
          subject: "ART & CRAFT",
          titles: [
            "Art & Craft For You - 6"
          ]
        },
        {
          subject: "LIFE SKILL",
          titles: [
            "Values, Ethics & Life Skills For You - 6"
          ]
        },
        {
          subject: "EVS",
          titles: [
            "Our Environment - 6"
          ]
        },
        {
          subject: "2nd Language BENGALI",
          titles: [
            "Bangla Porichoy - 6",
            "Bangla Porichoy WB - 6",
            "Bangla Vyakaran - 6",
            "Ramer Sumati"
          ]
        },
        {
          subject: "3rd Language BENGALI",
          titles: [
            "Sahaj Path Bk. 2"
          ]
        },
        {
          subject: "2nd Language HINDI",
          titles: [
            "Rimjhim Text - 2",
            "Rimjhim Workbook - 2"
          ]
        },
        {
          subject: "3rd Language HINDI",
          titles: [
            "Manak Hindi Vyakaran Evam Rachna - 6",
            "Basant - 1",
            "Bal Ram Katha"
          ]
        }
      ]
    },
    

{
  class: "CLASS: VII",
  books: [
    {
      subject: "ENGLISH",
      titles: [
        "HIBISCUS Literature Reader Book - 7",
        "HIBISCUS work Book - 7",
        "HIBISCUS Course Book - 7",
        "Grammar For You - 7",
        "David Copperfield ( FOR READING SKILL)"
      ]
    },
    {
      subject: "MATHEMATICS",
      titles: [
        "Mathamatics - 7",
        "Mathamatics - 7",
        "Lab Manual (Together with Mathematics) For Std. VII"
      ]
    },
    {
      subject: "SCIENCE",
      titles: [
        "Science Around Us - 7",
        "Science - 7",
        "Science Lab Exploration Book - 7"
      ]
    },
    {
      subject: "G.K",
      titles: [
        "Techno's Know & Grow with Derek BK. 7"
      ]
    },
    {
      subject: "COMPUTER",
      titles: [
        "Cyber Apps BK - 7"
      ]
    },
    {
      subject: "SOCIAL STUDIES",
      titles: [
        "OUR HERITAGE -7",
        "Our Past 7 - History",
        "Our Environment - Geography",
        "Social and Political Life 7 - Civics",
        "Map Practice Geography & History BK-7"
      ]
    },
    {
      subject: "ART & CRAFT",
      titles: [
        "Art & Craft For You - 7"
      ]
    },
    {
      subject: "LIFE SKILL",
      titles: [
        "Values, Ethics & Life Skills For You - 7"
      ]
    },
    {
      subject: "EVS",
      titles: [
        "Our Environment - 7"
      ]
    },
    {
      subject: "2nd Language BENGALI",
      titles: [
        "Bangla Porichoy - 7",
        "Bangla Porichoy WB - 7",
        "Bangla Vyakaran - 7",
        "Avagir Swarga and Mahesh"
      ]
    },
    {
      subject: "2nd Language HINDI",
      titles: [
        "Manak Hindi Vyakaran Evam Rachna - 7",
        "Basant - 3",
        "Bal Mahabharat Katha"
      ]
    },
    {
      subject: "3rd Language BENGALI",
      titles: [
        "Sahitya Katha Bk. III"
      ]
    },
    {
      subject: "3rd Language HINDI",
      titles: [
        "Rim Jhim Text - 3",
        "Rimjhim Workbook 3"
      
      ]
    }
  ]
},
{
  class: "CLASS: VIII",
  books: [
    {
      subject: "ENGLISH",
      titles: [
        "HIBISCUS Literature Reader Book - 8",
        "HIBISCUS work Book - 8",
        "HIBISCUS Course Book - 8",
        "Grammar For You - 8",
        "THE HOUND OF BASKERVILLES ( FOR READING SKILL)"
      ]
    },
    {
      subject: "MATHEMATICS",
      titles: [
        "Mathamatics - 8",
        "Mathamatic - 8",
        "Lab Manual (Together with Mathematics) For Std. VIII"
      ]
    },
    {
      subject: "SCIENCE",
      titles: [
        "Science Around Us - 8",
        "Science - 8",
        "Science Lab Exploration Book - 8"
      ]
    },
    {
      subject: "G.K",
      titles: [
        "Techno's Know & Grow with Derek BK. 8"
      ]
    },
    {
      subject: "COMPUTER",
      titles: [
        "Cyber Apps BK - 8"
      ]
    },
    {
      subject: "SOCIAL STUDIES",
      titles: [
        "OUR HERITAGE -8",
        "Our Past - Part I and Part II - History",
        "Resource and Development - Geography",
        "Social and Political Life - Civics",
        "Map Practice Geography & History BK-8"
      ]
    },
    {
      subject: "ART & CRAFT",
      titles: [
        "Art & Craft For You - 8"
      ]
    },
    {
      subject: "LIFE SKILL",
      titles: [
        "Values, Ethics & Life Skills For You - 8"
      ]
    },
    {
      subject: "EVS",
      titles: [
        "Our Environment - 8"
      ]
    },
    {
      subject: "2nd Language BENGALI",
      titles: [
        "Bangla Porichoy - 8",
        "Bangla Porichoy WB - 8",
        "Bangla Vyakaran - 8",
        "Chelebela"
      ]
    },
    {
      subject: "3rd Language HINDI",
      titles: [
        "Rim Jhim Text - 4",
        "Rimjhim Workbook 4"
      ]
    },
    {
      subject: "2nd Language HINDI",
      titles: [
        "Manak Hindi Vyakaran Evam Rachna - 8",
        "Basant - 3",
        "Bharat Ek Khoj"
      ]
    },
    {
      subject: "3rd Language BENGALI",
      titles: [
        "Sahitya Katha Part IV"
        
      
      ]
    }
  ]
}








  ];
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
            "url(/img/banner_images/page_banner.jpg)",
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
          <button className="listbtn fade-in-cta" onClick={handleDownload}>
                <i className="fas fa-download listofbook-icon"></i>
                <span className="listofbook-contact-text">Download</span>
          </button>
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



