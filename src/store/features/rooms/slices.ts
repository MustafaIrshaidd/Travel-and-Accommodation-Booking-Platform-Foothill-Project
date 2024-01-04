import { combineReducers, createSlice } from "@reduxjs/toolkit";
import { RoomsState, checkoutRoomsState } from "./types";
import { fetchRoomsByHotelId } from "./thunks";

const initialStates = {
  hotelRoomsByIdState: {
    data: [],
    loading: false,
    error: undefined,
  } as RoomsState,
  checkoutRoomsState: {
    data: [],
  } as checkoutRoomsState,
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

const checkoutRoomsSlice = createSlice({
  name: "checkoutRooms",
  initialState: initialStates.checkoutRoomsState,
  reducers: {
    setCheckoutRooms: (state, action) => {
      if (state.data.includes(action.payload)) {
        return;
      }
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    },
    setRemoveRoom: (state, action) => {
      return {
        ...state,
        data: action.payload,
      };
    },
  },
});

export const { reducer: checkoutRoomsReducer, actions: checkoutRoomsActions } =
  checkoutRoomsSlice;

const roomsSlices = combineReducers({
  hotelRoomsById: hotelRoomsByIdSlice.reducer,
  checkoutRoomsSlice: checkoutRoomsSlice.reducer,
});

export default roomsSlices;
