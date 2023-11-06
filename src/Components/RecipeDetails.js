import { useSelector } from "react-redux";

const RecipeDetails = () => {
  const chosenRecipe = useSelector((state) => state.recipe.chosenRecipe);
  const {
    label,
    image,
    calories,
    cuisineType,
    ingredientLines,
  } = chosenRecipe;

  return (
    <section className="recipe-details">
      <h1>{label}</h1>
      <img src={image} alt={label} />
      <p>Calories: {calories.toFixed(2)}</p>
      <p>Cuisine Type: {cuisineType || "Unknown"}</p>
      <ul>
        {ingredientLines.map((ingredient, index) => {
          return <li key={index}>{ingredient}</li>;
        })}
      </ul>
    </section>
  );
};

export default RecipeDetails;
