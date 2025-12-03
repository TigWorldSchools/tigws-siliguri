import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Link, useLocation } from 'react-router-dom';
import './Footer.css';
import { getCampusConfig } from '../utils/campusConfig.js';

const Footer = () => {
  const { pathname } = useLocation();
  const campus = pathname.split("/")[1] || "siliguri";

  const campusData = getCampusConfig(campus);

  const { ref: footerRef, inView: footerInView } = useInView({
    threshold: 0.1,
  });

  // Pass footer visibility to parent or use context
  React.useEffect(() => {
    window.footerInView = footerInView;
  }, [footerInView]);
  const quickLinks = [
    { label: 'Admission', url: `/${campus}/admission-criteria` },
    { label: 'Life at TIGWS', url: `/${campus}/life-at-tigws` },
    { label: 'Academics', url: `/${campus}/curriculum` },
    { label: 'Campuses', url: `/${campus}/about#other-campuses` },
    { label: 'Careers', url: `/${campus}/career`  }
  ];

  const socialLinks = {
    siliguri: [
      { icon: 'fab fa-facebook-f', url: 'https://www.facebook.com/profile.php?id=61579539989989' },
      { icon: 'fab fa-instagram', url: 'https://www.instagram.com/technoindiagroup_world_school/' }
    ],

    malda: [
      { icon: 'fab fa-facebook-f', url: 'https://www.facebook.com/share/1MbHwYN491/ ' },
      { icon: 'fab fa-instagram', url: 'https://www.instagram.com/tigworldschoolmalda?igsh=eG02enl2OGRkd2Zi' }
    ]
  };

  return (
    <footer ref={footerRef} className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__section footer__contact">
            <div className="footer__contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>{campusData.contact.address}</span>
            </div>
            <div className="footer__contact-item">
              <i className="fas fa-phone"></i>
              <a href={`tel:${campusData.contact.phone}`} className="footer__link">{campusData.contact.phone}</a>
            </div>
            <div className="footer__contact-item">
              <i className="fas fa-envelope"></i>
              <a href={`mailto:${campusData.contact.email}`} className="footer__link">{campusData.contact.email}</a>
            </div>
            <div className="footer__contact-item">
              <i className="fas fa-globe"></i>
              <a href={`${campusData.contact.websiteUrl}`} className="footer__link">{campusData.contact.websiteUrl}</a>
            </div>
            <div className="footer__social">
              {socialLinks[campus]?.map((social, index) => (
                <a key={index} href={social.url} className="footer__social-link">
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>

          <div className="footer__section footer__links">
            <h3 className="footer__title">Quick Links</h3>
            <ul className="footer__menu">
              {quickLinks.map((link, index) => (
                <li key={index} className="footer__menu-item">
                  <Link to={link.url} className="footer__menu-link">
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__section footer__map">
            <h3 className="footer__title">Locate Us</h3>
            <div className="footer__map-container">
              <iframe
                src={`${campusData.contact.schoolLocation}`}
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="TIGWS Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
