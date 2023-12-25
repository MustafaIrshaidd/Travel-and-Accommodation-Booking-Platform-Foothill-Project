import { Card, CardContent, CardMedia } from "@mui/material";
import React from "react";

const CityCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="photo.webp"
        title="green iguana"
      />
      <CardContent>

      </CardContent>
    </Card>
  );
};

export default CityCard;
