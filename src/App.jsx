import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout.jsx';

// Pages
import Home from './pages/Home.jsx';
import About from './pages/AboutUs/About.jsx';
import WhyTIGWS from './pages/AboutUs/WhyTIGWS.jsx';
import Legacy from './pages/AboutUs/Legacy.jsx';
import OtherCampuses from './pages/AboutUs/OtherCampuses.jsx';
import Curriculum from './pages/Academics/Curriculum.jsx';
import ListOfBooks from './pages/Academics/ListOfBooks.jsx';
import Criteria from './pages/Admissions/Criteria.jsx';
import StudentCapacity from './pages/Admissions/StudentCapacity.jsx';
import ApplicationFormPage from './pages/Admissions/ApplicationFormPage.jsx';
import LifeAtTIGWS from './pages/LifeAtTIGWS/LifeAtTIGWS.jsx';
import StudentPathway from './pages/LifeAtTIGWS/StudentPathway.jsx';
import ExtraCurricular from './pages/LifeAtTIGWS/ExtraCurricular.jsx';
import Gallery from './pages/LifeAtTIGWS/Gallery.jsx';
import StudentTestimonials from './pages/LifeAtTIGWS/StudentTestimonials.jsx';
import MandatoryDisclosure from './pages/MandatoryDisclosure.jsx';
import Career from './pages/ContactUs/Career.jsx';
import Collaborate from './pages/ContactUs/Collaborate.jsx';
import SocialMedia from './pages/ContactUs/SocialMedia.jsx';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/why-tigws" element={<WhyTIGWS />} />
          <Route path="/legacy" element={<Legacy />} />
          <Route path="/other-campuses" element={<OtherCampuses />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/books" element={<ListOfBooks />} />
          <Route path="/admission-criteria" element={<Criteria />} />
          <Route path="/student-capacity" element={<StudentCapacity />} />
          <Route path="/application-form" element={<ApplicationFormPage />} />
          <Route path="/life-at-tigws" element={<LifeAtTIGWS />} />
          <Route path="/student-pathway" element={<StudentPathway />} />
          <Route path="/extra-curricular" element={<ExtraCurricular />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/student-testimonials" element={<StudentTestimonials />} />
          <Route path="/mandatory-disclosure" element={<MandatoryDisclosure />} />
          <Route path="/career" element={<Career />} />
          <Route path="/collaborate" element={<Collaborate />} />
          <Route path="/social-media" element={<SocialMedia />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;