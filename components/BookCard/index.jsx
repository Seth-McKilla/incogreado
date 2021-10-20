import { Rating } from "react-simple-star-rating";

// MUI
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function BookCard({ title, author, rating, review }) {
  return (
    <Card>
      <CardMedia
        component="img"
        height="200"
        image="/logo.png"
        alt="placeholder"
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {title}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          by {author}
        </Typography>
        <Rating ratingValue={rating} />
        <Typography variant="body2" color="text.secondary">
          {review}
        </Typography>
      </CardContent>
    </Card>
  );
}
