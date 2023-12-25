export interface City {
  id: number;
  description: string;
  name: string;
}

export interface CitiesState {
  cities: City[];
  loading: boolean;
  error?: any;
  success?: any;
}
