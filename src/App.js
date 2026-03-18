import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Location from './components/Location';
import Footer from './components/Footer';
import { setupScrollAnimations } from './utils/scrollAnimations';

function App() {
  useEffect(() => {
    // Ensure page starts at top on refresh/load
    window.scrollTo(0, 0);
    
    // Setup scroll animations
    setupScrollAnimations();
  }, []);

  return (
    <div className="App">
      {/* Fixed Navbar */}
      <Navbar />
      
      {/* Hero section with scroll animation */}
      <div className="scroll-animate">
        <Hero />
      </div>
      
      {/* Yellow Divider */}
      <div className="w-full h-2.5 bg-primary"></div>
      
      {/* About Us Section */}
      <div className="scroll-animate">
        <AboutUs />
      </div>
      
      {/* Yellow Divider */}
      <div className="w-full h-2.5 bg-primary"></div>
      
      {/* Services Section */}
      <div className="scroll-animate-left">
        <Services />
      </div>
      
      {/* Yellow Divider */}
      <div className="w-full h-2.5 bg-primary"></div>
      
      {/* Why Choose Us Section */}
      <div className="scroll-animate-right">
        <WhyChooseUs />
      </div>
      
      {/* Yellow Divider */}
      <div className="w-full h-2.5 bg-primary"></div>
      
      {/* Contact Section */}
      <div className="scroll-animate">
        <Contact />
      </div>
      
      {/* Yellow Divider */}
      <div className="w-full h-2.5 bg-primary"></div>
      
      {/* Location Section */}
      <div className="scroll-animate-left">
        <Location />
      </div>
      
      {/* Yellow Divider */}
      <div className="w-full h-2.5 bg-primary"></div>
      
      {/* Footer */}
      <div className="scroll-animate-fade">
        <Footer />
      </div>
    </div>
  );
}

export default App;