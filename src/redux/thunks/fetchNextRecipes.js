import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchNextRecipes = createAsyncThunk(
  "recipe/fetchNextRecipes",
  async (url) => {
    console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
  }
);