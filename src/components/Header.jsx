import {
  Add as AddIcon,
  DarkMode as DarkModeIcon,
  LightMode as LightModeIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { useApp } from "../ThemeApp";

const Header = () => {
  const { showForm, setShowForm, mode, setMode, setShowDrawer } = useApp();
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton color="inherit" edge="start">
          <MenuIcon onClick={() => setShowDrawer(true)} />
        </IconButton>
        <Typography sx={{ flexGrow: 1, ml: 2 }}>Yaycha</Typography>
        <Box>
          <IconButton color="inherit" onClick={() => setShowForm(!showForm)}>
            <AddIcon />
          </IconButton>
          {mode === "dark" ? (
            <IconButton
              onClick={() => setMode("light")}
              color="inherit"
              edge="end"
            >
              <LightModeIcon />
            </IconButton>
          ) : (
            <IconButton
              onClick={() => setMode("dark")}
              color="inherit"
              edge="end"
            >
              <DarkModeIcon />
            </IconButton>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
