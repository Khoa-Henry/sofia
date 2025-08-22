// src/theme.js
import { createTheme } from "@mui/material/styles";

const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: "#c9a56d", // gold
      },
      secondary: {
        main: mode === "light" ? "#f5f5f5" : "#121212", // cream or dark background
      },
      background: {
        default: mode === "light" ? "#ffffff" : "#0d0d0d",
        paper: mode === "light" ? "#fffaf0" : "#1c1c1c",
      },
      text: {
        primary: mode === "light" ? "#000" : "#fff",
      },
    },
    typography: {
      fontFamily: '"Playfair Display", serif',
      h4: {
        fontWeight: 600,
        letterSpacing: "0.05em",
      },
      body1: {
        fontSize: "1rem",
      },
    },
  });

export default getTheme;
