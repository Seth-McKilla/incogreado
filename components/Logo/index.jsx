import logo from "../../public/logo.png";

// Next
import Image from "next/image";

// Mui
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export default function Logo() {
  return (
    <Grid item xs={12}>
      <Box>
        <Image width={250} height={250} src={logo} alt="casper-nextjs-logo" />
      </Box>
    </Grid>
  );
}
