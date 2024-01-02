import { Text } from "@components/common/Text";
import { Box } from "@mui/material";
import React from "react";
import { RoomsState } from "@store/features/rooms/types";
import { RoomCard } from "@components/common/RoomCard";

const AvailableRooms: React.FC<RoomsState> = ({ data, loading, error }) => {
  // const hotelReviewsComponents = data.map((dataObject) => (
  //   <ReviewCard
  //     key={dataObject.reviewId}
  //     customerName={dataObject.customerName}
  //     rating={dataObject.rating}
  //     reviewId={dataObject.reviewId}
  //     description={dataObject.description}
  //   />
  // ));
  return (
    <Box>
      <Text
        type="primary"
        fontSize="20px"
        fontWeight={700}
        text="Available Rooms"
      />
      {loading ? (
        <></>
      ) : (
        data.length > 0 && (
          <RoomCard
            roomAmenities={data[0].roomAmenities}
            availability={data[0].availability}
            capacityOfAdults={data[0].capacityOfAdults}
            capacityOfChildren={data[0].capacityOfChildren}
            price={data[0].price}
            roomPhotoUrl={data[0].roomPhotoUrl}
            roomNumber={data[0].roomNumber}
            roomType={data[0].roomType}
          />
        )
      )}
    </Box>
  );
};

export default AvailableRooms;
