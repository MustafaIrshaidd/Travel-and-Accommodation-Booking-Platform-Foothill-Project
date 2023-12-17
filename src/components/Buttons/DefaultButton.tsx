import React from "react";
import { DefaultButtonProps } from "./types";
import { Stack, styled } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Text } from "@components/Text";

// Updated CustomButton to handle both contained and outlined variants
const CustomButton = styled(LoadingButton)<DefaultButtonProps>(
  ({ theme, width, variant, boxShadow }) => ({
    width: width,
    height: "100%",
    alignContent: "center",
    textTransform: "none",
    backgroundColor:
      variant === "outlined" ? "transparent" : theme.palette.background.default,
    border:
      variant === "outlined"
        ? `1px solid ${theme.palette.text.primary}`
        : "none",
    color: theme.palette.text.primary,
    "&:hover": {
      backgroundColor:
        variant === "outlined"
          ? theme.palette.background.paper
          : theme.palette.background.default,
      borderColor: theme.palette.text.primary,
      boxShadow: boxShadow || theme.shadows[2],
    },
    boxShadow: boxShadow || theme.shadows[4],
  })
);

const DefaultButton: React.FC<DefaultButtonProps> = ({
  disableRipple,
  startIcon,
  endIcon,
  variant,
  width,
  text,
  isDisabled,
  isLoading,
  loadingPosition,
  type,
  boxShadow,
  alignItems,
  children,
  handleOnClick,
}) => {
  return (
    <CustomButton
      boxShadow={boxShadow || ""}
      disableRipple={disableRipple || false}
      width={width || "100%"}
      type={type || "submit"}
      disabled={isDisabled || false}
      loading={isLoading || false}
      onClick={handleOnClick}
      variant={variant || "contained"}
      loadingPosition={loadingPosition || "start"}
      startIcon={startIcon || <></>}
      endIcon={endIcon || <></>}
      alignItems={alignItems || "center"}>
      {children || <></>}
    </CustomButton>
  );
};

export default DefaultButton;
