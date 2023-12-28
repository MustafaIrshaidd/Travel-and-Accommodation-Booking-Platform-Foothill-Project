import React from "react";
import { Box, Grid, styled } from "@mui/material";
import { Slider } from "@components/common/Slider";
import { CityCard } from "@components/common/CityCard";
import { Map } from "@components/common/Map";
import HotelDetails from "./components/HotelDetails";
import { useAppDispatch, useAppSelector } from "@hooks/redux.hook";
import { fetchHotelsById } from "@store/features/hotelDetails/hotelsDetailsThunks";
import { selectHotelDetails } from "@store/selectors/hotels";
import { useParams } from "react-router-dom";

const components = [
  <CityCard
    cityId={1}
    cityName={"Nablus"}
    countryName={"Palestine"}
    description={"hello this is nablus"}
    thumbnailUrl={"photo.webp"}
  />,
  <CityCard
    cityId={2}
    cityName={"Nablus"}
    countryName={"Palestine"}
    description={"hello this is nablus"}
    thumbnailUrl={"photo.webp"}
  />,
  <CityCard
    cityId={3}
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
    <Box minHeight={"calc(100vh - 60px)"}>
      <Grid container>
        <Grid item xs={12} lg={12} sx={{ backgroundColor: "grey" }}>
          <Slider
            isSliderControllersVisible={false}
            height="400px"
            spacing={0}
            slidePerPage={5}
            components={components}
          />
        </Grid>
        <Grid item xs={12} lg={12}>
          <Grid container>
            <Grid item xs={12} lg={12}>
              {selector.hotelDetails && (
                <HotelDetails data={selector.hotelDetails} />
              )}
            </Grid>
            <Grid item xs={12} lg={12} minHeight={"200px"}>
              <Map
                locations={[
                  {
                    longitude: selector.hotelDetails.longitude,
                    latitude: selector.hotelDetails.latitude,
                  },
                ]}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hotel;
