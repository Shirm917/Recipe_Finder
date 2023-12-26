import { useSelector, useDispatch } from "react-redux";
import { setCurrentRecipes, setCurrentPage } from "../redux/slices/recipeSlice";
import { fetchNextRecipes } from "../redux/thunks/fetchNextRecipes";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { current } from "@reduxjs/toolkit";

const RecipePagination = () => {
  const { currentPage, recipes } = useSelector((state) => state.recipe);
  const dispatch = useDispatch();

  const getPaginationedItems = (page) => {
    const currentRecipes = recipes[page - 1].hits;
    return currentRecipes;
  };

  const backArrowDisabled = currentPage === 1;
  const forwardArrowDisabled = currentPage === Math.ceil(recipes[0].count / 20);

  const handlePrevPage = () => {
    if (currentPage === 1) return;
    const prevPage = currentPage - 1;
    dispatch(setCurrentPage(prevPage));
    if (recipes[prevPage - 1]) {
      const currentRecipes = getPaginationedItems(prevPage);
      dispatch(setCurrentRecipes(currentRecipes));
    }
  };

  const handleNextPage = () => {
    const pagesNeeded = Math.ceil(recipes[0].count / 20);
    if (currentPage === pagesNeeded) return;
    const nextPage = currentPage + 1;
    const url = recipes[currentPage - 1]._links.next.href;
    dispatch(setCurrentPage(nextPage));
    if (recipes[nextPage - 1]) {
      const currentRecipes = getPaginationedItems(nextPage);
      dispatch(setCurrentRecipes(currentRecipes));
    } else {
      dispatch(fetchNextRecipes(url));
    }
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", marginTop: "auto" }}>
      <IconButton onClick={handlePrevPage} disabled={backArrowDisabled}>
        <ChevronLeftIcon />
      </IconButton>
      <Typography variant="body1">{currentPage}</Typography>
      <IconButton onClick={handleNextPage} disabled={forwardArrowDisabled}>
        <ChevronRightIcon />
      </IconButton>
    </Box>
  );
};

export default RecipePagination;
