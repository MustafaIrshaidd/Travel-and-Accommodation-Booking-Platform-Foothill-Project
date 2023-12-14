import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@utils/axiosUtil";

export const loginUserAcync = createAsyncThunk(
  "user/login",
  async (
    values: { username: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await axiosInstance.post(`/auth/login`, values);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
