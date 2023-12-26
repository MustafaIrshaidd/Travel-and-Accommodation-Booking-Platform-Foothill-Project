import { Text } from "@components/common/Text";
import { Slider, Stack, useTheme } from "@mui/material";
import React from "react";

function valuetext(value: number) {
  return `${value}$`;
}

const minDistance = 10;

interface RangeSlideProps {
  min?: number;
  max?: number;
  initialMin?: number;
  initialMax?: number;
  currency?: string;
  onChange: (values: number | number[]) => void;
}

const RangeSlide: React.FC<RangeSlideProps> = ({
  min = 0,
  max = 100,
  initialMin = 0,
  initialMax = 0,
  currency = "",
  onChange,
}) => {
  const theme = useTheme();
  const [value, setValue] = React.useState<number[]>([initialMin, initialMax]);

  const handleChange = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }
    let values;
    if (activeThumb === 0) {
      values = [Math.min(newValue[0], value[1] - minDistance), value[1]];
      setValue(values);
    } else {
      values = [Math.min(newValue[0], value[1] - minDistance), value[1]];
      setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
    }
    onChange(values);
  };

  return (
    <Stack direction={"column"}>
      <Text
        type={"primary"}
        text={`Price Range [${
          value[0] + currency + `-` + value[1] + currency
        }]`}
      />
      <Slider
        sx={{ color: theme.palette.text.secondary }}
        id={"rangeSlide"}
        getAriaLabel={() => "Minimum distance"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="off"
        getAriaValueText={valuetext}
        disableSwap
        min={min}
        max={max}
      />
    </Stack>
  );
};

export default RangeSlide;
