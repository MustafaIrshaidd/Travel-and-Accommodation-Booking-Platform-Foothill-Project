import { createSlice } from "@reduxjs/toolkit";
import { CitiesState } from "@store/types/cities";
import { addCityAsync, deleteCityAsync, fetchCities } from "./citiesThunks";




const initialState = {
  cities: [],
  loading: false,
} as CitiesState;

export const citiesSlice = createSlice({
  name: "cities",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCities.pending, (state, action) => {
        return {
          ...state,
          loading: true,
        };
      })
      .addCase(fetchCities.fulfilled, (state, action) => {
        return {
          ...state,
          loading: false,
          cities: action.payload || [],
          error: null,
        };
      })
      .addCase(fetchCities.rejected, (state, action) => {
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      })
      .addCase(addCityAsync.pending, (state) => {
        return {
          ...state,
          error: null,
        };
      })
      .addCase(addCityAsync.fulfilled, (state, action) => {
        return {
          ...state,
          cities: [...state.cities, action.payload],
          error: null,
        };
      })
      .addCase(addCityAsync.rejected, (state, action) => {
        return {
          ...state,
          error: action.payload,
        };
      })
      .addCase(deleteCityAsync.pending, (state) => {
        return {
          ...state,
          loading: true,
          error: null,
        };
      })
      .addCase(deleteCityAsync.fulfilled, (state, action) => {
        return {
          ...state,
          loading: false,
          cities: state.cities.filter(
            (city) => city.id !== action.payload.deletedCityId
          ),
          error: null,
        };
      })
      .addCase(deleteCityAsync.rejected, (state, action) => {
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      });
  },
});

export default citiesSlice.reducer;
