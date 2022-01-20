import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const CustomerCardA = () => {
  return (
    <Card elevation={12} sx={{ maxWidth: 345, height: 370, mx: 'auto', borderRadius: 3 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={require('../../assets/mfi.png')}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            For Microfinance Institutions
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Affordable credit worthiness SaaS platform to enable you build, launch and deliver multiple loan deals at scale to several consumers.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}


const CustomerCardB = () => {
    return (
      <Card elevation={12} sx={{ maxWidth: 345, height: 370, mx: 'auto', borderRadius: 3 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={require('../../assets/ec.png')}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                For eCommerce {`&`} Retail Businesses
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Increase revenue by enabling your customers to buy now, pay later; Integrate with the most cost-effective credit assessment and management  solution trusted by fast growing brands.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }


  const CustomerCardC = () => {
    return (
      <Card elevation={12} sx={{ maxWidth: 345, height: 370, mx: 'auto', borderRadius: 3 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={require('../../assets/sav.png')}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                For Savings and Credit Cooperatives
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Digitize your {`borrower’s`} worthiness process with our top-notch credit assessment platform.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }



  const CustomerCardD = () => {
    return (
      <Card elevation={12} sx={{ maxWidth: 345, height: 370, mx: 'auto', borderRadius: 3 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={require('../../assets/soft.png')}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                For Software Engineers
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Integrate in a few minutes our credit data APIs with almost 99% reliability and accuracy.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }

  export {CustomerCardA, CustomerCardB, CustomerCardC, CustomerCardD}