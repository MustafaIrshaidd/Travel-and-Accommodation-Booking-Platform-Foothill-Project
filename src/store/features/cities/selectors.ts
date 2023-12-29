import { RootState } from "@store/store";

export const selectCities = (state: RootState) => state.cities.allCities.data;
export const selectCitiesLoading = (state: RootState) =>
  state.cities.allCities.loading;
export const selectCitiesError = (state: RootState) =>
  state.cities.allCities.error;
