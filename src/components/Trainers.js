import { useRef, useState, useEffect, useCallback } from 'react';
import { useTheme } from '../contexts/ThemeContext';

import gymBgImage from '../assets/images/gym bg in sevices.jpeg';

const getTrainerImage = (filename) => {
  try {
    return require(`../assets/images/trainers/${filename}`);
  } catch {
    return gymBgImage;
  }
};

const trainers = [
  {
    name: 'Alex Carter',
    role: 'Head Strength Coach',
    specialties: ['Powerlifting', 'Strength Training', 'Body Composition'],
    experience: '8 Years',
    image: getTrainerImage('Head Strength Coach.webp'),
  },
  {
    name: 'Maya Silva',
    role: 'Cardio & HIIT Specialist',
    specialties: ['HIIT', 'Cardio Endurance', 'Weight Loss'],
    experience: '6 Years',
    image: getTrainerImage('Cardio & HIIT Specialist.jpg'),
  },
  {
    name: 'Jordan Lee',
    role: 'Nutrition & Wellness Coach',
    specialties: ['Nutrition Planning', 'Wellness', 'Flexibility'],
    experience: '5 Years',
    image: getTrainerImage('Nutrition & Wellness Coach.jpg'),
  },
  {
    name: 'Sam Torres',
    role: 'Group Fitness Instructor',
    specialties: ['Yoga', 'Pilates', 'Group Classes'],
    experience: '7 Years',
    image: getTrainerImage('Group Fitness Instructor.webp'),
  },
  {
    name: 'Chris Morgan',
    role: 'Personal Training Expert',
    specialties: ['Muscle Building', 'Athletic Performance', 'Rehab'],
    experience: '10 Years',
    image: getTrainerImage('Personal Training Expert.jpg'),
  },
];

const CARD_WIDTH = 300;   // px — card width
const CARD_GAP = 24;      // px — gap between cards
const STEP = CARD_WIDTH + CARD_GAP;
const TOTAL = trainers.length;

