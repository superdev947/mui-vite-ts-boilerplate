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

import { useAuth } from '@/shared/context/AuthContext';

export const SignupForm: React.FC = () => {
  const navigate = useNavigate();
  const { signup, isLoading } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      await signup(email, password, name);
      navigate('/dashboard');
    } catch (err) {
      setError('Signup failed. Please try again.');
      console.error(err);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 8 }}>
        <Card sx={{ p: 4 }}>
          <Typography
            variant="h4"
            component="h1"
            sx={{ mb: 3, textAlign: 'center' }}
          >
            Sign Up
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
              label="Name"
              type="text"
              value={name}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
              margin="normal"
              disabled={isLoading}
              required
            />
            <TextField
              fullWidth
              label="Email"
              type="email"
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              margin="normal"
              disabled={isLoading}
              required
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              value={password}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
              margin="normal"
              disabled={isLoading}
              required
            />
            <TextField
              fullWidth
              label="Confirm Password"
              type="password"
              value={confirmPassword}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setConfirmPassword(e.target.value)
              }
              margin="normal"
              disabled={isLoading}
              required
            />
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3 }}
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? 'Signing up...' : 'Sign Up'}
            </Button>
          </form>

          <Box sx={{ mt: 2, textAlign: 'center' }}>
            <Typography variant="body2">
              Already have an account?{' '}
              <MuiLink component={RouterLink} to="/login">
                Login
              </MuiLink>
            </Typography>
          </Box>
        </Card>
      </Box>
    </Container>
  );
};

export default SignupForm;
