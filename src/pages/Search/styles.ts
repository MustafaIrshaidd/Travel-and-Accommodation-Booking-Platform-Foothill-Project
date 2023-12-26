import { Box, styled } from "@mui/material";

export const FilterDrawer = styled("aside", {
  shouldForwardProp: (prop) => prop !== "isOpen",
})<{ isOpen?: boolean }>(({ theme, isOpen }) => ({
  transition: "width 0.3s ease ,height 0.3s ease",
  position: "absolute",
  backgroundColor: theme.palette.background.default,
  bottom: 0,
  zIndex: 9,
  overflow: "hidden",
  [theme.breakpoints.up("lg")]: {
    width: isOpen ? "30%" : "0%",
    left: 0,
    top: 0,
  },
  [theme.breakpoints.down("lg")]: {
    width: "88vw",
    inset: 0,
    height: isOpen ? "calc(100vh - 64px)" : "0",
    padding: theme.spacing(0, 3),
  },
  boxShadow: theme.shadows[5],
}));

export const DrawerHeader = styled(Box)(({ theme }) => ({
  paddingTop: 64,
}));
