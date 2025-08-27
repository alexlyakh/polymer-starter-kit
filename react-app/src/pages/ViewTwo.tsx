import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function ViewTwo() {
  return (
    <Box className="card">
      <Box className="circle">2</Box>
      <Typography variant="h5" sx={{ mt: 1 }}>View Two</Typography>
      <Typography sx={{ mt: 1 }}>Qui choro vocibus ut, usu at movet graeco. Et nec tantas accusata, ex posse dicta est.</Typography>
      <Typography sx={{ mt: 1 }}>
        Duis vel metus id lacus gravida viverra. Quisque euismod, nunc in placerat facilisis, leo mi facilisis neque, vel finibus velit augue eu turpis.
      </Typography>
    </Box>
  );
}
