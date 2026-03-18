import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import contactImage from '../assets/images/contact form img.png';

const Contact = () => {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1000);
  };

  return (
    <section id="contact" className={`pt-8 sm:pt-10 md:pt-16 lg:pt-20 pb-0 relative overflow-hidden ${
      isDark ? 'bg-black text-white' : 'bg-white text-black'
    }`}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
        
        {/* Mobile: Heading and Description at top */}
        <div className="lg:hidden mb-6 sm:mb-8">
          {/* Main Heading */}
          <div className="mb-4 sm:mb-6">
            <h2 className="font-krona text-2xl sm:text-3xl leading-tight tracking-wider mb-1 sm:mb-2">
              Let's Get in
            </h2>
            <h2 className="font-krona text-2xl sm:text-3xl leading-tight tracking-wider text-primary">
              Touch!
            </h2>
          </div>

          {/* Description */}
          <div className="mb-6 sm:mb-8">
            <p className={`font-unbounded text-xs sm:text-sm leading-relaxed ${
              isDark ? 'text-white' : 'text-black'
            }`}>
              Have a question or need assistance? Reach out to us via email, phone, or the contact form below. We're eager to assist you.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
          
          {/* Left Content - Desktop only */}
          <div className="hidden lg:block relative h-80 sm:h-96 lg:h-[500px]">
            {/* Main Heading */}
            <div className="mb-4 sm:mb-6 relative z-20">
              <h2 className="font-krona text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-tight tracking-wider mb-1 sm:mb-2">
                Let's Get in
              </h2>
              <h2 className="font-krona text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-tight tracking-wider text-primary">
                Touch!
              </h2>
            </div>

            {/* Description - positioned over image */}
            <div className="relative z-20 mb-6 sm:mb-8">
              <p className={`font-unbounded text-xs sm:text-sm lg:text-base leading-relaxed max-w-lg ${
                isDark ? 'text-white' : 'text-black'
              }`}>
                Have a question or need assistance? Reach out to us via email, phone, or the contact form below. We're eager to assist you.
              </p>
            </div>

            {/* Contact Image - positioned to extend beyond section bottom */}
            <div className="absolute bottom-0 left-0 right-0 z-10 -mb-4 sm:-mb-6 lg:-mb-8">
              <img 
                src={contactImage} 
                alt="Contact Us - Fitness Training" 
                className="w-full max-w-2xl h-64 sm:h-80 lg:h-[400px] object-cover object-bottom"
              />
            </div>

            {/* Yellow decorative circles - positioned from bottom */}
            <div className="absolute bottom-0 left-8 sm:left-12 w-48 sm:w-64 h-48 sm:h-64 bg-primary rounded-full opacity-80 z-5 translate-y-24 sm:translate-y-32 -mb-4 sm:-mb-6 lg:-mb-8"></div>
            <div className="absolute bottom-0 right-6 sm:right-8 w-32 sm:w-48 h-32 sm:h-48 bg-primary rounded-full opacity-60 z-5 translate-y-16 sm:translate-y-24 -mb-4 sm:-mb-6 lg:-mb-8"></div>
          </div>

          {/* Right Content - Contact Form */}
          <div className="relative">
            {/* Success Message */}
            {isSubmitted && (
              <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-primary bg-opacity-20 border border-primary rounded-lg">
                <p className="font-unbounded text-xs sm:text-sm text-primary">
                  Thank you for your message! We'll get back to you soon.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              
              {/* Full Name Field */}
              <div>
                <label className={`block font-krona text-xs sm:text-sm mb-2 tracking-wider ${
                  isDark ? 'text-white' : 'text-black'
                }`}>
                  FULL NAME:
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 bg-transparent border-2 border-primary rounded-full placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors font-unbounded text-xs sm:text-sm ${
                    isDark ? 'text-white placeholder-gray-400' : 'text-black placeholder-gray-500'
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="mt-1 text-red-400 text-[10px] sm:text-xs font-unbounded">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label className={`block font-krona text-xs sm:text-sm mb-2 tracking-wider ${
                  isDark ? 'text-white' : 'text-black'
                }`}>
                  EMAIL:
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 bg-transparent border-2 border-primary rounded-full focus:outline-none focus:border-yellow-400 transition-colors font-unbounded text-xs sm:text-sm ${
                    isDark ? 'text-white placeholder-gray-400' : 'text-black placeholder-gray-500'
                  }`}
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <p className="mt-1 text-red-400 text-[10px] sm:text-xs font-unbounded">{errors.email}</p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label className={`block font-krona text-xs sm:text-sm mb-2 tracking-wider ${
                  isDark ? 'text-white' : 'text-black'
                }`}>
                  MESSAGE:
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 bg-transparent border-2 border-primary rounded-2xl focus:outline-none focus:border-yellow-400 transition-colors font-unbounded text-xs sm:text-sm resize-none ${
                    isDark ? 'text-white placeholder-gray-400' : 'text-black placeholder-gray-500'
                  }`}
                  placeholder="Enter your message"
                />
                {errors.message && (
                  <p className="mt-1 text-red-400 text-[10px] sm:text-xs font-unbounded">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary text-black px-6 sm:px-8 py-2 sm:py-3 rounded-full font-krona text-xs sm:text-sm tracking-wider hover:bg-yellow-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Mobile: Contact Image at bottom */}
        <div className="lg:hidden relative mt-8 sm:mt-10 h-64 sm:h-80 overflow-hidden">
          {/* Contact Image */}
          <div className="absolute bottom-0 left-0 right-0 z-10">
            <img 
              src={contactImage} 
              alt="Contact Us - Fitness Training" 
              className="w-full h-64 sm:h-80 object-cover object-bottom"
            />
          </div>

          {/* Yellow decorative circles for mobile */}
          <div className="absolute bottom-0 left-6 w-32 h-32 bg-primary rounded-full opacity-80 z-5 translate-y-16"></div>
          <div className="absolute bottom-0 right-4 w-24 h-24 bg-primary rounded-full opacity-60 z-5 translate-y-12"></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;