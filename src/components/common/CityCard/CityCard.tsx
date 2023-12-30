import LoadingCard from "@components/common/LoadingCard/LoadingCard";
import { Text } from "@components/common/Text";
import {
  Box,
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
  boxSizing: "border-box",
  position: "absolute",
  bottom: "10px",
  left: "10px",
  zIndex: 2,
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
        <Card sx={{ position: "relative" }}>
          <CardActionArea>
            <Box
              sx={{
                "&:after": {
                  content: "''",
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7))",
                  zIndex: 1,
                },
                transition: "all 0.5s ease-in-out",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}>
              <Box
                component={"img"}
                src={thumbnailUrl}
                width={"100%"}
                height={350}
                sx={{
                  objectFit: "cover",
                }}
              />
            </Box>
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
