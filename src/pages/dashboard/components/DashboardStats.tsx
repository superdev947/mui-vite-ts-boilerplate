import { Box, Paper, Typography } from '@mui/material';
import React from 'react';

interface StatCard {
  title: string;
  value: string | number;
  description: string;
}

const STATS: StatCard[] = [
  {
    title: 'Users',
    value: '1,234',
    description: 'Total active users',
  },
  {
    title: 'Revenue',
    value: '$12,500',
    description: 'Monthly revenue',
  },
  {
    title: 'Growth',
    value: '24%',
    description: 'Month over month',
  },
  {
    title: 'Active',
    value: '892',
    description: 'Currently online',
  },
];

export const DashboardStats: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(4, 1fr)',
        },
        gap: 3,
      }}
    >
      {STATS.map((stat) => (
        <Paper
          key={stat.title}
          sx={{
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            backgroundColor: 'background.paper',
            boxShadow: 1,
          }}
        >
          <Typography color="textSecondary" gutterBottom>
            {stat.title}
          </Typography>
          <Typography variant="h5" sx={{ my: 1, fontWeight: 'bold' }}>
            {stat.value}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {stat.description}
          </Typography>
        </Paper>
      ))}
    </Box>
  );
};

export default DashboardStats;
