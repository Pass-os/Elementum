import { useEffect, useState, type PropsWithChildren } from 'react';
import { AppThemeContext } from './context';
import type { Theme } from './types';

export const ThemeProvider = ({ children }: PropsWithChildren) => {
   const [theme, setTheme] = useState<Theme>(() => {
      if (typeof window !== 'undefined') {
         const storedTheme = localStorage.getItem('theme') as Theme | null;
         if (storedTheme) return storedTheme;
         const prefersDark = window.matchMedia(
            '(prefers-color-scheme: dark)',
         ).matches;
         return prefersDark ? 'dark' : 'light';
      }
      return 'light';
   });

   useEffect(() => {
      const root = window.document.documentElement;
      root.classList.remove(theme === 'dark' ? 'light' : 'dark');
      root.classList.add(theme);
      localStorage.setItem('theme', theme);
   }, [theme]);

   const toggleTheme = () => {
      setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
   };

   return (
      <AppThemeContext value={{ theme, toggleTheme }}>
         {children}
      </AppThemeContext>
   );
};
