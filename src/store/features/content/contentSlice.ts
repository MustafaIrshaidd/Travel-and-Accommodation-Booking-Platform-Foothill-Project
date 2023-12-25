import { createSlice } from "@reduxjs/toolkit";
import {
  fetchFeaturedDealsAsync,
  fetchTrendingDestintations,
} from "./contentThunks";

const initialState = {
  content: {
    featuredDeals: { data: [], loading: false },
    trending: { data: [], loading: false },
    // recentHotels: { data: [], loading: false },
  },
};

export const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFeaturedDealsAsync.pending, (state, action) => {
        return {
          ...state,
          content: {
            ...state.content,
            featuredDeals: {
              ...state.content.featuredDeals,
              loading: true,
            },
          },
        };
      })
      .addCase(fetchFeaturedDealsAsync.fulfilled, (state, action) => {
        return {
          ...state,
          content: {
            ...state.content,
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
          content: {
            ...state.content,
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
          content: {
            ...state.content,
            trending: {
              ...state.content.trending,
              loading: true,
            },
          },
        };
      })
      .addCase(fetchTrendingDestintations.fulfilled, (state, action) => {
        return {
          ...state,
          content: {
            ...state.content,
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
          content: {
            ...state.content,
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
export default contentSlice.reducer;
