import React from "react";
import { Text } from "@components/common/Text";
import { Box, Container, Rating, Stack, styled, useTheme } from "@mui/material";

const HotelDetails = () => {
  const theme = useTheme();
  return (
    <Container maxWidth={"md"}>
      <Stack gap={4} paddingY={10}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          alignItems={{ xs: "start", sm: "center" }}
          justifyContent={"space-between"}
          gap={{xs:2}}>
          <Stack alignItems={"center"}>
            <Text
              textShadow
              type="secondary"
              text="Plaza Hotel"
              fontSize="35px"
              fontWeight={700}
            />
            <Text
              type="primary"
              text="Ramallah, Palestine"
              fontSize="15px"
              fontWeight={500}
            />
          </Stack>
          <Rating
            name="read-only"
            value={3}
            sx={{
              "& .MuiRating-iconFilled": {
                color: theme.palette.text.secondary,
              },
              "& .MuiRating-iconHover": {
                color: theme.palette.text.secondary,
              },
            }}
            readOnly
            size={"medium"}
          />
        </Stack>
        <Text
          type="primary"
          fontSize="20px"
          fontWeight={500}
          textWrap={false}
          text="Experience luxury and comfort at Plaza Hotel, located in the heart of Ramallah. Our hotel offers a perfect blend of modern amenities and traditional hospitality.
"
        />
      </Stack>
    </Container>
  );
};

export default HotelDetails;
