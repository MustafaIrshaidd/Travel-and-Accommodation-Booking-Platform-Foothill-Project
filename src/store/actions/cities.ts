import { ActionTypes, City, Error } from "@store/types/cities";

export const addCity = (city: City) => ({
  type: ActionTypes.ADD_CITY,
  city,
});

export const fetchCitiesFailed = (error: Error) => ({
  type: ActionTypes.FETCH_CITIES_FAILED,
  error,
});

export const fetchCitiesSucceeded = (cities: City[]) => ({
  type: ActionTypes.FETCH_CITIES_SUCCEEDED,
  cities,
});
