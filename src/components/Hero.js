import React from 'react';
import heroImage from '../assets/images/hero.png';
import logoImage from '../assets/images/logo.png';

const Hero = () => {
  return (
    <div className="bg-black text-white relative overflow-hidden" style={{ height: '98vh' }}>
      {/* Hero Person Image - Full viewport height, behind everything including navbar */}
      <div className="absolute top-0 right-10 w-1/2 h-full z-0">
        <img 
          src={heroImage} 
          alt="Fitness Person" 
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="absolute bottom-0 left-20 z-5 flex items-end h-32">
        <h1 className="font-koulen text-[8rem] lg:text-[10rem] xl:text-[12rem] text-gray-500 opacity-25 leading-none select-none">
          GYM
        </h1>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-16 relative z-20 h-full">
        
        {/* Content positioned over hero image */}
        <div className="flex flex-col justify-center h-full pt-20">
          
          {/* Logo and Powered by section - side by side */}
          <div className="flex items-start space-x-6 mb-8">
            <img 
              src={logoImage} 
              alt="Fitness Logo" 
              className="w-20 h-20 lg:w-28 lg:h-28"
            />
            
            <div className="flex flex-col space-y-4">
              {/* Powered by FitLife Fitness - with blurred dot */}
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-primary rounded-full blur-sm"></div>
                <span className="font-unbounded text-sm text-gray-300">
                  Powered by FitLife Fitness
                </span>
              </div>
              
              <h1 className="font-krona text-3xl lg:text-4xl xl:text-5xl leading-tight tracking-wider">
                <span className="text-primary">TRAIN</span> WITH THE
              </h1>
            </div>
          </div>

          {/* BEST COACHES - left aligned, smaller to fit single line */}
          <div className="mb-12">
            <h1 className="font-krona text-5xl lg:text-6xl xl:text-7xl leading-tight tracking-wider">
              BEST <span className="text-primary">COACHES</span>
            </h1>
          </div>

          {/* About Us Button - Smaller size */}
          <div>
            <button className="bg-primary text-black px-6 py-2 rounded-full font-unbounded font-semibold text-xs hover:bg-yellow-400 transition-colors flex items-center space-x-2">
              <span>About Us</span>
              <svg 
                className="w-3 h-3" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7" 
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;