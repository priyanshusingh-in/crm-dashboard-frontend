import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Box, Typography, Paper } from '@mui/material';

function LeadsLineChart({ leadsData }) {
  // Initialize trend data with months and zero counts
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
  const trendData = months.map(month => ({
    month,
    high: 0,
    medium: 0,
    low: 0
  }));

  // Count leads by month and priority
  Object.entries(leadsData).forEach(([priority, leads]) => {
    leads.forEach(lead => {
      const monthIndex = months.indexOf(lead.month);
      if (monthIndex !== -1) {
        trendData[monthIndex][priority]++;
      }
    });
  });

  return (
    <Paper elevation={0} sx={{ p: 3, borderRadius: 2, mb: 3 }}>
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 500 }}>
        Customer Trends by Priority
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Monthly trends of customers by priority level.
      </Typography>
      <Box sx={{ height: 300, width: '100%' }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={trendData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip 
              formatter={(value, name) => [
                `${value} Customers`, 
                name.charAt(0).toUpperCase() + name.slice(1) + ' Priority'
              ]}
            />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="high" 
              stroke="#f44336" 
              strokeWidth={2} 
              activeDot={{ r: 8 }} 
              name="High"
            />
            <Line 
              type="monotone" 
              dataKey="medium" 
              stroke="#ff9800" 
              strokeWidth={2} 
              activeDot={{ r: 8 }} 
              name="Medium"
            />
            <Line 
              type="monotone" 
              dataKey="low" 
              stroke="#4caf50" 
              strokeWidth={2} 
              activeDot={{ r: 8 }} 
              name="Low"
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  );
}

export default LeadsLineChart;