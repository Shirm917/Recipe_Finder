import { useSelector } from "react-redux";
import BackArrow from "./BackArrow";

const RecipeDetails = () => {
  const chosenRecipe = useSelector((state) => state.recipe.chosenRecipe);
  const {
    label,
    image,
    calories,
    cuisineType,
    ingredientLines,
    yield: servings,
  } = chosenRecipe;

  const caloriesPerServing = (calories / servings).toFixed();

  return (
    <section className="recipe-details-container">
      <BackArrow />
      <div className="recipe-details">
        <h1>{label}</h1>
        <img src={image} alt={label} />
        <p>{servings} Servings</p>
        <p>Calories Per Serving: {caloriesPerServing}</p>
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
