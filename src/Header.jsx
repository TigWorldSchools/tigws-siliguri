import React from 'react';
import HeaderNav from './components/HeaderNav.jsx';

const Header = ({ onOpenModal }) => {
  const menuItems = [
    { label: 'Home', url: '/' },
    { 
      label: 'About Us', 
      url: '/about',
      dropdown: [
        { label: 'About Us', url: '/about' },
        { label: 'Why TIGWS', url: '/about#why-tigws' },
        { label: 'Legacy of TIG', url: '/about#legacy' },
        { label: 'Other Campuses', url: '/about#other-campuses' },
        { label: (<><span>Mandatory</span><br /><span>Disclosure</span></>), url: '/mandatory-disclosure' }
      ]
    },
    { 
      label: 'Academics', 
      url: '/curriculum',
      dropdown: [
        { label: 'Curriculum', url: '/curriculum' },
        { label: 'List Of Books', url: '/books' }
      ]
    },
    { 
      label: 'Admissions', 
      url: '/admission-criteria',
      dropdown: [
        { label: 'Criteria', url: '/admission-criteria' },
        { label: 'Student Capacity', url: '/student-capacity' },
        { label: 'Application Form', url: '/application-form' }
      ]
    },
    { label: 'Life at TIGWS', url: '/life-at-tigws' ,
      dropdown: [
      {label: 'Life At TIGWS', url:'/life-at-tigws'},
      {label:'Student Pathway',url:'/student-pathway'},
      {label:'Extra Curricular',url:'/extra-curricular'},
      {label:'Gallery',url:'/gallery'},
      {label:'Student Testimonials',url:'/student-testimonials'}
    ]
    },

    { label: 'Contact Us', url: '/career' ,
      dropdown:[
        {label:'Career',url:'/career'},
        {label:'Collaborate with Us',url:'/collaborate'},
        {label:'Social Media',url:'/social-media'}
      ]
    }
  ];

  return (
    <HeaderNav 
      logoUrl="img/logo/tigws_siliguri_logo.png"
      linkUrl="https://tigws-demo.tigps.in/"
      altText="TIGWS"
      menuItems={menuItems}
      onOpenModal={onOpenModal}
    />
  );
};

export default Header;