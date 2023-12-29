import { combineReducers, createSlice } from "@reduxjs/toolkit";
import { CitiesState } from "@store/features/cities/types";
import { addCityAsync, deleteCityAsync, fetchCities } from "./thunks";

const initialState = {
  data: [],
  loading: false,
} as CitiesState;

export const allCitiesSlice = createSlice({
  name: "allCities",
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
          data: action.payload || [],
          error: null,
        };
      })
      .addCase(fetchCities.rejected, (state, action) => {
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      });
  },
});

export const addCitySlice = createSlice({
  name: "addCity",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(addCityAsync.pending, (state) => {
        return {
          ...state,
          error: null,
        };
      })
      .addCase(addCityAsync.fulfilled, (state, action) => {
        return {
          ...state,
          data: [...state.data, action.payload],
          error: null,
        };
      })
      .addCase(addCityAsync.rejected, (state, action) => {
        return {
          ...state,
          error: action.payload,
        };
      });
  },
});

export const deleteCitySlice = createSlice({
  name: "allCities",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
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
          data: state.data.filter(
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

const citiesSlices = combineReducers({
  allCities: allCitiesSlice.reducer,
  addCity: allCitiesSlice.reducer,
  deleteCity: allCitiesSlice.reducer,
});

export default citiesSlices;
