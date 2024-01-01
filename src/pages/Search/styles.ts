import { Box, styled } from "@mui/material";

export const FilterDrawer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isOpen",
})<{ isOpen?: boolean }>(({ theme, isOpen }) => ({
  transition: "width 0.3s ease ,height 0.3s ease",
  backgroundColor: theme.palette.background.default,
  width: isOpen ? "100%" : "0",
  position: "absolute",
  zIndex: 9,
  left: 0,
  top: 0,
  overflow: "hidden",
  height: "100vh",
  [theme.breakpoints.up("md")]: {
    position: "relative",
    width: isOpen ? "50%" : "0%",
  },
}));

export const DrawerHeader = styled(Box)(({ theme }) => ({
  paddingTop: 64,
}));

export const SearchDrawer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isOpen",
})<{ isOpen?: boolean }>(({ theme, isOpen }) => ({
  transition: "width 0.3s ease ,height 0.3s ease",
  width: isOpen ? "50%" : "100%",
}));
