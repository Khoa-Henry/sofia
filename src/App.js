// src/App.js
import {
  Container,
  CssBaseline,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import getTheme from "./theme";

import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Services from "./pages/Services";

function App() {
  // Detect browser's preferred color scheme
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  // Set default state based on browser preference
  const [darkMode, setDarkMode] = useState(prefersDarkMode);

  // Keep in sync if browser preference changes
  useEffect(() => {
    setDarkMode(prefersDarkMode);
  }, [prefersDarkMode]);

  const theme = useMemo(
    () => getTheme(darkMode ? "dark" : "light"),
    [darkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Container sx={{ minHeight: "80vh" }} style={{padding: 12}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
