import React from 'react';
import Hero from '../components/hero';
import ResponsiveAppBar from '../components/navbar';
import { ReactComponent as Divider} from '../assets/divider.svg';
import Features from '../components/features';
import { Box, Button, Container, Typography } from '@mui/material';
import Services from '../components/services';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import Customers from '../components/customers';
import Footer from '../components/footer';

const LandingPage = () => {
  return (
  <Box sx={{overflowX: 'hidden'}}>
      <ResponsiveAppBar />
      <Hero />
      <Box sx={{maxWidth: '90%'}}><Divider /></Box>
      <Features />
      <Box sx={{maxWidth: '90%'}}><Divider /></Box>
      <Container maxWidth='sm'>
        <Typography variant='subtitle1' sx={{textAlign: 'center', py: 8}}>
            Our products are designed to help your business navigate the challenges 
            of accessing the right tools to verify your customers.
        </Typography>
      </Container>
      <Services />
      <Container maxWidth='sm' sx={{textAlign: 'center', py: 8}}>
        <Typography variant='h5' sx={{pb: 1}}>Built for Speed {`&`} Scale</Typography>
        <CompareArrowsIcon color='primary' fontSize='large'/>
        <Typography variant='h5'>Less techy small to medium credit businesses</Typography>
      </Container>
      <Customers />
      <Container maxWidth='md' sx={{textAlign: 'center', py: 2}}>
        <Typography variant='h4' sx={{pb: 1, fontWeight: 'bold'}}>Building a Credit worthy Africa</Typography>
        <Typography sx={{pb: 2}} variant='body1'>As {`Africa’s`} digital financial services sector grows exponentially in the next few years with over 350 million adults unserved in Africa, CreditChek is well positioned to provide the much needed solutions that will drive financial inclusion across various sectors and industries in the region, and beyond.</Typography>
        <Button variant='contained'>Get started with N2000 Credits</Button>
      </Container>
      <Box sx={{backgroundColor: 'primary.main', px: 2}}><Footer /></Box>
  </Box>
)}

export default LandingPage
