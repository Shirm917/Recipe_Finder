import { useSelector } from "react-redux";
import RecipeCard from "./RecipeCard";
import LoadingScreen from "./LoadingScreen";
import ErrorScreen from "./ErrorScreen";
import EmptyRecipesScreen from "./EmptyRecipesScreen";
import FilterModal from "./FilterModal";
import RecipePagination from "./RecipePagination";

const RecipeContainer = () => {
  const { recipes, isLoading, isError } = useSelector((state) => state.recipe);

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (isError) {
    return <ErrorScreen error={isError} />;
  }

  if (recipes && recipes.length === 0) {
    return <EmptyRecipesScreen />;
  }

  return !recipes ? (
    <section className="empty-recipes-screen">
      <div>
        <h1>Search for ingredients or recipe names</h1>
      </div>
    </section>
  ) : (
    <>
      <FilterModal />
      <section className="recipe-container">
        {recipes.map((recipe) => {
          return <RecipeCard key={recipe.recipe.uri} recipe={recipe.recipe} />;
        })}
      </section>
      <RecipePagination />
    </>
  );
};

export default RecipeContainer;
