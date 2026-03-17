const Location = () => {
  return (
    <section id="location" className="bg-black text-white py-10 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Section Title */}
            <div className="mb-6">
              <h2 className="font-krona text-2xl lg:text-3xl xl:text-4xl leading-tight tracking-wider mb-3">
                OUR <span className="relative">
                  LOCATION
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"></div>
                </span>
              </h2>
            </div>

            {/* Main Heading */}
            <h3 className="font-krona text-2xl lg:text-3xl xl:text-4xl leading-tight tracking-wider text-primary mb-6">
              The Gym Next <br></br>Door
            </h3>

            {/* Subheading */}
            <h4 className="font-krona text-xl lg:text-2xl xl:text-3xl leading-tight tracking-wider text-white mb-8">
              With Results <br></br>That Go the Distance
            </h4>

            {/* Address */}
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-5 h-5 flex-shrink-0 mt-0">
                <svg className="w-full h-full text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <div>
                <p className="font-krona text-base lg:text-sm text-primary tracking-wider">
                  NO 1, Kandy Rd, Colombo, Sri Lanka
                </p>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="space-y-3">
              <h5 className="font-krona text-sm lg:text-base text-white tracking-wider mb-3">
                OPENING HOURS:
              </h5>
              <div className="space-y-2 font-unbounded text-xs lg:text-xs text-gray-300">
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
          {/* Right Content - Map */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border-2 border-primary bg-black h-80 lg:h-96">
              <div className="absolute inset-0 bg-black">

                {/* Location Pin - Yellow */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    {/* Pin */}
                    <div className="w-8 h-8 bg-primary rounded-full border-2 border-black shadow-lg relative flex items-center justify-center">
                      <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Navigation arrow - bottom right */}
                <div className="absolute bottom-4 right-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
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

export default Location;