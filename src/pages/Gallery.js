// src/pages/Gallery.js
import { Box, Grid, Paper, Typography } from "@mui/material";

const sampleImages = [
  "https://via.placeholder.com/300x200",
  "https://via.placeholder.com/300x200",
  "https://via.placeholder.com/300x200",
];

const Gallery = () => (
  <Box>
    <Typography variant="h4" color="primary" gutterBottom>
      Gallery
    </Typography>
    <Grid container spacing={2}>
      {sampleImages.map((img, i) => (
        <Grid item xs={12} sm={4} key={i}>
          <Paper>
            <img src={img} alt={`Gallery ${i}`} style={{ width: "100%" }} />
          </Paper>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Gallery;
