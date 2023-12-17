import React from "react";
import { DefaultButtonProps } from "./types";
import { styled } from "@mui/material";
import { LoadingButton } from "@mui/lab";


// Updated CustomButton to handle both contained and outlined variants
const CustomButton = styled(LoadingButton)<DefaultButtonProps>(
  ({ theme, width, variant, boxShadow, justifyContent, height, padding, borderRadius }) => ({
    padding: padding,
    width: width,
    height: height,
    alignContent: "center",
    justifyContent: justifyContent,
    textTransform: "none",
    borderRadius: borderRadius,
    backgroundColor:
      variant === "outlined" ? "transparent" : theme.palette.background.default,
    border: "none",
    color: theme.palette.text.primary,
    "&:hover": {
      border: "none",
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
  isDisabled,
  isLoading,
  loadingPosition,
  type,
  boxShadow,
  alignItems,
  border,
  justifyContent,
  borderRadius,
  height,
  padding,
  children,
  handleOnClick,
}) => {
  return (
    <CustomButton
      borderRadius={borderRadius || ""}
      padding={padding || ""}
      height={height || ""}
      justifyContent={justifyContent || "center"}
      border={border}
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
