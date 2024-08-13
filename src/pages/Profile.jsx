import { Avatar, Box, Typography } from "@mui/material";
import { pink } from "@mui/material/colors";
import Item from "../components/Item";

const Profile = () => {
  return (
    <Box>
      <Box sx={{ borderRadius: 4, bgcolor: "banner", height: 150 }}></Box>
      <Box
        sx={{
          mb: 4,
          marginTop: "-85px",
          display: "flex",
          gap: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ width: 100, height: 100, bgcolor: pink[500] }} />
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <Typography>Jai Kwan</Typography>
          <Typography sx={{ color: "text.fade", fontSize: "0.8em" }}>
            Jai Kwan's profile bio content here
          </Typography>
        </Box>
      </Box>
      <Item
        key={1}
        remove={() => {}}
        item={{
          id: 1,
          content: "A post content form Jai Kwan ",
          name: " Jai Kwan ",
        }}
      />
    </Box>
  );
};

export default Profile;
