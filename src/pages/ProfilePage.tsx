import { useAuth } from '@/shared/context';
import { Box, Button, Card, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

export const ProfilePage: React.FC = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 4 }}>
        User Profile
      </Typography>

      <Card sx={{ p: 4, maxWidth: 600 }}>
        <Box sx={{ mb: 3 }}>
          <TextField
            fullWidth
            label="Name"
            value={user?.name || ''}
            disabled={!isEditing}
            margin="normal"
          />
        </Box>

        <Box sx={{ mb: 3 }}>
          <TextField
            fullWidth
            label="Email"
            type="email"
            value={user?.email || ''}
            disabled={!isEditing}
            margin="normal"
          />
        </Box>

        <Box sx={{ mb: 3 }}>
          <TextField
            fullWidth
            label="Roles"
            value={user?.roles?.join(', ') || ''}
            disabled
            margin="normal"
          />
        </Box>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button variant="contained" onClick={handleEditClick}>
            {isEditing ? 'Save' : 'Edit'}
          </Button>
          {isEditing && (
            <Button variant="outlined" onClick={() => setIsEditing(false)}>
              Cancel
            </Button>
          )}
        </Box>
      </Card>
    </Box>
  );
};

export default ProfilePage;
