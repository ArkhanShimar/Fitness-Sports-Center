import { useTheme } from '../contexts/ThemeContext';
import gymBgImage from '../assets/images/gym bg in sevices.jpeg';
import nutritionImage from '../assets/images/Nutrition Guidance.jpg';
import personalTrainingImage from '../assets/images/Personal Training.webp';
import strengthImage from '../assets/images/Strength & Cardio Equipment.jpg';
import groupClassesImage from '../assets/images/Group Classes.webp';

const Services = () => {
  const { isDark } = useTheme();
  
  return (
    <section id="services" className={`py-8 sm:py-10 md:py-12 lg:py-16 ${
      isDark ? 'bg-black text-white' : 'bg-white text-black'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        
        {/* Top Section - Title and Description */}
        <div className="mb-6 sm:mb-8 lg:mb-8">
          {/* Section Title */}
          <div className="mb-3 sm:mb-4">
            <h2 className="font-krona text-lg sm:text-xl lg:text-2xl xl:text-3xl leading-tight tracking-wider mb-2">
              OUR SERVICE
            </h2>
            <div className="w-12 sm:w-14 md:w-16 h-0.5 bg-primary"></div>
          </div>

          {/* Main Heading */}
          <h3 className="font-krona text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-tight tracking-wider text-primary mb-3 max-w-4xl">
            Unlock Your Best Self with Our Full Range of Fitness Services
          </h3>

          {/* Description */}
          <p className={`font-unbounded text-[10px] sm:text-xs lg:text-sm leading-relaxed max-w-5xl ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            At FITNESS SPORTS CENTER, we provide a full range of fitness services designed to help you achieve your goals. From personal training 
            sessions to group classes, our expert trainers guide you every step of the way. With modern equipment, nutrition guidance, and supportive 
            programs, we make sure every workout counts and every member feels empowered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
          
          {/* Personal Training */}
          <div className="relative group cursor-pointer">
            <div className={`relative h-28 sm:h-32 lg:h-36 rounded-2xl overflow-hidden border-2 transition-colors ${
              isDark ? 'border-gray-700 hover:border-gray-500' : 'border-gray-300 hover:border-gray-400'
            }`}>
              <img 
                src={personalTrainingImage} 
                alt="Personal Training" 
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 ${isDark ? 'bg-black bg-opacity-60' : 'bg-white bg-opacity-30'}`}></div>
              <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3">
                <h4 className="font-krona text-xs sm:text-sm lg:text-base text-primary mb-1 sm:mb-2 tracking-wider">
                  Personal Training
                </h4>
                <div className="flex justify-end">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Strength & Cardio Equipment */}
          <div className="relative group cursor-pointer">
            <div className={`relative h-28 sm:h-32 lg:h-36 rounded-2xl overflow-hidden border-2 transition-colors ${
              isDark ? 'border-gray-700 hover:border-gray-500' : 'border-gray-300 hover:border-gray-400'
            }`}>
              <img 
                src={strengthImage} 
                alt="Strength & Cardio Equipment" 
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 ${isDark ? 'bg-black bg-opacity-60' : 'bg-white bg-opacity-30'}`}></div>
              <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3">
                <h4 className="font-krona text-xs sm:text-sm lg:text-base text-primary mb-1 sm:mb-2 tracking-wider">
                  Strength & Cardio Equipment
                </h4>
                <div className="flex justify-end">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Large Gym Image - Spans 2 rows on larger screens, full width on mobile */}
          <div className="relative group cursor-pointer col-span-2 sm:col-span-2 lg:col-span-1 lg:row-span-2">
            <div className="relative h-28 sm:h-32 lg:h-[19rem] rounded-2xl overflow-hidden border-2 border-primary">
              <img 
                src={gymBgImage} 
                alt="Gym Equipment" 
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 ${isDark ? 'bg-black bg-opacity-30' : 'bg-white bg-opacity-20'}`}></div>
            </div>
          </div>

          {/* Group Classes */}
          <div className="relative group cursor-pointer">
            <div className={`relative h-28 sm:h-32 lg:h-36 rounded-2xl overflow-hidden border-2 transition-colors ${
              isDark ? 'border-gray-700 hover:border-gray-500' : 'border-gray-300 hover:border-gray-400'
            }`}>
              <img 
                src={groupClassesImage} 
                alt="Group Classes" 
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 ${isDark ? 'bg-black bg-opacity-60' : 'bg-white bg-opacity-30'}`}></div>
              <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3">
                <h4 className="font-krona text-xs sm:text-sm lg:text-base text-primary mb-1 sm:mb-2 tracking-wider">
                  Group Classes
                </h4>
                <div className="flex justify-end">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Nutrition & Recipes */}
          <div className="relative group cursor-pointer">
            <div className={`relative h-28 sm:h-32 lg:h-36 rounded-2xl overflow-hidden border-2 transition-colors ${
              isDark ? 'border-gray-700 hover:border-gray-500' : 'border-gray-300 hover:border-gray-400'
            }`}>
              <img 
                src={nutritionImage} 
                alt="Nutrition Guidance" 
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 ${isDark ? 'bg-black bg-opacity-40' : 'bg-white bg-opacity-25'}`}></div>
              <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3">
                <h4 className="font-krona text-xs sm:text-sm lg:text-base text-primary mb-1 sm:mb-2 tracking-wider">
                  Nutrition & Recipes
                </h4>
                <div className="flex justify-end">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;