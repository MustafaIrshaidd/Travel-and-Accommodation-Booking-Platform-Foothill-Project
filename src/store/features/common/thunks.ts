import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "@utils/axiosUtil";

export const fetchFeaturedDealsAsync = createAsyncThunk(
  "common/fetchFeaturedDeals",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/home/featured-deals`);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchTrendingDestintations = createAsyncThunk(
  "common/fetchTrendingDestinations",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/home/destinations/trending`);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
