export interface Hotel {
  id: number;
  name: number;
  description: string;
  hotelType: number;
  starRating: number;
  latitude: number;
  longitude: number;
}

export interface HotelDetails {
  hotelName: string;
  location: string;
  description: string;
  latitude: number;
  longitude: number;
  amenities: Amenity[];
  starRating: number;
  availableRooms: number;
  imageUrl: string;
}

interface Amenity {
  id?: number;
  name: string;
  description: string;
}

export interface SearchResult {
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

interface IResponseSchema {
  loading: boolean;
  error?: any;
}

export interface AllHotelsState extends IResponseSchema {
  data: Hotel[];
}

export interface HotelDetailsState extends IResponseSchema {
  data: HotelDetails;
}
export interface SearchState extends IResponseSchema {
  data: SearchResult[];
  searchProps: SearchHotelsProps;
}
