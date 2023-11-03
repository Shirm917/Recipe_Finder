import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRecipes = createAsyncThunk(
    "recipe/fetchRecipes",
    async (searchText) => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}?type=public&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}&q=${searchText}`);
            const data = await response.json();
            return data.hits;
        } catch (err) {
            console.log(err);
        }
    }
);