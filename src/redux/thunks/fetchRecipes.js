import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRecipes = createAsyncThunk(
  "recipe/fetchRecipes",
  async ({ searchText, filterOptions }) => {
    const { maxCalories, mealType, dishType, diet } = filterOptions;
    let url = `${process.env.REACT_APP_API_BASE_URL}?type=public&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}&q=${searchText}&count=60`;
    const maxCaloriesNum = Number(maxCalories);
    if (maxCalories) url += `&calories=0-${maxCaloriesNum}`;
    if (mealType) url += `&mealType=${mealType}`;
    if (dishType) url += `&dishType=${dishType}`;
    if (diet) url += `&diet=${diet}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
);
