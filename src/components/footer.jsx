import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { ReactComponent as Logo} from '../assets/flogo.svg';
import { List, ListItem, Typography } from '@mui/material';


const Footer = () => {
  return (
    <Box sx={{ flexGrow: 1, py: 8, mt: 8 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Logo /><br />
          <Typography variant='caption' sx={{color: 'secondary.main'}}>Copyright © 2022 CreditChek Technologies</Typography><br />
          <Typography variant='caption' sx={{color: 'secondary.main'}}>All rights reserved</Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <List sx={{color: 'secondary.main'}}>
              <ListItem><Typography variant='h5'>Product</Typography></ListItem>
              <ListItem><Typography variant='body1'>Features</Typography></ListItem>
              <ListItem><Typography variant='body1'>Contact us</Typography></ListItem>
              <ListItem><Typography variant='body1'>Testimonials</Typography></ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={3}>
            <List sx={{color: 'secondary.main'}}>
              <ListItem><Typography variant='h5'>Company</Typography></ListItem>
              <ListItem><Typography variant='body1'>About</Typography></ListItem>
              <ListItem><Typography variant='body1'>Investor relations</Typography></ListItem>
              <ListItem><Typography variant='body1'>Coverage</Typography></ListItem>
            </List>
        </Grid>
        <Grid item xs={12} md={3}>
            <List sx={{color: 'secondary.main'}}>
              <ListItem><Typography variant='h5'>Legal</Typography></ListItem>
              <ListItem><Typography variant='body1'>Terms of service</Typography></ListItem>
              <ListItem><Typography variant='body1'>Privacy policy</Typography></ListItem>
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer