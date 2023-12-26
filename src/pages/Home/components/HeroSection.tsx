import React from "react";
import { Map } from "@components/common/Map";
import { Text } from "@components/common/Text";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  styled,
  useTheme,
} from "@mui/material";

const CustomText = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "type" && prop !== "textDecorationLine",
})<{ type: "primary" | "secondary" | "light"; textDecorationLine: string }>(
  ({ theme, type, textDecorationLine }) => ({
    color:
      type === "primary"
        ? theme.palette.text.primary
        : type === "secondary"
        ? theme.palette.text.secondary
        : "white",
    textDecorationLine: textDecorationLine,
  })
);

const HeroSection = () => {
  const theme = useTheme();
  return (
    <Container sx={{ minWidth: "80%" }}>
      <Grid
        container
        sx={{ backgroundColor: theme.palette.background.default }}
        height={"calc(80vh - 62px)"}
        alignItems={"center"}>
        <Grid item xs={12} md={4}>
          <Stack gap={5}>
            <Box
              width={{ xs: "100%", md: "90%" }}
              display={{ xs: "flex", md: "block" }}
              flexWrap={"wrap"}
              gap={{ xs: 1 }}
              paddingTop={3}>
              <Stack direction={"row"}>
                <CustomText
                  textDecorationLine="none"
                  type="secondary"
                  variant="body1"
                  fontSize={{ xs: "25px", md: "33px" }}
                  textAlign="start"
                  fontWeight={700}>
                  THE BEST
                </CustomText>
                <Box
                  flexGrow={100}
                  sx={{
                    backgroundColor: theme.palette.text.primary,
                    margin: "10px",
                    display: { xs: "none", md: "block" },
                  }}
                />
              </Stack>
              <Stack direction={"row"}>
                <CustomText
                  textDecorationLine="none"
                  type="light"
                  variant="body1"
                  fontSize={{ xs: "25px", md: "33px" }}
                  textAlign="start"
                  fontWeight={700}>
                  RESERVATION
                </CustomText>
                <Box
                  flexGrow={100}
                  sx={{
                    backgroundColor: theme.palette.text.secondary,
                    margin: "10px",
                    display: { xs: "none", md: "block" },
                  }}
                />
              </Stack>
              <Stack direction={"row"}>
                <CustomText
                  textDecorationLine="none"
                  type="secondary"
                  variant="body1"
                  fontSize={{ xs: "25px", md: "33px" }}
                  textAlign="start"
                  fontWeight={700}>
                  EXPERIENCE
                </CustomText>
                <Box
                  flexGrow={100}
                  sx={{
                    backgroundColor: theme.palette.text.primary,
                    margin: "10px",
                    display: { xs: "none", md: "block" },
                  }}
                />
              </Stack>
            </Box>
            <Text
              type="primary"
              width="90%"
              variant="h1"
              fontSize="20px"
              fontWeight={700}
              text="Travel and Accommodation Booking Platform Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, expedita."
              textWrap={false}
            />
          </Stack>
        </Grid>
        <Grid item height={{ xs: "60%", md: "100%" }} xs={12} md={8}>
          <Stack
            height={"100%"}
            justifyContent={"center"}
            alignItems={"center"}>
            <Box
              height={"75%"}
              width={{ xs: "100%", md: "100%" }}
              borderRadius={5}
              overflow={"hidden"}>
              <Map />
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HeroSection;
