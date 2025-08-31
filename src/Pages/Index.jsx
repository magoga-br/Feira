import React from 'react';
import HeroSection from '../components/HeroSection';
import ProductSection from '../components/ProductSection';
import AboutUsSection from '../components/AboutUsSection';

function HomePage() {
  return (
    <div className="container-fluid">
      <div className="content-wrapper">
        <HeroSection />
        <ProductSection />
        <AboutUsSection />
      </div>
    </div>
  );
}

export default HomePage;