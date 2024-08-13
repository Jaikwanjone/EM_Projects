import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";

const Likes = () => {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Likes
      </Typography>
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar />
          </ListItemAvatar>
          <ListItemText
            primary="Jai Kwan @Jwan"
            secondary="Jwan's profile bio"
          />
        </ListItem>
      </List>
    </Box>
  );
};

export default Likes;
