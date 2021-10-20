import { useContext, useEffect } from "react";
import { Context } from "../../context";

// Mui
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

// Components
import { Container, BookCard } from "../../components";

export default function Books() {
  const {
    state: { loading, ceramic, created, error },
  } = useContext(Context);

  useEffect(() => {
    ceramic.store.get();
  }, []);

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h3" gutterBottom>
            My Books
          </Typography>
        </Grid>

        {/* PLACEHOLDER */}
        <Grid item xs={4}>
          <BookCard
            title="Placeholder"
            author="John Smith"
            rating={3}
            review="Placeholder text for the review."
          />
        </Grid>
      </Grid>
    </Container>
  );
}
