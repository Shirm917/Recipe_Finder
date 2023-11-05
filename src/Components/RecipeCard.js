import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const RecipeCard = ({recipe}) => {
    console.log(recipe);
    const {image,label,calories} = recipe
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={image}
        title={label}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {label}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Calories: {calories.toFixed(2)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Click to see recipe</Button>
      </CardActions>
    </Card>
  );
};

export default RecipeCard;
