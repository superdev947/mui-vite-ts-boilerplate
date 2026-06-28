import { useAuth } from '@/shared/context';
import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

export const HomePage: React.FC = () => {
  const { isAuthenticated } = useAuth();

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
        <Typography variant="h2" component="h1" sx={{ mb: 2, fontWeight: 'bold' }}>
          Welcome to Our App
        </Typography>

        <Typography variant="h5" sx={{ mb: 4, color: 'text.secondary' }}>
          A modern Material UI application with React Router integration
        </Typography>

        <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
          {!isAuthenticated ? (
            <>
              <Button variant="contained" size="large" component={RouterLink} to="/login">
                Login
              </Button>
              <Button variant="outlined" size="large" component={RouterLink} to="/signup">
                Sign Up
              </Button>
            </>
          ) : (
            <Button variant="contained" size="large" component={RouterLink} to="/dashboard">
              Go to Dashboard
            </Button>
          )}
        </Box>

        <Box sx={{ mt: 6 }}>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Built with React, Material UI, TypeScript, and Vite
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default HomePage;
