import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import './styles.css';

const Home = () => {
  // Function to handle login button click
  const goToLogin = () => {
    window.open('https://app.freightdok.io/login', '_blank');
  };

  // Function to handle signup button click
  const goToSignUp = () => {
    window.open('https://app.freightdok.io/federalSignup', '_blank');
  };

  return (
    <Box 
      sx={{ 
        width: '100%', 
        height: '100vh', 
        bgcolor: '#ffffff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Stack spacing={3} alignItems="center">
        <Typography 
          className="floating"
          sx={{
            fontFamily: '"Myriad Pro", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Arial, sans-serif',
            fontSize: { xs: '3rem', sm: '4rem', md: '5rem' },
            fontWeight: 700,
            color: '#0091ff',
            letterSpacing: '-0.02em'
          }}
        >
          freightdok.
        </Typography>
        
        <Typography
          className="fade-in"
          sx={{
            fontFamily: '"Myriad Pro", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Arial, sans-serif',
            fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.6rem' },
            fontWeight: 500,
            color: '#333333',
            letterSpacing: '0.01em',
            marginTop: '0.5rem',
            marginBottom: '1rem'
          }}
        >
          StagingV2: Carrier Ecosystem Ark
        </Typography>
        
        <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
          <Button 
            variant="outlined" 
            onClick={goToLogin}
            className="glow-effect"
            sx={{ 
              borderColor: '#0091ff', 
              color: '#0091ff',
              px: 3,
              '&:hover': {
                borderColor: '#0078d4',
                backgroundColor: 'rgba(0, 145, 255, 0.04)'
              }
            }}
          >
            Login
          </Button>
          
          <Button 
            variant="contained" 
            onClick={goToSignUp}
            className="glow-effect"
            sx={{ 
              backgroundColor: '#0091ff',
              px: 3,
              '&:hover': {
                backgroundColor: '#0078d4'
              }
            }}
          >
            Signup
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Home;