import { Box } from '@mui/material';
import React from 'react';

import DashboardHeader from '@/pages/dashboard/components/DashboardHeader';
import DashboardStats from '@/pages/dashboard/components/DashboardStats';

export const DashboardPage: React.FC = () => {
  return (
    <Box>
      <DashboardHeader />
      <DashboardStats />
    </Box>
  );
};

export default DashboardPage;