const Trainers = () => {
  const { isDark } = useTheme();
  // Start at index TOTAL so the "real" cards are in the middle of [clone | real | clone]
  const [current, setCurrent] = useState(TOTAL);
  const [transitioning, setTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef(null);

  // Triple the array: clone-end | real | clone-start for seamless loop
  const looped = [...trainers, ...trainers, ...trainers];

  const goTo = useCallback((index, animate = true) => {
    setTransitioning(animate);
    setCurrent(index);
  }, []);

  const next = useCallback(() => {
    goTo(current + 1);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo(current - 1);
  }, [current, goTo]);

  // After transition ends, silently jump to real position if we're in clone territory
  const handleTransitionEnd = useCallback(() => {
    if (current >= TOTAL * 2) {
      goTo(current - TOTAL, false);
    } else if (current < TOTAL) {
      goTo(current + TOTAL, false);
    }
  }, [current, goTo]);

  // Auto-play
  useEffect(() => {
    if (isPaused) return;
    timeoutRef.current = setTimeout(next, 3500);
    return () => clearTimeout(timeoutRef.current);
  }, [current, isPaused, next]);

  // Dot click — map to real index
  const goToReal = (i) => {
    clearTimeout(timeoutRef.current);
    goTo(TOTAL + i);
  };

  // Which real index is active
  const activeReal = ((current % TOTAL) + TOTAL) % TOTAL;

  // Touch support
  const touchStartX = useRef(null);
  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
    touchStartX.current = null;
  };

  return (
    <section
      id="trainers"
      className={`py-8 sm:py-10 md:py-16 lg:py-20 overflow-hidden ${
        isDark ? 'bg-black text-white' : 'bg-white text-black'
      }`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 sm:mb-12 gap-4">
          <div>
            <h2 className="font-krona text-lg sm:text-xl lg:text-2xl xl:text-3xl leading-tight tracking-wider mb-2">
              OUR TRAINERS
            </h2>
            <div className="w-12 sm:w-16 h-0.5 bg-primary mb-3 sm:mb-4"></div>
            <h3 className="font-krona text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-tight tracking-wider text-primary max-w-xl">
              Meet the Experts Behind Your Transformation
            </h3>
          </div>

          {/* Arrow Controls */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            <button
              onClick={() => { clearTimeout(timeoutRef.current); prev(); }}
              className={`p-2.5 sm:p-3 rounded-full border-2 transition-all duration-200 hover:scale-110 hover:border-primary hover:bg-primary hover:text-black ${
                isDark ? 'border-gray-600 text-white' : 'border-gray-300 text-black'
              }`}
              aria-label="Previous trainer"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => { clearTimeout(timeoutRef.current); next(); }}
              className="p-2.5 sm:p-3 rounded-full border-2 border-primary bg-primary text-black transition-all duration-200 hover:scale-110 hover:bg-yellow-400"
              aria-label="Next trainer"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Carousel track — full width, no container clipping */}
      <div
        className="relative"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex"
          style={{
            gap: `${CARD_GAP}px`,
            transform: `translateX(calc(50vw - ${CARD_WIDTH / 2}px - ${current * STEP}px))`,
            transition: transitioning ? 'transform 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none',
            willChange: 'transform',
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {looped.map((trainer, i) => {
            const realIndex = i % TOTAL;
            const isActive = i === current;
            return (
              <TrainerCard
                key={`${trainer.name}-${i}`}
                trainer={trainer}
                isActive={isActive}
                isDark={isDark}
                cardWidth={CARD_WIDTH}
              />
            );
          })}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center items-center space-x-2 mt-8">
        {trainers.map((_, i) => (
          <button
            key={i}
            onClick={() => goToReal(i)}
            className={`rounded-full transition-all duration-300 ${
              activeReal === i
                ? 'w-6 h-2 bg-primary shadow-[0_0_8px_#D4BC05]'
                : `w-2 h-2 ${isDark ? 'bg-gray-600 hover:bg-gray-400' : 'bg-gray-300 hover:bg-gray-500'}`
            }`}
            aria-label={`Go to trainer ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

const TrainerCard = ({ trainer, isActive, isDark, cardWidth }) => (
  <div
    className="flex-shrink-0 transition-all duration-500"
    style={{
      width: `${cardWidth}px`,
      transform: isActive ? 'scale(1.05)' : 'scale(0.92)',
      opacity: isActive ? 1 : 0.55,
    }}
  >
    {/* Image container */}
    <div
      className={`relative rounded-2xl overflow-hidden border-2 transition-all duration-500 ${
        isActive
          ? 'border-primary shadow-[0_0_30px_rgba(212,188,5,0.3)]'
          : isDark ? 'border-gray-800' : 'border-gray-200'
      }`}
    >
      <img
        src={trainer.image}
        alt={trainer.name}
        className="w-full h-72 sm:h-80 lg:h-96 object-cover object-top"
        draggable="false"
      />

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-black to-transparent" />

      {/* Name & role overlaid on image bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h4 className="font-krona text-sm sm:text-base text-white tracking-wider leading-tight mb-0.5">
          {trainer.name}
        </h4>
        <p className="font-unbounded text-[10px] sm:text-xs text-primary tracking-wide">
          {trainer.role}
        </p>
      </div>

      {/* Experience badge */}
      <div className="absolute top-3 right-3">
        <span className="bg-primary text-black font-unbounded text-[9px] font-semibold px-2.5 py-1 rounded-full">
          {trainer.experience}
        </span>
      </div>
    </div>

    {/* Specialties below card */}
    <div className="flex flex-wrap gap-1.5 mt-3 px-1">
      {trainer.specialties.map((s) => (
        <span
          key={s}
          className={`font-unbounded text-[8px] sm:text-[9px] px-2 py-1 rounded-full border tracking-wide transition-colors duration-300 ${
            isActive
              ? 'border-primary text-primary'
              : isDark
              ? 'border-gray-700 text-gray-500'
              : 'border-gray-200 text-gray-400'
          }`}
        >
          {s}
        </span>
      ))}
    </div>
  </div>
);

export default Trainers;
