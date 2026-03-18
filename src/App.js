import React, { useEffect, useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import MembershipPlans from './components/MembershipPlans';
import Trainers from './components/Trainers';
import Contact from './components/Contact';
import Location from './components/Location';
import Footer from './components/Footer';
import { setupScrollAnimations } from './utils/scrollAnimations';

function App() {
  const [showFab, setShowFab] = useState(false);

  useEffect(() => {
    // Override browser scroll restoration immediately
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Force scroll to top function
    const forceScrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      
      if (document.scrollingElement) {
        document.scrollingElement.scrollTop = 0;
      }
    };

    // Execute immediately
    forceScrollToTop();

    // Execute on next frame to override any browser restoration
    requestAnimationFrame(forceScrollToTop);

    // Setup scroll animations immediately without delay
    setupScrollAnimations();

    // Add minimal cleanup for browser navigation
    const handlePageShow = (event) => {
      if (event.persisted) {
        forceScrollToTop();
      }
    };

    window.addEventListener('pageshow', handlePageShow);

    const handleFabScroll = () => setShowFab(window.scrollY > 300);
    window.addEventListener('scroll', handleFabScroll);
    
    return () => {
      window.removeEventListener('pageshow', handlePageShow);
      window.removeEventListener('scroll', handleFabScroll);
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="App container-safe">
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
        
        {/* Membership Plans Section */}
        <div className="scroll-animate">
          <MembershipPlans />
        </div>
        
        {/* Yellow Divider */}
        <div className="w-full h-2.5 bg-primary"></div>
        
        {/* Trainers Section */}
        <div className="scroll-animate">
          <Trainers />
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

      {/* FAB - Scroll to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
        className={`fixed bottom-6 right-6 z-50 w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-primary flex items-center justify-center transition-all duration-300 backdrop-blur-md
          bg-black/30 hover:bg-primary/20 hover:scale-110 shadow-[0_0_16px_rgba(212,188,5,0.25)]
          ${showFab ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}`}
      >
        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </ThemeProvider>
  );
}

export default App;