import { Components, Theme } from '@mui/material/styles';

export const createComponentOverrides = (theme: Theme): Components => ({
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: '8px',
        fontWeight: 600,
        textTransform: 'none',
        padding: '10px 24px',
        transition: theme.transitions.create(['all'], {
          duration: theme.transitions.duration.standard,
        }),
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: theme.shadows[4],
        },
      },
      sizeSmall: {
        padding: '6px 16px',
        fontSize: '12px',
      },
      sizeLarge: {
        padding: '12px 32px',
        fontSize: '16px',
      },
      contained: {
        boxShadow: theme.shadows[2],
      },
      outlined: {
        borderWidth: '2px',
        '&:hover': {
          borderWidth: '2px',
        },
      },
    },
  },
  MuiTextField: {
    defaultProps: {
      variant: 'outlined',
    },
    styleOverrides: {
      root: {
        '& .MuiOutlinedInput-root': {
          borderRadius: '6px',
          transition: theme.transitions.create(['border-color', 'box-shadow'], {
            duration: theme.transitions.duration.standard,
          }),
          '&:hover fieldset': {
            borderColor: theme.palette.primary.main,
          },
          '&.Mui-focused fieldset': {
            borderColor: theme.palette.primary.main,
            boxShadow: `0 0 0 3px ${theme.palette.primary.main}20`,
          },
        },
        '& .MuiOutlinedInput-input': {
          padding: '12px 14px',
        },
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: '12px',
        boxShadow: theme.shadows[2],
        transition: theme.transitions.create(['box-shadow'], {
          duration: theme.transitions.duration.standard,
        }),
        '&:hover': {
          boxShadow: theme.shadows[4],
        },
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        backgroundImage: 'none',
      },
      elevation2: {
        boxShadow: theme.shadows[2],
      },
      elevation4: {
        boxShadow: theme.shadows[4],
      },
    },
  },
  MuiAppBar: {
    styleOverrides: {
      root: {
        boxShadow: theme.shadows[4],
        transition: theme.transitions.create(['background-color'], {
          duration: theme.transitions.duration.standard,
        }),
      },
    },
  },
  MuiDrawer: {
    styleOverrides: {
      paper: {
        backgroundImage: 'none',
        borderRight: `1px solid ${theme.palette.divider}`,
      },
    },
  },
  MuiTabs: {
    styleOverrides: {
      root: {
        borderBottom: `1px solid ${theme.palette.divider}`,
      },
      indicator: {
        height: 3,
        borderRadius: '3px',
      },
    },
  },
  MuiTab: {
    styleOverrides: {
      root: {
        textTransform: 'none',
        fontWeight: 500,
        fontSize: '14px',
        transition: theme.transitions.create(['color'], {
          duration: theme.transitions.duration.standard,
        }),
        '&.Mui-selected': {
          fontWeight: 600,
        },
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      root: {
        borderRadius: '20px',
        height: '32px',
        fontWeight: 500,
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        '& fieldset': {
          borderColor: theme.palette.divider,
        },
      },
    },
  },
});
