import React, { useState } from 'react';
import { Box, Container, Typography, AppBar, Toolbar, Tabs, Tab, Paper } from '@mui/material';
import LeadsList from './LeadsList';
import LeadsLineChart from './LeadsLineChart';
import { leadsData } from '../data/mockData';

function Dashboard() {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={0} sx={{ backgroundColor: '#fff', color: '#333' }}>
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontWeight: 600 }}>
            CRM Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <LeadsLineChart leadsData={leadsData} />
        
        <Paper elevation={0} sx={{ p: 3, borderRadius: 2, mb: 3 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 500 }}>
            Lead Management
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Track and manage your leads based on priority levels. Use the tabs below to filter leads by their status.
          </Typography>
          
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs 
              value={tabValue} 
              onChange={handleTabChange} 
              aria-label="lead status tabs"
              indicatorColor="primary"
              textColor="primary"
            >
              <Tab label="High Priority" />
              <Tab label="Medium Priority" />
              <Tab label="Low Priority" />
            </Tabs>
          </Box>
          
          <Box sx={{ py: 3 }}>
            {tabValue === 0 && <LeadsList leads={leadsData.high} />}
            {tabValue === 1 && <LeadsList leads={leadsData.medium} />}
            {tabValue === 2 && <LeadsList leads={leadsData.low} />}
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default Dashboard;