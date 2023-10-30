import TextField from "@mui/material/TextField";
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

const SearchForm = () => {
  return (
    <TextField
      sx={{ width: 400, backgroundColor: "#fff" }}
      id="outlined-basic"
      placeholder="Enter Ingredients..."
      variant="outlined"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchForm;
