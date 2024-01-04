import React from "react";
import { Badge, Box, Divider, Grid, styled, useTheme } from "@mui/material";
import { CityCard } from "@components/common/CityCard";
import { Map } from "@components/common/Map";
import HotelDetails from "./components/HotelDetails";
import { useParams } from "react-router-dom";
import AvailableRooms from "./components/AvailableRooms";
import { useAppDispatch, useAppSelector } from "@hooks/redux.hook";
import {
  fetchHotelGallaryById,
  fetchHotelReviewsById,
  fetchHotelsById,
} from "@store/features/hotels/thunks";
import {
  selectHotelDetails,
  selectHotelGallary,
  selectHotelReviews,
  selectSearchHotelsProps,
} from "@store/features/hotels/selectors";
import Gallary from "./components/Gallary";
import Reviews from "./components/Reviews";
import { fetchRoomsByHotelId } from "@store/features/rooms/thunks";
import { selectHotelRoomsById } from "@store/features/rooms/selectors";
import { Cart } from "@components/common/Cart";

const StyledGrid = styled(Grid)(({ theme }) => ({
  width: "90%",
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  [theme.breakpoints.down("md")]: {
    boxShadow: "none",
    width: "100%",
  },
  background: theme.palette.background.default,
}));

const Hotel = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();

  const hotelDetailsSelector = useAppSelector(selectHotelDetails);
  const gallarySelector = useAppSelector(selectHotelGallary);
  const reviewsSelector = useAppSelector(selectHotelReviews);
  const searchPropsSelector = useAppSelector(selectSearchHotelsProps);
  const hotelRoomsByIdSelector = useAppSelector(selectHotelRoomsById);

  const { hotelId } = useParams();

  React.useEffect(() => {
    hotelId && dispatch(fetchHotelsById({ id: hotelId }));
    hotelId && dispatch(fetchHotelGallaryById({ id: hotelId }));
    hotelId && dispatch(fetchHotelReviewsById({ id: hotelId }));
    hotelId &&
      dispatch(
        fetchRoomsByHotelId({
          id: hotelId,
          checkInDate: searchPropsSelector.checkInDate || "",
          checkOutDate: searchPropsSelector.checkOutDate || "",
        })
      );
  }, []);

  return (
    <>
      <Cart />
      <Box
        minHeight={"calc(100vh - 60px)"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}>
        <StyledGrid container>
          <Grid item xs={12} padding={7}>
            <Gallary
              data={gallarySelector.data}
              loading={gallarySelector.loading}
              error={gallarySelector.error}
            />
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>

          <Grid item xs={12} lg={7.9}>
            {hotelDetailsSelector && (
              <HotelDetails
                data={hotelDetailsSelector.data}
                loading={hotelDetailsSelector.loading}
                error={hotelDetailsSelector.error}
              />
            )}
          </Grid>
          <Divider orientation="vertical" flexItem={true} />
          <Grid
            item
            xs={12}
            lg={4}
            padding={4}
            height={"400px"}
            borderRadius={"50px"}
            overflow={"hidden"}>
            <Map
              locations={[
                {
                  longitude: hotelDetailsSelector.data.longitude,
                  latitude: hotelDetailsSelector.data.latitude,
                },
              ]}
            />
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={12} paddingY={4}>
            <Reviews
              data={reviewsSelector.data}
              loading={reviewsSelector.loading}
              error={reviewsSelector.error}
            />
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={12} padding={4}>
            <AvailableRooms
              data={hotelRoomsByIdSelector.data}
              loading={hotelRoomsByIdSelector.loading}
              error={hotelRoomsByIdSelector.error}
            />
          </Grid>
        </StyledGrid>
      </Box>
    </>
  );
};

export default Hotel;
