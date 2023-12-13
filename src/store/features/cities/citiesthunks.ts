import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { City } from "@store/types/cities";
import axiosInstance from "@utils/axiosUtil";

export const fetchCities = createAsyncThunk(
  "cities/fetchCities",
  async (
    args: { pageNumber?: number; pageSize?: number },
    { rejectWithValue }
  ) => {
    try {
      const response = await axiosInstance.get(
        `/cities?pageSize=${args.pageSize || 5}&pageNumber=${
          args.pageNumber || 1
        }`
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const addCityAsync = createAsyncThunk(
  "cities/addCity",
  async (cityData: Omit<City, "id">, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/cities/", cityData);
      return response.data;
    } catch (error: any) {
      
      return rejectWithValue(error.message||"");
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
