import { Box, Card, FormControlLabel, Switch, Typography } from '@mui/material';
import React, { useState } from 'react';

interface Settings {
  notifications: boolean;
  darkMode: boolean;
  twoFactorAuth: boolean;
}

export const SettingsPage: React.FC = () => {
  const [settings, setSettings] = useState<Settings>({
    notifications: true,
    darkMode: false,
    twoFactorAuth: false,
  });

  const handleToggle = (key: keyof Settings) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Settings
      </Typography>

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
              <Switch checked={settings.darkMode} onChange={() => handleToggle('darkMode')} />
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
    </Box>
  );
};

export default SettingsPage;
