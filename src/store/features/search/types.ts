interface Amenity {
  id: number;
  name: string;
  description: string;
}

export interface Hotel {
  hotelId: number;
  hotelName: string;
  starRating: number;
  latitude: number;
  longitude: number;
  roomPrice: number;
  roomType: string;
  cityName: string;
  roomPhotoUrl: string;
  discount: number;
  amenities: Amenity[];
}

export interface SearchHotelsProps {
  numberOfRooms?: number;
  rooms?: number;
  children?: number;
  checkInDate?: string;
  checkOutDate?: string;
  adults?: number;
  starRate?: number;
  sort?: string;
}

export interface SearchState {
  hotels: Hotel[];
  loading: boolean;
}
