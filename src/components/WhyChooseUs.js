import whyChooseImage from '../assets/images/why choose.jpg';

const WhyChooseUs = () => {
  return (
    <section id="whychooseus" className="bg-black text-white py-10 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Content */}
          <div>
            {/* Section Title */}
            <div className="mb-6">
              <h2 className="font-krona text-xl lg:text-2xl xl:text-3xl leading-tight tracking-wider mb-3">
                WHY CHOOSE US
              </h2>
              <div className="w-24 h-0.5 bg-primary"></div>
            </div>

            {/* Main Heading */}
            <h3 className="font-krona text-lg lg:text-xl xl:text-2xl leading-tight tracking-wider text-primary mb-6 max-w-lg">
              From Day One to Your Personal Best Here's Why Our Gym Delivers Results That Last
            </h3>

            {/* Features List */}
            <div className="space-y-5">
              
              {/* Expert Trainers */}
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 shadow-[0_0_8px_#D4BC05]"></div>
                <div>
                  <h4 className="font-unbounded text-sm lg:text-base text-white mb-1 tracking-wider">
                    Expert Trainers
                  </h4>
                  <p className="font-unbounded text-xs text-gray-300 leading-relaxed">
                    Our certified trainers guide every member with personalized programs to help you achieve your 
                    fitness goals safely and effectively.
                  </p>
                </div>
              </div>

              {/* Modern Facilities */}
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 shadow-[0_0_8px_#D4BC05]"></div>
                <div>
                  <h4 className="font-unbounded text-sm lg:text-base text-white mb-1 tracking-wider">
                    Modern Facilities
                  </h4>
                  <p className="font-unbounded text-xs text-gray-300 leading-relaxed">
                    Fitness sports center is equipped with state-of-the-art machines, functional training areas, and dedicated 
                    spaces for group classes to enhance your workout experience.
                  </p>
                </div>
              </div>

              {/* Supportive Community */}
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 shadow-[0_0_8px_#D4BC05]"></div>
                <div>
                  <h4 className="font-unbounded text-sm lg:text-base text-white mb-1 tracking-wider">
                    Supportive Community
                  </h4>
                  <p className="font-unbounded text-xs text-gray-300 leading-relaxed">
                    Join a motivating and friendly environment where members encourage each other, making your fitness 
                    journey more enjoyable and consistent.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Image with Yellow Shadow */}
          <div className="relative">
            {/* Yellow Shadow Container */}
            <div className="absolute top-4 left-4 w-full h-full bg-primary rounded-2xl"></div>
            
            {/* Main Image Container */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-primary bg-black">
              <img 
                src={whyChooseImage} 
                alt="Why Choose Us - Fitness Training" 
                className="w-full h-64 lg:h-80 xl:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;