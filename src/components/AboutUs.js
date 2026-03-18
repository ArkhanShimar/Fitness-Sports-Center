import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import aboutTeamImage from '../assets/images/about us team.png';

const AboutUs = () => {
  const { isDark } = useTheme();
  
  return (
    <section id="about" className={`py-8 sm:py-10 md:py-12 lg:py-16 ${
      isDark ? 'bg-black text-white' : 'bg-white text-black'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        
        {/* Top Section - Single Column */}
        <div className="mb-6 sm:mb-8">
          {/* Section Title */}
          <div className="mb-4 sm:mb-6">
            <h2 className="font-krona text-xl sm:text-2xl lg:text-3xl xl:text-4xl leading-tight tracking-wider mb-2 sm:mb-3">
              ABOUT US
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-0.5 bg-primary"></div>
          </div>

          {/* Main Heading */}
          <h3 className="font-krona text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-tight tracking-wider text-primary mb-3 sm:mb-4 max-w-4xl">
            Fitness with Purpose Results with Support
          </h3>

          {/* Description */}
          <p className={`font-unbounded text-[10px] sm:text-xs lg:text-sm leading-relaxed max-w-5xl ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            FITNESS SPORTS CENTER, powered by FitLife Fitness, is a state-of-the-art gym built for 
            results. From personal training and group classes to nutrition guidance, every aspect of 
            Titans is designed to help you push your limits, reach your goals, and become part of a 
            supportive fitness community.
          </p>
        </div>

        {/* Bottom Section - Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          
          {/* Left Content - Stats Grid (2x2) */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {/* 05 Years */}
            <div className="p-3 sm:p-4 rounded-lg text-center" style={{backgroundColor: isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.15)'}}>
              <h4 className="font-krona text-xl sm:text-2xl lg:text-3xl text-primary mb-1">05</h4>
              <p className={`font-unbounded text-[10px] sm:text-xs ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Years</p>
            </div>

            {/* 200+ Members */}
            <div className="p-3 sm:p-4 rounded-lg text-center" style={{backgroundColor: isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.15)'}}>
              <h4 className="font-krona text-xl sm:text-2xl lg:text-3xl text-primary mb-1">200+</h4>
              <p className={`font-unbounded text-[10px] sm:text-xs ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Members</p>
            </div>

            {/* 50 Classes */}
            <div className="p-3 sm:p-4 rounded-lg text-center" style={{backgroundColor: isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.15)'}}>
              <h4 className="font-krona text-xl sm:text-2xl lg:text-3xl text-primary mb-1">50</h4>
              <p className={`font-unbounded text-[10px] sm:text-xs ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Classes</p>
            </div>

            {/* 10+ Trainers */}
            <div className="p-3 sm:p-4 rounded-lg text-center" style={{backgroundColor: isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.15)'}}>
              <h4 className="font-krona text-xl sm:text-2xl lg:text-3xl text-primary mb-1">10+</h4>
              <p className={`font-unbounded text-[10px] sm:text-xs ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Trainers</p>
            </div>
          </div>

          {/* Right Content - Team Image */}
          <div className="relative mt-4 lg:mt-0">
            <div className="relative rounded-xl overflow-hidden border-2 border-primary">
              <img 
                src={aboutTeamImage} 
                alt="Fitness Sports Center Team" 
                className="w-full h-48 sm:h-56 md:h-64 lg:h-70 object-cover"
              />
              
              {/* Overlay Text */}
              <div className={`absolute inset-0 bg-opacity-40 flex items-center justify-center ${
                isDark ? 'bg-black' : 'bg-white'
              }`}>
                <div className="text-center">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;