import { Text } from "@components/common/Text";
import { Slider, Stack } from "@mui/material";
import React from "react";
function valuetext(value: number) {
  return `${value}$`;
}

const minDistance = 10;
const RangeSlide = () => {
  const [value, setValue] = React.useState<number[]>([0, 100]);
  const handleChange = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }
    if (activeThumb === 0) {
      setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
    } else {
      setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
    }
  };
  return (
    <Stack direction={"column"}>
      <Text
        type={"primary"}
        fontSize="20px"
        fontWeight={400}
        text={`Price Range [${value[0] + `-` + value[1]}]`}
      />
      <Slider
        getAriaLabel={() => "Minimum distance"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="off"
        getAriaValueText={valuetext}
        disableSwap
      />
    </Stack>
  );
};

export default RangeSlide;
