import { Text } from "@components/common/Text";
import { Stack } from "@mui/material";
import React from "react";
import { RoomsState } from "@store/features/rooms/types";
import { RoomCard } from "@components/common/RoomCard";

const AvailableRooms: React.FC<RoomsState> = ({ data, loading, error }) => {
  const roomComponents = data.map((dataObject, index) => {
    return (
      <RoomCard
        key={index}
        roomAmenities={dataObject.roomAmenities}
        availability={dataObject.availability}
        capacityOfAdults={dataObject.capacityOfAdults}
        capacityOfChildren={dataObject.capacityOfChildren}
        price={dataObject.price}
        roomPhotoUrl={dataObject.roomPhotoUrl}
        roomNumber={dataObject.roomNumber}
        roomType={dataObject.roomType}
      />
    );
  });

  return (
    <Stack gap={4}>
      <Text
        type="primary"
        fontSize="20px"
        fontWeight={700}
        text="Available Rooms"
      />
      {loading ? <></> : data.length > 0 && roomComponents}
    </Stack>
  );
};

export default AvailableRooms;
