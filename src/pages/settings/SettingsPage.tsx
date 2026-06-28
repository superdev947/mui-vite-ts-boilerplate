import { Box } from '@mui/material';
import React from 'react';

import SettingsContent from '@/pages/settings/components/SettingsContent';
import SettingsHeader from '@/pages/settings/components/SettingsHeader';

export const SettingsPage: React.FC = () => {
  return (
    <Box>
      <SettingsHeader />
      <SettingsContent />
    </Box>
  );
};

export default SettingsPage;
