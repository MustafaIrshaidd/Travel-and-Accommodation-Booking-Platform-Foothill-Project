import { combineReducers, createSlice } from "@reduxjs/toolkit";
import {
  AllHotelsState,
  HotelDetailsState,
  SearchState,
} from "@store/features/hotels/types";
import { fetchHotels, fetchHotelsById, searchHotels } from "./thunks";

const initialStates = {
  allHotels: {
    data: [],
    loading: false,
  } as AllHotelsState,
  hotelDetails: {
    data: {},
    loading: false,
  } as HotelDetailsState,
  searchHotels: {
    data: [],
    searchProps: {},
    loading: false,
  } as SearchState,
};

export const allHotelsSlice = createSlice({
  name: "allHotels",
  initialState: initialStates.allHotels,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchHotels.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchHotels.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload || [];
        state.error = null;
      })
      .addCase(fetchHotels.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const hotelDetailsSlice = createSlice({
  name: "hotelDetails",
  initialState: initialStates.hotelDetails,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchHotelsById.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchHotelsById.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload || {};
      })
      .addCase(fetchHotelsById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const searchHotelsSlice = createSlice({
  name: "searchHotels",
  initialState: initialStates.searchHotels,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(searchHotels.pending, (state, action) => {
        return {
          ...state,
          loading: true,
        };
      })
      .addCase(searchHotels.fulfilled, (state, action) => {
        return {
          ...state,
          loading: false,
          data: action.payload || [],
          error: null,
          searchProps: action.meta.arg,
        };
      })
      .addCase(searchHotels.rejected, (state, action) => {
        return {
          ...state,
          loading: false,
          error: action.payload,
        } as SearchState;
      });
  },
});

const hotelsSlices = combineReducers({
  allHotels: allHotelsSlice.reducer,
  hotelDetails: hotelDetailsSlice.reducer,
  searchHotels: searchHotelsSlice.reducer,
});

export default hotelsSlices;
