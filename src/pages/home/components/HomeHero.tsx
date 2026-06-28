import { Box, Typography } from '@mui/material';
import React from 'react';

export const HomeHero: React.FC = () => {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography
        variant="h2"
        component="h1"
        sx={{ mb: 2, fontWeight: 'bold' }}
      >
        Welcome to Our App
      </Typography>

      <Typography variant="h5" sx={{ mb: 4, color: 'text.secondary' }}>
        A modern MUI application with React Router integration
      </Typography>
    </Box>
  );
};

export default HomeHero;
