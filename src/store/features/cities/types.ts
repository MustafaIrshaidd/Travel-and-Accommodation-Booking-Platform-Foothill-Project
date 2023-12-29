export interface City {
  id: number;
  description: string;
  name: string;
}

export interface CitiesState {
  data: City[];
  loading: boolean;
  error?: any;
  success?: any;
}
