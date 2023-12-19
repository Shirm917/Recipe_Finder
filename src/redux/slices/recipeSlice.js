import { createSlice } from "@reduxjs/toolkit";
import { fetchRecipes } from "../thunks/fetchRecipes";
import { fetchNextRecipes } from "../thunks/fetchNextRecipes";

const initialState = {
  searchText: "",
  recipes: [],
  chosenRecipe: null,
  isLoading: false,
  error: null,
  currentPage: 1,
  currentRecipes: [],
  filterOptions: {
    maxCalories: null,
    mealType: null,
    dishType: null,
    diet: null,
  },
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
    setFilterOptions: (state, action) => {
      state.filterOptions = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setCurrentRecipes: (state, action) => {
      state.currentRecipes = action.payload;
    },
  },
  extraReducers: {
    [fetchRecipes.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchRecipes.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.recipes = [action.payload];
      state.currentRecipes = action.payload.hits;
    },
    [fetchRecipes.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
    [fetchNextRecipes.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchNextRecipes.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.recipes = [...state.recipes, action.payload];
      state.currentRecipes = action.payload.hits;
    },
    [fetchNextRecipes.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});

export const {
  setSearchText,
  setChosenRecipe,
  setFilterOptions,
  setCurrentPage,
  setCurrentRecipes,
} = recipeSlice.actions;

export default recipeSlice.reducer;
