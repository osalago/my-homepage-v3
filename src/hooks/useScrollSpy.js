import { useState, useEffect, useCallback } from 'react';

/**
 * Custom hook for scroll-spy functionality
 * Tracks which section is currently in view and updates active state
 * 
 * @param {string[]} sectionIds - Array of section IDs to track
 * @param {number} offset - Offset from top of viewport (default: 100px for header)
 * @returns {string} - Currently active section ID
 */
const useScrollSpy = (sectionIds, offset = 100) => {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || '');

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY + offset;
    
    // Find the section that is currently in view
    let currentSection = sectionIds[0];
    
    for (const sectionId of sectionIds) {
      const element = document.getElementById(sectionId);
      if (element) {
        const { offsetTop } = element;
        if (scrollPosition >= offsetTop) {
          currentSection = sectionId;
        }
      }
    }
    
    setActiveSection(currentSection);
  }, [sectionIds, offset]);

  useEffect(() => {
    // Initial check
    handleScroll();
    
    // Add scroll listener with passive option for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return activeSection;
};

export default useScrollSpy;
