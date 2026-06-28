import { Box } from '@mui/material';
import React from 'react';

import ProfileForm from '@/pages/profile/components/ProfileForm';
import ProfileHeader from '@/pages/profile/components/ProfileHeader';

export const ProfilePage: React.FC = () => {
  return (
    <Box>
      <ProfileHeader />
      <ProfileForm />
    </Box>
  );
};

export default ProfilePage;
