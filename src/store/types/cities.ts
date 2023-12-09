export interface City {
  description: string;
  name: string;
}

export interface Error {
  message: string;
}

export enum ActionTypes {
  FETCH_CITIES_STARTED = "FETCH_CITIES_STARTED",
  FETCH_CITIES_SUCCEEDED = "FETCH_CITIES_SUCCEEDED",
  FETCH_CITIES_FAILED = "FETCH_CITIES_FAILED",
  ADD_CITY = "cities/cityAdded",
}

export interface CitiesState {
  cities: City[];
  loading: boolean;
  error?: Error;
}
