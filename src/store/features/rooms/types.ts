export interface Room {
  roomNumber: number;
  roomPhotoUrl: string;
  roomType: string;
  capacityOfAdults: number;
  capacityOfChildren: number;
  roomAmenities: RoomAmenity[];
  price: number;
  availability: boolean;
}



interface RoomAmenity {
  name: string;
  description: string;
}

export interface RoomsState {
  data: Room[];
  loading: boolean;
  error?: string;
}

export interface RoomsState {
  data: Room[];
  loading: boolean;
  error?: string;
}

export interface checkoutRoomsState {
  data: number[];
}
