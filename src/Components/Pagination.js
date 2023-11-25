import { useSelector, useDispatch } from "react-redux";
import Pagination from "@mui/material/Pagination";
import { setCurrentRecipes, setCurrentPage } from "../redux/slices/recipeSlice";

const Pagination = () => {
  const { currentPage, itemsPerPage, recipes } = useSelector(
    (state) => state.recipe
  );
  const dispatch = useDispatch();

  const getPaginationedItems = (page) => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const recipesCopy = [...recipes];
    const currentRecipes = recipesCopy.slice(startIndex, endIndex);
    return currentRecipes;
  };

  const handlePageChange = (event, newPage) => {
    dispatch(setCurrentPage(newPage));
    const currentRecipes = getPaginationedItems(newPage);
    dispatch(setCurrentRecipes(currentRecipes));
  };
  return (
    <Pagination
      count={Math.ceil(recipes.length / itemsPerPage)}
      page={currentPage}
      onChange={handlePageChange}
    />
  );
};

export default Pagination;
