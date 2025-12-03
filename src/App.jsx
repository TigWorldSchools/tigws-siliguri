import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout.jsx';
import MainLayout from './layouts/MainLayout.jsx';

// Main Homepage
import NewHome from './pages/NewHome.jsx';

// Siliguri Campus Pages
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
      <Routes>
        {/* Main Homepage */}
        <Route path="/" element={
          <MainLayout>
            <NewHome />
          </MainLayout>
        } />
        
        {/* Siliguri Campus Routes */}
        <Route path="/siliguri" element={
          <Layout>
            <Home />
          </Layout>
        } />
        <Route path="/siliguri/about" element={
          <Layout>
            <About />
          </Layout>
        } />
        <Route path="/siliguri/why-tigws" element={
          <Layout>
            <WhyTIGWS />
          </Layout>
        } />
        <Route path="/siliguri/legacy" element={
          <Layout>
            <Legacy />
          </Layout>
        } />
        <Route path="/siliguri/other-campuses" element={
          <Layout>
            <OtherCampuses />
          </Layout>
        } />
        <Route path="/siliguri/curriculum" element={
          <Layout>
            <Curriculum />
          </Layout>
        } />
        <Route path="/siliguri/books" element={
          <Layout>
            <ListOfBooks />
          </Layout>
        } />
        <Route path="/siliguri/admission-criteria" element={
          <Layout>
            <Criteria />
          </Layout>
        } />
        <Route path="/siliguri/student-capacity" element={
          <Layout>
            <StudentCapacity />
          </Layout>
        } />
        <Route path="/siliguri/application-form" element={
          <Layout>
            <ApplicationFormPage />
          </Layout>
        } />
        <Route path="/siliguri/life-at-tigws" element={
          <Layout>
            <LifeAtTIGWS />
          </Layout>
        } />
        <Route path="/siliguri/student-pathway" element={
          <Layout>
            <StudentPathway />
          </Layout>
        } />
        <Route path="/siliguri/extra-curricular" element={
          <Layout>
            <ExtraCurricular />
          </Layout>
        } />
        <Route path="/siliguri/gallery" element={
          <Layout>
            <Gallery />
          </Layout>
        } />
        <Route path="/siliguri/student-testimonials" element={
          <Layout>
            <StudentTestimonials />
          </Layout>
        } />
        <Route path="/siliguri/mandatory-disclosure" element={
          <Layout>
            <MandatoryDisclosure />
          </Layout>
        } />
        <Route path="/siliguri/career" element={
          <Layout>
            <Career />
          </Layout>
        } />
        <Route path="/siliguri/collaborate" element={
          <Layout>
            <Collaborate />
          </Layout>
        } />
        <Route path="/siliguri/social-media" element={
          <Layout>
            <SocialMedia />
          </Layout>
        } />
        
        {/* Malda Campus Routes */}
        <Route path="/malda" element={
          <Layout>
            <Home campus="malda" />
          </Layout>
        } />
        <Route path="/malda/about" element={
          <Layout>
            <About campus="malda" />
          </Layout>
        } />
        <Route path="/malda/mandatory-disclosure" element={
          <Layout>
            <MandatoryDisclosure campus="malda"/>
          </Layout>
        } />
        <Route path="/malda/curriculum" element={
          <Layout>
            <Curriculum campus="malda" />
          </Layout>
        } />
        <Route path="/malda/books" element={
          <Layout>
            <ListOfBooks campus="malda" />
          </Layout>
        } />
        <Route path="/malda/admission-criteria" element={
          <Layout>
            <Criteria campus="malda" />
          </Layout>
        } />
        <Route path="/malda/student-capacity" element={
          <Layout>
            <StudentCapacity campus="malda" />
          </Layout>
        } />
        <Route path="/malda/application-form" element={
          <Layout>
            <ApplicationFormPage campus="malda" />
          </Layout>
        } />
        <Route path="/malda/life-at-tigws" element={
          <Layout>
            <LifeAtTIGWS campus="malda" />
          </Layout>
        } />
        <Route path="/malda/student-pathway" element={
          <Layout>
            <StudentPathway campus="malda"/>
          </Layout>
        } />
        <Route path="/malda/extra-curricular" element={
          <Layout>
            <ExtraCurricular campus="malda" />
          </Layout>
        } />
        <Route path="/malda/gallery" element={
          <Layout>
            <Gallery campus="malda" />
          </Layout>
        } />
        <Route path="/malda/student-testimonials" element={
          <Layout>
            <StudentTestimonials campus="malda" />
          </Layout>
        } />
        <Route path="/malda/career" element={
          <Layout>
            <Career campus="malda" />
          </Layout>
        } />
        <Route path="/malda/collaborate" element={
          <Layout>
            <Collaborate campus="malda" />
          </Layout>
        } />
        <Route path="/malda/social-media" element={
          <Layout>
            <SocialMedia campus="malda" />
          </Layout>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
