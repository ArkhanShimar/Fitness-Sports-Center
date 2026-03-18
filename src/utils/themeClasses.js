// Utility function to get theme-based classes
export const getThemeClasses = (isDark) => ({
  // Background classes
  bg: isDark ? 'bg-black' : 'bg-white',
  bgOpacity: isDark ? 'bg-black bg-opacity-80' : 'bg-white bg-opacity-80',
  
  // Text classes
  text: isDark ? 'text-white' : 'text-black',
  textSecondary: isDark ? 'text-gray-300' : 'text-gray-600',
  textMuted: isDark ? 'text-gray-400' : 'text-gray-500',
  
  // Border classes
  border: isDark ? 'border-gray-700' : 'border-gray-300',
  borderHover: isDark ? 'hover:border-gray-500' : 'hover:border-gray-400',
  
  // Hover classes
  hover: isDark ? 'hover:bg-white hover:bg-opacity-20' : 'hover:bg-black hover:bg-opacity-20',
  
  // Card backgrounds
  cardBg: isDark ? 'bg-black bg-opacity-40' : 'bg-white bg-opacity-40',
  cardBgStrong: isDark ? 'bg-black bg-opacity-60' : 'bg-white bg-opacity-60',
  
  // Form elements
  formBg: 'bg-transparent',
  formBorder: 'border-primary',
  formText: isDark ? 'text-white' : 'text-black',
  formPlaceholder: isDark ? 'placeholder-gray-400' : 'placeholder-gray-500',
  
  // Stats background
  statsBg: isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.15)',
});