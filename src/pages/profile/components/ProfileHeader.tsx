import { Typography } from '@mui/material';
import React from 'react';

export const ProfileHeader: React.FC = () => {
  return (
    <Typography variant="h4" sx={{ mb: 4 }}>
      User Profile
    </Typography>
  );
};

export default ProfileHeader;
