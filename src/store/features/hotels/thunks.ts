import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "@utils/axiosUtil";
import { HotelDetails, SearchHotelsProps } from "./types";

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

export const fetchHotelsById = createAsyncThunk(
  "hotelDetails/fetchHotelsById",
  async (args: { id: number }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        `/hotels/${args.id}?includeRooms=true`
      );
      return response.data as HotelDetails;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const searchHotels = createAsyncThunk(
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

export const fetchHotelGallaryById = createAsyncThunk(
  "hotelDetails/fetchHotelsGallaryById",
  async (args: { id: number }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/hotels/${args.id}/gallery`);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
