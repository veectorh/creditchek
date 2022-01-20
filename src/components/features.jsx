import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { ReactComponent as Access} from '../assets/access.svg';
import { ReactComponent as Security} from '../assets/security.svg';
import { ReactComponent as Time} from '../assets/time.svg';
import { ReactComponent as Chart} from '../assets/chart.svg';
import { Typography } from '@mui/material';


const Features = () => {
  return (
    <Box sx={{ flexGrow: 1, py: 4 }}>
      <Grid justifyContent='center' container spacing={4}>
        <Grid item md={6}>
          <Grid spacing={0} container justifyContent='flex-start'>
              <Grid item xs={2}><Access style={{width: 48}} /></Grid>
              <Grid item xs={10}>
                  <Typography variant='h4' component='p' sx={{fontWeight: 'bold'}}>Easy Access</Typography>
                  <Typography variant='body2' component='p'>Get access to historical data from all nationally accredited credit bureaus.</Typography>
              </Grid>
          </Grid>
        </Grid>
        <Grid item md={6}>
            <Grid spacing={0} container justifyContent='flex-start'>
                <Grid item xs={2}><Security style={{ width: 48 }} /></Grid>
                <Grid item xs={10}>
                    <Typography variant='h4' component='p' sx={{fontWeight: 'bold'}}>Reduce Fraud</Typography>
                    <Typography variant='body2' component='p'>Avoid loan stacking through historical profiling.</Typography>
                </Grid>
            </Grid>
        </Grid>
        <Grid item md={6}>
            <Grid spacing={0} container justifyContent='flex-start'>
                <Grid item xs={2}><Time style={{width: 48}}/></Grid>
                <Grid item xs={10}>
                    <Typography variant='h4' component='p' sx={{fontWeight: 'bold'}}>Save Time</Typography>
                    <Typography variant='body2' component='p'>Save time and cost spent manually analyzing bank statements through our automated statement parser.</Typography>
                </Grid>
            </Grid>
        </Grid>
        <Grid item md={6}>
            <Grid spacing={0} container justifyContent='flex-start'>
                <Grid item xs={2}><Chart style={{width: 48}} /></Grid>
                <Grid item xs={10}>
                    <Typography variant='h4' component='p' sx={{fontWeight: 'bold'}}>Insights</Typography>
                    <Typography variant='body2' component='p'>We help you analyze consumer banking data to give key insights on cash flow, ascertain income {`&`} credit networth to determine appropriate financing.</Typography>
                </Grid>
            </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Features;