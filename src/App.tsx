import { createTheme, ThemeProvider } from "@mui/material";
import "./App.css";
import AppRouter from "./AppRouter";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
