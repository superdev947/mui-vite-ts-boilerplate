import { useThemeMode } from '@/shared/context/ThemeContext';

/**
 * Hook to access the current theme mode and toggle functionality.
 * Must be used within a component wrapped by ThemeProvider.
 */
export const useTheme = () => {
  const { mode, toggleTheme, userPreference } = useThemeMode();
  return { mode, toggleTheme, userPreference };
};
