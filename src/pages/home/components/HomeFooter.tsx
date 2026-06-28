import { Box, Typography } from '@mui/material';
import React from 'react';

export const HomeFooter: React.FC = () => {
  return (
    <Box sx={{ mt: 6 }}>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        Built with React, Material UI, TypeScript, and Vite
      </Typography>
    </Box>
  );
};

export default HomeFooter;
