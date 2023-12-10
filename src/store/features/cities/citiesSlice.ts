import { createSlice, PayloadAction} from "@reduxjs/toolkit";
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
    cityAdded(state, action: PayloadAction<Omit<City, 'id'>>) {
      const newCity: City = {
        ...action.payload,
        id: state.cities.length + 1,
      };
      state.cities.push(newCity);
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchCities.pending, (state) => ({
      ...state,loading:true
    }))
      .addCase(fetchCities.fulfilled, (state, action) => ({
        ...state,loading:false,cities:action.payload
      }))
      .addCase(fetchCities.rejected, (state, action) => {
        state.error && (state.error = action.payload)
        state.loading = false
      })
  },
});

export const {
  cityAdded,
} = citiesSlice.actions;

export default citiesSlice.reducer;
