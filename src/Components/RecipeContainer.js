import { useSelector } from "react-redux";
import RecipeCard from "./RecipeCard";
import CircularProgress from "@mui/material/CircularProgress";

const RecipeContainer = () => {
  const recipes = useSelector((state) => state.recipe.recipes);
  const isLoading = useSelector((state) => state.recipe.isLoading);
  const isError = useSelector((state) => state.recipe.error);
  return isLoading ? (
    <section className="loading-screen">
      <h1>Loading</h1>
      <CircularProgress color="inherit" />
    </section>
  ) : isError ? (
    <section className="error-screen">
      <h1>{isError}</h1>
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
