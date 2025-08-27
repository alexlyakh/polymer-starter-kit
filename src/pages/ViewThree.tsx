import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function ViewThree() {
  return (
    <Box className="card">
      <Box className="circle">3</Box>
      <Typography variant="h5" sx={{ mt: 1 }}>View Three</Typography>
      <Typography sx={{ mt: 1 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</Typography>
      <Typography sx={{ mt: 1 }}>
        Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
      </Typography>
    </Box>
  );
}
