import { Box, Typography, Grid, Paper, Divider } from "@mui/material";

const services = {
  Manicure: [
    { name: "Basic Manicure", price: "$24+" },
    { name: "Sofia Manicure", price: "$40+" },
    { name: "Gel Manicure", price: "$40+" },
    { name: "Dip Color", price: "$48+" },
    { name: "Acrylic Full Set", price: "$50+" },
    { name: "Ombre/White+Pink", price: "$65+" },
    { name: "Acrylic Fill", price: "$40+" },
    { name: "Gel X", price: "$55+" },
    { name: "Builder Gel", price: "$65+" },
    { name: "Builder Gel Fill", price: "$50+" },
    { name: "Polish Change", price: "$12+" },
    { name: "Gel Polish Change", price: "$22+" }
  ],

  Pedicure: [
    { name: "Classic", price: "$35" },
    { name: "Luxury", price: "$50" },
    { name: "Hot Spring", price: "$45" },
    { name: "The Sofia", price: "$65" },
    { name: "Polish Change", price: "$15" },
    { name: "Gel Polish Change", price: "$32" }
  ],

  HeadSpa: [
    { name: "Express", price: "$40" },
    { name: "Basic", price: "$50" },
    { name: "Luxury", price: "$85" },
    { name: "The Sofia", price: "$100" }
  ],

  Eyelashes: [
    { name: "Cluster F/S", price: "$50+" },
    { name: "Fill", price: "$40+" },
    { name: "Eyebrow Tint", price: "$30" }
  ],

  Kids: [
    { name: "Manicure", price: "$16" },
    { name: "Pedicure", price: "$20" },
    { name: "Add Gel", price: "$15" },
    { name: "Regular Polish", price: "$7+" },
    { name: "Gel Polish", price: "$22+" }
  ],

  Waxing: [
    { name: "Eyebrow", price: "$12" },
    { name: "Upper Lip", price: "$10" },
    { name: "Chin", price: "$12" },
    { name: "Underarm", price: "$30" },
    { name: "Face", price: "$45" }
  ],

  Extra: [
    { name: "Shape", price: "$5" },
    { name: "French", price: "$10" },
    { name: "Chrome", price: "$15" },
    { name: "Design", price: "$5+" },
    { name: "Gel/Dip Remove", price: "$10" },
    { name: "Fullset Remove", price: "$15" },
    { name: "Cateye", price: "$15" }
  ]
};

const Services = () => {
  return (
    <Box  >
      <Typography sx={{textAlign: 'center'}} pt={2} pb={2} variant="h4" gutterBottom color="primary">
        Our Services
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        {Object.entries(services).map(([category, items]) => (
          <Grid item key={category}>
            <Paper
              elevation={3}
              sx={{
                width: 280, // 🔥 fixed width for all cards
                // minHeight: 320, // keeps them consistent vertically too
                p: 4,
                borderRadius: "16px",
                backgroundColor: "background.paper",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
                },
              }}
            >
              <Typography
                variant="h6"
                gutterBottom
                sx={{ color: "primary.main", fontWeight: 600 }}
              >
                {category}
              </Typography>
              <Box flexGrow={1}>
                {items.map((service, index) => (
                  <Box key={index}>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      sx={{ py: 1 }}
                    >
                      <Typography variant="body1" pr={2}>{service.name}</Typography>
                      <Typography
                        variant="body1"
                        sx={{ fontWeight: 600, color: "primary.main" }}
                      >
                        {service.price}
                      </Typography>
                    </Box>
                    {index < items.length - 1 && (
                      <Divider sx={{ my: 0.5, opacity: 0.5 }} />
                    )}
                  </Box>
                ))}
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
