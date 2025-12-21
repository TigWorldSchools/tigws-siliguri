// SEO Configuration for TIGWS Siliguri
export const seoConfig = {
  defaultTitle: "TIGWS Siliguri - Best Girls School in North Bengal",
  titleTemplate: "%s | TIGWS Siliguri",
  defaultDescription: "Premier all-girls residential school in Siliguri offering CBSE & WACE curriculum. World-class education, modern facilities, holistic development. Admissions open 2026-27.",
  siteUrl: "https://www.tigworldschools.com",
  defaultImage: "/img/about/first_pic.jpg",
  
  // Page-specific SEO data
  pages: {
    home: {
      title: "Best Girls School in Siliguri | TIGWS - Techno India Group World School",
      description: "Top-rated all-girls residential school in Siliguri, North Bengal. CBSE & WACE curriculum, world-class facilities, holistic education. Admissions open 2026-27.",
      keywords: "best girls school Siliguri, residential school North Bengal, CBSE school Siliguri, WACE curriculum, all girls boarding school, Techno India Group"
    },
    about: {
      title: "About TIGWS Siliguri - Premier All-Girls Education Excellence",
      description: "Learn about TIGWS Siliguri's mission, vision, and commitment to empowering young women through quality education in North Bengal's premier residential school.",
      keywords: "TIGWS about, girls education Siliguri, school mission vision, North Bengal education, women empowerment school"
    },
    admissions: {
      title: "Admissions 2026-27 | TIGWS Siliguri - Apply Now",
      description: "Secure admission to TIGWS Siliguri for 2026-27. Comprehensive admission process, eligibility criteria, and application guidelines for North Bengal's top girls school.",
      keywords: "TIGWS admission 2026, Siliguri school admission, girls school application, admission criteria, residential school admission"
    },
    curriculum: {
      title: "CBSE & WACE Curriculum | Academic Excellence at TIGWS Siliguri",
      description: "Discover TIGWS Siliguri's dual curriculum approach with CBSE and Australian WACE programs, designed for global competency and academic excellence.",
      keywords: "CBSE curriculum Siliguri, WACE program India, international curriculum, academic excellence, dual curriculum school"
    }
  },
  
  // Local SEO data
  localSEO: {
    businessName: "Techno India Group World School Siliguri",
    address: {
      street: "TIGWS Campus",
      city: "Siliguri",
      state: "West Bengal",
      country: "India",
      postalCode: "734001"
    },
    phone: "+91-XXXXXXXXXX",
    email: "admissions@tigws-siliguri.com"
  },
  
  // Social media links
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61555824702266",
    instagram: " https://www.instagram.com/tig_world_school",
    youtube: "https://www.youtube.com/tigwssiliguri",
    linkedin: "https://www.linkedin.com/school/tigws-siliguri"
  }
};

// Generate structured data for different page types
export const generateStructuredData = (pageType, pageData = {}) => {
  const baseData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": seoConfig.localSEO.businessName,
    "alternateName": "TIGWS Siliguri",
    "url": seoConfig.siteUrl,
    "logo": `${seoConfig.siteUrl}/img/logo/tigws_siliguri_logo.png`,
    "description": seoConfig.defaultDescription,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": seoConfig.localSEO.address.street,
      "addressLocality": seoConfig.localSEO.address.city,
      "addressRegion": seoConfig.localSEO.address.state,
      "addressCountry": seoConfig.localSEO.address.country,
      "postalCode": seoConfig.localSEO.address.postalCode
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Admissions",
      "telephone": seoConfig.localSEO.phone,
      "email": seoConfig.localSEO.email,
      "availableLanguage": ["English", "Hindi", "Bengali"]
    },
    "sameAs": Object.values(seoConfig.social),
    "educationalCredentialAwarded": ["CBSE Certificate", "WACE Certificate"],
    "audience": {
      "@type": "EducationalAudience",
      "educationalRole": "student",
      "audienceType": "Girls"
    }
  };

  // Add page-specific structured data
  switch (pageType) {
    case 'course':
      return {
        ...baseData,
        "@type": "Course",
        "name": pageData.courseName,
        "description": pageData.courseDescription,
        "provider": baseData
      };
    
    case 'event':
      return {
        "@context": "https://schema.org",
        "@type": "Event",
        "name": pageData.eventName,
        "description": pageData.eventDescription,
        "startDate": pageData.startDate,
        "location": baseData.address,
        "organizer": baseData
      };
    
    default:
      return baseData;
  }
};