import { Typography } from '@mui/material';
import React from 'react';

import { useAuth } from '@/modules/auth/context';

export const DashboardHeader: React.FC = () => {
  const { user } = useAuth();

  return (
    <Typography variant="h4" sx={{ mb: 4 }}>
      Welcome, {user?.name || 'User'}!
    </Typography>
  );
};

export default DashboardHeader;
