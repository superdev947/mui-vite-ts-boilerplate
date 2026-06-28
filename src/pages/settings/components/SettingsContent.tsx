import { Box, Card, FormControlLabel, Switch, Typography } from '@mui/material';
import React, { useState } from 'react';

import { SettingsState } from '../types';

export const SettingsContent: React.FC = () => {
  const [settings, setSettings] = useState<SettingsState>({
    notifications: true,
    darkMode: false,
    twoFactorAuth: false,
  });

  const handleToggle = (key: keyof SettingsState) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <Card sx={{ p: 4, maxWidth: 600 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <FormControlLabel
          control={
            <Switch
              checked={settings.notifications}
              onChange={() => handleToggle('notifications')}
            />
          }
          label={
            <Box>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                Notifications
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Receive email notifications about your account
              </Typography>
            </Box>
          }
        />

        <FormControlLabel
          control={
            <Switch
              checked={settings.darkMode}
              onChange={() => handleToggle('darkMode')}
            />
          }
          label={
            <Box>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                Dark Mode
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Enable dark mode for the application
              </Typography>
            </Box>
          }
        />

        <FormControlLabel
          control={
            <Switch
              checked={settings.twoFactorAuth}
              onChange={() => handleToggle('twoFactorAuth')}
            />
          }
          label={
            <Box>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                Two-Factor Authentication
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Enable two-factor authentication for enhanced security
              </Typography>
            </Box>
          }
        />
      </Box>
    </Card>
  );
};

export default SettingsContent;
