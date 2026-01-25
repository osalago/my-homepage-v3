import { create } from 'zustand';
import { persist } from 'zustand/middleware';

/**
 * Theme store using Zustand with localStorage persistence
 * Manages dark/light mode state across the application
 */
export const useThemeStore = create(
  persist(
    (set, get) => ({
      isDark: false,

      toggleTheme: () => {
        const newIsDark = !get().isDark;
        
        // Update DOM
        const root = document.documentElement;
        if (newIsDark) {
          root.classList.add('dark');
          root.setAttribute('data-theme', 'dark');
        } else {
          root.classList.remove('dark');
          root.setAttribute('data-theme', 'light');
        }
        
        set({ isDark: newIsDark });
      },

      // Initialize theme on app load (call this in App.jsx useEffect)
      initializeTheme: () => {
        const { isDark } = get();
        const root = document.documentElement;
        
        if (isDark) {
          root.classList.add('dark');
          root.setAttribute('data-theme', 'dark');
        } else {
          root.classList.remove('dark');
          root.setAttribute('data-theme', 'light');
        }
      },
    }),
    {
      name: 'theme-storage',
      // Only persist isDark value
      partialize: (state) => ({ isDark: state.isDark }),
    }
  )
);
