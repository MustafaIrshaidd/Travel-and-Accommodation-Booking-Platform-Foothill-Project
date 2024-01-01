import { ReviewCard } from "@components/common/ReviewCard";
import { Slider } from "@components/common/Slider";
import { Text } from "@components/common/Text";
import { Box, Stack } from "@mui/material";
import { HotelReviewsState } from "@store/features/hotels/types";
import React from "react";

const Reviews: React.FC<HotelReviewsState> = ({ data, loading, error }) => {
  const hotelReviewsComponents = data.map((dataObject) => (
    <ReviewCard
      key={dataObject.reviewId}
      customerName={dataObject.customerName}
      rating={dataObject.rating}
      reviewId={dataObject.reviewId}
      description={dataObject.description}
    />
  ));

  return (
    <Stack gap={4}>
      <Box paddingX={4}>
        <Text type="primary" fontSize="25px" text="Reviews" textWrap={true} />
      </Box>
      <Box paddingX={8}>
        {loading ? (
          <></>
        ) : (
          data.length > 0 && (
            <Slider
              isCarousel
              slidePerPage={3}
              components={hotelReviewsComponents}></Slider>
          )
        )}
      </Box>
    </Stack>
  );
};

export default Reviews;
