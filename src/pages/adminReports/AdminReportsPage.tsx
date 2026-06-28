import { Box } from '@mui/material';
import React from 'react';

import ReportsHeader from '@/pages/adminReports/components/ReportsHeader';
import ReportsPlaceholder from '@/pages/adminReports/components/ReportsPlaceholder';

export const AdminReportsPage: React.FC = () => {
  return (
    <Box>
      <ReportsHeader />
      <ReportsPlaceholder />
    </Box>
  );
};

export default AdminReportsPage;
