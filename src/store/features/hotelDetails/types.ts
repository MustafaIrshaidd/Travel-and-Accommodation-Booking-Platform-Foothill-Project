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
  name: string;
  description: string;
}

export interface HotelDetailsState {
  hotelDetails: HotelDetails;
  loading: boolean;
}