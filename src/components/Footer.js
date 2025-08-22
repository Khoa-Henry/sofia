// src/components/Footer.js
import { Box, Typography } from "@mui/material";

const Footer = () => (
  <Box textAlign="center" py={4} mt={4} borderTop="1px solid #ddd">
    <Typography variant="body2">
      © {new Date().getFullYear()} Sofia Nail Spa
    </Typography>
  </Box>
);

export default Footer;
