import { createContext, useContext, useState } from "react";
import App from "./App";

import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

const AppContent = createContext();

export function useApp() {
  return useContext(AppContent);
}
const ThemeApp = () => {
  const [showFrom, setShowForm] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <AppContent.Provider value={{ showFrom, setShowForm }}>
        <App />
        <CssBaseline />
      </AppContent.Provider>
    </ThemeProvider>
  );
};

export default ThemeApp;
