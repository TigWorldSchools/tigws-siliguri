// Campus Configuration System
export const campusConfig = {
  siliguri: {
    name: "TIGWS Siliguri",
    fullName: "Techno India Group World School Siliguri",
    location: "Siliguri, North Bengal",
    type: "All-Girls Residential School",
    
    contact: {
      phone: "+91-XXXXXXXXXX",
      email: "admissions@tigws-siliguri.com",
      address: "TIGWS Campus, Siliguri, West Bengal 734001"
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
      ]
    }
  },
  
  malda: {
    name: "TIGWS Malda",
    fullName: "Techno India Group World School Malda",
    location: "Malda, West Bengal",
    type: "Co-Educational Day School",
    
    contact: {
      phone: "8967826765",
      email: "tigworldschoolmalda@gmail.com",
      address: "TIGWS Campus, Malda, West Bengal"
    },
    
    hero: {
      title: "Welcome to TIGWS Malda",
      subtitle: "Empowering Academics with Holistic Development",
      tagline: "Shaping Futures Through Excellence"
    },
    
    about: {
      description: "Techno India Group World School, Malda, is a premier institution dedicated to academic excellence and holistic development. Rooted in the Techno India Group's legacy, the school fosters a vibrant learning environment that encourages curiosity, creativity, and strong character.",
      highlights: [
        "Holistic Development Approach",
        "State-of-the-Art Infrastructure", 
        "Expert Sports and Physical Training",
        "Innovative Learning Methods",
        "Emphasis on Creative Arts and Hobbies",
        "Focus on Leadership and Life Skills"
      ]
    },
    
    curriculum: {
      primary: "CBSE Curriculum",
      description: "Following the guidelines set by NCERT, with aspirations to be affiliated with CBSE, offering a globally recognized, progressive curriculum.",
      future: "Plans to introduce IGCSE and IB programs for global exposure"
    },
    
    whyChoose: [
      {
        title: "Holistic Development Approach",
        description: "TIGWS Malda focuses on nurturing students' physical, mental, emotional, and intellectual growth, ensuring well-rounded development for future leaders."
      },
      {
        title: "State-of-the-Art Infrastructure", 
        description: "The school offers modern facilities, including smart classrooms, a well-equipped library, and advanced sports amenities, creating an ideal learning environment."
      },
      {
        title: "Expert Sports and Physical Training",
        description: "With specialized football coaching from Brazilian experts and Taekwondo classes under world-renowned mentors, students gain exceptional physical training."
      },
      {
        title: "Innovative Learning Methods",
        description: "Digital classrooms and a blended hybrid teaching approach make learning engaging, combining interactive tools and modern educational techniques."
      },
      {
        title: "Emphasis on Creative Arts and Hobbies",
        description: "Music, dance, art, and clay modeling workshops foster creativity, allowing students to explore their talents and express themselves freely."
      },
      {
        title: "Focus on Leadership and Life Skills",
        description: "TIGWS Malda promotes leadership, teamwork, and resilience, preparing students to confidently tackle life's challenges and grow into responsible individuals."
      }
    ],
    
    lifeAtSchool: [
      {
        title: "Academics",
        description: "Techno India World School Malda offers a dynamic curriculum, blending rigorous academics with interactive learning tools. Students are encouraged to develop critical thinking, problem-solving skills, and a strong foundation for future success."
      },
      {
        title: "STEM Innovation",
        description: "Students engage with cutting-edge STEM education, fostering creativity and analytical thinking through hands-on projects, coding, robotics, and scientific exploration, preparing them for the technological world ahead."
      },
      {
        title: "Performing Arts",
        description: "Techno India World School Malda nurtures artistic talent through dedicated music, dance, and drama programs, providing students with the opportunity to explore both eastern and western traditions under expert guidance."
      },
      {
        title: "Sports & Fitness",
        description: "With world-class sports facilities and expert coaching, TIGWS Malda emphasizes physical fitness through diverse activities including gymnastics, football, swimming, and adventure sports, fostering teamwork and healthy competition."
      },
      {
        title: "Sustainability and Outreach",
        description: "TIGWS Malda is committed to sustainability, instilling eco-friendly practices in students. Outreach programs promote social responsibility, encouraging students to contribute positively to the environment and community welfare."
      },
      {
        title: "International Exchange",
        description: "TIGWS Malda fosters global learning through international exchange programs, offering students exposure to diverse cultures and perspectives while enhancing academic and personal growth."
      }
    ],
    
    studentPathway: [
      {
        grade: "Grade 9-10: Foundation (CBSE Core)",
        description: "Students engage in a strong academic foundation built on the NCERT-prescribed curriculum. The school is in the process of obtaining CBSE affiliation, ensuring students receive a holistic, nationally recognized education."
      },
      {
        grade: "Grade 11-12",
        description: "Following the CBSE curriculum, offering specialized streams—Science, Commerce, and Humanities. Focused on academic rigor, critical thinking, and practical application, students are prepared for higher education and competitive exams."
      },
      {
        grade: "Counselling & Career Guidance", 
        description: "Our dedicated counselling cell helps students identify their strengths through structured assessments and one-on-one mentoring, fostering confidence and clarity in academic and career decisions."
      },
      {
        grade: "University Admissions",
        description: "Students experience direct exposure to the Techno India Group network, enriching their journey from PG to PhD with seamless transition opportunities and industry partnerships."
      },
      {
        grade: "Alumni Success Stories",
        description: "Our Alumni stand as proud ambassadors, excelling in renowned universities, professional fields, and entrepreneurial ventures across the globe, reflecting our commitment to nurturing well-rounded individuals."
      }
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
        title: `Best School in Malda | ${config.name} - CBSE Curriculum`,
        description: `Premier co-educational school in Malda, West Bengal. CBSE curriculum, holistic development, modern facilities. Expert sports training & creative arts. Admissions open.`,
        keywords: "best school Malda, CBSE school Malda, co-educational school, holistic development, sports training Malda"
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