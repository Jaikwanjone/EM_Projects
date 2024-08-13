import {
  Home as HomeIcon,
  Login as LoginIcon,
  Logout as LogoutIcon,
  Person as ProfileIcon,
  PersonAdd as RegisterIcon,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

import { deepPurple } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import { useApp } from "../ThemeApp";

const AppDrawer = () => {
  const { showDrawer, setShowDrawer, auth, setAuth } = useApp();
  const navigate = useNavigate();
  return (
    <div>
      <Drawer
        open={showDrawer}
        sx={{ cursor: "pointer" }}
        onClose={() => setShowDrawer(false)}
      >
        <Box
          sx={{
            mb: 6,
            width: 300,
            height: 140,
            bgcolor: "banner",
            position: "relative",
          }}
        >
          <Box
            sx={{
              gap: 2,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              position: " absolute",
              left: 20,
              bottom: 30,
            }}
          >
            <Avatar
              sx={{
                width: 94,
                height: 94,
                color: "white",
                background: deepPurple[500],
              }}
            />
            <Typography sx={{ fontWeight: "bold" }}>Jai Kwan</Typography>
          </Box>
        </Box>
        <List>
          <ListItem>
            <ListItemButton onClick={() => navigate("/")}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItemButton>
          </ListItem>

          <Divider />
          {auth ? (
            <>
              <ListItem>
                <ListItemButton onClick={() => navigate("/profile/1")}>
                  <ListItemIcon>
                    <ProfileIcon />
                  </ListItemIcon>
                  <ListItemText>Profile</ListItemText>
                </ListItemButton>
              </ListItem>

              <ListItem>
                <ListItemButton onClick={() => setAuth(null)}>
                  <ListItemIcon>
                    <LogoutIcon color="error" />
                  </ListItemIcon>
                  <ListItemText>LogOut</ListItemText>
                </ListItemButton>
              </ListItem>
            </>
          ) : (
            <>
              <ListItem>
                <ListItemButton onClick={() => navigate("/register")}>
                  <ListItemIcon>
                    <RegisterIcon />
                  </ListItemIcon>
                  <ListItemText>Register</ListItemText>
                </ListItemButton>
              </ListItem>

              <ListItem>
                <ListItemButton onClick={() => navigate("/login")}>
                  <ListItemIcon>
                    <LoginIcon />
                  </ListItemIcon>
                  <ListItemText> LogIN </ListItemText>
                </ListItemButton>
              </ListItem>
            </>
          )}
        </List>
      </Drawer>
    </div>
  );
};

export default AppDrawer;
