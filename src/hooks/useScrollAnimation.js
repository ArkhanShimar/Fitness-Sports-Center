import { useEffect, useRef } from 'react';

const useScrollAnimation = (animationClass = 'animate-fade-in-up', threshold = 0.1) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(animationClass);
            entry.target.classList.remove('animate-on-scroll');
          }
        });
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Add initial hidden state
    element.classList.add('animate-on-scroll');
    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [animationClass, threshold]);

  return elementRef;
};

export default useScrollAnimation;