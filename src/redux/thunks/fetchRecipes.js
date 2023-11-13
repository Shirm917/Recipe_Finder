import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRecipes = createAsyncThunk(
  "recipe/fetchRecipes",
  async ({searchText, filterOptions}) => {
    const { mealType, dishType, calories, diet } = filterOptions;
    const caloriesNumber = parseInt(calories);
    let url = `${process.env.REACT_APP_API_BASE_URL}?type=public&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}&q=${searchText}`;
    console.log(mealType);
    if (mealType) url += `&mealType=${mealType}`;
    if (dishType) url += `&dishType=${dishType}`;
    if (calories) url += `&calories=${caloriesNumber}`;
    if (diet) url += `&diet=${diet}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.hits);
    return data.hits;
  }
);
