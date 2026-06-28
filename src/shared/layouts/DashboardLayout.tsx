import { useAuth } from '@/shared/context';
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';
import { Outlet, Link as RouterLink, useNavigate } from 'react-router-dom';

const DRAWER_WIDTH = 240;

export const DashboardLayout: React.FC = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const navigationLinks = [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Profile', href: '/dashboard/profile' },
    { label: 'Settings', href: '/dashboard/settings' },
  ];

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      {/* App Bar */}
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          width: DRAWER_WIDTH,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: DRAWER_WIDTH,
            boxSizing: 'border-box',
            marginTop: 8,
          },
        }}
      >
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {navigationLinks.map((link) => (
              <ListItem
                key={link.href}
                component={RouterLink}
                to={link.href}
                sx={{
                  textDecoration: 'none',
                  color: 'inherit',
                  cursor: 'pointer',
                  '&:hover': {
                    backgroundColor: 'action.hover',
                  },
                }}
              >
                <ListItemText primary={link.label} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          marginTop: 8,
        }}
      >
        <Container maxWidth="lg" sx={{ py: 4, flex: 1 }}>
          <Outlet />
        </Container>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
