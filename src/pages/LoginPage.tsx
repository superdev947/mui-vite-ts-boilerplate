import { useAuth } from '@/shared/context';
import {
  Box,
  Button,
  Card,
  Container,
  Link as MuiLink,
  TextField,
  Typography,
} from '@mui/material';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { login, isLoading } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (err) {
      setError('Login failed. Please try again.');
      console.error(err);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 8 }}>
        <Card sx={{ p: 4 }}>
          <Typography variant="h4" component="h1" sx={{ mb: 3, textAlign: 'center' }}>
            Login
          </Typography>

          {error && (
            <Box
              sx={{
                mb: 2,
                p: 2,
                backgroundColor: 'error.light',
                color: 'error.dark',
                borderRadius: 1,
              }}
            >
              {error}
            </Box>
          )}

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Email"
              type="email"
              value={email}
              onChange={handleEmailChange}
              margin="normal"
              disabled={isLoading}
              required
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              margin="normal"
              disabled={isLoading}
              required
            />
            <Button fullWidth variant="contained" sx={{ mt: 3 }} type="submit" disabled={isLoading}>
              {isLoading ? 'Logging in...' : 'Login'}
            </Button>
          </form>

          <Box sx={{ mt: 2, textAlign: 'center' }}>
            <Typography variant="body2">
              Don't have an account?{' '}
              <MuiLink component={RouterLink} to="/signup">
                Sign up
              </MuiLink>
            </Typography>
          </Box>
        </Card>
      </Box>
    </Container>
  );
};

export default LoginPage;
