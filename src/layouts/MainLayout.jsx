import React, { useState } from 'react';
import MainHeader from '../components/MainHeader.jsx';
import MainFooter from '../components/MainFooter.jsx';
import AdmissionModal from '../components/AdmissionModal.jsx';

const MainLayout = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="main-layout">
      <MainHeader onOpenModal={handleOpenModal} />
      <main className="main-content">
        {children}
      </main>
      <MainFooter />
      <AdmissionModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />
    </div>
  );
};

export default MainLayout;
