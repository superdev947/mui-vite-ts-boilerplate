import { Paper, Typography } from '@mui/material';
import React from 'react';

export const ReportsPlaceholder: React.FC = () => {
  return (
    <Paper
      sx={{
        p: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 400,
        backgroundColor: 'action.hover',
      }}
    >
      <Typography variant="h6" color="textSecondary" sx={{ mb: 2 }}>
        Chart Integration Placeholder
      </Typography>
      <Typography variant="body2" color="textSecondary" align="center">
        This is where you can integrate charts and visualizations.
      </Typography>
      <Typography
        variant="body2"
        color="textSecondary"
        align="center"
        sx={{ mt: 2 }}
      >
        Consider using libraries like:
        <br />
        - Recharts
        <br />
        - Chart.js
        <br />- Plotly
      </Typography>
    </Paper>
  );
};

export default ReportsPlaceholder;
