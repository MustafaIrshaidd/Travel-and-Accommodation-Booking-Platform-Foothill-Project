import { DefaultButton } from "@components/Buttons";
import { Text } from "@components/common/Text";
import { MultipleSelectCheckmarks } from "@components/inputs/MultipleSelectCheckmarks";
import RangeSlide from "@components/inputs/RangeSlide/RangeSlider";
import { Box, Rating, Stack, useTheme } from "@mui/material";

import { useFormik } from "formik";
import React from "react";

const typesOfRooms = ["Luxury", "Budget", "Boutique"];
const amenities = [
  "Free WiFi",
  "Room Service",
  "Luggage Storage",
  "Pet-Friendly",
];

const Filter = () => {
  const [value, setValue] = React.useState<number | null>(0);
  const theme = useTheme();

  const formik = useFormik({
    initialValues: {
      rangeSlide: [100, 3000],
      rating: 3,
      typeOfRooms: [],
    },
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  return (
    <form style={{ height: "100%" }} onSubmit={formik.handleSubmit}>
      <Stack direction={"column"} width={"70%"} margin={"auto"} gap={3}>
        <Stack direction={"column"} gap={3}>
          <RangeSlide
            min={formik.initialValues.rangeSlide[0]}
            max={formik.initialValues.rangeSlide[1]}
            currency="$"
            initialMin={500}
            initialMax={2500}
            onChange={(values) => formik.setFieldValue("rangeSlide", values)}
          />
          <Box>
            <Text type="primary" text="Rating"></Text>
            <Rating
              name="simple-controlled"
              value={formik.values.rating}
              onChange={(event, newValue) => {
                formik.setFieldValue("rating", newValue);
                setValue(newValue);
              }}
              sx={{
                "& .MuiRating-iconFilled": {
                  color: theme.palette.text.secondary,
                },
                "& .MuiRating-iconHover": {
                  color: theme.palette.text.secondary,
                },
              }}
            />
          </Box>
          <MultipleSelectCheckmarks
            label="Type Of Rooms"
            selectionMenu={typesOfRooms}
            onChange={(values) => {
              formik.setFieldValue("typeOfRooms", values);
            }}
          />
          <MultipleSelectCheckmarks
            label="Amenities"
            selectionMenu={amenities}
            onChange={(values) => {
              formik.setFieldValue("amenities", values);
            }}
          />
        </Stack>
        <DefaultButton
          loadingPosition="center"
          variant="contained"
          type="submit">
          Filter Hotels
        </DefaultButton>
      </Stack>
    </form>
  );
};

export default Filter;
