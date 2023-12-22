import { Map } from "@components/Map";
import { Text } from "@components/Text";
import { Box, Grid, Stack, Typography, useTheme } from "@mui/material";
import React from "react";

const HeroSection = () => {
  const theme = useTheme();
  return (
    <Grid
      container
      sx={{ backgroundColor: theme.palette.background.default }}
      height={"calc(80vh - 62px)"}
      alignItems={"center"}
      align-content={"center"}
      gap={0}>
      <Grid item xs={12} md={6}>
        <Stack gap={1} padding={"20px"}>
          <Text
            type="secondary"
            variant="body1"
            fontSize="12px"
            fontWeight={700}
            text="THE BEST RESERVATION EXPERIENCE"
            textAlign="start"
            textWrap={false}
          />
          <Text
            type="primary"
            variant="h1"
            fontSize="36px"
            fontWeight={700}
            text="Travel and Accommodation Booking Platform"
            textWrap={false}
          />
        </Stack>
      </Grid>
      <Grid item height={{ xs: "60%", md: "100%" }} xs={12} md={6}>
        <Stack height={"100%"} justifyContent={"center"} alignItems={"center"}>
          <Box
            height={"75%"}
            width={{ xs: "100%", md: "60%" }}
            borderRadius={5}
            overflow={"hidden"}>
            <Map />
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default HeroSection;
