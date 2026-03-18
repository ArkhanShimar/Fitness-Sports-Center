const Location = () => {
  return (
    <section id="location" className="bg-black text-white py-8 sm:py-10 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Section Title */}
            <div className="mb-4 sm:mb-6">
              <h2 className="font-krona text-xl sm:text-2xl lg:text-3xl xl:text-4xl leading-tight tracking-wider mb-2 sm:mb-3">
                OUR <span className="relative">
                  LOCATION
                  <div className="absolute -bottom-0.5 sm:-bottom-1 left-0 w-full h-0.5 bg-primary"></div>
                </span>
              </h2>
            </div>

            {/* Main Heading */}
            <h3 className="font-krona text-xl sm:text-2xl lg:text-3xl xl:text-4xl leading-tight tracking-wider text-primary mb-4 sm:mb-6">
              The Gym Next <br></br>Door
            </h3>

            {/* Subheading */}
            <h4 className="font-krona text-lg sm:text-xl lg:text-2xl xl:text-3xl leading-tight tracking-wider text-white mb-6 sm:mb-8">
              With Results <br></br>That Go the Distance
            </h4>

            {/* Address */}
            <div className="flex items-start space-x-3 sm:space-x-4 mb-4 sm:mb-6">
              <div className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0">
                <svg className="w-full h-full text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <div>
                <p className="font-krona text-sm sm:text-base lg:text-sm text-primary tracking-wider">
                  NO 1, Kandy Rd, Colombo, Sri Lanka
                </p>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="space-y-2 sm:space-y-3">
              <h5 className="font-krona text-xs sm:text-sm lg:text-base text-white tracking-wider mb-2 sm:mb-3">
                OPENING HOURS:
              </h5>
              <div className="space-y-1.5 sm:space-y-2 font-unbounded text-[10px] sm:text-xs lg:text-xs text-gray-300">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>5:00 AM - 11:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>6:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>7:00 AM - 9:00 PM</span>
                </div>
              </div>
            </div>
          </div>
          {/* Right Content - Google Map */}
          <div className="relative mt-6 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden border-2 sm:border-4 border-primary bg-black h-64 sm:h-80 lg:h-96">
              {/* Google Maps Embed with Dark Theme */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.798467128636!2d79.86124731477394!3d6.927078995007317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259684e6f0c7b%3A0x8c8b8b8b8b8b8b8b!2sKandy%20Rd%2C%20Colombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1640995200000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ 
                  border: 0, 
                  filter: 'invert(90%) hue-rotate(180deg) saturate(0.8) brightness(0.7)',
                  WebkitFilter: 'invert(90%) hue-rotate(180deg) saturate(0.8) brightness(0.7)'
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Fitness Sports Center Location"
              ></iframe>

              {/* Dark overlay to enhance dark theme */}
              <div className="absolute inset-0 bg-black bg-opacity-30 pointer-events-none"></div>

              {/* Custom Location Pin Overlay */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <div className="relative">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary rounded-full border-2 border-black shadow-lg relative flex items-center justify-center animate-pulse">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;