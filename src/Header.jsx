import React from 'react';
import HeaderNav from './components/HeaderNav.jsx';
import { Link, useLocation } from 'react-router-dom';
import { getCampusConfig } from './utils/campusConfig.js';

const Header = ({ onOpenModal }) => {
  const { pathname } = useLocation();
  const campus = pathname.split("/")[1] || "siliguri";

  const campusData = getCampusConfig(campus);

  const menuItems = [
    { label: 'Home', url: `/${campus}` },
    { 
      label: 'About Us', 
      url: `/${campus}/about`,
      dropdown: [
        { label: 'About TIGWS', url: `/${campus}/about` },
        { label: 'Why TIGWS', url: `/${campus}/about#why-tigws` },
        { label: 'Legacy of TIG', url: `/${campus}/about#legacy` },
        { label: 'Other Campuses', url: `/${campus}/about#other-campuses` },
        { label: (<><span>Mandatory</span><br /><span>Disclosure</span></>), url: `/${campus}/mandatory-disclosure` }
      ]
    },
    { 
      label: 'Academics', 
      url: `/${campus}/curriculum`,
      dropdown: [
        { label: 'Curriculum', url: `/${campus}/curriculum` },
        { label: 'List Of Books', url: `/${campus}/books` }
      ]
    },
    { 
      label: 'Admissions', 
      url: `/${campus}/admission-criteria`,
      dropdown: [
        { label: 'Criteria', url: `/${campus}/admission-criteria` },
        { label: 'Student Capacity', url: `/${campus}/student-capacity` },
        { label: 'Application Form', url: `/${campus}/application-form` }
      ]
    },
    { label: 'Life at TIGWS', url:`/${campus}/life-at-tigws` ,
      dropdown: [
      {label: 'Life At TIGWS', url:`/${campus}/life-at-tigws`},
      {label:'Student Pathway', url:`/${campus}/student-pathway`},
      {label:'Extra Curricular', url:`/${campus}/extra-curricular`},
      {label:'Gallery', url:`/${campus}/gallery`},
      {label:'Student Testimonials', url:`/${campus}/student-testimonials`}
    ]
    },

    { label: 'Contact Us', url: `/${campus}/career` ,
      dropdown:[
        {label:'Career', url: `/${campus}/career`},
        {label:'Collaborate with Us', url:`/${campus}/collaborate`},
        {label:'Social Media', url:`/${campus}/social-media`}
      ]
    }
  ];

  return (
    <HeaderNav 
      logoUrl={`${campusData.logo}`}
      linkUrl={`${campusData.contact.websiteUrl}`}
      altText="TIGWS"
      menuItems={menuItems}
      onOpenModal={onOpenModal}
    />
  );
};

export default Header;
