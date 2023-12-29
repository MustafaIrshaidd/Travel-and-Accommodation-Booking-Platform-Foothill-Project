import { combineReducers, createSlice } from "@reduxjs/toolkit";
import { RoomsState } from "./types";
import { fetchRoomsByHotelId } from "./thunks";

const initialStates = {
  hotelRoomsByIdState: {
    data: [],
    loading: false,
    error: undefined,
  } as RoomsState,
};

const hotelRoomsByIdSlice = createSlice({
  name: "hotelRoomsById",
  initialState: initialStates.hotelRoomsByIdState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRoomsByHotelId.pending, (state, action) => {
        return {
          ...state,
          loading: true,
        };
      })
      .addCase(fetchRoomsByHotelId.fulfilled, (state, action) => {
        return {
          ...state,
          loading: false,
          data: action.payload,
        };
      })
      .addCase(fetchRoomsByHotelId.rejected, (state, action) => {
        return {
          ...state,
          loading: false,
          error: action.error.message,
        };
      });
  },
});

const roomsSlices = combineReducers({
  hotelRoomsById: hotelRoomsByIdSlice.reducer,
});

export default roomsSlices;
