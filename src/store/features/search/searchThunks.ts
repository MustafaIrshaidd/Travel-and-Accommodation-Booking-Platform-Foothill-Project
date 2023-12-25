import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "@store/store";
import { SearchHotelsProps } from "@store/features/search/types";

export const searchHotelsAsync = createAsyncThunk(
  "search/hotels",
  async (
    {
      numberOfRooms,
      children,
      adults,
      starRate,
      sort,
      rooms,
      checkInDate,
      checkOutDate,
    }: SearchHotelsProps,
    { rejectWithValue }
  ) => {
    try {
      const response = await axiosInstance.get(
        `/home/search?numberOfRooms=${numberOfRooms}&adults=${adults}&children=${children}&rating=${starRate}&sort=${sort}&rooms=${rooms}&checkInDate=${checkInDate}&checkOutDate=${checkOutDate}`
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
