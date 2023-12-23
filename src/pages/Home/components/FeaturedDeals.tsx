import { Box, Grid, Link, Typography, styled, useTheme } from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import React from "react";
import { Text } from "@components/Text";
import { Slider } from "@components/Slider";

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

const FeaturedDeals = () => {
  const theme = useTheme();
  return (
    <Grid container justifyContent={"space-between"}>
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
      <Slider></Slider>
    </Grid>
  );
};

export default FeaturedDeals;
