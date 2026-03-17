import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('HOME');

  const navItems = ['HOME', 'ABOUT', 'SERVICES', 'CONTACT'];

  return (
    <nav className="bg-transparent text-white py-3 px-6 lg:px-16 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Text */}
        <div className="font-unbounded text-sm lg:text-base tracking-wide">
          FITNESS <span className="text-primary">SPORTS</span> CENTER
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <div key={item} className="relative">
              <a 
                href={`#${item.toLowerCase()}`} 
                className="font-unbounded text-[10px] font-normal hover:text-primary transition-colors cursor-pointer tracking-wider"
                onClick={() => setActiveSection(item)}
              >
                {item}
              </a>
              {activeSection === item && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-primary"></div>
              )}
            </div>
          ))}
        </div>

        {/* JOIN NOW Button */}
        <div className="hidden lg:block">
          <button className="text-white px-5 py-1.5 rounded-full font-unbounded font-normal text-xs hover:opacity-80 transition-colors tracking-wide" style={{backgroundColor: '#4E4E4E'}}>
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
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="block font-unbounded text-xs font-normal hover:text-primary transition-colors tracking-wider py-1"
                onClick={() => {
                  setActiveSection(item);
                  setIsMenuOpen(false);
                }}
              >
                {item}
              </a>
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