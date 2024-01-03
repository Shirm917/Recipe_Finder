import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const SelectInput = ({
  value,
  handleFilterChange,
  label,
  menuItemArr,
  id,
  propertyKey,
}) => {
  const handleChange = (event) => {
    handleFilterChange(propertyKey, event.target.value);
  };

  return (
    <Box sx={{ width: 140, marginTop: 1 }}>
      <FormControl fullWidth>
        <InputLabel id={`${id}-label`}>{label}</InputLabel>
        <Select
          labelId={`${id}-label`}
          id={id}
          value={value}
          label={label}
          onChange={handleChange}
        >
          {menuItemArr.map((item) => (
            <MenuItem value={item}>{item}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectInput;
