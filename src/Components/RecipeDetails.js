import { useSelector } from "react-redux";

const RecipeDetails = () => {
  const chosenRecipe = useSelector((state) => state.recipe.chosenRecipe);
  const { label, image, calories, cuisineType, ingredientLines } = chosenRecipe;

  return (
    <section className="recipe-details-container">
      <div className="recipe-details">
        <h1>{label}</h1>
        <img src={image} alt={label} />
        <p>Calories: {calories.toFixed(2)}</p>
        <p className="cuisine-type">Cuisine Type: {cuisineType || "Unknown"}</p>
        <div className="ingredient-lines-container">
          <ul>
            {ingredientLines.map((ingredient, index) => {
              return <li key={index}>{ingredient}</li>;
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default RecipeDetails;
