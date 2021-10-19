import { useController } from "react-hook-form";
import { Rating } from "react-simple-star-rating";
import _ from "lodash";

// Mui
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function RatingStar({
  name,
  control,
  ratingValue,
  handleRatingChange,
}) {
  const {
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: {
      required: true,
    },
  });

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="body1" color={error && "error"}>
          {`${_.startCase(name)} *`}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Rating ratingValue={ratingValue} onClick={handleRatingChange} />
      </Grid>
      {error && (
        <Grid item xs={12}>
          <Typography variant="caption" color="error">
            {`${_.startCase(name)} is required`}
          </Typography>
        </Grid>
      )}
    </Grid>
  );
}
