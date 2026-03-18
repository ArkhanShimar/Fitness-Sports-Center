import heroImage from '../assets/images/hero.png';
import logoImage from '../assets/images/logo.png';
import { useTheme } from '../contexts/ThemeContext';

const Hero = () => {
  const { isDark } = useTheme();
  
  return (
    <div id="home" className={`relative overflow-hidden h-[85vh] sm:h-[90vh] md:h-[90vh] lg:h-[95vh] w-full max-w-full ${
      isDark ? 'bg-black text-white' : 'bg-white text-black'
    }`}>
      {/* Hero Person Image - Full viewport height, behind everything including navbar */}
      <div className={`absolute top-0 right-0 w-full sm:w-4/5 md:w-3/5 lg:w-1/2 h-full z-0 max-w-full transition-opacity duration-300 ${
        isDark ? 'opacity-100' : 'opacity-40'
      }`}>
        <img 
          src={heroImage} 
          alt="Fitness Person" 
          className="h-full w-full object-cover object-center sm:object-right max-w-full"
        />
      </div>

      <div className="absolute bottom-2 left-4 sm:left-8 md:left-12 lg:left-20 z-5 flex items-end h-20 sm:h-24 md:h-32 max-w-full overflow-hidden">
        <h1 className="font-koulen text-[3rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem] text-gray-500 opacity-25 leading-none select-none whitespace-nowrap">
          GYM
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 relative z-20 h-full w-full">
        
        {/* Content positioned over hero image */}
        <div className="flex flex-col justify-center h-full pt-20 sm:pt-24 md:pt-28 lg:pt-16 w-full max-w-full">
          
          {/* Logo and Powered by section - Responsive layout */}
          <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-6 mb-6 sm:mb-7 md:mb-8 w-full max-w-full">
            <img 
              src={logoImage} 
              alt="Fitness Logo" 
              className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-24 lg:h-24 flex-shrink-0"
            />
            
            <div className="flex flex-col space-y-3 sm:space-y-4 md:space-y-5 flex-1 min-w-0">
              {/* Powered by FitLife Fitness - with blurred dot */}
              <div className="flex items-center space-x-3 sm:space-x-3">
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-primary rounded-full blur-sm flex-shrink-0"></div>
                <span className={`font-unbounded text-xs sm:text-sm md:text-sm truncate ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Powered by FitLife Fitness
                </span>
              </div>
              
              <h1 className="font-krona text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight tracking-wider break-words">
                <span className="text-primary">TRANSFORM</span> YOUR BODY
              </h1>
            </div>
          </div>

          {/* ACHIEVE GREATNESS - Responsive sizing */}
          <div className="mb-6 sm:mb-8 md:mb-10 w-full max-w-full overflow-hidden">
            <h1 className="font-krona text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight tracking-wider break-words">
              ACHIEVE <span className="text-primary">GREATNESS</span>
            </h1>
          </div>

          {/* Bottom Section - About Us Button and Welcome Message */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-6 md:space-x-8 space-y-4 sm:space-y-0 w-full max-w-full">
            {/* About Us Button - Responsive sizing */}
            <div className="flex-shrink-0">
              <button 
                onClick={() => {
                  const element = document.getElementById('about');
                  if (element) {
                    // Get navbar height to offset scroll position
                    const navbar = document.querySelector('nav');
                    const navbarHeight = navbar ? navbar.offsetHeight : 80;
                    
                    // Calculate position accounting for navbar
                    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = elementPosition - navbarHeight - 20;
                    
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="bg-primary text-black px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-2 rounded-full font-unbounded font-semibold text-xs sm:text-sm hover:bg-yellow-400 hover:scale-105 transform transition-all duration-200 flex items-center space-x-2 sm:space-x-2"
              >
                <span>About Us</span>
                <svg 
                  className="w-3 h-3 sm:w-3.5 sm:h-3.5" 
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

            {/* Welcome Message */}
            <div className="max-w-sm sm:max-w-md md:max-w-lg flex-1 min-w-0">
              <p className={`font-unbounded text-xs sm:text-sm md:text-sm leading-relaxed break-words ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Join our community of fitness enthusiasts and start your transformation journey today. 
                Experience world-class training with expert coaches.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;