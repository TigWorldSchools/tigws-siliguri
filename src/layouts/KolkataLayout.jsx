import React, { useState } from 'react';
import KolkataHeader from '../components/KolkataHeader.jsx';
import KolkataFooter from '../components/KolkataFooter.jsx';
import AdmissionModal from '../components/AdmissionModal.jsx';

const KolkataLayout = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="main-layout">
      <KolkataHeader onOpenModal={handleOpenModal} />
      <main className="main-content">
        {children}
      </main>
      <KolkataFooter />
      <AdmissionModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />
    </div>
  );
};

export default KolkataLayout;
