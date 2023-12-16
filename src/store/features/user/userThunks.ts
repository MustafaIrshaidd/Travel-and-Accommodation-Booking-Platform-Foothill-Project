import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "@store/store";

export const loginUserAsync = createAsyncThunk(
  "user/login",
  async (
    values: { userName: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await axiosInstance.post(`/auth/authenticate`, values);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
