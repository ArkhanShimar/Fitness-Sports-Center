import logoImage from '../assets/images/logo.png';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center">
        
        {/* Logo */}
        <div className="mb-6">
          <img 
            src={logoImage} 
            alt="Fitness Sports Center Logo" 
            className="w-16 h-16 lg:w-20 lg:h-20 mx-auto"
          />
        </div>

        {/* Main Brand Text */}
        <div className="mb-4">
          <h2 className="font-krona text-lg lg:text-xl xl:text-2xl leading-tight tracking-wider">
            FITNESS <span className="text-primary">SPORTS</span> CENTER
          </h2>
        </div>

        {/* Copyright and Description */}
        <div className="mb-4 space-y-1">
          <p className="font-unbounded text-xs lg:text-sm text-gray-300">
            © 2026 FITNESS SPORTS CENTER | FitLife Fitness Brand. All rights reserved.
          </p>
          <p className="font-unbounded text-xs lg:text-sm text-gray-300">
            Expert trainers, modern equipment, and flexible plans.
          </p>
        </div>

        {/* Contact Information */}
        <div className="border-t border-gray-700 pt-4">
          <p className="font-unbounded text-xs lg:text-sm text-primary">
            Join us or contact: <span className="text-white">info@fitlife.com</span> | <span className="text-white">+9477 1234 567</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;