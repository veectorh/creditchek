import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { ReactComponent as Logo} from '../assets/logo.svg';

const pages = ['Products', 'Pricing', 'Blog'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar color="secondary" elevation="0" position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>


          {/* Logo */}
          <Box
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <Logo />
          </Box>

          <Box
            sx={{ mr: 2, display: { xs: 'flex', md: 'none' }, maxWidth: '7rem' }}
          >
            <Logo />
          </Box>


        {/* mobile nav menu */}
          <Box sx={{flexGrow: {md: 1}, justifyItems: {xs: 'end'}, display: { xs: 'none', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="primary"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>


          {/* Links */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#696871', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* CTA */}
          <Box sx={{display: { xs: 'none', md: 'flex' }, justifyContent: 'end' }}>
              <Button
                color='primary'
                variant='outlined'
                onClick={handleCloseNavMenu}
                sx={{ my: 2, mx: 1, display: 'block' }}
              >
                Login
              </Button>
              <Button
                color='primary'
                variant='contained'
                onClick={handleCloseNavMenu}
                sx={{ my: 2, mx: 1, display: 'block' }}
              >
                Sign up
              </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;