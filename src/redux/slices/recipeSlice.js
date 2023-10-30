import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchText: "",
    recipes: [],
};

export const recipeSlice = createSlice({
    name: "recipe",
    initialState,
    reducers: {
        setSearchText: (state,action) => {
            state.searchText = action.payload;
        }
    }
});

export const { setSearchText } = recipeSlice.actions;

export default recipeSlice.reducer;