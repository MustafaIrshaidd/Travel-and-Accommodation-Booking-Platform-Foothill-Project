import { Avatar, Rating, Stack, useTheme } from "@mui/material";
import { Review } from "@store/features/hotels/types";
import React from "react";
import { Text } from "@components/common/Text";

const ReviewCard: React.FC<Review> = ({
  reviewId,
  customerName,
  rating,
  description,
}) => {
  const theme = useTheme();
  return (
    <Stack
      overflow={"hidden"}
      gap={3}
      justifyContent={"start"}
      alignItems={"center"}
      boxShadow={theme.shadows[3]}
      margin={2}
      minHeight={"200px"}
      maxHeight={"200px"}
      padding={3}
      borderRadius={"35px"}>
      <Text
        type="primary"
        fontWeight={500}
        text={customerName}
        textAlign={"center"}
      />
      <Stack alignItems={"center"}>
        <Rating
          name="read-only"
          value={rating}
          sx={{
            "& .MuiRating-iconFilled": {
              color: theme.palette.text.secondary,
            },
            "& .MuiRating-iconHover": {
              color: theme.palette.text.secondary,
            },
          }}
          readOnly
          size={"small"}
        />
      </Stack>
      <Text
        width={"100%"}
        textWrap={true}
        type="primary"
        text={description}
        textAlign={"center"}
      />
    </Stack>
  );
};

export default ReviewCard;
