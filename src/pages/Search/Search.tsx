import React from "react";
import { Grid, useTheme, styled } from "@mui/material";
import Filter from "./components/Filter";

const FilterDrawer = styled("aside", {
  shouldForwardProp: (prop) => prop !== "isOpen",
})<{ isOpen?: boolean }>(({ theme, isOpen }) => ({
  transition: "width 0.3s ease ,height 0.3s ease",
  position: "absolute",
  backgroundColor: theme.palette.background.default,
  bottom: 0,
  zIndex: 9,
  overflow: "hidden",
  [theme.breakpoints.up("lg")]: {
    width: isOpen ? "20%" : "0%",
    paddingTop: 64,
    left: 0,
    top: 0,
  },
  [theme.breakpoints.down("lg")]: {
    width: "84vw",
    left: 0,
    right: 0,
    overflowY: "scroll",
    height: isOpen ? "calc(100vh - 55px)" : "0",
    padding: theme.spacing(0, 3),
  },
  boxShadow: theme.shadows[5],
}));

const Search = () => {
  const theme = useTheme();
  return (
    <Grid container height={"100vh"} position={"relative"}>
      <FilterDrawer
        isOpen={true}
        sx={{ backgroundColor: theme.palette.background.paper }}>
        <Filter></Filter>
      </FilterDrawer>
      <Grid
        item
        lg={12}
        sx={{ backgroundColor: theme.palette.background.default }}></Grid>
    </Grid>
  );
};

export default Search;
