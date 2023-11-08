import { useSelector } from "react-redux";
import RecipeCard from "./RecipeCard";
import CircularProgress from "@mui/material/CircularProgress";

const RecipeContainer = () => {
  const recipes = useSelector((state) => state.recipe.recipes);
  const isLoading = useSelector((state) => state.recipe.isLoading);
  return isLoading ? (
    <section className="loading-screen">
      <h1>Loading</h1>
      <CircularProgress color="inherit" />
    </section>
  ) : (
    <section className="recipe-container">
      {recipes &&
        recipes.map((recipe) => {
          return <RecipeCard key={recipe.recipe.uri} recipe={recipe.recipe} />;
        })}
    </section>
  );
};

export default RecipeContainer;
