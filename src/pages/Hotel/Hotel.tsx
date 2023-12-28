import React from "react";
import { Box, Grid, styled } from "@mui/material";
import { Slider } from "@components/common/Slider";
import { CityCard } from "@components/common/CityCard";
import { Map } from "@components/common/Map";
import HotelDetails from "./components/HotelDetails";
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
            <Grid item xs={12} lg={8}>
              <HotelDetails />
            </Grid>
            <Grid item xs={12} lg={4} minHeight={"200px"}>
              <Map></Map>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hotel;
