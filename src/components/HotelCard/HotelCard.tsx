import {
  Card,
  CardActionArea,
  CardContent,
  Rating,
  Skeleton,
  Stack,
  styled,
  useTheme,
} from "@mui/material";
import { Slider } from "@components/Slider";
import React from "react";
import { Text } from "@components/Text";
import FmdGoodIcon from "@mui/icons-material/FmdGood";

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
  roomPictures = [],
  price,
  discount,
  hotelStarRating,
  isLoading = false,
}) => {
  const theme = useTheme();
  return (
    <Card sx={{ maxWidth: 345 }}>
      {isLoading ? (
        <Skeleton height={"200px"} width={"345px"} />
      ) : (
        <Slider height="200px" components={imagesArray} slidePerPage={1} />
      )}
      <CardActionArea>
        <CardContent sx={{ backgroundColor: theme.palette.background.paper }}>
          <Stack gap={"10px"}>
            <Text type="primary" fontSize="25px" text={title} />
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
                  sx={{ fontSize: "15px", color: theme.palette.text.secondary }}
                />
                <Text type="primary" fontSize="15px" text={city} />
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
                  text={`${discount * price}`}
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
  );
};

export default HotelCards;