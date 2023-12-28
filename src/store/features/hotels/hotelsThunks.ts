import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "@store/store";
import { tryCatch } from "@utils/tryCatch";

export const fetchHotels = createAsyncThunk(
  "hotels/fetchHotels",
  async (
    args: { pageNumber?: number; pageSize?: number },
    { rejectWithValue }
  ) => {
    try {
      const response = await axiosInstance.get(
        `/hotels?pageSize=${args.pageSize || 5}&pageNumber=${
          args.pageNumber || 1
        }`
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
