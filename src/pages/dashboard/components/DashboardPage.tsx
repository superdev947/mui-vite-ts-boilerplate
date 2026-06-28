import { Box } from '@mui/material';
import React from 'react';

import { DashboardHeader } from './DashboardHeader';
import { DashboardStats } from './DashboardStats';

export const DashboardPage: React.FC = () => {
  return (
    <Box>
      <DashboardHeader />
      <DashboardStats />
    </Box>
  );
};

export default DashboardPage;
