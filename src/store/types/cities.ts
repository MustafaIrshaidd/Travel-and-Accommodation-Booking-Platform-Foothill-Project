export interface City {
  id: number;
  description: string;
  name: string;
}

export interface Error {
  message: string;
}

export enum ActionTypes {
  ADD_CITY = "cities/cityAdded",
}

export interface CitiesState {
  cities: City[];
  loading: boolean;
  error?: any;
}
