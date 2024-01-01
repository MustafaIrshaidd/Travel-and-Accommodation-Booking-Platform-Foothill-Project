import React, { useState, useEffect } from "react";
import { Text } from "@components/common/Text";
import { Chip, Divider, Rating, Stack, Tooltip, useTheme } from "@mui/material";
import { HotelDetailsState } from "@store/features/hotels/types";

const HotelDetails: React.FC<HotelDetailsState> = ({
  data,
  loading,
  error,
}) => {
  const theme = useTheme();
  const [ratingValue, setRatingValue] = useState<number | null>(null);

  useEffect(() => {
    setRatingValue(data.starRating);
  }, [data.starRating]);

  return (
    <Stack width={"100%"} justifyContent={"start"}>
      <Stack gap={4} padding={4}>
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
      </Stack>
      <Divider />
      <Stack gap={4} padding={4}>
        <Text
          type="primary"
          fontSize="25px"
          text="What this place offers"
          textWrap={true}
        />
        <Stack direction={"row"} gap={1} flexWrap={"wrap"}>
          {data.amenities?.map((amenity, index) => {
            return (
              <Tooltip title={amenity.description}>
                <Chip
                  key={index}
                  label={amenity.name}
                  sx={{
                    color: "white",
                    backgroundColor: theme.palette.text.secondary,
                  }}
                />
              </Tooltip>
            );
          })}
        </Stack>
      </Stack>
      <Divider sx={{ visibility: { xs: "visible", lg: "hidden" } }} />
    </Stack>
  );
};

export default HotelDetails;
