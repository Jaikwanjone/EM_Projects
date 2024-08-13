import { Box, Button, TextField } from "@mui/material";
import Item from "../components/Item";

const Comments = () => {
  return (
    <Box>
      <Item
        key={1}
        item={{ id: 1, content: "First post from Jai Kwan ", name: "Jai Kwan" }}
        primary
        remove={() => {}}
      />
      <Item
        key={2}
        item={{
          id: 2,
          content: "Second Person who using this app",
          name: "Jao Pha",
        }}
        remove={() => {}}
      />
      <Item
        key={3}
        item={{
          id: 3,
          content: "Hello , I'm from Thailand",
          name: "Nai Yothin",
        }}
        remove={() => {}}
      />
      <form>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mt: 3 }}>
          <TextField placeholder="Your comment " multiline />
          <Button variant="contained" type=" submit">
            Reply
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Comments;
