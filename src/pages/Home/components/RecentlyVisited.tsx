import { Box, Grid, Link, Typography, styled, useTheme } from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import React from "react";
import { Text } from "@components/Text";
import { Slider } from "@components/Slider";
import { HotelCard } from "@components/HotelCard";

const HeaderContent = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isCentered",
})<{ isCentered: boolean }>(({ theme, isCentered }) => ({
  zIndex: 3,
  textAlign: "start",
  [theme.breakpoints.up("xs")]: {
    width: "90%",
    textAlign: "center",
  },
  [theme.breakpoints.up("md")]: {
    width: "100%",
    textAlign: isCentered ? "center" : "start",
  },
  margin: "auto",
  color: theme.palette.text.primary,
  paddingBottom: "30px",
  padding: "20px",
}));

const components = [
  <HotelCard
    id={1}
    city="Nablus"
    title="Plaza Hotel"
    price={150}
    discount={0.5}
    hotelStarRating={3}
  />,
  <HotelCard
    id={1}
    city="Nablus"
    title="Plaza Hotel"
    price={150}
    discount={0.5}
    hotelStarRating={3}
  />,
  <HotelCard
    id={2}
    city="Nablus"
    title="Plaza Hotel"
    price={150}
    discount={0.5}
    hotelStarRating={3}
  />,
  <HotelCard
    id={3}
    city="Nablus"
    title="Plaza Hotel"
    price={150}
    discount={0.5}
    hotelStarRating={3}
  />,
  <HotelCard
    id={4}
    city="Nablus"
    title="Plaza Hotel"
    price={150}
    discount={0.5}
    hotelStarRating={3}
  />,
  <HotelCard
    id={5}
    city="Nablus"
    title="Plaza Hotel"
    price={150}
    discount={0.5}
    hotelStarRating={3}
  />,
];

const RecentlyVisited = () => {
  const theme = useTheme();
  return (
    <Grid container justifyContent={"space-between"} padding={"40px 0"}>
      <Grid
        item
        xs={12}
        md={6}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}>
        <HeaderContent isCentered={true}>
          <Box>
            <Text
              type="secondary"
              variant="body1"
              fontSize="12px"
              fontWeight={700}
              text="STORIES FROM AROUND YOUR GLOBE"
              textAlign="start"
              textWrap={false}
            />
            <Text
              type="primary"
              variant="h2"
              fontSize="25px"
              fontWeight={700}
              text="Recently Visited"
              textWrap={false}
            />
          </Box>
        </HeaderContent>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        display={"flex"}
        justifyContent={{ xs: "center", md: "end" }}
        alignItems={"center"}
        marginY={{ xs: "20px" }}>
        <Link
          href="#"
          underline="hover"
          color={"inherit"}
          fontSize={"1.2rem"}
          sx={{ color: theme.palette.text.primary }}>
          See All Deals
        </Link>
        <KeyboardDoubleArrowRightIcon
          sx={{ padding: "6px 0 0 6px", color: theme.palette.text.primary }}
        />
      </Grid>

      <Slider
        height="400px"
        isCarousel={true}
        components={components}
        slidePerPage={4}></Slider>
    </Grid>
  );
};

export default RecentlyVisited;
