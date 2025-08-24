// src/pages/Contact.js
import { Box, Typography, Paper, Stack, IconButton, Divider, Link } from "@mui/material";
import { Phone, Email, LocationOn } from "@mui/icons-material";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";

const Contact = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", py: 6 }}>
      <Paper
        elevation={4}
        sx={{
          p: 4,
          maxWidth: 700,
          width: "100%",
          textAlign: "center",
          borderRadius: 3,
          backgroundColor: "background.paper",
        }}
      >
        {/* Title */}
        <Typography variant="h4" color="primary" gutterBottom>
          Contact Us
        </Typography>
        <Divider sx={{ mb: 3 }} />

        {/* Contact Info */}
        <Stack spacing={2} alignItems="center" mb={4}>
          <Stack direction="row" spacing={1} alignItems="center">
            <Phone color="primary" />
            <Link
              href="tel:1234567890"
              underline="hover"
              color="inherit"
              sx={{ "&:hover": { color: "primary.main" } }}
            >
              (123) 456-7890
            </Link>
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center">
            <Email color="primary" />
            <Link
              href="mailto:info@sofia.com"
              underline="hover"
              color="inherit"
              sx={{ "&:hover": { color: "primary.main" } }}
            >
              info@sofia.com
            </Link>
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center">
            <LocationOn color="primary" />
            <Link
              href="https://www.google.com/maps?q=123+Main+St,+City,+State,+ZIP"
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
              color="inherit"
              sx={{ "&:hover": { color: "primary.main" } }}
            >
              123 Main St, City, State, ZIP
            </Link>
          </Stack>
        </Stack>

        {/* Socials */}
        <Typography variant="h6" gutterBottom>
          Follow Us
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="center">
          <IconButton
            color="inherit"
            href="https://facebook.com"
            target="_blank"
            sx={{ "&:hover": { color: "primary.main" } }}
          >
            <Facebook />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://instagram.com"
            target="_blank"
            sx={{ "&:hover": { color: "primary.main" } }}
          >
            <Instagram />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://twitter.com"
            target="_blank"
            sx={{ "&:hover": { color: "primary.main" } }}
          >
            <Twitter />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://youtube.com"
            target="_blank"
            sx={{ "&:hover": { color: "primary.main" } }}
          >
            <YouTube />
          </IconButton>
        </Stack>
      </Paper>
    </Box>
  );
};

export default Contact;
