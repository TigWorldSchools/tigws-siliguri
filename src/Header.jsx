import React from 'react';
import HeaderNav from './components/HeaderNav.jsx';

const Header = ({ onOpenModal }) => {
  const menuItems = [
    { label: 'Home', url: '/siliguri' },
    { 
      label: 'About Us', 
      url: '/siliguri/about',
      dropdown: [
        { label: 'About TIGWS', url: '/siliguri/about' },
        { label: 'Why TIGWS', url: '/siliguri/about#why-tigws' },
        { label: 'Legacy of TIG', url: '/siliguri/about#legacy' },
        { label: 'Other Campuses', url: '/siliguri/about#other-campuses' },
        { label: (<><span>Mandatory</span><br /><span>Disclosure</span></>), url: '/siliguri/mandatory-disclosure' }
      ]
    },
    { 
      label: 'Academics', 
      url: '/siliguri/curriculum',
      dropdown: [
        { label: 'Curriculum', url: '/siliguri/curriculum' },
        { label: 'List Of Books', url: '/siliguri/books' }
      ]
    },
    { 
      label: 'Admissions', 
      url: '/siliguri/admission-criteria',
      dropdown: [
        { label: 'Criteria', url: '/siliguri/admission-criteria' },
        { label: 'Student Capacity', url: '/siliguri/student-capacity' },
        { label: 'Application Form', url: '/siliguri/application-form' }
      ]
    },
    { label: 'Life at TIGWS', url: '/siliguri/life-at-tigws' ,
      dropdown: [
      {label: 'Life At TIGWS', url:'/siliguri/life-at-tigws'},
      {label:'Student Pathway',url:'/siliguri/student-pathway'},
      {label:'Extra Curricular',url:'/siliguri/extra-curricular'},
      {label:'Gallery',url:'/siliguri/gallery'},
      {label:'Student Testimonials',url:'/siliguri/student-testimonials'}
    ]
    },

    { label: 'Contact Us', url: '/siliguri/career' ,
      dropdown:[
        {label:'Career',url:'/siliguri/career'},
        {label:'Collaborate with Us',url:'/siliguri/collaborate'},
        {label:'Social Media',url:'/siliguri/social-media'}
      ]
    }
  ];

  return (
    <HeaderNav 
      logoUrl="/img/logo/tigws_siliguri_logo.png"
      linkUrl="https://tigws-demo.tigps.in/"
      altText="TIGWS"
      menuItems={menuItems}
      onOpenModal={onOpenModal}
    />
  );
};

export default Header;
