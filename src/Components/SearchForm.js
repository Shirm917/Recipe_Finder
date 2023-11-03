import { useDispatch } from "react-redux";
import { setSearchText } from "../redux/slices/recipeSlice";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";

const SearchForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

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
