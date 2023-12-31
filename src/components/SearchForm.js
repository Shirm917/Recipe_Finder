import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearchText } from "../redux/slices/recipeSlice";
import { fetchRecipes } from "../redux/thunks/fetchRecipes";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";

const SearchForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { searchText, filterOptions } = useSelector((state) => state.recipe);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchRecipes({ searchText, filterOptions }));
    navigate("/");
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <TextField
        sx={{
          width: "100%",
          backgroundColor: "#fff",
          borderRadius: "10px",
          "& .MuiInputLabel-root": {
            color: "#eaa0a2",
            fontWeight: 900,
            width: "75%",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#eaa0a2",
            fontWeight: 900,
          },
        }}
        id="filled-basic"
        label="Enter Ingredients or Recipe Name"
        variant="filled"
        autoComplete="off"
        value={searchText}
        onChange={(event) => dispatch(setSearchText(event.target.value))}
        InputProps={{
          disableUnderline: true,
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
