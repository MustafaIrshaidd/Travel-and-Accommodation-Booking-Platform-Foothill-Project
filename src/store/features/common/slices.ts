import { combineReducers, createSlice } from "@reduxjs/toolkit";
import { fetchFeaturedDealsAsync, fetchTrendingDestintations } from "./thunks";

const initialState = {
  common: {
    featuredDeals: { data: [], loading: false },
    trending: { data: [], loading: false },
    // recentHotels: { data: [], loading: false },
  },
};

export const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFeaturedDealsAsync.pending, (state, action) => {
        return {
          ...state,
          common: {
            ...state.common,
            featuredDeals: {
              ...state.common.featuredDeals,
              loading: true,
            },
          },
        };
      })
      .addCase(fetchFeaturedDealsAsync.fulfilled, (state, action) => {
        return {
          ...state,
          common: {
            ...state.common,
            featuredDeals: {
              data: action.payload,
              loading: false,
            },
          },
        };
      })
      .addCase(fetchFeaturedDealsAsync.rejected, (state, action) => {
        return {
          ...state,
          common: {
            ...state.common,
            featuredDeals: {
              data: [],
              loading: false,
              error: action.payload,
            },
          },
        };
      })
      .addCase(fetchTrendingDestintations.pending, (state, action) => {
        return {
          ...state,
          common: {
            ...state.common,
            trending: {
              ...state.common.trending,
              loading: true,
            },
          },
        };
      })
      .addCase(fetchTrendingDestintations.fulfilled, (state, action) => {
        return {
          ...state,
          common: {
            ...state.common,
            trending: {
              data: action.payload,
              loading: false,
            },
          },
        };
      })
      .addCase(fetchTrendingDestintations.rejected, (state, action) => {
        return {
          ...state,
          common: {
            ...state.common,
            trending: {
              data: [],
              loading: false,
              error: action.payload,
            },
          },
        };
      });
  },
});

const commonSlices = combineReducers({
  common: commonSlice.reducer,
});

export default commonSlices;
