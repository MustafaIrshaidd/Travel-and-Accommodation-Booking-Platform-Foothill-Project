import React from "react";
import { Box, Container, Grid, Link, styled, useTheme } from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { Text } from "@components/common/Text";
import { Slider } from "@components/common/Slider";
import { HotelCard } from "@components/common/HotelCard";
import { useAppDispatch, useAppSelector } from "@hooks/redux.hook";
import { fetchFeaturedDealsAsync } from "@store/features/common/thunks";
import { unwrapResult } from "@reduxjs/toolkit";
import { useCustomSnackbar } from "@hooks/useCustomSnackbar.hook";
import { selectFeaturedDeals } from "@store/features/common/selectors";

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
    isLoading={true}
  />,
  <HotelCard
    id={1}
    city="Nablus"
    title="Plaza Hotel"
    price={150}
    discount={0.5}
    hotelStarRating={3}
    isLoading={true}
  />,
  <HotelCard
    id={2}
    city="Nablus"
    title="Plaza Hotel"
    price={150}
    discount={0.5}
    hotelStarRating={3}
    isLoading={true}
  />,
  <HotelCard
    id={3}
    city="Nablus"
    title="Plaza Hotel"
    price={150}
    discount={0.5}
    hotelStarRating={3}
    isLoading={true}
  />,
];

const FeaturedDeals = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const featuredDealsSelector = useAppSelector(selectFeaturedDeals);
  const { setSnackbarProps } = useCustomSnackbar();

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const resultAction = await dispatch(fetchFeaturedDealsAsync());
        const originalPromiseResult = unwrapResult(resultAction);
      } catch (rejectedValueOrSerializedError: any) {
        setSnackbarProps({
          message: rejectedValueOrSerializedError,
          type: "error",
          position: { vertical: "bottom", horizontal: "center" },
        });
      }
    };
    fetchData();
  }, [dispatch]);

  const data = featuredDealsSelector.data.map((deal: any) => (
    <HotelCard
      key={deal.hotelId}
      id={deal.hotelId}
      city={deal.cityName}
      title={deal.hotelName}
      price={deal.originalRoomPrice}
      discount={deal.finalPrice}
      roomPictures={[deal.roomPhotoUrl]}
      hotelStarRating={deal.hotelStarRating}
    />
  ));

  return (
    <Container sx={{ minWidth: "80%" }}>
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
                text="Last minute deals"
                textAlign="start"
                textWrap={false}
              />
              <Text
                type="primary"
                variant="h2"
                fontSize="25px"
                fontWeight={700}
                text="HURRY UP, THESE ARE EXPIRING SOON."
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

        {featuredDealsSelector.loading ? (
          <Slider
            isCarousel={true}
            components={components}
            slidePerPage={4}></Slider>
        ) : (
          featuredDealsSelector.data.length !== 0 && (
            <Box width={"90%"} margin={"auto"}>
              <Slider
                isCarousel={true}
                components={data}
                slidePerPage={4}></Slider>
            </Box>
          )
        )}
      </Grid>
    </Container>
  );
};

export default FeaturedDeals;
