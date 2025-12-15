import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoMarquee from './components/LogoMarquee';
import FeaturesGrid from './components/FeaturesGrid';
import InteractiveDemo from './components/InteractiveDemo';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <LogoMarquee />
        <FeaturesGrid />
        <InteractiveDemo />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default App;