import React from 'react';
import { Container, Button, Typography } from '@mui/material';
import Header from '../components/header';
import SliderSection from '../components/slider';
import CardsSection from '../components/card';
import FaqSection from '../components/faqsSection';

const EzyResPage = () => {
    return (
        <div>
          <Header />
          <Container sx={{ textAlign: 'center', marginTop: '20px' }}>
            <Typography variant="h4" gutterBottom>
              We Buy Homes in Florida
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                display: 'inline-block',
                padding: '10px 20px',
                borderRadius: '8px',
                backgroundColor: ' #f7724d',
                color: 'white',
                cursor: 'pointer',
                textAlign: 'center',
              }}
            >
              Submit your listings and off-market deals for cash offers
            </Typography>

            <Typography variant="h4" gutterBottom>
             How can we help you?
            </Typography>

            <div>
            <Button
            variant="contained"
            sx={{
              margin: '10px',
              backgroundColor: '#f7724d',
              borderRadius: '8px',
              '&:hover': {
                backgroundColor: '#d65a23', // Dark orange color on hover
              },
            }}
          >
            Request a Buy Price
          </Button>
          <b>OR</b>
          <Button
            variant="contained"
            sx={{
              margin: '10px',
              backgroundColor: '#f7724d',
              borderRadius: '8px',
              '&:hover': {
                backgroundColor: '#d65a23', // Dark orange color on hover
              },
            }}
          >
            Submit a Deal
          </Button>          </div>
            <CardsSection />
            <SliderSection />
            <FaqSection />
          </Container>
        </div>
      );
    };

export default EzyResPage;
