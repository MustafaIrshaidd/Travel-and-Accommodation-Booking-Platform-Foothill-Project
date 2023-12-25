export interface Hotel {
  id: number;
  name: number;
  description: string;
  hotelType: number;
  starRating: number;
  latitude: number;
  longitude: number;
}

export interface HotelsState {
  hotels: Hotel[];
  loading: boolean;
  error?: any;
  success?: any;
}
