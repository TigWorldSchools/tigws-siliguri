import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const { ref: footerRef, inView: footerInView } = useInView({
    threshold: 0.1,
  });

  // Pass footer visibility to parent or use context
  React.useEffect(() => {
    window.footerInView = footerInView;
  }, [footerInView]);
  const quickLinks = [
    { label: 'Admission', url: '/admission-criteria' },
    { label: 'Life at TIGWS', url: '/life-at-tigws' },
    { label: 'Academics', url: '/curriculum' },
    { label: 'Careers', url: '/career' }
  ];

  const socialLinks = [
    { icon: 'fab fa-facebook-f', url: 'https://www.facebook.com/profile.php?id=61579539989989' },
    { icon: 'fab fa-instagram', url: 'https://www.instagram.com/tig_world_school/?hl=en' }
  ];

  return (
    <footer ref={footerRef} className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__section footer__contact">
            <div className="footer__contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>Techno India Group World School, Siliguri: Himachal Vihar, Behind City Centre, Near Passport Office, Siliguri West Bengal- 734010</span>
            </div>
            <div className="footer__contact-item">
              <i className="fas fa-phone"></i>
              <a href="tel:9733018000" className="footer__link">9733018000</a>
            </div>
            <div className="footer__contact-item">
              <i className="fas fa-envelope"></i>
              <a href="mailto:info@tigworldschool.in" className="footer__link">info@tigworldschool.in</a>
            </div>
            <div className="footer__contact-item">
              <i className="fas fa-globe"></i>
              <a href="https://www.tigworldschools.com/siliguri" className="footer__link">www.tigworldschools.com/siliguri</a>
            </div>
            <div className="footer__social">
              {socialLinks.map((social, index) => (
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.7!2d88.4294!3d26.7271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDQzJzM3LjYiTiA4OMKwMjUnNDUuOCJF!5e0!3m2!1sen!2sin!4v1234567890"
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