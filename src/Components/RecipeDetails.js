import { useSelector } from "react-redux";

const RecipeDetails = () => {
  const chosenRecipe = (state) => state.recipe.chosenRecipe;
  const {
    label,
    image,
    calories,
    cuisineType,
    dietLabels,
    ingredientLines,
    mealType,
  } = chosenRecipe;
  return (
    <section>
      <h1>{label}</h1>
      <img src={image} alt={label} />
      <p>Calories: {calories.toFixed(2)}</p>
      <p>Cuisine Type: {cuisineType}</p>
      <p>Diet Labels: {dietLabels}</p>
      <p>Meal Type: {mealType}</p>
      <ul>
        {ingredientLines.map((ingredient, index) => {
          return <li key={index}>{ingredient}</li>;
        })}
      </ul>
    </section>
  );
};

export default RecipeDetails;
