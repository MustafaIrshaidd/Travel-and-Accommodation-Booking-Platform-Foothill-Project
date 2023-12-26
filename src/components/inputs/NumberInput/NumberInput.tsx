import { IconButton, Stack, TextField, styled } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Text } from "@components/common/Text";

const NumberField = styled(TextField)(({ theme }) => ({}));

const reducerfunc = (acc: any, value: any) => {
  console.log(acc, value);
  switch (value.type) {
    case "INCREMENT":
      return { ...acc, count: acc.count + 1 };
    case "DECREMENT":
      return { ...acc, count: acc.count - 1 };
    default:
      break;
  }
  return acc;
};

interface NumberInputProps {
  minValue?: number;
  maxValue?: number;
  initialValue?: number;
  onChange?: (value: string) => void;
}

const NumberInput: React.FC<NumberInputProps> = ({
  minValue = 0,
  maxValue = 10,
  initialValue = 0,
  onChange,
}) => {
  const [state, dispatch] = React.useReducer(reducerfunc, {
    count: initialValue,
  });

  React.useEffect(() => {
    onChange && onChange(state.count);
  }, [state.count]);

  return (
    <Stack
      width={"100%"}
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}>
      <IconButton
        disabled={state.count == minValue}
        onClick={() => dispatch({ type: "DECREMENT" })}>
        <RemoveIcon />
      </IconButton>
      <Text text={state.count} type="primary" textAlign="center" />
      <IconButton
        disabled={state.count == maxValue}
        onClick={() => dispatch({ type: "INCREMENT" })}>
        <AddIcon />
      </IconButton>
    </Stack>
  );
};

export default NumberInput;
