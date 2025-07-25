'use client';
import React from 'react';
import { AppBar, Toolbar, Box, Button, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';


const pages = ['Home']; //, 'About', 'Menu', 'Services'



const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen((prev) => !prev);
  };

  return (
    <AppBar position="fixed" color="transparent" elevation={0}>
      <Toolbar
        sx={{
          justifyContent: 'space-between',
          marginLeft: { md: '20%' },
          marginRight: { md: '15%' },
          marginTop: 2,
          px: { xs: 1, sm: 2 }
        }}
      >
        
        {/* Desktop Nav */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'space-between', width: '35%' }}>
          {pages.map((page) => (
            <Link key={page} href={`/${page.toLowerCase()}`} passHref>
              <Button sx={{ fontSize: 17, color: '#747133', color: 'white' }}>{page}</Button>
            </Link>
          ))}
        </Box>

        <Button
          variant="outlined"
          sx={{
            color: 'white',
            borderColor: 'white',
            fontSize: 17,
            borderRadius: '25px',
            width: '15%',
            height: '50px',
            marginRight: '6%'
          }}
        >
          Reservation
        </Button>

        {/* Mobile Hamburger */}
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerToggle}
          sx={{ display: { xs: 'flex', md: 'none' } }}
        >
          <MenuIcon sx={{ color: '#747133', fontSize: 36 }} />
        </IconButton>
        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={handleDrawerToggle}
          sx={{ display: { xs: 'block', md: 'none' } }}
        >
          <Box sx={{ width: 220 }} role="presentation" onClick={handleDrawerToggle}>
            <List>
              {pages.map((page) => (
                <ListItem key={page} disablePadding>
                  <Link href={`/${page.toLowerCase()}`} passHref legacyBehavior>
                    <ListItemButton component="a">
                      <ListItemText primary={page} />
                    </ListItemButton>
                  </Link>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;