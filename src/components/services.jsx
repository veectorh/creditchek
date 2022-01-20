import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {Typography} from '@mui/material';
import { ReactComponent as Cn} from '../assets/cn.svg';
import { ReactComponent as In} from '../assets/in.svg';
import { ReactComponent as Fcc} from '../assets/fcc.svg';


const Services = () => {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: '#F2F6FE', px: 4, py: 4 }}>
        <Grid justifyContent='center' justifyItems='center' container spacing={2}>
          <Grid item md={6}>
              <Typography variant='h4' component='p' sx={{color: 'primary.main', fontWeight: 'bold', py: 1}}>Credit Networth</Typography>
              <Typography variant="body1">Get easy access to historical credit data from different sources including credit bureaus to give insight into your {`customers’`} credit status</Typography>
          </Grid>
          <Grid item md={6}>
              <Cn />
          </Grid>
        </Grid>
        <Grid justifyContent='center' justifyItems='center' container spacing={2}>
            <Grid item md={6}>
                <Typography variant='h4' component='p' sx={{color: 'primary.main', fontWeight: 'bold', py: 1}}>Income Networth</Typography>
                <Typography variant="body1">Gain access to bank verified transactional data to assess your {`customers’`} financial status, get key insights on cash flow {`&`} ascertain income to determine appropriate financing</Typography>
            </Grid>
            <Grid item md={6}>
                <In />
            </Grid>
        </Grid>
        <Grid justifyContent='center' justifyItems='center' container spacing={2}>
            <Grid item md={6}>
                <Typography variant='h4' component='p' sx={{color: 'primary.main', fontWeight: 'bold', py: 1}}>Fico Credit Score</Typography>
                <Typography variant="body1">Leverage the power of globally accepted and trusted credit score standards to enhance your credit risk models.</Typography>
            </Grid>
            <Grid item md={6}>
                <Fcc />
            </Grid>
        </Grid>
    </Box>
  );
}

export default Services;