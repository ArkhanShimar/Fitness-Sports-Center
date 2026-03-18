import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('HOME');
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll detection effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);

      // Get all sections
      const sections = ['home', 'about', 'services', 'whychooseus', 'contact'];
      const sectionElements = sections.map(id => document.getElementById(id)).filter(Boolean);
      
      // Find which section is currently in view
      let currentSection = 'HOME';
      
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        const rect = section.getBoundingClientRect();
        
        // Check if section is in viewport (considering navbar height)
        if (rect.top <= 100) {
          currentSection = sections[i].toUpperCase();
          if (currentSection === 'WHYCHOOSEUS') {
            currentSection = 'SERVICES'; // Map whychooseus to services for nav
          }
          break;
        }
      }
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    // Call once to set initial state
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['HOME', 'ABOUT', 'SERVICES', 'CONTACT'];

  // Handle smooth scroll to section
  const scrollToSection = (sectionName) => {
    let sectionId = sectionName.toLowerCase();
    
    // Handle special case for services (includes why choose us)
    if (sectionName === 'SERVICES') {
      sectionId = 'services';
    }
    
    const element = document.getElementById(sectionId);
    
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      setActiveSection(sectionName);
    }
  };

  return (
    <nav className={`text-white py-3 px-6 lg:px-16 fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black bg-opacity-80 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Text */}
        <div className="font-unbounded text-sm lg:text-base tracking-wide">
          FITNESS <span className="text-primary">SPORTS</span> CENTER
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <div key={item} className="relative">
              <button 
                onClick={() => scrollToSection(item)}
                className="font-unbounded text-[10px] font-normal hover:text-primary transition-colors cursor-pointer tracking-wider"
              >
                {item}
              </button>
              {activeSection === item && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-primary"></div>
              )}
            </div>
          ))}
        </div>

        {/* JOIN NOW Button */}
        <div className="hidden lg:block">
          <button className="text-white px-5 py-1.5 rounded-full font-unbounded font-normal text-xs hover:opacity-80 hover:scale-105 transform transition-all duration-200 tracking-wide" style={{backgroundColor: '#4E4E4E'}}>
            JOIN NOW
          </button>
        </div>

        {/* Mobile Menu Button - Styled with blurred background */}
        <button 
          className="lg:hidden relative"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm rounded-lg"></div>
          <div className="relative w-8 h-8 flex flex-col justify-center items-center space-y-1 p-1">
            <span className="w-5 h-0.5 bg-white transition-all"></span>
            <span className="w-5 h-0.5 bg-white transition-all"></span>
            <span className="w-5 h-0.5 bg-white transition-all"></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu - Styled with blurred background */}
      {isMenuOpen && (
        <div className="lg:hidden mt-2 pb-2">
          <div className="bg-black bg-opacity-50 backdrop-blur-md rounded-lg p-3 space-y-2">
            {navItems.map((item) => (
              <button 
                key={item}
                onClick={() => {
                  scrollToSection(item);
                  setIsMenuOpen(false);
                }}
                className="block font-unbounded text-xs font-normal hover:text-primary transition-colors tracking-wider py-1 w-full text-left"
              >
                {item}
              </button>
            ))}
            <button className="text-white px-3 py-1 rounded-full font-unbounded font-normal text-xs hover:opacity-80 transition-colors w-fit tracking-wide mt-2" style={{backgroundColor: '#4E4E4E'}}>
              JOIN NOW
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;