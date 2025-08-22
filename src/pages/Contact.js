// src/pages/Contact.js
import { Box, Button, TextField, Typography } from "@mui/material";

const Contact = () => {
  return (
    <Box>
      <Typography variant="h4" color="primary" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1" mb={3}>
        Phone: (123) 456-7890 | Address: 123 Main St, City
      </Typography>
      <Box component="form" sx={{ maxWidth: 400 }}>
        <TextField fullWidth label="Name" margin="normal" />
        <TextField fullWidth label="Email" margin="normal" />
        <TextField
          fullWidth
          label="Message"
          multiline
          rows={4}
          margin="normal"
        />
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default Contact;
