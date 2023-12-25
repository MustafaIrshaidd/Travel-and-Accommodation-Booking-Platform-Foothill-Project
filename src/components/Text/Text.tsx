import { Typography, styled } from "@mui/material";
import { Variant } from "@mui/material/styles/createTypography";
import React from "react";

interface TextProps {
  fontSize?: string;
  letterSpacing?: number;
  type: "primary" | "secondary" | "light";
  textShadow?: boolean;
  variant?: Variant;
  text?: string;
  fontWeight?: number;
  padding?: string;
  textAlign?: "center" | "end" | "start";
  width?: string;
  textWrap?: boolean;
  onChange?: (text: string) => void;
}

const CustomText = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "type",
})<{ type: "primary" | "secondary" | "light" }>(({ theme, type }) => ({
  color:
    type === "primary"
      ? theme.palette.text.primary
      : type === "secondary"
      ? theme.palette.text.secondary
      : "white",
}));

const Text: React.FC<TextProps> = ({
  fontSize,
  letterSpacing,
  type,
  textShadow,
  variant,
  text,
  width,
  fontWeight,
  padding,
  textAlign,
  textWrap = true,
}) => {
  return (
    <CustomText
      padding={padding || ""}
      noWrap={textWrap}
      variant={variant || "body1"}
      letterSpacing={letterSpacing || 1}
      fontSize={fontSize || "16px"}
      fontWeight={fontWeight || 400}
      sx={{ textShadow: textShadow ? "2px 2px 2px rgba(0,0,0,.1)" : "" }}
      type={type}
      textAlign={textAlign || "start"}
      width={width || "100%"}>
      {text}
    </CustomText>
  );
};

export default Text;
