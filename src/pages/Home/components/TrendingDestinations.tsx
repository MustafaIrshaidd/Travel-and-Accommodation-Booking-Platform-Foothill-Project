import { Box, Grid, Link, Typography, styled, useTheme } from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import React from "react";
import { Text } from "@components/Text";
import { Slider } from "@components/Slider";
import { HotelCard } from "@components/HotelCard";
import { useAppDispatch, useAppSelector } from "@hooks/redux.hook";
import { unwrapResult } from "@reduxjs/toolkit";
import { useCustomSnackbar } from "@hooks/useCustomSnackbar.hook";
import { fetchTrendingDestintations } from "@store/features/content/contentThunks";
import { selectFeaturedDeals } from "@store/selectors/content";
import Skeleton from "@mui/material";
import { CityCard } from "@components/CityCard";

interface HeaderContentProps {
  isCentered: boolean;
}

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
  <CityCard
    cityId={4}
    cityName={"Nablus"}
    countryName={"Palestine"}
    description={"hello this is nablus"}
    thumbnailUrl={"photo.webp"}
  />,
  <CityCard
    cityId={5}
    cityName={"Nablus"}
    countryName={"Palestine"}
    description={"hello this is nablus"}
    thumbnailUrl={"photo.webp"}
  />,
];

const TrendingDestinations = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const featuredDealsSelector = useAppSelector(selectFeaturedDeals);
  const { setSnackbarProps } = useCustomSnackbar();

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const resultAction = await dispatch(fetchTrendingDestintations());
        const originalPromiseResult = unwrapResult(resultAction);
        console.log(originalPromiseResult);
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
              text="STAY AND EAT LIKE A LOCAL"
              textAlign="start"
              textWrap={false}
            />
            <Text
              type="primary"
              variant="h2"
              fontSize="25px"
              fontWeight={700}
              text="Trending Destintations"
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

export default TrendingDestinations;
