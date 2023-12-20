import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchNextRecipes = createAsyncThunk(
  "recipe/fetchNextRecipes",
  async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      throw new Error(data.message || "Something went wrong!");
    }
  }
);
