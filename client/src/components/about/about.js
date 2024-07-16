import { Typography, Paper, IconButton } from '@mui/material';
import { Container } from '@mui/material';
import { useState } from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import WhoWeAre from './whoweare';
import WhyChooseZuv from './whychoosezuv';
import OurTeam from './ourteam';

const About = () => {
  const [page, setPage] = useState(0);
  const totalPages = 3;
  const tabNames = ['Who are we?', 'Why Choose Zuv?', 'Our Team'];
  const pages = [<WhoWeAre />, <WhyChooseZuv />, <OurTeam />];

  const handlePreviousPage = () => {
    setPage((prevPage) => (prevPage === 0 ? totalPages - 1 : prevPage - 1));
  };

  const handleNextPage = () => {
    setPage((prevPage) => (prevPage === totalPages - 1 ? 0 : prevPage + 1));
  };

  return (
    <Container maxWidth="xl" sx={{ pt: 5, pb: 5}}>
      <Paper elevation={10} sx={{ padding: 3 }}>
        <Typography variant="h5" align="center" sx={{ fontWeight: 550 }}>
          {tabNames[page]}
        </Typography>
        <div style={{ position: 'relative'}}>
        <div style={{ position: 'absolute', left: 0, top: '50%'}}>
          <IconButton onClick={handlePreviousPage}>
            <KeyboardArrowLeftIcon />
          </IconButton>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {pages[page]}
        </div>
        <div style={{ position: 'absolute', right: 0, top: '50%'}}>
          <IconButton onClick={handleNextPage}>
            <KeyboardArrowRightIcon />
          </IconButton>
        </div>
      </div>

      </Paper>
  </Container>

  );
};

export default About;
