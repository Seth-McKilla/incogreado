import { useContext, useEffect } from "react";
import { Context } from "../../context";

// Mui
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

// Components
import { Container, BookCard } from "../../components";

export default function Books() {
  const {
    state: { reviewsList },
  } = useContext(Context);

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h3" gutterBottom>
            My Books
          </Typography>
        </Grid>

        {reviewsList.length === 0 ? (
          <Grid item xs={12}>
            <Typography variant="h4">No books yet...</Typography>
            <Typography variant="h6">
              {
                "Add some now by navigating to the '+ADD BOOK' button on the tip right of this page"
              }
            </Typography>
          </Grid>
        ) : (
          reviewsList.map((reviewItem, index) => {
            const { title, author, rating, review } = reviewItem;
            return (
              <Grid key={`${index}-${reviewItem}`} item xs={4}>
                <BookCard
                  title={title}
                  author={author}
                  rating={rating}
                  review={review}
                />
              </Grid>
            );
          })
        )}
      </Grid>
    </Container>
  );
}
