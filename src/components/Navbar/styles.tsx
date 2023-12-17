import {
  AppBar,
  Box,
  Divider,
  Menu,
  MenuItem,
  Toolbar,
  styled,
} from "@mui/material";

export const NavToolbar = styled(Toolbar)(({ theme }) => ({
  justifyContent: "space-between",
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  boxShadow: "none",
}));

export const NavAppBar = styled(AppBar)(({ theme }) => ({
  boxShadow: "none",
}));

export const NavAnimatedContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isActivated",
})<{ isActivated: boolean }>(({ theme, isActivated }) => ({
  transform: isActivated ? "translateY(70px)" : "translateY(0px)",
  transition: "transform 0.3s ease-in-out",
  flexDirection: "column",
}));

export const NavAnimatedItem = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isActivated" && prop !== "isTop",
})<{ isActivated: boolean; isTop: boolean }>(
  ({ theme, isActivated, isTop }) => ({
    position: isActivated
      ? isTop
        ? "absolute"
        : "relative"
      : isTop
      ? "relative"
      : "absolute",

    top: isTop ? "0px" : "none",
    bottom: isTop ? "none" : "70px",
    height: "50px",
    width: "50vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  })
);

export const NavDivider = styled(Divider, {
  shouldForwardProp: (prop) => prop !== "isActivated",
})<{ isActivated: boolean }>(({ theme, isActivated }) => ({
  transform: isActivated ? "translateY(80px)" : "translateY(10px)",
  transition: "transform 0.3s ease-in-out",
}));

export const NavMenu = styled(Menu)(({ theme }) => ({
  top: "10px",
  "& .MuiPaper-root": {
    borderRadius: "15px !important",
    boxShadow: 2,
  },
  "& ul": {
    boxShadow: 1,
    border: "none",
    width: "200px !important",
    backgroundColor: theme.palette.background.default,
  },
}));

export const NavMenuItem = styled(MenuItem)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  fontSize: "16px",
}));
