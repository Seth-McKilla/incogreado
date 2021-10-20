// Mui
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

// Components
import { Container } from "../../components";

export default function Books() {
  return (
    <Container>
      <Grid item xs={12}>
        <Typography variant="h3">My Books</Typography>
      </Grid>
    </Container>
  );
}
