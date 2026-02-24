// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ParallaxBg from './components/ParallaxBg';
import RobotCursor from './components/RobotCursor';
import ScrollProgress from './components/ScrollProgress';
import Hero from './components/Hero';
import TechSection from './components/TechSection';
import AutomationSection from './components/AutomationSection';
import FeaturesSection from './components/FeaturesSection';
import PricingSection from './components/PricingSection';
import CtaSection from './components/CtaSection';

function App() {
  return (
    <div className="relative min-h-screen bg-white text-gray-900 overflow-x-hidden">
      <ParallaxBg />
      <ScrollProgress />
      <RobotCursor />
      <Navbar />
      <main>
        <Hero />
        <TechSection />
        <AutomationSection />
        <FeaturesSection />
        <PricingSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
