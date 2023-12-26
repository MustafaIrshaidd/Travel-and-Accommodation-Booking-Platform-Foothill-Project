import { Text } from "@components/common/Text";
import { Rating, Slider, Stack, useTheme } from "@mui/material";
import React from "react";

const Filter = () => {
  const theme = useTheme();

  return (
    <Stack direction={"column"} width={"70%"} margin={"auto"}>
      <Stack direction={"column"}>
        <Rating
          name="customized"
          value={null}
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
    </Stack>
  );
};

export default Filter;
