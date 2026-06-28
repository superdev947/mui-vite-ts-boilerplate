import { Brightness4, Brightness7 } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';

import { useTheme } from '@/shared/hooks';

export const ThemeToggle: React.FC = () => {
  const { mode, toggleTheme } = useTheme();

  const handleToggle = () => {
    const newPreference = mode === 'light' ? 'dark' : 'light';
    toggleTheme(newPreference);
  };

  return (
    <Tooltip title={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}>
      <IconButton onClick={handleToggle} color="inherit">
        {mode === 'light' ? <Brightness4 /> : <Brightness7 />}
      </IconButton>
    </Tooltip>
  );
};
