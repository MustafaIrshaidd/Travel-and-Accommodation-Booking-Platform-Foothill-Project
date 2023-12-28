import { RootState } from "@store/store";

export const selectHotels = (state: RootState) => state.hotels.hotels;
export const selectHotelsLoading = (state: RootState) => state.hotels.loading;
export const selectHotelsError = (state: RootState) => state.hotels.error;

export const selectHotelDetails = (state: RootState) => state.hotelDetails