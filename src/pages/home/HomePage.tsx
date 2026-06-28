import { Box, Container } from '@mui/material';
import React from 'react';

import HomeActions from '@/pages/home/components/HomeActions';
import HomeFooter from '@/pages/home/components/HomeFooter';
import HomeHero from '@/pages/home/components/HomeHero';

export const HomePage: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          textAlign: 'center',
        }}
      >
        <HomeHero />
        <HomeActions />
        <HomeFooter />
      </Box>
    </Container>
  );
};

export default HomePage;
