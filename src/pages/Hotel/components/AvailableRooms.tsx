import { InformationTable } from "@components/common/InformationTable";
import { Text } from "@components/common/Text";
import { useAppDispatch, useAppSelector } from "@hooks/redux.hook";
import { Box } from "@mui/material";
import { fetchRoomsByHotelId } from "@store/features/rooms/thunks";
import { searchHotels } from "@store/features/hotels/selectors";
import React from "react";
import { useParams } from "react-router-dom";

const AvailableRooms = ({}) => {
  const { hotelId } = useParams();
  const dispatch = useAppDispatch();
  const searchValues = useAppSelector(searchHotels);

  console.log(searchValues);

  React.useEffect(() => {
    hotelId &&
      dispatch(
        fetchRoomsByHotelId({
          id: hotelId,
          checkInDate: "23/12/2024",
          checkOutDate: "23/12/2024",
        })
      );
  }, []);

  return (
    <Box>
      <Text
        type="primary"
        fontSize="20px"
        fontWeight={700}
        text="Available Rooms"
      />
    </Box>
  );
};

export default AvailableRooms;
