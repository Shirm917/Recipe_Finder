import { createSlice } from "@reduxjs/toolkit";
import { fetchRecipes } from "../thunks/fetchRecipes";

const initialState = {
  searchText: "",
  recipes: null,
  chosenRecipe: null,
  isLoading: false,
  error: null,
};

export const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    setChosenRecipe: (state, action) => {
      state.chosenRecipe = action.payload;
    },
  },
  extraReducers: {
    [fetchRecipes.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchRecipes.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.recipes = action.payload;
    },
    [fetchRecipes.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});

export const { setSearchText,setChosenRecipe } = recipeSlice.actions;

export default recipeSlice.reducer;
