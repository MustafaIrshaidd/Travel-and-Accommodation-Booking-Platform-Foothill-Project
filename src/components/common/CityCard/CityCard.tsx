import LoadingCard from "@components/common/LoadingCard/LoadingCard";
import { Text } from "@components/common/Text";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  styled,
} from "@mui/material";
import React from "react";

interface CityCardProps {
  cityId: number;
  cityName: string;
  countryName: string;
  description: string;
  thumbnailUrl: string;
  isLoading?: boolean;
}

const CityCardContent = styled(CardContent)(({ theme }) => ({
  position: "absolute",
  bottom: "10px",
  left: "10px",
  zIndex: 2,
}));

const CityCardMedia = styled(CardMedia)(({ theme }) => ({
  height: 350,
  width: "100%",
  "&:after": {
    content: "''",
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(180deg, transparent 0, transparent 78%, rgba(0, 0, 0, 0.65))",
    zIndex: 1,
  },
}));

const CityCard: React.FC<CityCardProps> = ({
  cityId,
  cityName,
  countryName,
  description,
  thumbnailUrl,
  isLoading = false,
}) => {
  return (
    <>
      {isLoading ? (
        <LoadingCard width="250px" height="500px"></LoadingCard>
      ) : (
        <Card sx={{ minWidth: 300, position: "relative" }}>
          <CardActionArea>
            <CityCardMedia image={thumbnailUrl} title="green iguana" />
            <CityCardContent>
              <Text
                type="light"
                textShadow={true}
                fontWeight={700}
                letterSpacing={3}
                text={countryName.toLocaleUpperCase()}
              />
              <Text type="light" text={cityName} />
            </CityCardContent>
          </CardActionArea>
        </Card>
      )}
    </>
  );
};

export default CityCard;
