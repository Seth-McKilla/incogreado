// Next
import Link from "next/link";

// Mui
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ height: 50 }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            incog-read-o
          </Typography>
          <Link href="/books" passHref>
            <Button color="inherit">All Books</Button>
          </Link>
          <Link href="/books/new" passHref>
            <Button color="inherit">+ Add Book</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
