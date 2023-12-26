import React from "react";
import { Skeleton, Stack } from "@mui/material";

interface LoadingCardProps {
  width?: string;
  height?: string;
  rows?: number;
  imageHeight?: string;
}

const LoadingCard: React.FC<LoadingCardProps> = ({
  width = "100%",
  height = "100%",
  imageHeight = "0",
  rows = 0,
}) => {
  return (
    <Stack
      height={height}
      width={width}
      direction={"column"}
      justifyContent={"start"}
      alignItems={"start"}
      gap={"10px"}>
      {imageHeight == "0" && (
        <Skeleton width={width} height={height}></Skeleton>
      )}
      {imageHeight && <Skeleton height={imageHeight} width={width}></Skeleton>}
      {rows !== 0 &&
        Array.from({ length: rows }).map((_, index) => (
          <Skeleton
            key={index}
            width={100 / (index + 1)}
            height={"30px"}></Skeleton>
        ))}
    </Stack>
  );
};

export default LoadingCard;
