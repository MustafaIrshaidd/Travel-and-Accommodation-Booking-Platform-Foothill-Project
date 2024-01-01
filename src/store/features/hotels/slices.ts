import { combineReducers, createSlice } from "@reduxjs/toolkit";
import {
  AllHotelsState,
  HotelDetailsState,
  HotelGallaryState,
  HotelReviewsState,
  SearchState,
} from "@store/features/hotels/types";
import {
  fetchHotelGallaryById,
  fetchHotelReviewsById,
  fetchHotels,
  fetchHotelsById,
  searchHotels,
} from "./thunks";
import dayjs from "dayjs";

const initialStates = {
  allHotels: {
    data: [],
    loading: false,
  } as AllHotelsState,
  hotelDetails: {
    data: {},
    loading: false,
  } as HotelDetailsState,
  searchHotels: {
    data: [],
    searchProps: {
      checkInDate: dayjs().format("YYYY-MM-DD"),
      checkOutDate: dayjs().add(1, "day").format("YYYY-MM-DD"),
      numberOfRooms: 1,
      children: 0,
      adults: 2,
    },
    loading: false,
  } as SearchState,
  hotelGallary: {
    data: [],
    loading: false,
  } as HotelGallaryState,
  hotelReviews: {
    data: [],
    loading: false,
  } as HotelReviewsState,
};

export const allHotelsSlice = createSlice({
  name: "allHotels",
  initialState: initialStates.allHotels,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchHotels.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchHotels.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload || [];
        state.error = null;
      })
      .addCase(fetchHotels.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const hotelDetailsSlice = createSlice({
  name: "hotelDetails",
  initialState: initialStates.hotelDetails,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchHotelsById.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchHotelsById.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload || {};
      })
      .addCase(fetchHotelsById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const searchHotelsSlice = createSlice({
  name: "searchHotels",
  initialState: initialStates.searchHotels,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(searchHotels.pending, (state, action) => {
        return {
          ...state,
          loading: true,
        };
      })
      .addCase(searchHotels.fulfilled, (state, action) => {
        return {
          ...state,
          loading: false,
          data: action.payload || [],
          error: null,
          searchProps: action.meta.arg,
        };
      })
      .addCase(searchHotels.rejected, (state, action) => {
        return {
          ...state,
          loading: false,
          error: action.payload,
        } as SearchState;
      });
  },
});

export const hotelGallary = createSlice({
  name: "hotelGallary",
  initialState: initialStates.hotelGallary,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchHotelGallaryById.pending, (state, action) => {
        return {
          ...state,
          loading: true,
        };
      })
      .addCase(fetchHotelGallaryById.fulfilled, (state, action) => {
        return {
          ...state,
          loading: false,
          data: action.payload || [],
          error: null,
        };
      })
      .addCase(fetchHotelGallaryById.rejected, (state, action) => {
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      });
  },
});

export const hotelReviews = createSlice({
  name: "hotelReviews",
  initialState: initialStates.hotelReviews,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchHotelReviewsById.pending, (state, action) => {
        return {
          ...state,
          loading: true,
        };
      })
      .addCase(fetchHotelReviewsById.fulfilled, (state, action) => {
        return {
          ...state,
          loading: false,
          data: action.payload || [],
          error: null,
        };
      })
      .addCase(fetchHotelReviewsById.rejected, (state, action) => {
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      });
  },
});

const hotelsSlices = combineReducers({
  allHotels: allHotelsSlice.reducer,
  hotelDetails: hotelDetailsSlice.reducer,
  searchHotels: searchHotelsSlice.reducer,
  hotelGallary: hotelGallary.reducer,
  hotelReviews: hotelReviews.reducer,
});

export default hotelsSlices;
