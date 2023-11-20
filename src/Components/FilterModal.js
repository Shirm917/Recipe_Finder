import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilterOptions } from "../redux/slices/recipeSlice";
import { fetchRecipes } from "../redux/thunks/fetchRecipes";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import SelectInput from "./SelectInput";
import TextField from "@mui/material/TextField";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

const FilterModal = () => {
  const [open, setOpen] = useState(false);
  const { searchText, filterOptions } = useSelector((state) => state.recipe);
  const dispatch = useDispatch();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleFilterChange = (propertyKey, value) => {
    dispatch(setFilterOptions({ ...filterOptions, [propertyKey]: value }));
  };

  const handleFilterSubmit = (event) => {
    event.preventDefault();
    setOpen(false);
    dispatch(fetchRecipes({ searchText, filterOptions }));
  };

  return (
    <>
      <Button
        sx={{
          color: "#000",
          textAlign: "center",
          fontWeight: 900,
          background: "#fff",
          margin: 1,
        }}
        startIcon={<FilterAltIcon />}
        onClick={handleOpen}
      >
        Filter
      </Button>
      <Modal
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        open={open}
        onClose={handleClose}
        aria-labelledby="filter-modal-title"
        aria-describedby="filter-modal-description"
      >
        <Box
          sx={{
            minWidth: 400,
            height: 400,
            background: "#fff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h2 id="filter-modal-title">Filter</h2>
          <form className="filter-form" onSubmit={handleFilterSubmit}>
            <TextField
              sx={{ width: 140, marginTop: 1 }}
              id="outlined-basic"
              label="Max Calories"
              variant="outlined"
              type="number"
              value={filterOptions.maxCalories}
              onChange={(event) =>
                handleFilterChange("maxCalories", event.target.value)
              }
            />
            <SelectInput
              value={filterOptions.diet}
              handleFilterChange={handleFilterChange}
              label="Diet"
              id="diet-select"
              propertyKey="diet"
              menuItemArr={[
                "balanced",
                "high-fiber",
                "high-protein",
                "low-carb",
                "low-fat",
                "low-sodium",
              ]}
            />
            <SelectInput
              value={filterOptions.mealType}
              handleFilterChange={handleFilterChange}
              label="Meal Type"
              id="meal-type-select"
              propertyKey="mealType"
              menuItemArr={["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"]}
            />
            <SelectInput
              value={filterOptions.dishType}
              handleFilterChange={handleFilterChange}
              label="Dish Type"
              id="dish-type-select"
              propertyKey="dishType"
              menuItemArr={[
                "Biscuits and cookies",
                "Bread",
                "Cereals",
                "Condiments and sauces",
                "Drinks",
                "Desserts",
                "Main course",
                "Pancake",
                "Preps",
                "Preserve",
                "Salad",
                "Sandwiches",
                "Side dish",
                "Soup",
                "Starter",
                "Sweets",
              ]}
            />
            <Button
              sx={{
                marginTop: 1,
                color: "#000",
                fontWeight: 700,
                background: "#eaa0a2",
              }}
              variant="contained"
              type="submit"
            >
              Search
            </Button>
          </form>
        </Box>
      </Modal>
    </>
  );
};

export default FilterModal;
