import { useTheme } from '../contexts/ThemeContext';
import whyChooseImage from '../assets/images/why choose.jpg';

const WhyChooseUs = () => {
  const { isDark } = useTheme();
  
  return (
    <section id="whychooseus" className={`py-8 sm:py-10 md:py-16 lg:py-20 ${
      isDark ? 'bg-black text-white' : 'bg-white text-black'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          
          {/* Left Content */}
          <div>
            {/* Section Title */}
            <div className="mb-4 sm:mb-6">
              <h2 className="font-krona text-lg sm:text-xl lg:text-2xl xl:text-3xl leading-tight tracking-wider mb-2 sm:mb-3">
                WHY CHOOSE US
              </h2>
              <div className="w-16 sm:w-20 md:w-24 h-0.5 bg-primary"></div>
            </div>

            {/* Main Heading */}
            <h3 className="font-krona text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-tight tracking-wider text-primary mb-4 sm:mb-6 max-w-lg">
              From Day One to Your Personal Best Here's Why Our Gym Delivers Results That Last
            </h3>

            {/* Features List */}
            <div className="space-y-4 sm:space-y-5">
              
              {/* Expert Trainers */}
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mt-1.5 sm:mt-2 flex-shrink-0 shadow-[0_0_8px_#D4BC05]"></div>
                <div>
                  <h4 className={`font-unbounded text-xs sm:text-sm lg:text-base mb-1 tracking-wider ${
                    isDark ? 'text-white' : 'text-black'
                  }`}>
                    Expert Trainers
                  </h4>
                  <p className={`font-unbounded text-[10px] sm:text-xs leading-relaxed ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    Our certified trainers guide every member with personalized programs to help you achieve your 
                    fitness goals safely and effectively.
                  </p>
                </div>
              </div>

              {/* Modern Facilities */}
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mt-1.5 sm:mt-2 flex-shrink-0 shadow-[0_0_8px_#D4BC05]"></div>
                <div>
                  <h4 className={`font-unbounded text-xs sm:text-sm lg:text-base mb-1 tracking-wider ${
                    isDark ? 'text-white' : 'text-black'
                  }`}>
                    Modern Facilities
                  </h4>
                  <p className={`font-unbounded text-[10px] sm:text-xs leading-relaxed ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    Fitness sports center is equipped with state-of-the-art machines, functional training areas, and dedicated 
                    spaces for group classes to enhance your workout experience.
                  </p>
                </div>
              </div>

              {/* Supportive Community */}
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mt-1.5 sm:mt-2 flex-shrink-0 shadow-[0_0_8px_#D4BC05]"></div>
                <div>
                  <h4 className={`font-unbounded text-xs sm:text-sm lg:text-base mb-1 tracking-wider ${
                    isDark ? 'text-white' : 'text-black'
                  }`}>
                    Supportive Community
                  </h4>
                  <p className={`font-unbounded text-[10px] sm:text-xs leading-relaxed ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    Join a motivating and friendly environment where members encourage each other, making your fitness 
                    journey more enjoyable and consistent.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Image with Yellow Shadow */}
          <div className="relative mt-6 lg:mt-0">
            {/* Yellow Shadow Container */}
            <div className="absolute top-3 sm:top-4 left-3 sm:left-4 w-full h-full bg-primary rounded-2xl"></div>
            
            {/* Main Image Container */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-primary bg-black">
              <img 
                src={whyChooseImage} 
                alt="Why Choose Us - Fitness Training" 
                className="w-full h-48 sm:h-56 md:h-64 lg:h-80 xl:h-96 object-cover"
              />
              <div className={`absolute inset-0 bg-opacity-20 ${isDark ? 'bg-black' : 'bg-white'}`}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;