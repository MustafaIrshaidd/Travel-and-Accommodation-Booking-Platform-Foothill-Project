import {
  AppBar,
  Box,
  Divider,
  IconButton,
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
  padding: "0",
}));

export const NavAppBar = styled(AppBar)<{ isOpen?: boolean }>(
  ({ theme, isOpen = false }) => ({
    boxShadow: "none",
  })
);

export const SearchButton = styled(IconButton)<{ isRotating?: boolean }>(
  ({ theme, isRotating = false }) => ({
    transform: isRotating
      ? "translateY(0px) rotate(360deg)"
      : "translateY(0) rotate(0deg)",
    transition: "transform 0.5s ease-in-out",
    padding: "0",
    color:"white"
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
