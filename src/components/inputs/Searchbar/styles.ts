import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { SearchbarProps } from "./types";

const SearchField = styled("div", {
  shouldForwardProp: (prop) => prop !== "width",
})<SearchbarProps>(({ theme, width }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "transparent",
  "&:hover": {
    backgroundColor: "transparent",
  },
  marginLeft: 0,
  [theme.breakpoints.up("sm")]: {
    width: `${width}%`,
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: "2",
}));

const StyledInputBase = styled(InputBase, {
  shouldForwardProp: (prop) => prop !== "width",
})<SearchbarProps>(({ theme, width }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    backgroundColor: theme.palette.background.default,
    boxShadow: theme.shadows[1],
    [theme.breakpoints.up("sm")]: {
      width: `${width}%`,
      "&:focus": {
        width: "100%",
      },
    },
  },
  width: "100%",
}));

export { SearchField, SearchIconWrapper, StyledInputBase };
