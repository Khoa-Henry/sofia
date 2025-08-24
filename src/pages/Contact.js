// src/pages/Contact.js
import { Box, Typography, Paper, Stack, IconButton, Divider, Link } from "@mui/material";
import { Phone, Email, LocationOn } from "@mui/icons-material";
import { Facebook, Instagram, Twitter,   } from "@mui/icons-material";
import { FaTiktok } from "react-icons/fa";


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
              href="tel:2627942755"
              underline="hover"
              color="inherit"
              sx={{ "&:hover": { color: "primary.main" } }}
            >
              (262) 794-2755
            </Link>
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center">
            <Email color="primary" />
            <Link
              href="mailto:sofianailandspa@gmail.com"
              underline="hover"
              color="inherit"
              sx={{ "&:hover": { color: "primary.main" } }}
            >
              sofianailandspa@gmail.com
            </Link>
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center">
            <LocationOn color="primary" />
            <Link
              href="https://www.google.com/maps/place/Sofia+Nails,+Spa+%26+Lashes/@42.9114794,-88.1236352,17z/data=!3m1!4b1!4m6!3m5!1s0x88050bff541f7e61:0x9dfd7c8ba0e9a5db!8m2!3d42.9114794!4d-88.1210603!16s%2Fg%2F11v3jhcm_0?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
              color="inherit"
              sx={{ "&:hover": { color: "primary.main" } }}
            >
               S73W16567 Janesville Rd, Muskego, WI 53150
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
            href="https://www.facebook.com/profile.php?id=61577736551279"
            target="_blank"
            sx={{ "&:hover": { color: "primary.main" } }}
          >
            <Facebook />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Fsofianailspalashes%3Figsh%3DNTVxbzljc3picmVl%26fbclid%3DIwZXh0bgNhZW0CMTAAYnJpZBExRE9sZmJwelhtdXJZM1BiTAEetWVYjfM4OtPp3mFYz0oalYBpM_1xnGn4MRI2LT8-ZT4u-s20ZxHZDBSPLBg_aem_dZQtZGaxrAttoNvrV5VBjA&h=AT2k7P26nlDh0VG7ArjgGtfBGUYk408P2iu3VDtxTHE5kfBqb3WvrDmSyyc0e02fpXGSD-71hJjUEtmX6Y5o0Wjaz_HON-Dj2Zsdd7UuuATlk3zSmwuz4r27IoQ3dYXxnYEAjsa9bwNVrhuB9TuzXA"
            target="_blank"
            sx={{ "&:hover": { color: "primary.main" } }}
          >
            <Instagram />
          </IconButton>
          {/* <IconButton
            color="inherit"
            href="https://twitter.com"
            target="_blank"
            sx={{ "&:hover": { color: "primary.main" } }}
          >
            <Twitter />
          </IconButton> */}
          <IconButton
            color="inherit"
            href="https://www.tiktok.com/@sofianailspalashe?_t=ZP-8z9lfQgRuve&_r=1"
            target="_blank"
            sx={{ "&:hover": { color: "primary.main" } }}
          >
            <FaTiktok />
          </IconButton>
        </Stack>
      </Paper>
    </Box>
  );
};

export default Contact;
