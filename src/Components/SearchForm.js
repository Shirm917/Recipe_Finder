import TextField from "@mui/material/TextField";

const SearchForm = () => {
  return (
    <TextField
      sx={{ width: 400, backgroundColor: "#fff" }}
      id="outlined-basic"
      placeholder="Enter Ingredients..."
      variant="outlined"
    />
  );
};

export default SearchForm;
