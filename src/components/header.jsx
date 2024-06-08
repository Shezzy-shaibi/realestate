import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <img src="/assets/images/logo/logo.png" alt="EzyRes Logo" style={{ height: 50 }} />
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
