import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Rive from 'rive-react';
import HeroImg from "../assets/creditchek-hero.riv";
import { Button, Typography, Container } from '@mui/material';


const Hero = () => {
  return (
    <Box sx={{ mx: 4, py: 12 }}>
      <Container maxWidth='xl'>
        <Grid container spacing={2} justifyContent='center'>
          <Grid item md={7}>
            <Box sx={{display:{xs:'none', md: 'block'}}}>
              <Typography variant='h3' component='p' sx={{fontWeight: 'bold', fontSize: 63, pb: 2 }}>
                  Easily Assess {`&`} Verify Creditworthiness
                  In Africa
              </Typography>
              <Typography variant='subtitle1' component='p' sx={{ fontSize: 20, pb: 2 }}>
                  CreditChek makes it easy for businesses to reliably 
                  assess and verify creditworthiness of consumers in Africa
              </Typography>
            </Box>
            <Box sx={{display:{xs:'block', md: 'none'}}}>
              <Typography variant='h3' component='p' sx={{fontWeight: 'bold', fontSize: 25.91, pb: 2 }}>
                  Easily Assess {`&`} Verify Creditworthiness
                  In Africa
              </Typography>
              <Typography variant='subtitle1' component='p' sx={{ fontSize: 14, pb: 2 }}>
                  CreditChek makes it easy for businesses to reliably 
                  assess and verify creditworthiness of consumers in Africa
              </Typography>
            </Box>
            <Button variant='contained'>Get started with N2000 Credits</Button>
          </Grid>

          <Grid item md={5}>
              <Box sx={{maxWidth: '90%'}}></Box>
              <Rive src={HeroImg} />
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth='xs' sx={{pt:8}}>
        <Typography variant='subtitle1' sx={{textAlign: 'center'}}>We have built a reliable, accessible, convenient finance, credit, and BNPL data platform.</Typography>
      </Container>
    </Box>
  );
}

export default Hero