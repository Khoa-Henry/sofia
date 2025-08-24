// src/pages/Home.js
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box textAlign="center" py={5}>
      <Typography variant="h1" color="primary" gutterBottom>
        SOFIA <br/> Nail | Spa | Lashes
      </Typography>
      <Typography variant="body1" maxWidth="600px" mx="auto">
        Experience luxury and care with our professional nail, spa, and lash
        services.
      </Typography>
      
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 8, textTransform: 'none' }}
        component={Link}
        to="/services"
      >
        <Typography variant="h4" color="secondary">
        Our Services</Typography>
      </Button>
    </Box>
  );
};

export default Home;
