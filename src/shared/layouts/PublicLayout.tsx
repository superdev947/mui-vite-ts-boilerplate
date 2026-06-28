import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';
import { Outlet, Link as RouterLink } from 'react-router-dom';

export const PublicLayout: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* App Bar */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My App
          </Typography>
          <Button
            color="inherit"
            component={RouterLink}
            to="/login"
            sx={{ textDecoration: 'none' }}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container component="main" maxWidth="lg" sx={{ py: 4, flex: 1 }}>
        <Outlet />
      </Container>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: '#f5f5f5',
          borderTop: '1px solid #e0e0e0',
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="body2"
            align="center"
            sx={{ color: 'text.secondary' }}
          >
            {'Copyright © '}
            <span>My App</span> {new Date().getFullYear()}.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default PublicLayout;
