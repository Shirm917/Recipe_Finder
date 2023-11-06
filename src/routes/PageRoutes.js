import { Routes, Route } from "react-router-dom";
import RecipeContainer from "../components/RecipeContainer";
import RecipeDetails from "../components/RecipeDetails";

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<RecipeContainer />} />
      <Route path="/recipeDetails" element={<RecipeDetails />} />
    </Routes>
  );
};

export default PageRoutes;
