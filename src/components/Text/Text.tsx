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
  padding?: string;
  textAlign?: "center" | "end" | "start";
  width?: string;
  onChange?: (text: string) => void;
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
  width,
  fontWeight,
  padding,
  textAlign,
  onChange,
}) => {
  return (
    <CustomText
      onChange={(text: any) => (onChange ? onChange(text) : {})}
      padding={padding || ""}
      noWrap
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
