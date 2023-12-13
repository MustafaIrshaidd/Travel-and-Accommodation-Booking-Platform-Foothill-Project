import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CitiesState, City } from "@store/types/cities";
import { fetchCities } from "./citiesthunks";

const initialState = {
  cities: [],
  loading: false,
} as CitiesState;

export const citiesSlice = createSlice({
  name: "cities",
  initialState,
  reducers: {
    
    cityAdded(state, action: PayloadAction<Omit<City,"id">>) {
      const existingCityIndex = state.cities.findIndex((city) => city.name === action.payload.name);

      if (existingCityIndex === -1) {
        const newCity: City = {
          ...action.payload,
          id: state.cities.length + 1,
        };
        state.cities.push(newCity);
        state.error = null;
      }
      else {
        state.error = "You Connot Add Existing City !"
      }
    },
    cityDeleted(state, action: PayloadAction<number>) {
      const deletedCityId = action.payload;
      state.cities = state.cities.filter((city) => city.id !== deletedCityId);
    },
    cityAddedSuccess(state) {
      state.error=null;
    },
    cityAddedError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    // cityUpdated(state, action: PayloadAction<number>) {
    //   const deletedCityId = action.payload;
    //   state.cities = state.cities.filter((city) => city.id !== deletedCityId);
    // },
  },
  
  extraReducers(builder) {
    builder
      .addCase(fetchCities.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(fetchCities.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        cities: action.payload,
      }))
      .addCase(fetchCities.rejected, (state, action) => {
        state.error && (state.error = action.payload);
        state.loading = false;
      });
  },
  
});

export const { cityAdded, cityDeleted } = citiesSlice.actions;

export default citiesSlice.reducer;
