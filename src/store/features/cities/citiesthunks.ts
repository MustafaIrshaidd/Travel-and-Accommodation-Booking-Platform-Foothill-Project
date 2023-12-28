import { createAsyncThunk } from "@reduxjs/toolkit";
import { City } from "@store/features/cities/types";
import { axiosInstance } from "@store/store";
import { tryCatch } from "@utils/tryCatch";

export const fetchCities = createAsyncThunk(
  "cities/fetchCities",
  async (
    args: { pageNumber?: number; pageSize?: number },
    { rejectWithValue }
  ) =>
    tryCatch(async () => {
      const response = await axiosInstance.get(
        `/cities?pageSize=${args.pageSize || 5}&pageNumber=${args.pageNumber || 1
        }`
      );
      return response.data;
    }, rejectWithValue)
);

export const addCityAsync = createAsyncThunk(
  "cities/addCity",
  async (cityData: Omit<City, "id">, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/cities/", cityData);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message || "");
    }
  }
);

export const deleteCityAsync = createAsyncThunk(
  "cities/deleteCity",
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.delete(`/cities/${id}`);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
