import React, { useState, useEffect } from "react";
import { Text } from "@components/common/Text";
import { Chip, Rating, Stack, useTheme } from "@mui/material";
import { HotelDetails as HotelDetailsProps } from "@store/features/hotels/types";

const HotelDetails: React.FC<{ data: HotelDetailsProps }> = ({ data }) => {
  const theme = useTheme();
  const [ratingValue, setRatingValue] = useState<number | null>(null);

  useEffect(() => {
    setRatingValue(data.starRating);
  }, [data.starRating]);

  return (
    <Stack gap={4}>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        alignItems={{ xs: "start", sm: "center" }}
        justifyContent={"space-between"}
        gap={{ xs: 2 }}>
        <Stack alignItems={"start"}>
          <Text
            textShadow
            type="secondary"
            text={data.hotelName}
            fontSize="35px"
            fontWeight={700}
          />
          <Text
            type="primary"
            text={data.location}
            fontSize="15px"
            fontWeight={500}
          />
          <Chip
            sx={{ marginTop: "10px" }}
            variant="outlined"
            label={`Number of Rooms ${data.availableRooms}`}
          />
        </Stack>
        <Rating
          name="read-only"
          value={ratingValue}
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
        text={`${data.description}`}
      />
      <Stack direction={"row"} gap={1} flexWrap={"wrap"}>
        {data.amenities?.map((amenity, index) => {
          return <Chip key={index} label={amenity.name} />;
        })}
      </Stack>
    </Stack>
  );
};

export default HotelDetails;
