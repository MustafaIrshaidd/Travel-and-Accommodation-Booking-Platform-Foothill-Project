import React from "react";
import { DefaultButtonProps } from "./types";
import { useTheme } from "@mui/material";
import { LoadingButton } from "@mui/lab";

const DefaultButton: React.FC<DefaultButtonProps> = ({
  startIcon,
  endIcon,
  variant,
  width,
  text,
  isDisabled,
  isLoading,
  loadingPosition,
  type,
  handleOnClick,
}) => {
  const theme = useTheme();
  return (
    <LoadingButton
    type={type||"submit"}
      disabled={isDisabled || false}
      loading={isLoading || false}
      onClick={handleOnClick}
      variant={variant || "contained"}
      loadingPosition={loadingPosition||"start"}
      startIcon={startIcon || <></>}
      endIcon={endIcon || <></>}
      sx={{
        width: width || "100%",
        height: "100%",
        alignContent: "center",
        textTransform: "none",
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        "&:hover": {
          backgroundColor: theme.palette.background.default,
        },
      }}>
      {text}
    </LoadingButton>
  );
};

export default DefaultButton;
