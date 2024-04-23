import { Pets } from '@mui/icons-material';
import { AppBar, Avatar, Box, Toolbar, Typography, styled } from '@mui/material';
import React from 'react';

const StyledToolbar = styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between"
});

const Icon = styled(Box)(({ theme }) => ({
  display:"flex",
  alignItems:"center",
  gap: "20px"
}));

const Navbar = () => {
  return (
    <AppBar position="sticky" sx={{color:"white"}}>
      <StyledToolbar>
        <Typography variant='h6' sx={{display:{xs:"none", sm:"block"}}}>Tazalyk</Typography>
        <Pets sx={{display:{xs:"block", sm:"none"}}}/>
        <Icon>
          <Avatar src="/broken-image.jpg" />
        </Icon>
      </StyledToolbar>
    </AppBar>
  )
}

export default Navbar
