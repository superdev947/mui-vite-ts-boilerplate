import { Typography } from '@mui/material';
import React from 'react';

export const AdminUsersHeader: React.FC = () => {
  return (
    <Typography variant="h4" sx={{ mb: 4 }}>
      User Management
    </Typography>
  );
};

export default AdminUsersHeader;
