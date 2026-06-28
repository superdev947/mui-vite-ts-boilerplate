import { PaletteOptions } from '@mui/material/styles';

const lightPalette: PaletteOptions = {
  mode: 'light',
  primary: {
    main: '#1976d2',
    light: '#42a5f5',
    dark: '#1565c0',
    contrastText: '#fff',
  },
  secondary: {
    main: '#dc004e',
    light: '#f73378',
    dark: '#9a0036',
    contrastText: '#fff',
  },
  success: {
    main: '#2e7d32',
    light: '#66bb6a',
    dark: '#1b5e20',
    contrastText: '#fff',
  },
  warning: {
    main: '#f57c00',
    light: '#ffb74d',
    dark: '#e65100',
    contrastText: '#fff',
  },
  error: {
    main: '#d32f2f',
    light: '#ef5350',
    dark: '#c62828',
    contrastText: '#fff',
  },
  info: {
    main: '#0288d1',
    light: '#4fc3f7',
    dark: '#01579b',
    contrastText: '#fff',
  },
  background: {
    default: '#ffffff',
    paper: '#f5f5f5',
  },
  text: {
    primary: '#000000',
    secondary: '#666666',
    disabled: '#bdbdbd',
  },
  divider: '#e0e0e0',
};

const darkPalette: PaletteOptions = {
  mode: 'dark',
  primary: {
    main: '#90caf9',
    light: '#e3f2fd',
    dark: '#1976d2',
    contrastText: '#000',
  },
  secondary: {
    main: '#f48fb1',
    light: '#f8bbd0',
    dark: '#c2185b',
    contrastText: '#000',
  },
  success: {
    main: '#66bb6a',
    light: '#81c784',
    dark: '#388e3c',
    contrastText: '#000',
  },
  warning: {
    main: '#ffb74d',
    light: '#ffe0b2',
    dark: '#f57f17',
    contrastText: '#000',
  },
  error: {
    main: '#ef5350',
    light: '#e57373',
    dark: '#d32f2f',
    contrastText: '#000',
  },
  info: {
    main: '#4fc3f7',
    light: '#b3e5fc',
    dark: '#0288d1',
    contrastText: '#000',
  },
  background: {
    default: '#121212',
    paper: '#1e1e1e',
  },
  text: {
    primary: '#ffffff',
    secondary: '#b0b0b0',
    disabled: '#616161',
  },
  divider: '#404040',
};

export const createPalette = (mode: 'light' | 'dark'): PaletteOptions => {
  return mode === 'light' ? lightPalette : darkPalette;
};
