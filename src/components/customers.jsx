import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {CustomerCardA, CustomerCardB, CustomerCardC, CustomerCardD} from './sub-components/card';


const Customers = () => {
  return (
    <Box sx={{ flexGrow: 1, py: 8 }}>
      <Grid direction="row" justifyItems='space-around' container spacing={8}>
        <Grid item xs={12} md={6}>
          <CustomerCardA />
        </Grid>
        <Grid item xs={12} md={6}>
          <CustomerCardB />
        </Grid>
        <Grid item xs={12} md={6}>
          <CustomerCardC />
        </Grid>
        <Grid item xs={12} md={6}>
          <CustomerCardD />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Customers