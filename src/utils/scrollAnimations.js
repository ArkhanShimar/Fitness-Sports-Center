// Simple scroll animation system that works repeatedly
export const initScrollAnimations = () => {
  const animatedElements = document.querySelectorAll('[class*="scroll-animate"]');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add animation when element comes into view
        entry.target.classList.add('animate-in');
      } else {
        // Remove animation when element goes out of view
        entry.target.classList.remove('animate-in');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -150px 0px' // Trigger when element is 150px into viewport
  });

  // Start observing all animated elements (and keep observing)
  animatedElements.forEach((element) => {
    observer.observe(element);
  });
};

export const setupScrollAnimations = () => {
  // Wait for DOM to be fully loaded and components mounted
  setTimeout(() => {
    initScrollAnimations();
  }, 1000); // 1 second delay to ensure everything is loaded
};