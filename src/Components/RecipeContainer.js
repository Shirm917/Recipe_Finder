import { useSelector } from "react-redux";
import RecipeCard from "./RecipeCard";

const RecipeContainer = () => {
  const recipes = useSelector((state) => state.recipe.recipes);
  return (
    <section className="recipe-container">
      {recipes &&
        recipes.map((recipe) => {
          return <RecipeCard key={recipe.recipe.uri} recipe={recipe.recipe} />;
        })}
    </section>
  );
};

export default RecipeContainer;
