import { createSlice } from "@reduxjs/toolkit";
import { HotelsState } from "@store/types/hotels";
import {  fetchHotels } from "./hotelsThunks";

const initialState = {
  hotels: [],
  loading: false,
} as HotelsState;

export const hotelsSlice = createSlice({
  name: "hotels",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchHotels.pending, (state, action) => {
        return {
          ...state,
          loading: true,
        };
      })
      .addCase(fetchHotels.fulfilled, (state, action) => {
        return {
          ...state,
          loading: false,
          hotels: action.payload || [],
          error: null,
        };
      })
      .addCase(fetchHotels.rejected, (state, action) => {
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      })
  },
});

export default hotelsSlice.reducer;
