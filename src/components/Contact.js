import React, { useState } from 'react';
import contactImage from '../assets/images/contact form img.png';

const Contact = () => {
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
    <section id="contact" className="bg-black text-white pt-10 lg:pt-20 pb-0 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Left Content */}
          <div className="relative h-96 lg:h-[500px]">
            {/* Main Heading */}
            <div className="mb-6 relative z-20">
              <h2 className="font-krona text-3xl lg:text-4xl xl:text-5xl leading-tight tracking-wider mb-2">
                Let's Get in
              </h2>
              <h2 className="font-krona text-3xl lg:text-4xl xl:text-5xl leading-tight tracking-wider text-primary">
                Touch!
              </h2>
            </div>

            {/* Description - positioned over image */}
            <div className="relative z-20 mb-8">
              <p className="font-unbounded text-sm lg:text-base text-white leading-relaxed max-w-lg">
                Have a question or need assistance? Reach out to us via email, phone, or the contact form below. We're eager to assist you.
              </p>
            </div>

            {/* Contact Image - positioned to extend beyond section bottom */}
            <div className="absolute bottom-0 left-0 right-0 z-10 -mb-6 lg:-mb-8">
              <img 
                src={contactImage} 
                alt="Contact Us - Fitness Training" 
                className="w-full max-w-2xl h-80 lg:h-[400px] object-cover object-bottom"
              />
            </div>

            {/* Yellow decorative circles - positioned from bottom */}
            <div className="absolute bottom-0 left-12 w-64 h-64 bg-primary rounded-full opacity-80 z-5 translate-y-32 -mb-6 lg:-mb-8"></div>
            <div className="absolute bottom-0 right-8 w-48 h-48 bg-primary rounded-full opacity-60 z-5 translate-y-24 -mb-6 lg:-mb-8"></div>
          </div>

          {/* Right Content - Contact Form */}
          <div className="relative">
            {/* Success Message */}
            {isSubmitted && (
              <div className="mb-6 p-4 bg-primary bg-opacity-20 border border-primary rounded-lg">
                <p className="font-unbounded text-sm text-primary">
                  Thank you for your message! We'll get back to you soon.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Full Name Field */}
              <div>
                <label className="block font-krona text-sm text-white mb-2 tracking-wider">
                  FULL NAME:
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-transparent border-2 border-primary rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors font-unbounded text-sm"
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="mt-1 text-red-400 text-xs font-unbounded">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label className="block font-krona text-sm text-white mb-2 tracking-wider">
                  EMAIL:
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-transparent border-2 border-primary rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors font-unbounded text-sm"
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <p className="mt-1 text-red-400 text-xs font-unbounded">{errors.email}</p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label className="block font-krona text-sm text-white mb-2 tracking-wider">
                  MESSAGE:
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 bg-transparent border-2 border-primary rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors font-unbounded text-sm resize-none"
                  placeholder="Enter your message"
                />
                {errors.message && (
                  <p className="mt-1 text-red-400 text-xs font-unbounded">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary text-black px-8 py-3 rounded-full font-krona text-sm tracking-wider hover:bg-yellow-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;