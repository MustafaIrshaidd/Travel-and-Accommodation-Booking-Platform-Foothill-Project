import { createSlice } from "@reduxjs/toolkit";
import { searchHotelsAsync } from "./searchThunks";
import { SearchState } from "@store/features/search/types";

const initialState = {
  hotels: [],
  loading: false,
} as SearchState;

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(searchHotelsAsync.pending, (state, action) => {
        return {
          ...state,
          loading: true,
        };
      })
      .addCase(searchHotelsAsync.fulfilled, (state, action) => {
        return {
          ...state,
          loading: false,
          hotels: action.payload || [],
          error: null,
        };
      })
      .addCase(searchHotelsAsync.rejected, (state, action) => {
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      });
  },
});

export default searchSlice.reducer;
