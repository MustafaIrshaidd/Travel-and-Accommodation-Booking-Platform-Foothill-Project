import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "@utils/axiosUtil";
import { Room } from "./types";

export const fetchRoomsByHotelId = createAsyncThunk(
  "hotelDetails/fetchRoomsByHotelId",
  async (
    args: { id: string; checkInDate: string; checkOutDate: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await axiosInstance.get(
        `hotels/${args.id}/rooms?checkInDate=${args.checkInDate}&checkOutDate=${args.checkOutDate}`
      );
      return response.data as Room[];
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
