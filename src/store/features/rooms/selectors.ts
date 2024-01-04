import { RootState } from "@store/store";

export const selectHotelRoomsById = (state: RootState) =>
  state.rooms.hotelRoomsById;


  export const selectCheckoutRooms = (state: RootState) =>
  state.rooms.checkoutRoomsSlice;

