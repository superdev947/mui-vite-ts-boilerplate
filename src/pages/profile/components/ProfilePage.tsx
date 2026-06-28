import { Box } from '@mui/material';
import React from 'react';

import { ProfileForm } from './ProfileForm';
import { ProfileHeader } from './ProfileHeader';

export const ProfilePage: React.FC = () => {
  return (
    <Box>
      <ProfileHeader />
      <ProfileForm />
    </Box>
  );
};

export default ProfilePage;
