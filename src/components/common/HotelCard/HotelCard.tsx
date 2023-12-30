import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Rating,
  Skeleton,
  Stack,
  styled,
  useTheme,
} from "@mui/material";
import { Slider } from "@components/common/Slider";
import React from "react";
import { Text } from "@components/common/Text";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import LoadingCard from "@components/common/LoadingCard/LoadingCard";

const Image = styled("img")({
  objectFit: "cover",
  width: "345px",
  height: "100%",
});

interface HotelCardsProps {
  id: number;
  city: string;
  title: string;
  roomPictures?: string[];
  price: number;
  discount: number;
  hotelStarRating: number;
  isLoading?: boolean;
  onClick?: () => void;
}

const imagesArray = [
  <Image src="photo.webp" />,
  <Image src="photo.webp" />,
  <Image src="photo.webp" />,
];

const HotelCards: React.FC<HotelCardsProps> = ({
  id,
  city,
  title,
  roomPictures = ["photo.webp"],
  price,
  discount,
  hotelStarRating,
  isLoading = false,
  onClick,
}) => {
  const theme = useTheme();

  const roomsPictureArrayComponents = roomPictures.map((picture: any) => (
    <Box
      component={"img"}
      src={picture}
      height={"250px"}
      width={"100%"}
      sx={{ objectFit: "cover" }}
    />
  ));

  return (
    <>
      {isLoading ? (
        <LoadingCard
          height="400px"
          width="200px"
          imageHeight="300px"
          rows={3}></LoadingCard>
      ) : (
        <Card sx={{ boxShadow: theme.shadows[15] }}>
          <CardMedia>
            {roomsPictureArrayComponents && roomPictures.length !== 0 && (
              <Slider
                components={roomsPictureArrayComponents}
                slidePerPage={1}
                isSliderControllersVisible={false}
              />
            )}
          </CardMedia>
          <CardActionArea onClick={onClick}>
            <CardContent
              sx={{ backgroundColor: theme.palette.background.paper }}>
              <Stack gap={3}>
                <Text type="primary" fontSize="20px" text={title} />
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"space-between"}>
                  <Stack
                    gap={"5px"}
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"start"}>
                    <FmdGoodIcon
                      sx={{
                        fontSize: "15px",
                        color: theme.palette.text.secondary,
                      }}
                    />
                    <Text type="primary" fontSize="15px" text={city} />
                  </Stack>
                  <Rating
                    name="read-only"
                    value={hotelStarRating}
                    sx={{
                      "& .MuiRating-iconFilled": {
                        color: theme.palette.text.secondary,
                      },
                      "& .MuiRating-iconHover": {
                        color: theme.palette.text.secondary,
                      },
                    }}
                    readOnly
                    size="small"
                  />
                </Stack>
                <Stack direction={"row"} justifyContent={"start"} gap={1}>
                  <Stack
                    sx={{ backgroundColor: theme.palette.text.secondary }}
                    borderRadius={"10px"}
                    padding={"2px 5px"}
                    direction={"row"}
                    justifyContent={"start"}
                    alignItems={"end"}>
                    <Text
                      fontWeight={500}
                      type="light"
                      fontSize="20px"
                      text={`${price}$`}
                      width="fit-content"
                      textDecorationLine="line-through"
                    />
                  </Stack>
                  <Stack
                    direction={"row"}
                    justifyContent={"start"}
                    alignItems={"end"}>
                    <Text
                      fontWeight={700}
                      type="primary"
                      fontSize="20px"
                      text={`${discount}`}
                      width="fit-content"
                    />
                    <Text
                      fontWeight={700}
                      type="primary"
                      text={"$"}
                      width="fit-content"
                    />
                  </Stack>
                </Stack>
              </Stack>
            </CardContent>
          </CardActionArea>
        </Card>
      )}
    </>
  );
};

export default HotelCards;
