import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';

import { UserRow } from '../types';

const MOCK_USERS: UserRow[] = [
  { id: '1', name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
  { id: '3', name: 'Bob Johnson', email: 'bob@example.com', role: 'User' },
  {
    id: '4',
    name: 'Alice Brown',
    email: 'alice@example.com',
    role: 'Moderator',
  },
  {
    id: '5',
    name: 'Charlie Davis',
    email: 'charlie@example.com',
    role: 'User',
  },
];

export const AdminUsersTable: React.FC = () => {
  const [users] = useState<UserRow[]>(MOCK_USERS);

  const handleEditUser = (userId: string) => {
    console.log('Edit user:', userId);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: 'action.hover' }}>
            <TableCell>
              <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                Name
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                Email
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                Role
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                Actions
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user.id}
              sx={{ '&:hover': { backgroundColor: 'action.hover' } }}
            >
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => handleEditUser(user.id)}
                >
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AdminUsersTable;
