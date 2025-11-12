import React, { useState } from 'react';
import Header from '../Header.jsx';
import Footer from '../components/Footer.jsx';
import BackToTop from '../components/BackToTop.jsx';
import StickyFooter from '../components/StickyFooter.jsx';
import FloatingCTA from '../components/FloatingCTA.jsx';
import AdmissionModal from '../components/AdmissionModal';

const Layout = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className={isModalOpen ? 'app-blur' : ''}>
        <Header onOpenModal={openModal} />
        <main>{children}</main>
        <Footer />
        <BackToTop />
        <StickyFooter />
        <FloatingCTA onOpenModal={openModal} />
      </div>
      <AdmissionModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Layout;
