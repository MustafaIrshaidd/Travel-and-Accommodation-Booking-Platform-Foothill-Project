import { Text } from "@components/common/Text";
import { useAppDispatch, useAppSelector } from "@hooks/redux.hook";
import { Box } from "@mui/material";
import { fetchRoomsByHotelId } from "@store/features/rooms/thunks";
import { selectSearchHotelsProps } from "@store/features/hotels/selectors";
import React from "react";
import { useParams } from "react-router-dom";

const AvailableRooms = ({}) => {
  const { hotelId } = useParams();
  const dispatch = useAppDispatch();
  const searchProps = useAppSelector(selectSearchHotelsProps);

  React.useEffect(() => {
    hotelId &&
      dispatch(
        fetchRoomsByHotelId({
          id: hotelId,
          checkInDate: searchProps.checkInDate || "",
          checkOutDate: searchProps.checkOutDate || "",
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
