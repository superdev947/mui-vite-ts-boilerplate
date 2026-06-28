import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

export const NotFoundPage: React.FC = () => {
  return (
    <Container maxWidth="sm">
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
        <Typography
          variant="h1"
          sx={{
            fontSize: '6rem',
            fontWeight: 'bold',
            color: 'error.main',
            mb: 2,
          }}
        >
          404
        </Typography>

        <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold' }}>
          Page Not Found
        </Typography>

        <Typography variant="body1" color="textSecondary" sx={{ mb: 4 }}>
          The page you are looking for doesn't exist or has been moved.
        </Typography>

        <Button variant="contained" size="large" component={RouterLink} to="/">
          Go Home
        </Button>
      </Box>
    </Container>
  );
};

export default NotFoundPage;
