import { Box, Button } from '@mui/material';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { useAuth } from '@/modules/auth/context';

export const HomeActions: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
      {!isAuthenticated ? (
        <>
          <Button
            variant="contained"
            size="large"
            component={RouterLink}
            to="/login"
          >
            Login
          </Button>
          <Button
            variant="outlined"
            size="large"
            component={RouterLink}
            to="/signup"
          >
            Sign Up
          </Button>
        </>
      ) : (
        <Button
          variant="contained"
          size="large"
          component={RouterLink}
          to="/dashboard"
        >
          Go to Dashboard
        </Button>
      )}
    </Box>
  );
};

export default HomeActions;
