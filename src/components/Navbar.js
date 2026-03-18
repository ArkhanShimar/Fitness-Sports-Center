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
          const sectionId = sections[i];
          if (sectionId === 'home') {
            currentSection = 'HOME';
          } else if (sectionId === 'about') {
            currentSection = 'ABOUT';
          } else if (sectionId === 'services') {
            currentSection = 'SERVICES';
          } else if (sectionId === 'whychooseus') {
            currentSection = 'SERVICES'; // Map whychooseus to services for nav
          } else if (sectionId === 'contact') {
            currentSection = 'CONTACT';
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
    // Special case for HOME - always scroll to top
    if (sectionName === 'HOME') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      setActiveSection(sectionName);
      setIsMenuOpen(false); // Close mobile menu if open
      return;
    }
    
    let sectionId = sectionName.toLowerCase();
    
    // Handle special case for services (includes why choose us)
    if (sectionName === 'SERVICES') {
      sectionId = 'services';
    }
    
    // First try to find the section element directly
    let element = document.getElementById(sectionId);
    
    // If not found, look for it inside animation wrappers
    if (!element) {
      const wrappers = document.querySelectorAll('[class*="scroll-animate"]');
      for (const wrapper of wrappers) {
        const sectionInside = wrapper.querySelector(`#${sectionId}`);
        if (sectionInside) {
          element = sectionInside;
          break;
        }
      }
    }
    
    if (element) {
      // Get navbar height to offset scroll position
      const navbar = document.querySelector('nav');
      const navbarHeight = navbar ? navbar.offsetHeight : 80; // fallback to 80px
      
      // Get the wrapper element for consistent positioning
      const wrapper = element.closest('[class*="scroll-animate"]') || element;
      const elementPosition = wrapper.offsetTop;
      
      // For all sections, find the yellow divider above it and scroll just below it
      let offsetPosition;
      
      // Find the yellow divider before the section wrapper
      const yellowDivider = wrapper.previousElementSibling;
      
      if (yellowDivider && yellowDivider.classList.contains('bg-primary')) {
        // Use offsetTop for consistent positioning
        const dividerPosition = yellowDivider.offsetTop;
        const dividerHeight = yellowDivider.offsetHeight;
        offsetPosition = dividerPosition + dividerHeight - navbarHeight + 5; // 5px below divider
      } else {
        // Fallback to regular calculation if no yellow divider found
        let fallbackOffset = 20;
        if (sectionName === 'SERVICES') {
          fallbackOffset = 25;
        }
        offsetPosition = elementPosition - navbarHeight - fallbackOffset;
      }
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setActiveSection(sectionName);
      setIsMenuOpen(false); // Close mobile menu if open
    } else {
      console.error(`Section ${sectionId} not found`);
    }
  };

  return (
    <nav className={`text-white py-2 sm:py-3 px-4 sm:px-6 lg:px-16 fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black bg-opacity-80 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Text */}
        <div className="font-unbounded text-xs sm:text-sm lg:text-base tracking-wide flex-shrink-0">
          FITNESS <span className="text-primary">SPORTS</span> CENTER
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 flex-shrink-0">
          {navItems.map((item) => (
            <div key={item} className="relative">
              <button 
                onClick={() => scrollToSection(item)}
                className="font-unbounded text-[9px] xl:text-[10px] font-normal hover:text-primary transition-colors cursor-pointer tracking-wider"
              >
                {item}
              </button>
              {activeSection === item && (
                <div className="absolute -top-2 xl:-top-3 left-1/2 transform -translate-x-1/2 w-5 xl:w-6 h-0.5 bg-primary"></div>
              )}
            </div>
          ))}
        </div>

        {/* JOIN NOW Button */}
        <div className="hidden lg:block flex-shrink-0">
          <button className="text-white px-4 xl:px-5 py-1 xl:py-1.5 rounded-full font-unbounded font-normal text-[9px] xl:text-xs hover:opacity-80 hover:scale-105 transform transition-all duration-200 tracking-wide" style={{backgroundColor: '#4E4E4E'}}>
            JOIN NOW
          </button>
        </div>

        {/* Mobile Menu Button - Styled with blurred background */}
        <button 
          className="lg:hidden relative flex-shrink-0"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm rounded-lg"></div>
          <div className="relative w-7 h-7 sm:w-8 sm:h-8 flex flex-col justify-center items-center space-y-1 p-1">
            <span className="w-4 sm:w-5 h-0.5 bg-white transition-all"></span>
            <span className="w-4 sm:w-5 h-0.5 bg-white transition-all"></span>
            <span className="w-4 sm:w-5 h-0.5 bg-white transition-all"></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu - Styled with blurred background */}
      {isMenuOpen && (
        <div className="lg:hidden mt-2 pb-2 mx-4 sm:mx-6">
          <div className="bg-black bg-opacity-50 backdrop-blur-md rounded-lg p-3 space-y-2">
            {navItems.map((item) => (
              <button 
                key={item}
                onClick={() => {
                  scrollToSection(item);
                  setIsMenuOpen(false);
                }}
                className="block font-unbounded text-xs font-normal hover:text-primary transition-colors tracking-wider py-2 w-full text-left"
              >
                {item}
              </button>
            ))}
            <button className="text-white px-3 py-1.5 rounded-full font-unbounded font-normal text-xs hover:opacity-80 transition-colors w-fit tracking-wide mt-3" style={{backgroundColor: '#4E4E4E'}}>
              JOIN NOW
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;