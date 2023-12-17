import { styled } from "@mui/material";

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export const AsideDrawer = styled("aside", {
  shouldForwardProp: (prop) => prop !== "isOpen",
})<{ isOpen?: boolean }>(({ theme, isOpen }) => ({
  transition: "width 0.3s ease ,height 0.3s ease",
  position: "absolute",
  backgroundColor: theme.palette.background.default,
  bottom: 0,
  zIndex: 9,
  overflow: "hidden",
  [theme.breakpoints.up("lg")]: {
    width: isOpen ? "50%" : "0%",
    paddingTop: 64,
    right: 0,
    top: 0,
  },
  [theme.breakpoints.down("lg")]: {
    width:"84vw",
    left:0,
    right:0,
    overflowY: "scroll",
    height: isOpen ? "calc(100vh - 55px)" : "0",
    padding: theme.spacing(0, 3),
  },
  boxShadow: theme.shadows[5],
}));

export const AdminMain = styled("main", {
  shouldForwardProp: (prop) => prop !== "isOpen",
})<{ isOpen?: boolean }>(({ theme, isOpen }) => ({
  height: "100vh",
  flexGrow: 1,
  [theme.breakpoints.down("lg")]: {
    width: isOpen ? "80vw" : "50vw",
  },
  [theme.breakpoints.up("lg")]: {
    width: "100%",
  },
  backgroundColor: theme.palette.background.paper,
  overflow: "hidden",
  transition: "width 0.3s ease",
  padding: theme.spacing(3, 3),
}));
