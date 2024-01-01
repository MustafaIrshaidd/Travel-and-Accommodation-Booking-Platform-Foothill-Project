import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { selectHotelGallary } from "@store/features/hotels/selectors";
import { useAppDispatch, useAppSelector } from "@hooks/redux.hook";
import { fetchHotelGallaryById } from "@store/features/hotels/thunks";
import { HotelGallaryState } from "@store/features/hotels/types";
import { Box } from "@mui/material";
import { Slider } from "@components/common/Slider";

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const Gallary: React.FC<HotelGallaryState> = ({ data, loading, error }) => {
  const hotelImagesComponents = data.map((imageObject) => (
    <Box
      key={imageObject.id}
      component={"img"}
      src={imageObject.url}
      height={"400px"}
      width={"100%"}
      sx={{ objectFit: "cover" }}
    />
  ));

  return (
    <>
      {loading ? (
        <></>
      ) : (
        data.length > 0 && (
          <Slider
            slidePerPage={4}
            isCarousel
            components={hotelImagesComponents}
          />
        )
      )}
    </>
  );
};

export default Gallary;
