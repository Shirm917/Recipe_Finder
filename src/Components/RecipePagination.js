import { useSelector, useDispatch } from "react-redux";
import { setCurrentRecipes, setCurrentPage } from "../redux/slices/recipeSlice";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';

const RecipePagination = () => {
  const { currentPage, recipes } = useSelector((state) => state.recipe);
  const dispatch = useDispatch();

  const itemsPerPage = 10;

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
    <Box sx={{display: "flex", alignItems: "center"}}>
      <IconButton>
        <ChevronLeftIcon />
      </IconButton>
      <Typography variant="body1">{currentPage}</Typography>
      <IconButton>
        <ChevronRightIcon />
      </IconButton>
    </Box>
  );
};

export default RecipePagination;
