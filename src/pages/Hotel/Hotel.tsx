import React from "react";
import { Box, Container, Grid, styled } from "@mui/material";
import { Slider } from "@components/common/Slider";
import { CityCard } from "@components/common/CityCard";
import { Map } from "@components/common/Map";
import HotelDetails from "./components/HotelDetails";
import { useAppDispatch, useAppSelector } from "@hooks/redux.hook";

import { selectHotelDetails } from "@store/features/hotels/selectors";
import { useParams } from "react-router-dom";
import AvailableRooms from "./components/AvailableRooms";
import { fetchHotelsById } from "@store/features/hotels/thunks";

const StyledGrid = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  background: theme.palette.background.default,
}));

const components = [
  <CityCard
    cityId={1}
    cityName={"Nablus"}
    countryName={"Palestine"}
    description={"hello this is nablus"}
    thumbnailUrl={"photo.webp"}
  />,
  <CityCard
    cityId={1}
    cityName={"Nablus"}
    countryName={"Palestine"}
    description={"hello this is nablus"}
    thumbnailUrl={"photo.webp"}
  />,
  <CityCard
    cityId={1}
    cityName={"Nablus"}
    countryName={"Palestine"}
    description={"hello this is nablus"}
    thumbnailUrl={"photo.webp"}
  />,
  <CityCard
    cityId={1}
    cityName={"Nablus"}
    countryName={"Palestine"}
    description={"hello this is nablus"}
    thumbnailUrl={"photo.webp"}
  />,
  <CityCard
    cityId={1}
    cityName={"Nablus"}
    countryName={"Palestine"}
    description={"hello this is nablus"}
    thumbnailUrl={"photo.webp"}
  />,
];

const Hotel = () => {
  const dispatch = useAppDispatch();
  const selector = useAppSelector(selectHotelDetails);
  const { hotelId } = useParams();

  React.useEffect(() => {
    hotelId && dispatch(fetchHotelsById({ id: parseInt(hotelId) }));
  }, []);

  return (
    <Box
      minHeight={"calc(100vh - 60px)"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}>
      <StyledGrid
        container
        alignItems={"center"}
        justifyContent={"space-between"}
        gap={4}>
        <Grid
          item
          xs={12}
          lg={4}
          padding={"20px"}
          border={"1px solid white"}
          borderRadius={"20px"}
          style={{ flex: "1" }}>
          {selector.data && <HotelDetails data={selector.data} />}
        </Grid>
        <Grid
          item
          xs={12}
          lg={7}
          padding={"20px"}
          border={"1px solid white"}
          borderRadius={"20px"}
          style={{ flex: "1" }}>
          <Slider
            isSliderControllersVisible={false}
            spacing={0}
            slidePerPage={5}
            components={components}
          />
        </Grid>

        <Grid
          item
          xs={12}
          lg={6}
          height={"400px"}
          borderRadius={"50px"}
          overflow={"hidden"}>
          <Map
            locations={[
              {
                longitude: selector.data.longitude,
                latitude: selector.data.latitude,
              },
            ]}
          />
        </Grid>
        <Grid item xs={12} lg={5} minHeight={"400px"}>
          <AvailableRooms />
        </Grid>
      </StyledGrid>
    </Box>
  );
};

export default Hotel;
