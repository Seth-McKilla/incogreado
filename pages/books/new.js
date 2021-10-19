import { useContext } from "react";
import { Context } from "../../context";
import { useForm } from "react-hook-form";

// Mui
import { default as MuiContainer } from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

// Components
import { Button, Container, Input, RatingStar } from "../../components";

export default function New() {
  const {
    state: { loading, ceramic, error },
  } = useContext(Context);

  const { control, handleSubmit, watch, setValue, clearErrors } = useForm({
    defaultValues: {
      title: "",
      rating: null,
    },
  });

  console.log(ceramic.did.authenticated);

  const ratingValue = watch("rating");
  const handleRatingChange = (rate) => {
    setValue("rating", rate);
    return clearErrors("rating");
  };

  const onSubmit = (data) => console.log(data);

  return (
    <Container>
      <Grid item xs={12} sx={{ marginBottom: 6 }}>
        <Typography variant="h3">Add New Book</Typography>
      </Grid>

      <MuiContainer maxWidth="xs">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid component={Paper} elevation={10} container sx={{ padding: 2 }}>
            <Grid item xs={12}>
              <Input name="title" control={control} loading={loading} />
            </Grid>
            <Grid item xs={12} mt={2}>
              <RatingStar
                name="rating"
                control={control}
                ratingValue={ratingValue}
                handleRatingChange={handleRatingChange}
                loading={loading}
              />
            </Grid>
            <Grid item xs={12} mt={2}>
              <Input
                name="review"
                control={control}
                multiline={true}
                loading={loading}
              />
            </Grid>
            <Grid item xs={12} mt={3}>
              <Button type="submit" disabled={loading}>
                + Add Book
              </Button>
            </Grid>
            {error && (
              <Grid item xs={12} mt={2}>
                <Typography variant="caption" color="error">
                  Error: {error.message}
                </Typography>
              </Grid>
            )}
          </Grid>
        </form>
      </MuiContainer>
    </Container>
  );
}
