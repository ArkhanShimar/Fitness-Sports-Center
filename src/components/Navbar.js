import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('HOME');
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  // Scroll detection effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);

      // Get all sections
      const sections = ['home', 'about', 'services', 'whychooseus', 'membership', 'trainers', 'contact'];
      const sectionElements = sections.map(id => document.getElementById(id)).filter(Boolean);
      
      // Find which section is currently in view
      let currentSection = 'HOME';
      
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        const rect = section.getBoundingClientRect();
        
        // Check if section is in viewport (considering navbar height)
        if (rect.top <= 100) {
          const sectionId = section.id;
          if (sectionId === 'home') {
            currentSection = 'HOME';
          } else if (sectionId === 'about') {
            currentSection = 'ABOUT';
          } else if (sectionId === 'services' || sectionId === 'whychooseus') {
            currentSection = 'SERVICES';
          } else if (sectionId === 'membership' || sectionId === 'trainers') {
            currentSection = 'PLANS';
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

  const navItems = ['HOME', 'ABOUT', 'SERVICES', 'PLANS', 'CONTACT'];

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
    
    // Plans scrolls to membership section
    if (sectionName === 'PLANS') {
      sectionId = 'membership';
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
    <nav className={`py-2 sm:py-3 px-4 sm:px-6 lg:px-16 fixed w-full top-0 z-50 transition-all duration-300 ${
      isDark ? 'text-white' : 'text-black'
    } ${
      isScrolled 
        ? `${isDark ? 'bg-black' : 'bg-white'} bg-opacity-80 backdrop-blur-md shadow-lg` 
        : 'bg-transparent'
    }`}>
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Text */}
        <div className={`font-unbounded text-xs sm:text-sm lg:text-base tracking-wide flex-shrink-0 ${
          isDark ? 'text-white' : 'text-black'
        }`}>
          FITNESS <span className="text-primary">SPORTS</span> CENTER
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-4 xl:space-x-6 flex-shrink-0">
          {navItems.map((item) => (
            <div key={item} className="relative">
              <button 
                onClick={() => scrollToSection(item)}
                className={`font-unbounded text-[9px] xl:text-[10px] font-normal hover:text-primary transition-colors cursor-pointer tracking-wider ${
                  isDark ? 'text-white' : 'text-black'
                }`}
              >
                {item}
              </button>
              {activeSection === item && (
                <div className="absolute -top-2 xl:-top-3 left-1/2 transform -translate-x-1/2 w-5 xl:w-6 h-0.5 bg-primary"></div>
              )}
            </div>
          ))}
        </div>

        {/* Right side - JOIN NOW Button and Theme Toggle */}
        <div className="hidden lg:flex items-center space-x-3 flex-shrink-0">
          {/* JOIN NOW Button */}
          <button className={`px-4 xl:px-5 py-1 xl:py-1.5 rounded-full font-unbounded font-normal text-[9px] xl:text-xs hover:opacity-80 hover:scale-105 transform transition-all duration-200 tracking-wide ${
            isDark ? 'text-white' : 'text-white'
          }`} style={{backgroundColor: '#4E4E4E'}}>
            JOIN NOW
          </button>
          
          {/* Theme Toggle Button - Top Right Corner with Round Border */}
          <button
            onClick={toggleTheme}
            className={`p-2.5 rounded-full border-2 transition-all duration-300 hover:scale-110 ${
              isDark 
                ? 'border-gray-600 hover:border-primary bg-gray-800 hover:bg-gray-700' 
                : 'border-gray-300 hover:border-primary bg-gray-100 hover:bg-gray-200'
            }`}
            aria-label="Toggle theme"
          >
            {isDark ? (
              // Sun icon for light mode
              <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
              </svg>
            ) : (
              // Moon icon for dark mode
              <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Button - Styled with blurred background */}
        <button 
          className="lg:hidden relative flex-shrink-0"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className={`absolute inset-0 ${isDark ? 'bg-black' : 'bg-white'} bg-opacity-30 backdrop-blur-sm rounded-lg`}></div>
          <div className="relative w-7 h-7 sm:w-8 sm:h-8 flex flex-col justify-center items-center space-y-1 p-1">
            <span className={`w-4 sm:w-5 h-0.5 transition-all ${isDark ? 'bg-white' : 'bg-black'}`}></span>
            <span className={`w-4 sm:w-5 h-0.5 transition-all ${isDark ? 'bg-white' : 'bg-black'}`}></span>
            <span className={`w-4 sm:w-5 h-0.5 transition-all ${isDark ? 'bg-white' : 'bg-black'}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu - Styled with blurred background */}
      {isMenuOpen && (
        <div className="lg:hidden mt-2 pb-2 mx-4 sm:mx-6">
          <div className={`${isDark ? 'bg-black' : 'bg-white'} bg-opacity-50 backdrop-blur-md rounded-lg p-3 space-y-2`}>
            {navItems.map((item) => (
              <button 
                key={item}
                onClick={() => {
                  scrollToSection(item);
                  setIsMenuOpen(false);
                }}
                className={`block font-unbounded text-xs font-normal hover:text-primary transition-colors tracking-wider py-2 w-full text-left ${
                  isDark ? 'text-white' : 'text-black'
                }`}
              >
                {item}
              </button>
            ))}
            
            {/* Theme Toggle in Mobile Menu */}
            <div className="pt-2 border-t border-gray-600">
              <button
                onClick={() => {
                  toggleTheme();
                  setIsMenuOpen(false);
                }}
                className={`flex items-center justify-center space-x-3 font-unbounded text-xs font-normal hover:text-primary transition-colors tracking-wider py-3 w-full rounded-lg border-2 ${
                  isDark 
                    ? 'border-gray-600 hover:border-primary bg-gray-800 hover:bg-gray-700' 
                    : 'border-gray-300 hover:border-primary bg-gray-100 hover:bg-gray-200'
                } ${isDark ? 'text-white' : 'text-black'}`}
              >
                <div className="flex items-center space-x-2">
                  {isDark ? (
                    <>
                      <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                      </svg>
                      <span>Switch to Light</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
                      </svg>
                      <span>Switch to Dark</span>
                    </>
                  )}
                </div>
              </button>
            </div>
            
            <button className={`px-3 py-1.5 rounded-full font-unbounded font-normal text-xs hover:opacity-80 transition-colors w-fit tracking-wide mt-3 ${
              isDark ? 'text-white' : 'text-white'
            }`} style={{backgroundColor: '#4E4E4E'}}>
              JOIN NOW
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;