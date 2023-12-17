import { Typography, styled } from "@mui/material";
import { Variant } from "@mui/material/styles/createTypography";
import React from "react";

interface TextProps {
  fontSize?: string;
  letterSpacing?: number;
  type: "primary" | "secondary";
  textShadow?: boolean;
  variant?: Variant;
  text?: string;
  fontWeight?: number;
  padding?:string;
}

const CustomText = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "type",
})<{ type: "primary" | "secondary" }>(({ theme, type }) => ({
  color:
    type === "primary"
      ? theme.palette.text.primary
      : theme.palette.text.secondary,
}));

const Text: React.FC<TextProps> = ({
  fontSize,
  letterSpacing,
  type,
  textShadow,
  variant,
  text,
  fontWeight,
  padding,
}) => {
  return (
    <CustomText
    padding={padding||""}
      noWrap
      variant={variant || "body1"}
      letterSpacing={letterSpacing || 1}
      fontSize={fontSize || "16px"}
      fontWeight={fontWeight || 400}
      sx={{ textShadow: textShadow ? "2px 2px 2px rgba(0,0,0,.1)" : "" }}
      type={type}>
      {text}
    </CustomText>
  );
};

export default Text;
