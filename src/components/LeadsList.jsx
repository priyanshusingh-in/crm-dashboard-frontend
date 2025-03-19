import React from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  Button, 
  Chip,
  Avatar,
  Box,
  Typography,
  IconButton,
  Tooltip
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function LeadsList({ leads }) {
  const handleSendEmail = (email, name, product) => {
    // This function will be replaced with actual backend integration later
    alert(`Email functionality will be implemented to send email to ${name} (${email}) about their interest in ${product}`);
    // In a real implementation, this would call an API endpoint
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'high':
        return '#f44336'; // red
      case 'medium':
        return '#ff9800'; // orange
      case 'low':
        return '#4caf50'; // green
      default:
        return '#9e9e9e'; // grey
    }
  };

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };

  return (
    <TableContainer component={Paper} elevation={0} sx={{ borderRadius: 2, overflow: 'hidden' }}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead sx={{ backgroundColor: '#f5f7fa' }}>
          <TableRow>
            <TableCell>Customer</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Product Interest</TableCell>
            <TableCell>Month</TableCell>
            <TableCell>Priority</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {leads.map((lead) => (
            <TableRow key={lead.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar 
                    sx={{ 
                      bgcolor: getStatusColor(lead.status),
                      width: 40, 
                      height: 40,
                      mr: 2 
                    }}
                  >
                    {getInitials(lead.name)}
                  </Avatar>
                  <Typography variant="body1">{lead.name}</Typography>
                </Box>
              </TableCell>
              <TableCell>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <PersonIcon fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
                  {lead.username}
                </Box>
              </TableCell>
              <TableCell>{lead.email}</TableCell>
              <TableCell>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <ShoppingCartIcon fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
                  {lead.productInterest}
                </Box>
              </TableCell>
              <TableCell>{lead.month}</TableCell>
              <TableCell>
                <Chip 
                  label={lead.status.charAt(0).toUpperCase() + lead.status.slice(1)} 
                  size="small"
                  sx={{ 
                    backgroundColor: `${getStatusColor(lead.status)}20`,
                    color: getStatusColor(lead.status),
                    fontWeight: 500,
                    borderRadius: '4px'
                  }}
                />
              </TableCell>
              <TableCell align="center">
                <Tooltip title="Send Email">
                  <IconButton 
                    color="primary" 
                    onClick={() => handleSendEmail(lead.email, lead.name, lead.productInterest)}
                    sx={{ 
                      backgroundColor: '#e8eaf6',
                      '&:hover': {
                        backgroundColor: '#c5cae9'
                      }
                    }}
                  >
                    <EmailIcon />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default LeadsList;