import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "@store/store";
import { tryCatch } from "@utils/tryCatch";
import { HotelDetails } from "./types";

export const fetchHotelsById = createAsyncThunk("hotelDetails/fetchHotelsById", async (args: { id: number }, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.get(`/hotels/${args.id}?includeRooms=true`);
    return response.data as HotelDetails;
  } catch (error:any) {
    return rejectWithValue(error.message);
  }
});