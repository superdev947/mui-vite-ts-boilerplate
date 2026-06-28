import { createTheme as muiCreateTheme } from '@mui/material/styles';

import { createComponentOverrides } from './components';
import { createPalette } from './palette';
import { typographyOptions } from './typography';

export const createTheme = (mode: 'light' | 'dark') => {
  const palette = createPalette(mode);

  const theme = muiCreateTheme({
    palette,
    typography: typographyOptions,
  });

  theme.components = createComponentOverrides(theme);

  return theme;
};

export type AppTheme = ReturnType<typeof createTheme>;
