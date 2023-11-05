import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const RecipeCard = ({ recipe }) => {
  const { image, label } = recipe;
  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardMedia
        sx={{ height: 240, width: "100%" }}
        image={image}
        title={label}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {label}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Click to see recipe</Button>
      </CardActions>
    </Card>
  );
};

export default RecipeCard;
