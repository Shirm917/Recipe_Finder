import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchText } from "../redux/slices/recipeSlice";
import { fetchRecipes } from "../redux/thunks/fetchRecipes";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";

const SearchForm = () => {
  const dispatch = useDispatch();
  const searchText = useSelector((state) => state.recipe.searchText);
  const recipes = useSelector((state) => state.recipe.recipes);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchRecipes(searchText));
  };

  useEffect(() => {
    console.log(recipes);
  }, [recipes]);

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <TextField
        sx={{ width: "100%", backgroundColor: "#fff", borderRadius: "10px" }}
        id="outlined-basic"
        placeholder="Enter Ingredients"
        variant="outlined"
        onChange={(event) => dispatch(setSearchText(event.target.value))}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton type="submit">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </form>
  );
};

export default SearchForm;
