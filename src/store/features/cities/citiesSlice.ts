import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CitiesState, City } from "@store/types/cities";

const initialState: CitiesState = {
  cities: [],
  loading: false,
};

export const citiesSlice = createSlice({
  name: "cities",
  initialState,
  reducers: {
    fetchCitiesStarted(state) {
      state.loading = true;
    },
    fetchCitiesSucceeded(state, action: PayloadAction<City[]>) {
      state.cities = action.payload;
      state.loading = false;
    },
    fetchCitiesFailed(state, action: PayloadAction<Error>) {
      state.error = action.payload;
      state.loading = false;
    },
    cityAdded(state, action: PayloadAction<City>) {
      state.cities.push(action.payload);
    },
  },
});

export const {
  fetchCitiesStarted,
  fetchCitiesSucceeded,
  fetchCitiesFailed,
  cityAdded,
} = citiesSlice.actions;

export default citiesSlice.reducer;
