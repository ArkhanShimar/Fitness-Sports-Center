import { useTheme } from '../contexts/ThemeContext';
import logoImage from '../assets/images/logo.png';

const Footer = () => {
  const { isDark } = useTheme();
  
  return (
    <footer className={`py-6 sm:py-8 lg:py-12 ${
      isDark ? 'bg-black text-white' : 'bg-white text-black'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 text-center">
        
        {/* Logo */}
        <div className="mb-4 sm:mb-6">
          <img 
            src={logoImage} 
            alt="Fitness Sports Center Logo" 
            className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-auto"
          />
        </div>

        {/* Main Brand Text */}
        <div className="mb-3 sm:mb-4">
          <h2 className="font-krona text-base sm:text-lg lg:text-xl xl:text-2xl leading-tight tracking-wider">
            FITNESS <span className="text-primary">SPORTS</span> CENTER
          </h2>
        </div>

        {/* Copyright and Description */}
        <div className="mb-3 sm:mb-4 space-y-1">
          <p className={`font-unbounded text-[10px] sm:text-xs lg:text-sm ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            © 2026 FITNESS SPORTS CENTER | FitLife Fitness Brand. All rights reserved.
          </p>
          <p className={`font-unbounded text-[10px] sm:text-xs lg:text-sm ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Expert trainers, modern equipment, and flexible plans.
          </p>
        </div>

        {/* Contact Information */}
        <div className={`border-t pt-3 sm:pt-4 ${isDark ? 'border-gray-700' : 'border-gray-300'}`}>
          <p className={`font-unbounded text-[10px] sm:text-xs lg:text-sm text-primary`}>
            Join us or contact: <span className={isDark ? 'text-white' : 'text-black'}>info@fitlife.com</span> | <span className={isDark ? 'text-white' : 'text-black'}>+9477 1234 567</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;