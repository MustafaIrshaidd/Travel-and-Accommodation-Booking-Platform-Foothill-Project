import { createSlice } from "@reduxjs/toolkit";
import { fetchHotelsById } from "./hotelsDetailsThunks";
import { HotelDetailsState } from "./types";

const initialState = {
  hotelDetails: {},
  loading: false,
} as HotelDetailsState;

export const hotelsSlice = createSlice({
  name: "hotelDetails",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchHotelsById.pending, (state, action) => {
        return {
          ...state,
          loading: true,
        };
      })
      .addCase(fetchHotelsById.fulfilled, (state, action:any) => {
        return {
          ...state,
          loading: false,
          hotelDetails: action.payload || {},
        }; debugger
      })
      .addCase(fetchHotelsById.rejected, (state, action) => {
        return {
          ...state,
          loading: false,
          error: action.error.message,
        };
      });
  },
});

export default hotelsSlice.reducer;
