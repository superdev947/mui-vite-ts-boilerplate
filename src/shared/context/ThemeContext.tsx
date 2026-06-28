import { useMediaQuery } from '@mui/material';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { createTheme } from '@/shared/theme';

type ThemeMode = 'light' | 'dark';
type UserPreference = 'light' | 'dark' | 'system';

interface ThemeContextType {
  mode: ThemeMode;
  userPreference: UserPreference;
  toggleTheme: (preference: UserPreference) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
}

const STORAGE_KEY = 'theme-preference';

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const prefersDark = useMediaQuery('(prefers-color-scheme: dark)');
  const [userPreference, setUserPreference] =
    useState<UserPreference>('system');
  const [mode, setMode] = useState<ThemeMode>('light');

  // Load saved preference from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as UserPreference | null;
    if (saved && ['light', 'dark', 'system'].includes(saved)) {
      setUserPreference(saved);
    }
  }, []);

  // Determine active mode based on preference
  useEffect(() => {
    if (userPreference === 'system') {
      setMode(prefersDark ? 'dark' : 'light');
    } else {
      setMode(userPreference);
    }
  }, [userPreference, prefersDark]);

  const toggleTheme = useCallback((preference: UserPreference) => {
    setUserPreference(preference);
    localStorage.setItem(STORAGE_KEY, preference);
  }, []);

  const theme = useMemo(() => createTheme(mode), [mode]);

  const value: ThemeContextType = useMemo(
    () => ({ mode, userPreference, toggleTheme }),
    [mode, userPreference, toggleTheme],
  );

  return (
    <ThemeContext.Provider value={value}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeMode = (): ThemeContextType => {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeMode must be used within ThemeProvider');
  }
  return context;
};

export { ThemeContext };
