import { Box } from '@mui/material';
import React from 'react';

import AdminUsersHeader from '@/pages/adminUsers/components/AdminUsersHeader';
import AdminUsersTable from '@/pages/adminUsers/components/AdminUsersTable';

export const AdminUsersPage: React.FC = () => {
  return (
    <Box>
      <AdminUsersHeader />
      <AdminUsersTable />
    </Box>
  );
};

export default AdminUsersPage;
