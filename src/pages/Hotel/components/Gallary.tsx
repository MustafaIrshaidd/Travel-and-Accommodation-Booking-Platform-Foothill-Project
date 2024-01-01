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

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    rows: 4,
    cols: 4,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
];

export default Gallary;
