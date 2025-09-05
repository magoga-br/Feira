import React from 'react';
import HeroSection from '../components/HeroSection';
import ProductSection from '../components/ProductSection';
import AboutUsSection from '../components/AboutUsSection';
import VideoSection from "../components/VideoSection.jsx";

function HomePage() {
  return (
    <div className="container-fluid">
      <div className="content-wrapper">
        <HeroSection />
        <ProductSection />
        <AboutUsSection />
        <VideoSection /> {/* ✅ Aqui entra a nova seção */}
      </div>
    </div>
  );
}

export default HomePage;
