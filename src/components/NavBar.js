// src/components/Navbar.js
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

// src/components/Navbar.js
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";

const Navbar = ({ darkMode, setDarkMode }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: "Home", link: "/" },
    { text: "Services", link: "/services" },
    { text: "Gallery", link: "/gallery" },
    { text: "Contact", link: "/contact" },
  ];

  const ThemeToggleButton = (
    <IconButton
      color="inherit"
      onClick={() => setDarkMode(!darkMode)}
      sx={{ ml: 1 }}
    >
      {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );

  return (
    <>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography
            variant="h5"
            component={Link}
            to="/"
            sx={{ flexGrow: 1, textDecoration: "none" }}
            color="primary"
            fontWeight={700}
          >
            S O F I A
          </Typography>

          {isMobile ? (
            <>
              <IconButton color="inherit" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
              {ThemeToggleButton}
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
              >
                <Box
                  sx={{ width: 250 }}
                  role="presentation"
                  onClick={toggleDrawer(false)}
                >
                  <List>
                    {menuItems.map((item) => (
                      <ListItem key={item.text} disablePadding>
                        <ListItemButton component={Link} to={item.link}>
                          <ListItemText primary={item.text} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Drawer>
            </>
          ) : (
            <>
              {menuItems.map((item) => (
                <Button
                  key={item.text}
                  component={Link}
                  to={item.link}
                  sx={{ color: "inherit" }}
                >
                  {item.text}
                </Button>
              ))}
              {ThemeToggleButton}
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
