import StudentCapacity from "../pages/Admissions/StudentCapacity";
import ExtraCurricular from "../pages/LifeAtTIGWS/ExtraCurricular";
import MandatorySection from "../pages/MandatoryDisclosure";

// Campus Configuration System
export const campusConfig = {
  siliguri: {
    name: "TIGWS Siliguri",
    logo: "/img/logo/tigws_siliguri_logo.png",
    bannerVideo: "/videos/TIGWS_Siliguri.mp4",
    fullName: "Techno India Group World School Siliguri",
    location: "Siliguri, North Bengal",
    type: "All-Girls Residential School",
    
    contact: {
      phone: "9733018000",
      email: "info@tigworldschool.in",
      address: "Techno India Group World School, Siliguri: Himachal Vihar, Behind City Centre, Near Passport Office, Siliguri West Bengal- 734010",
      websiteUrl: "https://www.tigworldschools.com/siliguri",
      schoolLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3085.4484392754775!2d88.38384597543327!3d26.733365676754516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e44738e5a8e12d%3A0x78a95887aefc6a0c!2sTechno%20India%20Group%20World%20School!5e1!3m2!1sen!2sin!4v1764581156687!5m2!1sen!2sin"
    },
    
    hero: {
      title: "Welcome to TIGWS Siliguri",
      subtitle: "Empowering Young Women in North Bengal",
      tagline: "Excellence in Education, Empowerment for Life"
    },
    
    about: {
      description: "Eastern India's premier all-girls residential school offering world-class education with CBSE & Australian WACE curriculum in the heart of North Bengal.",
      highlights: [
        "Premier all-girls residential school",
        "CBSE & WACE dual curriculum", 
        "World-class infrastructure",
        "Holistic development approach"
      ],
      aboutImage: "/img/about/siliguri/first_pic.jpg"
    },

    missionVission: {
      missionVissionContent: [
        {
          title: "Our Mission",
          description: "To empower every girl to become a confident, independent, and empathetic global citizen by fostering academic excellence, emotional intelligence, and social responsibility."
        },
        {
          title: "Our Vision",
          description: "To create a world-class learning environment where Eastern roots meet Western innovation, preparing girls to excel on global platforms while staying deeply connected to their cultural identity."
        },
        {
          title: "Global Outlook",
          description: "Aligned with the National Education Policy (NEP) and the internationally recognized Australian WACE Programme, TIG World School bridges global standards with Indian values."
        }
      ],
      missionVissionImage: "/img/about/siliguri/mission_vision.jpg"
    },

    whyChoose: [
      {
        image: "/img/academics/siliguri/point4.jpg",
        title: "Empowered by Technology & Faculty Excellence",
        description: "With modern digital classrooms, advanced laboratories, and expert educators, our campus blends innovation with inspiration. We also offer financial aid and scholarships to ensure opportunity for all deserving learners."
      },
      {
        image: "/img/academics/siliguri/point5.jpg",
        title: "Personalized Learning & Mentorship",
        description: "Every girl’s journey is unique. Our personalized guidance, small class sizes, and strong teacher-student ratio ensure focused academic support, career counseling, and emotional well-being at every step."
      },
      {
        image: "/img/academics/siliguri/point6.jpg",
        title: "Future-Ready College & Career Pathways",
        description: "Through skill-based learning, leadership programs, and global exposure, students gain the confidence, creativity, and competence to thrive in top universities and future careers worldwide."
      },
      {
        image: "/img/academics/siliguri/point1.jpg",
        title: "Safe, Supportive & Inclusive Campus",
        description: "Safety of the girls is our top priority. We ensure 24x7 residential care, secure campus facilities, and an empathetic mentoring system. We nurture a respectful, inclusive environment where girls feel secure to explore and excel. We implement anti-bullying policies."
      },
      {
        image: "/img/academics/siliguri/point2.jpg",
        title: "Global Curriculum Advantage",
        description: "Experience a powerful dual-curriculum system — CBSE and the Australian WACE Programme, that builds academic rigor, critical thinking, and international readiness for careers in medicine, engineering, business, design, and beyond."
      },
      {
        image: "/img/academics/siliguri/point3.jpg",
        title: "Holistic Growth Beyond Academics",
        description: "From sports and performing arts to cultural clubs and community initiatives, we celebrate every talent, helping students develop discipline, teamwork, empathy, and leadership through real-world experiences."
      }
    ],

    aboutCardData: [
      {
        icon: 'fas fa-school',
        title: 'World-Class Infrastructure',
        description: 'Our state-of-the-art campus features modern classrooms, advanced laboratories, well-equipped libraries, and comprehensive sports facilities.',
        image: '/img/about/siliguri/world_class_infrastructure.jpg'
      },
      {
        icon: 'fas fa-trophy',
        title: 'Academic Excellence',
        description: 'Our students consistently achieve outstanding results in national and international examinations, reflecting our commitment to academic excellence and holistic development.',
        image: '/img/about/siliguri/academic_excellence.jpg'
      },
      {
        icon: 'fas fa-heart',
        title: 'Holistic Development',
        description: 'We focus on nurturing every aspect of a student\'s personality - intellectual, emotional, physical, and social development through comprehensive programs and activities.',
        image: '/img/about/siliguri/holistic_development.jpg'
      },
      {
        icon: 'fas fa-globe',
        title: 'Global Standards',
        description: 'Our curriculum follows international standards while maintaining strong roots in Indian values and culture, preparing students for global opportunities.',
        image: '/img/about/siliguri/global_standards.jpg'
      }
    ],

    aboutShapingFuture: {
      description: "Techno India Group World School, Siliguri stands tall as Eastern India's foremost all-girls' residential institution, a true sanctuary of learning nestled amidst the tranquil greenery of Siliguri. With its state-of-the-art campus, modern infrastructure, and world-class amenities, the school offers a safe, inspiring, and empowering environment where excellence thrives in every form, academic achievement, character building, creativity, and holistic well-being. <br /> Driven by a team of passionate and accomplished educators, Techno India Group World School is committed to shaping confident, visionary young women who lead with purpose, pride, and integrity, ready to excel and make their mark on the world.",
      image: '/img/about/siliguri/shaping_futures.jpg'
    },

    academicCBSECurriculum: {
      description: "Techno India Group World School offers an environment that is conducive to academic excellence. The curriculum encourages deeper understanding of the subjects they learn. The school follows the NCERT curriculum and is in the process to be affiliated to CBSE. <br /> The school imparts soft skills like continual learning aptitude, positive attitude, and innovative thinking.",
      image: '/img/academics/siliguri/cbse_curriculum.jpg'
    },

    academicWACECurriculum: {
      description: "We are proud to offer a NEP aligned CBSE curriculum alongside the Australian WACE Programme, forging a global academic bridge between Eastern roots and Western aspirations, empowering students to dream bigger and reach farther. <br /> Our limited screen time policy helps instill digital discipline, focus, and creativity, ensuring girls grow up healthy, balanced, and confident. We don't just educate, we inspire girls to lead, innovate, and make a difference in the world. <br /> We celebrate diversity, encourage cross cultural dialogue, and prepare students to become ethical leaders in a changing world.",
      image: '/img/academics/wace_curriculum.jpg'
    },

    lifeAtSchool: [
      {
        id: '01',
        icon: '/img/icons/academic.png',
        title: "Academics",
        description: "At Techno India Group World School, we cultivate academic excellence through an inspiring and future-ready learning environment. Rooted in Indian values and enriched by global perspectives, our NEP-aligned curriculum empowers students to think critically, innovate boldly, and grow holistically. We prepare every learner to dream fearlessly, adapt confidently, and achieve boundlessly in a rapidly evolving world."
      },
      {
        id: '02',
        icon: '/img/icons/stem.png',
        title: "STEM Innovation",
        description: "At Techno India Group World School, we inspire girls to lead with purpose, think creatively, and shape a better world with confidence and compassion. Guided by a limited screen-time policy and empowered by cutting-edge digital classrooms, our students learn to balance tradition with innovation. Here, education comes alive through curiosity, collaboration, and the joy of discovery, preparing every learner to embrace the future fearlessly."
      },
      {
        id: '03',
        icon: '/img/icons/arts.png',
        title: "Performing Arts",
        description: "At Techno India Group World School, we celebrate the creative spirit within every child, nurturing imagination and self-expression through music, dance, and the performing arts. In our state-of-the-art music hall, young talents discover their voice, build confidence, and experience the joy of creation. Here, artistic expression becomes a journey of growth, shaping students into confident, compassionate, and well-rounded individuals."
      },
      {
        id: '04',
        icon: '/img/icons/sport.png',
        title: "Sports & Fitness",
        description: "At Techno India Group World School, we believe that true education flourishes when physical vitality and mental well-being move in harmony. Our expansive campus, with its lush playgrounds and world-class sports facilities, inspires energy, teamwork, and confidence in every learner. Through diverse athletic pursuits, from swimming and tennis to rock climbing and adventure sports, students discover their strength, build resilience, and embrace the joy of movement."
      },
      {
        id: '05',
        icon: '/img/icons/sustainability.png',
        title: "Sustainability and Outreach",
        description: "At Techno India Group World School, sustainability is more than a practice, it’s a way of life. Through eco-conscious initiatives and meaningful community outreach, our students are encouraged to learn to lead with empathy, responsibility, and purpose. Together, we cultivate changemakers who care deeply for people, planet, and progress."
      },
      {
        id: '06',
        icon: '/img/icons/replacement.png',
        title: "International Exchange",
        description: "At Techno India Group World School, we strive to build global citizens who learn, connect, and grow beyond borders. Our international exchange initiatives inspire cultural understanding, empathy, and a spirit of collaboration that prepares students to thrive in an interconnected world."
      }
    ],

    studentPathway: [
      {
        number: 1,
        grade: "Grade 9-10: Foundation (CBSE Core)",
        description: `Students in Grades 9–10 engage in a strong academic foundation built on the NCERT-prescribed curriculum. The learning environment promotes curiosity, conceptual clarity, and deeper subject understanding. The school is in the process of obtaining affiliation with the Central Board of Secondary Education (CBSE), ensuring students receive a holistic, nationally recognized education that prepares them for higher studies.`,
      },
      {
        number: 2,
        grade: "Grade 11-12: WACE / CBSE Dual Certification",
        description: `Students can pursue a unique dual certification through the NEP-aligned CBSE curriculum and the Australian WACE Programme. This distinctive combination bridges Eastern academic excellence with Western innovation, offering students a global perspective and expanding their university and career opportunities both in India and abroad. The program empowers learners to think critically, communicate effectively, and adapt confidently to a rapidly changing world.`,
      },
      {
        number: 3,
        grade: "Counselling & Career Guidance",
        description: `Our dedicated counselling and career guidance cell helps students identify their strengths, interests, and aptitudes through structured assessments and one-on-one mentoring. With personalized guidance, students make informed decisions on selecting their academic streams and careers, matching their skills and passions. This support fosters confidence and clarity in the students.`,
      },
      {
        number: 4,
        grade: "University Admissions",
        description: `Students experience direct exposure to one of India’s largest and most reputed educational networks - the Techno India Group network. It enriches their journey from PG to PhD. With over three decades of academic excellence, the Group’s universities and colleges offer diverse programs in Engineering, Technology, Management, Humanities, Social Sciences, and more. Our students benefit from seamless transition opportunities, industry partnerships, and a strong focus on innovation and research-driven learning.`,
      },
      {
        number: 5,
        grade: "Alumni Success Stories",
        description: `Our Alumni stand as proud ambassadors of Techno India Group World School’s values and vision. They have gone on to excel in renowned universities, professional fields, and entrepreneurial ventures across the globe. Their success reflects the school’s commitment to nurturing well-rounded individuals equipped with the knowledge, confidence, and integrity to lead and inspire others.`,
      },
    ],

    MandatorySection: {
      generalInfo: [
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
      ],
      documents: [
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
      ],
      academics: [
        {
          id: 1,
          info: "FEE STRUCTURE OF THE SCHOOL",
          link: "/pdf/siliguri-mpd/FEE_STRUCTURE.pdf",
        },
        { id: 2, info: "ANNUAL ACADEMIC CALENDAR", link: "#" },
        { id: 3, info: "LIST OF SCHOOL MANAGEMENT COMMITTEE (SMC)", link: "#" },
        {
          id: 4,
          info: "LIST OF PARENTS TEACHERS ASSOCIATION (PTA) MEMBERS",
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
      ],
      staffInfo: [
        { id: 1, info: "PRINCIPAL", details: "01" },
        { id: 2, info: "TOTAL NO. OF TEACHERS", details: "23" },
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
      ],
      infrastructure: [
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
      ]
    }, 

    gallery: [
      {
        image: "/img/gallery/siliguri/image_1.jpg"
      },
      {
        image: "/img/gallery/siliguri/image_5.jpg"
      },
      {
        image: "/img/gallery/siliguri/image_3.jpg"
      },
      {
        image: "/img/gallery/siliguri/image_4.jpg"
      },
      {
        image: "/img/gallery/siliguri/image_2.jpg"
      },
      {
        image: "/img/gallery/siliguri/image_6.jpg"
      },
    ],

    testimonials: [
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
      }
    ],

    BookList : {
      bookPDFLink : "/pdf/siliguri-mpd/BOOK_LIST_2024-25_siliguri.pdf",
      bookData : [
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
      ]
    },

    StudentCapacity : {
      StudentCapacityPDFLink : "/pdf/siliguri-mpd/student-capacity.pdf",
      studentData : [
        { class: "BAL VATIKA 1 (PRE-SCHOOL)", totalSections: 1, maxIntake: 40, girls: 4, boys: 0, transGender: 0, totalStudents: 4, cwsn: 0 },
        { class: "BAL VATIKA 2 (PRE-SCHOOL)", totalSections: 1, maxIntake: 40, girls: 5, boys: 0, transGender: 0, totalStudents: 5, cwsn: 0 },
        { class: "BAL VATIKA 3 (PRE-SCHOOL)", totalSections: 1, maxIntake: 40, girls: 9, boys: 0, transGender: 0, totalStudents: 9, cwsn: 0 },
        { class: "1", totalSections: 1, maxIntake: 40, girls: 11, boys: 0, transGender: 0, totalStudents: 11, cwsn: 0 },
        { class: "2", totalSections: 1, maxIntake: 40, girls: 4, boys: 0, transGender: 0, totalStudents: 4, cwsn: 0 },
        { class: "3", totalSections: 1, maxIntake: 40, girls: 7, boys: 0, transGender: 0, totalStudents: 7, cwsn: 0 },
        { class: "4", totalSections: 1, maxIntake: 40, girls: 8, boys: 0, transGender: 0, totalStudents: 8, cwsn: 0 },
        { class: "5", totalSections: 1, maxIntake: 40, girls: 8, boys: 0, transGender: 0, totalStudents: 8, cwsn: 0 },
        { class: "6", totalSections: 1, maxIntake: 40, girls: 7, boys: 0, transGender: 0, totalStudents: 7, cwsn: 0 },
        { class: "7", totalSections: 1, maxIntake: 40, girls: 6, boys: 0, transGender: 0, totalStudents: 6, cwsn: 0 },
        { class: "8", totalSections: 1, maxIntake: 40, girls: 9, boys: 0, transGender: 0, totalStudents: 9, cwsn: 0 },
        { class: "9", totalSections: 0, maxIntake: 0, girls: 0, boys: 0, transGender: 0, totalStudents: 0, cwsn: 0 },
        { class: "10", totalSections: 0, maxIntake: 0, girls: 0, boys: 0, transGender: 0, totalStudents: 0, cwsn: 0 },
        { class: "11", totalSections: 0, maxIntake: 0, girls: 0, boys: 0, transGender: 0, totalStudents: 0, cwsn: 0 },
        { class: "12", totalSections: 0, maxIntake: 0, girls: 0, boys: 0, transGender: 0, totalStudents: 0, cwsn: 0 },
      ]
    },

    ExtraCurricularSection: [
      {
        title: "Sports And Yoga",
        text: `Our school places a strong emphasis on activities and sports to promote physical and mental fitness, teamwork, and resilience among students. Students are encouraged to participate in a variety of games and activities such as handball, badminton, volleyball, cycling, running, calisthenics, aerobics and yoga.`,
        img: "/img/extra_curricular/siliguri/sports_yoga.jpg",
        reverse: false,
      },
      {
        title: "Dance",
        text: `Through dance students learn teamwork and improvisational skills. Dance also enables students to better understand and analyse themselves by helping them to grow their real potential. Students at TIGWS learn pure form of Bharatnatyam and Rabindra Nritya.`,
        img: "/img/extra_curricular/siliguri/dance.jpg",
        reverse: true,
      },
      {
        title: "Music",
        text: `Music can help students to focus, relax, feel motivated, improve memory and make the process more enjoyable. Students at TIGWS learn Indian vocal music, Western music and Rabindra Sangeet as well as violin.`,
        img: "/img/extra_curricular/siliguri/music.jpg",
        reverse: false,
      },
    ],

    AdmissionCriteria: {
      image: "",
      description: ""
    }
  },
  
  malda: {
    name: "TIGWS Malda",
    bannerVideo: "/videos/TIGWS_Malda.mp4",
    logo: "/img/logo/tigws_malda_logo.png",
    fullName: "Techno India Group World School Malda",
    location: "Malda, West Bengal",
    type: "Co-Educational Day School",
    
    contact: {
      phone: "8967826765",
      email: "tigworldschoolmalda@gmail.com",
      address: "Sukhandighi, GP-Bhabuk, PO & PS Malda, 732142,Dist. Malda, West Bengal, India",
      websiteUrl: "https://www.tigworldschools.com/malda",
      schoolLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100074.97695814424!2d88.25886809726565!3d25.144868500000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fb13daaaaaaaab%3A0x4bf4b39968c28b25!2sTechno%20Global%20School%20Malda!5e1!3m2!1sen!2sin!4v1764581229614!5m2!1sen!2sin"
    },
    
    hero: {
      title: "Welcome to TIGWS Malda",
      subtitle: "Empowering Academics with Holistic Development",
      tagline: "Shaping Futures Through Excellence"
    },
    
    about: {
      description: "Techno India Group World School, Malda, is a premier institution dedicated to academic excellence and holistic development. Rooted in the Techno India Group’s legacy, the school fosters a vibrant learning environment that encourages curiosity, creativity, and strong character. With a comprehensive CBSE curriculum, modern teaching methods, and a focus on co-curricular activities and life skills, students are prepared for future challenges. The school aims to nurture confident, compassionate global citizens, empowering them to excel academically and contribute meaningfully to society.",
      highlights: [
        "Holistic Development Approach",
        "State-of-the-Art Infrastructure", 
        "Expert Sports and Physical Training",
        "Innovative Learning Methods",
        "Emphasis on Creative Arts and Hobbies",
        "Focus on Leadership and Life Skills"
      ],
      aboutImage: "/img/about/malda/first_pic.jpg"
    },

    missionVission: {
      missionVissionContent: [
        {
          title: "Our Mission",
          description: "To create a sustainable flow of quality human resources capable of meeting the technological challenges of tomorrow and thereby creating wealth for the nation at the forefront of knowledge."
        },
        {
          title: "Our Vision",
          description: "To create a unique and state of the art learning environment in the country and produce knowledge based technologists to meet the challenges of a new millennium."
        },
        {
          title: "Global Outlook",
          description: "Techno India Group World School Malda plans to introduce IGCSE and IB programs, offering students global exposure through international exchange opportunities and world-class education."
        }
      ],
      missionVissionImage: "/img/about/malda/mission_vision.jpg"
    },
    
    curriculum: {
      primary: "CBSE Curriculum",
      description: "Following the guidelines set by NCERT, with aspirations to be affiliated with CBSE, offering a globally recognized, progressive curriculum.",
      future: "Plans to introduce IGCSE and IB programs for global exposure"
    },
    
    whyChoose: [
      {
        image: "/img/academics/malda/point1.jpg",
        title: "Holistic Development Approach",
        description: "TIGWS Malda focuses on nurturing students' physical, mental, emotional, and intellectual growth, ensuring well-rounded development for future leaders."
      },
      {
        image: "/img/academics/malda/point2.jpg",
        title: "State-of-the-Art Infrastructure", 
        description: "The school offers modern facilities, including smart classrooms, a well-equipped library, and advanced sports amenities, creating an ideal learning environment."
      },
      {
        image: "/img/academics/malda/point3.jpg",
        title: "Expert Sports and Physical Training",
        description: "With specialized football coaching from Brazilian experts and Taekwondo classes under world-renowned mentors, students gain exceptional physical training."
      },
      {
        image: "/img/academics/malda/point4.jpg",
        title: "Innovative Learning Methods",
        description: "Digital classrooms and a blended hybrid teaching approach make learning engaging, combining interactive tools and modern educational techniques."
      },
      {
        image: "/img/academics/malda/point5.jpg",
        title: "Emphasis on Creative Arts and Hobbies",
        description: "Music, dance, art, and clay modeling workshops foster creativity, allowing students to explore their talents and express themselves freely."
      },
      {
        image: "/img/academics/malda/point6.jpg",
        title: "Focus on Leadership and Life Skills",
        description: "TIGWS Malda promotes leadership, teamwork, and resilience, preparing students to confidently tackle life's challenges and grow into responsible individuals."
      }
    ],

    aboutCardData: [
      {
        icon: 'fas fa-school',
        title: 'Holistic Growth',
        description: 'Our focus is on nurturing students\' physical, mental, emotional, and intellectual growth, empowering them to become well-rounded future leaders.',
        image: '/img/about/malda/holistic_growth.jpg'
      },
      {
        icon: 'fas fa-trophy',
        title: 'Sports Training',
        description: 'Our expert coaching in football and Taekwondo equips students with exceptional physical skills, setting them up for excellence in sports.',
        image: '/img/about/malda/sports_training.jpg'
      },
      {
        icon: 'fas fa-heart',
        title: 'Creative Arts',
        description: 'Our workshops in music, dance, art, and clay modeling ignite creativity, allowing students to discover their talents and express freely.',
        image: '/img/about/malda/creative_arts.jpg'
      },
      {
        icon: 'fas fa-globe',
        title: 'Life Skills',
        description: 'Our emphasis on leadership, teamwork, and resilience prepares students to confidently tackle challenges and grow into responsible, capable individuals.',
        image: '/img/about/malda/life_skills.jpg'
      }
    ],

    aboutShapingFuture: {
      description: "At Techno India Group World School Malda, we are committed to shaping the future of our students by adapting to the rapid changes in social, economic, and technological landscapes. Recognizing the need for high-quality education, we integrate cutting-edge teaching methods and the latest technologies into our curriculum. To offer a holistic learning experience, Techno India Group introduces a variety of flexible school formats, including Day, Extended Day, and Residential options. These formats are designed to provide students with a well-rounded education that caters to diverse needs, ensuring they are equipped with the skills and knowledge necessary for success in an ever-evolving global landscape.",
      image: '/img/about/malda/shaping_futures.jpg'
    },

    academicCBSECurriculum: {
      description: "Techno India World School Malda provides a nurturing environment that fosters academic excellence, focusing on both intellectual growth and comprehensive understanding. The curriculum is designed to encourage students to engage deeply with the subjects, going beyond rote learning to develop critical thinking and analytical skills. Following the guidelines set by the National Council for Educational Research & Training (NCERT), the school ensures a well-rounded education that aligns with national educational standards. Additionally, with aspirations to be affiliated with the Central Board of Secondary Education (CBSE), the school is committed to offering a globally recognized, progressive curriculum that prepares students for success in both academics and life. <br />We celebrate diversity, encourage cross-cultural dialogue, and prepare students to become ethical leaders in a changing world.",
      image: '/img/academics/malda/cbse_curriculum.jpg'
    },

    academicWACECurriculum: {
      description: "",
      image: ""
    },
    
    lifeAtSchool: [
      {
        id: '01',
        icon: '/img/icons/academic.png',
        title: "Academics",
        description: "Techno India World School Malda offers a dynamic curriculum, blending rigorous academics with interactive learning tools. Students are encouraged to develop critical thinking, problem-solving skills, and a strong foundation for future success."
      },
      {
        id: '02',
        icon: '/img/icons/stem.png',
        title: "STEM Innovation",
        description: "At Techno India World School Malda,  students engage with cutting-edge STEM education, fostering creativity and analytical thinking through hands-on projects, coding, robotics, and scientific exploration, preparing them for the technological world ahead."
      },
      {
        id: '03',
        icon: '/img/icons/arts.png',
        title: "Performing Arts",
        description: "Techno India World School Malda,  nurtures artistic talent through dedicated music, dance, and drama programs, providing students with the opportunity to explore both eastern and western traditions under expert guidance and mentorship."
      },
      {
        id: '04',
        icon: '/img/icons/sport.png',
        title: "Sports & Fitness",
        description: "With world-class sports facilities and expert coaching, Techno India World School Malda emphasizes physical fitness through diverse activities including gymnastics, football, swimming, and adventure sports, fostering teamwork and healthy competition."
      },
      {
        id: '05',
        icon: '/img/icons/sustainability.png',
        title: "Sustainability and Outreach",
        description: "Techno India World School Malda is committed to sustainability, instilling eco-friendly practices in students. Outreach programs promote social responsibility, encouraging students to contribute positively to the environment and community welfare."
      },
      {
        id: '06',
        icon: '/img/icons/replacement.png',
        title: "International Exchange",
        description: "Techno India World School Malda l fosters global learning through international exchange programs, offering students exposure to diverse cultures and perspectives while enhancing academic and personal growth in a globally interconnected world."
      }
    ],
    
    studentPathway: [
      {
        number: 1,
        grade: "Grade 9-10: Foundation (CBSE Core)",
        description: "Students in Grades 9–10 engage in a strong academic foundation built on the NCERT-prescribed curriculum. The learning environment promotes curiosity, conceptual clarity, and deeper subject understanding. The school is in the process of obtaining affiliation with the Central Board of Secondary Education (CBSE), ensuring students receive a holistic, nationally recognized education that prepares them for higher studies."
      },
      {
        number: 2,
        grade: "Grade 11-12",
        description: "In Grades 11-12, Techno India Group World School follows the CBSE curriculum, offering specialized streams—Science, Commerce, and Humanities. Focused on academic rigor, critical thinking, and practical application, students are prepared for higher education and competitive exams while developing leadership, time management, and holistic skills for future success."
      },
      {
        number: 3,
        grade: "Counselling & Career Guidance", 
        description: "Our dedicated counselling and career guidance cell helps students identify their strengths, interests, and aptitudes through structured assessments and one-on-one mentoring. With personalized guidance, students make informed decisions on selecting their academic streams and careers, matching their skills and passions. This support fosters confidence and clarity in the students."
      },
      {
        number: 4,
        grade: "University Admissions",
        description: "Students experience direct exposure to one of India’s largest and most reputed educational networks, the Techno India Group network. It enriches their journey from PG to PhD. With over three decades of academic excellence, the Group’s universities and colleges offer diverse programs in Engineering, Technology, Management, Humanities, Social Sciences, and more. Our students benefit from seamless transition opportunities, industry partnerships, and a strong focus on innovation and research-driven learning."
      },
      {
        number: 5,
        grade: "Alumni Success Stories",
        description: "Our Alumni stand as proud ambassadors of Techno India Group World School’s values and vision. They have gone on to excel in renowned universities, professional fields, and entrepreneurial ventures across the globe. Their success reflects the school’s commitment to nurturing well-rounded individuals equipped with the knowledge, confidence, and integrity to lead and inspire others."
      },
    ],

    MandatorySection: {
      generalInfo: [
        {
          id: 1,
          info: "NAME OF THE SCHOOL",
          details: "Techno India Group World School, Malda",
        },
        { id: 2, info: "AFFILIATION NO (IF APPLICABLE)", details: "" },
        { id: 3, info: "SCHOOL CODE", details: "" },
        {
          id: 4,
          info: "COMPLETE ADDRESS WITH PIN CODE",
          details:
            "Sukhandighi GP Bhabuk, PO Malda Dist Malda, West Bengal PIN: 732142",
        },
        {
          id: 5,
          info: "PRINCIPAL NAME",
          details: "Ms. Nilanjana K Jha",
        },
        {
          id: 6,
          info: "PRINCIPAL QUALIFICATION",
          details: "MSc, MSo, B.Ed",
        },
        { id: 7, info: "PRINCIPAL EMAIL ID", details: "principal.mld@tigws.in" },
        {
          id: 8,
          info: "CONTACT DETAILS (LANDLINE/MOBILE)",
          details: "77974-05946",
        },
      ],
      documents: [
        {
          id: 1,
          info: "COPIES OF AFFILIATION/UPGRADATION LETTER AND RECENT EXTENSION OF AFFILIATION, IF ANY",
          link: "#",
        },
        {
          id: 2,
          info: "COPIES OF SOCIETIES/TRUST/COMPANY/REGISTRATION/ RENEWAL CERTIFICATE, AS APPLICABLE",
          link: "#",
        },
        {
          id: 3,
          info: "COPY OF NO OBJECTION CERTIFICATE (NOC) ISSUED, IF APPLICABLE, BY THE STATE GOVT./UT",
          link: "#",
        },
        {
          id: 4,
          info: "COPIES OF RECOGNITION CERTIFICATE UNDER RTE ACT., 2009. AND ITS RENEWAL IF APPLICABLE",
          link: "#",
        },
        {
          id: 5,
          info: "COPY OF THE SELF CERTIFICATION SUBMITTED BY THE SCHOOL FOR AFFILIATION/UPGRADATION/EXTENSION OF AFFILIATION",
          link: "#",
        },
        {
          id: 6,
          info: "COPIES OF VALID WATER, HEALTH AND SANITATION CERTIFICATES",
          link: "#",
        },
      ],
      academics: [
        {
          id: 1,
          info: "FEE STRUCTURE OF THE SCHOOL",
          link: "#",
        },
        { id: 2, info: "ANNUAL ACADEMIC CALENDAR", link: "#" },
        { id: 3, info: "LIST OF SCHOOL MANAGEMENT COMMITTEE (SMC)", link: "#" },
        {
          id: 4,
          info: "LIST OF PARENTS TEACHERS ASSOCIATION (PTA) MEMBERS",
          link: "#",
        },
        {
          id: 5,
          info: "ANNUAL REPORT",
          link: "#",
        },
        {
          id: 6,
          info: "DETAILS OF CURRICULUM",
          link: "#",
        },
        {
          id: 7,
          info: "SAMPLE OF TRANSFER CERTIFICATE",
          link: "#",
        },
        {
          id: 8,
          info: "DETAILS OF TEACHERS TRAINING",
          link: "#",
        },
        {
          id: 9,
          info: "STAFF STATEMENT 2024-25",
          link: "#",
        },
        {
          id: 10,
          info: "SELF AFFIDAVIT",
          link: "#",
        },
      ],
      staffInfo: [
        { id: 1, info: "PRINCIPAL", details: "01" },
        { id: 2, info: "TOTAL NO. OF TEACHERS", details: "16" },
        { id: 3, info: "PGT", details: "00" },
        { id: 4, info: "TGT", details: "11" },
        { id: 5, info: "PRT", details: "05" },
        { id: 6, info: "TEACHERS SECTION RATIO", details: "1:1.5" },
        { id: 7, info: "DETAILS OF SPECIAL EDUCATOR", details: "01" },
        {
          id: 8,
          info: "DETAILS OF COUNSELLOR AND WELLNESS TEACHER",
          details: "01",
        },
      ],
      infrastructure: [
        {
          id: 1,
          info: "TOTAL CAMPUS AREA OF THE SCHOOL (IN SQ. MTR.)",
          details: "15742.27 SQUARE MTR",
        },
        {
          id: 2,
          info: "NO. AND SIZE OF THE CLASS ROOMS (IN SQ. MTR.)",
          details: "24 classrooms (46.50 sq.m each)",
        },
        {
          id: 3,
          info: "NO. AND SIZE OF LABORATORIES INCLUDING COMPUTER LABS (IN SQ. MTR.)",
          details: "3 Labs (Average 64 sq.m each)",
        },
        { id: 4, info: "INTERNET FACILITY", details: "Yes" },
        { id: 5, info: "NO. OF GIRLS TOILETS", details: "6" },
        { id: 6, info: "NO. OF BOYS TOILETS", details: "6" },
        {
          id: 7,
          info: "LINK OF YOUTUBE VIDEO OF THE INSPECTION OF SCHOOL COVERING THE INFRASTRUCTURE OF THE SCHOOL",
          details: "#"
        },
        {
          id: 8,
          info: "Upload Teachers List (Download Sample Format)",
          details: "#"
        },
      ]
    },

    gallery: [
    {
      image: "/img/gallery/malda/image_1.jpg"
    },
    {
      image: "/img/gallery/malda/image_5.jpg"
    },
    {
      image: "/img/gallery/malda/image_3.jpg"
    },
    {
      image: "/img/gallery/malda/image_4.jpg"
    },
    {
      image: "/img/gallery/malda/image_2.jpg"
    },
    {
      image: "/img/gallery/malda/image_6.jpg"
    },
    ],

    testimonials: [
      {
        text: "The blend of WACE and CBSE was the perfect launchpad for my MIT admission.",
        name: "Aarav Shah",
        designation: "2023",
      }
    ],

    BookList : {
      bookPDFLink : "/pdf/malda-mpd/booklist-tigws-malda.pdf",
      bookData : [
        {
          class: "NUR-UKG",
          books: [
            { subject: "ENGLISH", titles: ["MADHUBUN PUBLICATIONS BOOK"] },
            { subject: "MATHEMATICS", titles: ["MADHUBUN PUBLICATIONS BOOK"] },
            { subject: "BENGALI 2ND LANGUAGE", titles: ["MADHUBUN PUBLICATIONS BOOK"] },
            { subject: "HINDI 2ND LANGUAGE", titles: ["MADHUBUN PUBLICATIONS BOOK"] },
            { subject: "EVS", titles: ["MADHUBUN PUBLICATIONS BOOK"] },
            { subject: "COMPUTER", titles: ["MADHUBUN PUBLICATIONS BOOK"] }
          ],
        },
        {
          class: "Class I",
          books: [
            { subject: "ENGLISH", titles: ["Oxford Reading Circle 1", "Oxford New learner's Grammar 1", "Oxford Friday Afternoon", "Comprehension and Composition 1"] },
            { subject: "MATHEMATICS", titles: ["Oxford New Guided Mathematics Book 1"] },
            { subject: "BENGALI 2ND LANGUAGE", titles: ["তাতার বই, grammar - Reader -"] },
            { subject: "HINDI 2ND LANGUAGE", titles: ["Jagrity Book 1 (Amity University)", "Abhyas Pustika Book 1 (Amity University)"] },
            { subject: "EVS", titles: ["Oxford Hello Earth Class 1"] },
            { subject: "COMPUTER", titles: ["Oxford Reboot Class 1"] }
          ],
        },
        {
          class: "Class II",
          books: [
            { subject: "ENGLISH", titles: ["Oxford Reading Circle 2", "Oxford New learner's Grammar 2", "Oxford Friday Afternoon", "Comprehension and Composition 2"] },
            { subject: "MATHEMATICS", titles: ["Oxford New Guided Mathematics Book 2"] },
            { subject: "BENGALI 2ND LANGUAGE", titles: ["তাতার বই, grammar - Reader -"] },
            { subject: "HINDI 2ND LANGUAGE", titles: ["Jagrity Book 2 (Amity University)", "Abhyas Pustika Book 2 (Amity University)"] },
            { subject: "EVS", titles: ["Oxford Hello Earth Class 2"] },
            { subject: "COMPUTER", titles: ["Oxford Reboot Class 2"] }
          ],
        },
        {
          class: "Class III",
          books: [
            { subject: "ENGLISH", titles: ["Oxford Reading Circle 3", "Oxford New learner's Grammar 3", "Oxford Friday Afternoon", "Comprehension and Composition 3"] },
            { subject: "MATHEMATICS", titles: ["Oxford New Guided Mathematics Book 3"] },
            { subject: "BENGALI 2ND LANGUAGE", titles: ["বিচিত্র পাঠ পাঠমালা, Grammar - Reader -"] },
            { subject: "HINDI 2ND LANGUAGE", titles: ["Jagrity Book 3 (Amity University)", "Abhyas Pustika Book 3 (Amity University)"] },
            { subject: "EVS", titles: ["Oxford Hello Earth Class 3"] },
            { subject: "COMPUTER", titles: ["Oxford Reboot Class 3"] }
          ],
        },
        {
          class: "Class IV",
          books: [
            { subject: "ENGLISH", titles: ["Oxford Reading Circle 4", "Oxford New learner's Grammar 4", "Oxford Friday Afternoon", "Comprehension and Composition 4"] },
            { subject: "MATHEMATICS", titles: ["Oxford New Guided Mathematics Book 4"] },
            { subject: "BENGALI 2ND LANGUAGE", titles: ["বিচিত্র পাঠ পাঠমালা, Grammar - Reader -"] },
            { subject: "HINDI 2ND LANGUAGE", titles: ["Jagrity Book 4 (Amity University)", "Abhyas Pustika Book 4 (Amity University)"] },
            { subject: "EVS", titles: ["Oxford Hello Earth Class 4"] },
            { subject: "COMPUTER", titles: ["Oxford Reboot Class 4"] }
          ],
        },
        {
          class: "Class V",
          books: [
            { subject: "ENGLISH", titles: ["Oxford New Pathways Coursebook 5", "Oxford New learner's Grammar and composition 5", "Reader-Room of the Roof (Ruskin Bond)"] },
            { subject: "MATHEMATICS", titles: ["Oxford New Guided Mathematics Book 5"] },
            { subject: "BENGALI 2ND LANGUAGE", titles: ["বিচিত্র পাঠ পাঠমালা, Grammar - Reader -"] },
            { subject: "HINDI 2ND LANGUAGE", titles: ["Jagrity Book 5 (Amity University)", "Abhyas Pustika Book 5 (Amity University)"] },
            { subject: "BENGALI 3rd LANGUAGE", titles: ["Kotha Mukul book 1 (Bibhabati)"] },
            { subject: "HINDI 3rd LANGUAGE", titles: ["Jagrity Book 1 (Amity University)", "Abhyas Pustika Book 1 (Amity University)"] },
            { subject: "EVS", titles: ["Oxford Hello Earth Class 1"] },
            { subject: "COMPUTER", titles: ["AI and You 5", "Innovate 5 (Avartan Publishers)"] }
          ],
        },
        {
          class: "Class VI",
          books: [
            { subject: "ENGLISH", titles: ["Oxford New Pathways Coursebook 6", "Oxford New learner's Grammar and composition 6 ", "Reader- The Adventures of Tom Sawyer (Mark Twain)"] },
            { subject: "MATHEMATICS", titles: ["NCERT Mathematics class 6"] },
            { subject: "BENGALI 2ND LANGUAGE", titles: ["বিচিত্র পাঠ পাঠমালা, Grammar - Reader -"] },
            { subject: "HINDI 2ND LANGUAGE", titles: ["Jagrity Book 6 (Amity University)", "Hindi vyakaran evang rachana Class 6 (Dhanpat Rai Publications)"] },
            { subject: "BENGALI 3rd LANGUAGE", titles: ["Kotha Mukul book 2 (Bibhabati)"] },
            { subject: "HINDI 3rd LANGUAGE", titles: ["Jagrity Book 2 (Amity University)", "Abhyas Pustika Book 3 (Amity University)"] },
            { subject: "SST", titles: ["Excellence in Social Science 6 (Prachi Publications)"] },
            { subject: "SCIENCE", titles: ["Let's Explore Science Class 6 (Arya Book Depot)"]},
            { subject: "COMPUTER", titles: ["AI and You 6", "Innovate 6 (Avartan Publishers)"] }
          ],
        },
        {
          class: "Class VII",
          books: [
            { subject: "ENGLISH", titles: ["Oxford New Pathways Coursebook 7", "Oxford New learner's Grammar and composition 7", "Reader - Treasure Island (Robert Louis Stevenson)"] },
            { subject: "MATHEMATICS", titles: ["NCERT Mathematics class 7"] },
            { subject: "BENGALI 2ND LANGUAGE", titles: ["বিচিত্র পাঠ পাঠমালা, Grammar - Reader -"] },
            { subject: "HINDI 2ND LANGUAGE", titles: ["Jagrity Book 7 (Amity University)", "Hindi vyakaran evang rachana Class 6 (Dhanpat Rai Publications)"] },
            { subject: "BENGALI 3rd LANGUAGE", titles: ["Kotha Mukul book 3 (Bibhabati)"] },
            { subject: "HINDI 3rd LANGUAGE", titles: ["Jagrity Book 3 (Amity University)", "Abhyas Pustika Book 3 (Amity University)"] },
            { subject: "SST", titles: ["Excellence in Social Science 7 (Prachi Publications)"] },
            { subject: "SCIENCE", titles: ["Let's Explore Science Class 7 (Arya Book Depot)"]},
            { subject: "COMPUTER", titles: ["AI and You 7", "Innovate 7 (Avartan Publishers)"] }
          ],
        },
        {
          class: "Class VIII",
          books: [
            { subject: "ENGLISH", titles: ["Oxford New Pathways Coursebook 8", "Oxford New learner's Grammar and composition 8", "Reader- Little Women (Louisa Mary Alcot)"] },
            { subject: "MATHEMATICS", titles: ["NCERT Mathematics class 8"] },
            { subject: "BENGALI 2ND LANGUAGE", titles: ["বিচিত্র পাঠ পাঠমালা, Grammar - Reader -"] },
            { subject: "HINDI 2ND LANGUAGE", titles: ["Jagrity Book 4 (Amity University)", "Hindi vyakaran evang rachana Class 6 (Dhanpat Rai Publications)"] },
            { subject: "BENGALI 3rd LANGUAGE", titles: ["Kotha Mukul book 4 (Bibhabati)"] },
            { subject: "HINDI 3rd LANGUAGE", titles: ["Jagrity Book 4 (Amity University)", "Abhyas Pustika Book 4 (Amity University)"] },
            { subject: "SST", titles: ["Excellence in Social Science 8 (Prachi Publications)"] },
            { subject: "SCIENCE", titles: ["Let's Explore Science Class 8 (Arya Book Depot)"]},
            { subject: "COMPUTER", titles: ["AI and You 8", "Innovate 8 (Avartan Publishers)"] }
          ],
        },
        {
          class: "Class IX",
          books: [
            { subject: "ENGLISH", titles: ["Textbook-Beehive (NCERT)", "Reader - Moments (NCERT)", "Together with CBSE (Question Bank) by Rachna Sagar"] },
            { subject: "MATHEMATICS", titles: ["NCERT"] },
            { subject: "BENGALI 2ND LANGUAGE", titles: ["সাহিত্য সঞ্চয়ন", "আম আটির ভেঁপু", "বাংলা ব্যাকরণ ও রচনা"] },
            { subject: "HINDI 2ND LANGUAGE", titles: ["स्पर्श- भाग 1", "संचयन - भाग 1", "व्याकरण - भाषा अधिगम और व्याकरण"] },
            { subject: "SST", titles: ["NCERT"] },
            { subject: "SCIENCE", titles: ["NCERT", "ABD (Let's Explore Physics/Chemistry/Biology)"] },
            { subject: "COMPUTER", titles: ["Artificial Intellligence Class 9 (Avartan Publishers)"] }
          ],
        },
        {
          class: "Class X",
          books: [
            { subject: "MATHEMATICS", titles: ["NCERT"] },
            { subject: "SST", titles: ["NCERT"] },
            { subject: "SCIENCE", titles: ["NCERT", "ABD (Let's Explore Physics/Chemistry/Biology)"] },
            { subject: "COMPUTER", titles: ["Artificial Intellligence Class 10 (Avartan Publishers)"] }
          ],
        }
      ]
    },

    StudentCapacity : {
      StudentCapacityPDFLink : "/pdf/malda-mpd/student-capacity.pdf",
      studentData : [
        { class: "BAL VATIKA 1 (PRE-SCHOOL)", totalSections: 1, maxIntake: 40, girls: 6, boys: 6, transGender: 0, totalStudents: 12, cwsn: 1 },
        { class: "BAL VATIKA 2 (PRE-SCHOOL)", totalSections: 1, maxIntake: 40, girls: 3, boys: 6, transGender: 0, totalStudents: 9, cwsn: 1 },
        { class: "BAL VATIKA 3 (PRE-SCHOOL)", totalSections: 1, maxIntake: 40, girls: 11, boys: 15, transGender: 0, totalStudents: 25, cwsn: 0 },
        { class: "1", totalSections: 1, maxIntake: 40, girls: 16, boys: 10, transGender: 0, totalStudents: 26, cwsn: 0 },
        { class: "2", totalSections: 1, maxIntake: 40, girls: 10, boys: 20, transGender: 0, totalStudents: 30, cwsn: 0 },
        { class: "3", totalSections: 2, maxIntake: 40, girls: 20, boys: 14, transGender: 0, totalStudents: 34, cwsn: 0 },
        { class: "4", totalSections: 2, maxIntake: 40, girls: 17, boys: 20, transGender: 0, totalStudents: 37, cwsn: 1 },
        { class: "5", totalSections: 1, maxIntake: 40, girls: 15, boys: 16, transGender: 0, totalStudents: 31, cwsn: 1 },
        { class: "6", totalSections: 2, maxIntake: 40, girls: 11, boys: 22, transGender: 0, totalStudents: 33, cwsn: 0 },
        { class: "7", totalSections: 1, maxIntake: 40, girls: 13, boys: 15, transGender: 0, totalStudents: 28, cwsn: 1 },
        { class: "8", totalSections: 1, maxIntake: 40, girls: 12, boys: 8, transGender: 0, totalStudents: 20, cwsn: 0 },
        { class: "9", totalSections: 1, maxIntake: 0, girls: 4, boys: 6, transGender: 0, totalStudents: 10, cwsn: 0 },
        { class: "10", totalSections: 0, maxIntake: 0, girls: 0, boys: 0, transGender: 0, totalStudents: 0, cwsn: 0 },
        { class: "11", totalSections: 0, maxIntake: 0, girls: 0, boys: 0, transGender: 0, totalStudents: 0, cwsn: 0 },
        { class: "12", totalSections: 0, maxIntake: 0, girls: 0, boys: 0, transGender: 0, totalStudents: 0, cwsn: 0 },
      ]
    },

    ExtraCurricularSection: [
      {
        title: "Beyond Classroom",
        text: `TIGWS Malda provides a vibrant range of extra-curricular activities that nurture creativity, leadership, teamwork, and holistic development. Students participate in dynamic clubs such as MUN, Cyber, Photography, Entrepreneurship, and Interact. The school also hosts major events like Sports Day and the Annual Concert, along with engaging inter-house competitions in debate, elocution, singing, dancing, and culinary skills.`,
        img: "/img/extra_curricular/malda/beyound_academics.jpg",
        reverse: false,
      },
      {
        title: "Sports and Yoga",
        text: `At Techno India Group World School Malda, students engage in sports, yoga, and Taekwondo to develop strength, flexibility, discipline, and mental focus. These activities promote physical fitness, teamwork, and mindfulness, supporting both physical and emotional well-being, fostering a balanced lifestyle and overall growth.`,
        img: "/img/extra_curricular/malda/sports_yoga.jpg",
        reverse: false,
      },
      {
        title: "Dance",
        text: `Our dance program, including Zumba, encourages creativity, coordination, and physical fitness. Students express themselves through movement, building confidence, rhythm, and teamwork. Dance fosters mental well-being and self-expression, offering an exciting and energetic way for students to stay active and connect with their artistic side.`,
        img: "/img/extra_curricular/malda/dance.jpg",
        reverse: false,
      },
      {
        title: "Music",
        text: `The music program offers students the chance to explore vocal and instrumental skills. Through recitation, singing, and playing instruments, students enhance creativity, focus, and teamwork, while fostering emotional expression and a lifelong appreciation for music and the arts.`,
        img: "/img/extra_curricular/malda/music.jpg",
        reverse: false,
      },
      {
        title: "Art and Craft",
        text: `The Art and Craft program encourages students to explore their creativity through various mediums. Students develop their artistic skills, improve problem-solving abilities, and express themselves through drawing, painting, and crafting. This activity nurtures imagination, attention to detail, and offers a therapeutic outlet for self-expression.`,
        img: "/img/extra_curricular/malda/art_craft.jpg",
        reverse: false,
      }
    ],

    AdmissionCriteria: {
      image: "/img/admission/malda/admission_pic.jpg",
      description: "Admission to Techno India Group World School Malda will be granted based on the candidate's merit and the results of an entrance examination. The dates for the entrance examination will be announced in advance. The final decision regarding admission will be made by the school. Following the entrance exam, a parent interview will be conducted as part of the admission process."
    }
  },

  kolkata: {
    name: "TIGWS Kolkata",
    bannerVideo: "/videos/TIGWS_Kolkata.mp4",
    logo: "/img/logo/tigws_kolkata_logo.png",
    fullName: "Techno India Group World School kolkata",
    location: "kolkata, West Bengal",
    type: "Co-Educational Day School",

    contact: {
      phone: "",
      email: "",
      address: "",
      websiteUrl: "https://www.tigworldschools.com/kolkata",
      schoolLocation: ""
    },

    hero: {
      title: "Welcome to TIGWS Kolkata",
      subtitle: "Empowering young minds to shape global leaders",
      tagline: "Shaping Futures Through Excellence"
    },

    about: {
      description: "Techno India Group World School, Kolkata, is set to become a leading educational institution, blending academic excellence with holistic development. With a strong CBSE curriculum and modern teaching methods, the school will foster curiosity, creativity, and critical thinking. Beyond academics, it will emphasize co-curricular activities, life skills, and values-based education, preparing students to thrive in a global world. The school aims to nurture confident, compassionate, and responsible global citizens equipped with the knowledge, skills, and mindset to excel academically and contribute meaningfully to society, shaping a bright future for each student.",
      highlights: [
        "Holistic Development Approach",
        "State-of-the-Art Infrastructure",
        "Expert Sports and Physical Training",
        "Innovative Learning Methods",
        "Emphasis on Creative Arts and Hobbies",
        "Focus on Leadership and Life Skills"
      ],
      aboutImage: "/img/about/kolkata/first_pic_kolkata.jpg"
    },

    missionVission: {
      missionVissionContent: [
        {
          title: "Our Mission",
          description: "To drive national growth by systematically developing future technologists equipped to navigate the challenges of advanced knowledge and innovation."
        },
        {
          title: "Our Vision",
          description: "To establish a distinguished, state-of-the-art educational environment that produces technology-driven experts prepared to meet the evolving demands of the new millennium."
        },
        {
          title: "Global Outlook",
          description: "Techno India Group World School Kolkata is aimed at offering international curricula and programs, providing students with global exposure through exchange opportunities and ensuring a world-class education."
        },
      ],
      missionVissionImage: "/img/about/kolkata/mission_vision.jpg"
    },

    curriculum: {
      primary: "CBSE Curriculum",
      description: "",
      future: ""
    },

    whyChoose: [
      {
        image: "/img/academics/kolkata/point1.jpg",
        title: "Supportive & Inclusive Campus",
        description: ""
      },
      {
        image: "/img/academics/kolkata/point2.jpg",
        title: "Comprehensive Educational Curriculum",
        description: ""
      },
      {
        image: "/img/academics/kolkata/point3.jpg",
        title: "Holistic Growth Beyond Academics",
        description: ""
      },
      {
        image: "/img/academics/kolkata/point4.jpg",
        title: "Empowered by Technology & Faculty Excellence",
        description: ""
      },
      {
        image: "/img/academics/kolkata/point5.jpg",
        title: "Personalized Learning & Mentorship",
        description: ""
      },
      {
        image: "/img/academics/kolkata/point6.jpg",
        title: "Future-Ready College & Career Pathways",
        description: ""
      }
    ],

    gallery: [
      {
        image: "/img/gallery/kolkata/image_1.jpg"
      },
      {
        image: "/img/gallery/kolkata/image_5.jpg"
      },
      {
        image: "/img/gallery/kolkata/image_3.jpg"
      },
      {
        image: "/img/gallery/kolkata/image_4.jpg"
      },
      {
        image: "/img/gallery/kolkata/image_2.jpg"
      },
      {
        image: "/img/gallery/kolkata/image_6.jpg"
      },
    ]
  }
};

// Get campus configuration
export const getCampusConfig = (campus) => {
  return campusConfig[campus] || campusConfig.siliguri;
};

// Campus-specific SEO
export const getCampusSEO = (campus, page = 'home') => {
  const config = getCampusConfig(campus);
  
  const seoData = {
    malda: {
      home: {
        title: `Best School in West Bengal | ${config.name} - CBSE Curriculum`,
        description: `Premier co-educational school in Malda, West Bengal. CBSE curriculum, holistic development, modern facilities. Expert sports training & creative arts. Admissions open.`,
        keywords: "best school West Bengal, best school Malda, CBSE school Malda, co-educational school, holistic development, sports training Malda"
      },
      about: {
        title: `About ${config.name} - Holistic Development & Academic Excellence`,
        description: `Discover TIGWS Malda's commitment to academic excellence and holistic development. Modern infrastructure, expert coaching, and innovative learning methods.`,
        keywords: "TIGWS Malda about, holistic development, academic excellence, modern infrastructure"
      }
    }
  };
  
  return seoData[campus]?.[page] || {
    title: config.fullName,
    description: config.about.description,
    keywords: `${config.name}, ${config.location}, education`
  };
};