import { createContext, useContext } from 'react';
import type { ThemeContextType } from './types';

export const AppThemeContext = createContext<ThemeContextType>(null);

export const useAppTheme = () => {
   const context = useContext(AppThemeContext);

   if (!context)
      throw new Error('useAppTheme must be used within a AppThemeProvider');
   return context;
};
