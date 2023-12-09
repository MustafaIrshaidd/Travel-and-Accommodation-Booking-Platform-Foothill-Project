import { RootState } from "@store/store";

export const selectCities = (state: RootState) => state.cities.cities;
export const selectCitiesLoading = (state: RootState) => state.cities.loading;
export const selectCitiesError = (state: RootState) => state.cities.error;
