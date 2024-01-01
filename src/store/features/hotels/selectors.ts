import { RootState } from "@store/store";

export const searchHotels = (state: RootState) => state.hotels.searchHotels;
export const allHotels = (state: RootState) => state.hotels.allHotels;
export const selectHotelDetails = (state: RootState) =>
  state.hotels.hotelDetails;

export const selectSearchHotelsProps = (state: RootState) =>
  state.hotels.searchHotels.searchProps;

export const selectHotelGallary = (state: RootState) =>
  state.hotels.hotelGallary;

export const selectHotels = (state: RootState) => state.hotels.allHotels.data;
export const selectHotelsLoading = (state: RootState) =>
  state.hotels.allHotels.loading;
export const selectHotelsError = (state: RootState) =>
  state.hotels.allHotels.error;
