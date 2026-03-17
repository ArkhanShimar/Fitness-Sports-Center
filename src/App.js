import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Location from './components/Location';

function App() {
  return (
    <div className="App">
      {/* Hero section with full viewport height */}
      <div className="relative">
        <Hero />
        {/* Navbar positioned absolutely over Hero */}
        <div className="absolute top-0 left-0 right-0 z-50">
          <Navbar />
        </div>
      </div>
      
      {/* Yellow Divider */}
      <div className="w-full h-2.5 bg-primary"></div>
      
      {/* About Us Section */}
      <AboutUs />
      
      {/* Yellow Divider */}
      <div className="w-full h-2.5 bg-primary"></div>
      
      {/* Services Section */}
      <Services />
      
      {/* Yellow Divider */}
      <div className="w-full h-2.5 bg-primary"></div>
      
      {/* Why Choose Us Section */}
      <WhyChooseUs />
      
      {/* Yellow Divider */}
      <div className="w-full h-2.5 bg-primary"></div>
      
      {/* Contact Section */}
      <Contact />
      
      {/* Yellow Divider */}
      <div className="w-full h-2.5 bg-primary"></div>
      
      {/* Location Section */}
      <Location />
      
      {/* Yellow Divider */}
      <div className="w-full h-2.5 bg-primary"></div>
    </div>
  );
}

export default App;