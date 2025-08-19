import "./App.css";
import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#1976d2",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#f48fb1",
    },
  },
});

const MyButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.getContrastText(theme.palette.primary.main),
  borderRadius: "8px",
  padding: "8px 16px",
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
  },
}));

function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const currentTheme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Typography variant="h3" gutterBottom>
        Текущая тема {isDark ? "Dark" : "Light"}
      </Typography>
      <MyButton onClick={toggleTheme} variant="contained">
        Переключить тему
      </MyButton>
    </ThemeProvider>
  );
}
export default App;
