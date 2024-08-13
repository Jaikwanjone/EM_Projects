import { Alert, Box, Button, TextField, Typography } from "@mui/material";

const Register = () => {
  return (
    <Box>
      <Typography variant="h3">Register</Typography>
      <Alert severity="warning" sx={{ mt: 2 }}>
        All fields required
      </Alert>
      <form>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mt: 2 }}>
          <TextField placeholder="Name" fullWidth />
          <TextField placeholder="Bio " fullWidth />
          <TextField placeholder="UserName" fullWidth />
          <TextField placeholder="Password" type="password" fullWidth />
          <Button type="submit" variant="contained" fullWidth>
            Register
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Register;
