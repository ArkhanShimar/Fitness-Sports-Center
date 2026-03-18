// Simple scroll animation system that works repeatedly
export const initScrollAnimations = () => {
  const animatedElements = document.querySelectorAll('[class*="scroll-animate"]');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add animation when element comes into view
        entry.target.classList.add('animate-in');
      } else {
        // Remove animation when element goes out of view (for repeat animations)
        entry.target.classList.remove('animate-in');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -150px 0px' // Trigger when element is 150px into viewport
  });

  // Start observing all animated elements
  animatedElements.forEach((element) => {
    // Check if element is already in viewport on page load
    const rect = element.getBoundingClientRect();
    const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
    
    if (isInViewport) {
      // If element is in viewport on load (like Hero section), show it immediately
      element.classList.add('animate-in');
    }
    
    observer.observe(element);
  });
};

export const setupScrollAnimations = () => {
  // Initialize immediately without delay
  initScrollAnimations();
};