import { useTheme } from '../contexts/ThemeContext';

const plans = [
  {
    name: 'STARTER',
    price: '2,500',
    period: 'per month',
    description: 'Perfect for beginners starting their fitness journey.',
    features: [
      'Access to gym floor',
      'Basic equipment usage',
      'Locker room access',
      '2 group classes/month',
      'Fitness assessment',
    ],
    highlighted: false,
  },
  {
    name: 'PRO',
    price: '4,500',
    period: 'per month',
    description: 'Most popular plan for dedicated fitness enthusiasts.',
    features: [
      'Full gym access',
      'Unlimited group classes',
      'Monthly trainer session',
      'Nutrition guidance',
      'Progress tracking',
      'Guest pass (1/month)',
    ],
    highlighted: true,
  },
  {
    name: 'ELITE',
    price: '7,500',
    period: 'per month',
    description: 'The ultimate experience for serious athletes.',
    features: [
      'All PRO features',
      'Weekly trainer sessions',
      'Personalized meal plan',
      'Priority class booking',
      'Spa & recovery access',
      'Unlimited guest passes',
    ],
    highlighted: false,
  },
];

const MembershipPlans = () => {
  const { isDark } = useTheme();

  return (
    <section id="membership" className={`py-8 sm:py-10 md:py-16 lg:py-20 ${
      isDark ? 'bg-black text-white' : 'bg-white text-black'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">

        {/* Section Header */}
        <div className="mb-8 sm:mb-10 lg:mb-12">
          <div className="mb-3 sm:mb-4">
            <h2 className="font-krona text-lg sm:text-xl lg:text-2xl xl:text-3xl leading-tight tracking-wider mb-2">
              MEMBERSHIP PLANS
            </h2>
            <div className="w-12 sm:w-16 h-0.5 bg-primary"></div>
          </div>
          <h3 className="font-krona text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-tight tracking-wider text-primary mb-3 max-w-3xl">
            Choose the Plan That Fits Your Goals
          </h3>
          <p className={`font-unbounded text-[10px] sm:text-xs lg:text-sm leading-relaxed max-w-3xl ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Flexible membership options designed for every fitness level. No hidden fees, cancel anytime.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-5 sm:p-6 lg:p-8 flex flex-col transition-transform duration-300 hover:-translate-y-1 ${
                plan.highlighted
                  ? 'border-2 border-primary'
                  : isDark
                  ? 'border border-gray-700'
                  : 'border border-gray-300'
              } ${
                isDark ? 'bg-black' : 'bg-white'
              }`}
              style={plan.highlighted ? {
                boxShadow: isDark
                  ? '0 0 30px rgba(212, 188, 5, 0.15)'
                  : '0 0 30px rgba(212, 188, 5, 0.25)',
              } : {}}
            >
              {/* Popular Badge */}
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-black font-unbounded text-[9px] sm:text-[10px] font-semibold px-3 py-1 rounded-full tracking-wider whitespace-nowrap">
                    MOST POPULAR
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <h4 className={`font-krona text-base sm:text-lg lg:text-xl tracking-wider mb-1 ${
                plan.highlighted ? 'text-primary' : isDark ? 'text-white' : 'text-black'
              }`}>
                {plan.name}
              </h4>

              {/* Price */}
              <div className="mb-3 sm:mb-4">
                <span className="font-krona text-2xl sm:text-3xl lg:text-4xl text-primary">
                  LKR {plan.price}
                </span>
                <span className={`font-unbounded text-[10px] sm:text-xs ml-1 ${
                  isDark ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  / {plan.period}
                </span>
              </div>

              {/* Description */}
              <p className={`font-unbounded text-[10px] sm:text-xs leading-relaxed mb-4 sm:mb-5 ${
                isDark ? 'text-gray-400' : 'text-gray-500'
              }`}>
                {plan.description}
              </p>

              {/* Divider */}
              <div className={`w-full h-px mb-4 sm:mb-5 ${
                isDark ? 'bg-gray-700' : 'bg-gray-200'
              }`}></div>

              {/* Features */}
              <ul className="space-y-2 sm:space-y-3 flex-1 mb-6 sm:mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start space-x-2 sm:space-x-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0 shadow-[0_0_6px_#D4BC05]"></div>
                    <span className={`font-unbounded text-[10px] sm:text-xs leading-relaxed ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className={`w-full py-2.5 sm:py-3 rounded-full font-unbounded font-semibold text-[10px] sm:text-xs tracking-wider transition-all duration-200 hover:scale-105 ${
                plan.highlighted
                  ? 'bg-primary text-black hover:bg-yellow-400'
                  : isDark
                  ? 'border border-primary text-primary hover:bg-primary hover:text-black'
                  : 'border border-primary text-primary hover:bg-primary hover:text-black'
              }`}>
                GET STARTED
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembershipPlans;
