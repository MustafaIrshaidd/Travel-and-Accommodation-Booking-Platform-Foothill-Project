import React from "react";
import { Grid, useTheme, styled, Box, IconButton } from "@mui/material";
import Filter from "./components/Filter";
import CloseIcon from "@mui/icons-material/Close";
import FilterListIcon from "@mui/icons-material/FilterList";
import { Text } from "@components/common/Text";

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

const DrawerHeader = styled(Box)(({ theme }) => ({
  paddingTop: 64,
}));

const Search = () => {
  const theme = useTheme();
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const handleDrawer = (drawerState: boolean) => {
    setIsDrawerOpen(drawerState);
  };
  return (
    <Grid container height={"calc(100vh - 58px)"} position={"relative"}>
      <Grid item xs={1}>
        <DrawerHeader />
        <IconButton
          sx={{
            marginLeft: 2,
            position: "absolute",
            top: { xs: "20px", lg: "55px" },
            left: { xs: "20px", lg: 0 },
          }}
          onClick={(event) => handleDrawer(true)}>
          <FilterListIcon />
        </IconButton>
      </Grid>
      <Grid
        item
        xs={11}
        sx={{ backgroundColor: theme.palette.background.default }}>
        <DrawerHeader />
        <Text
          type="primary"
          variant="h1"
          text="Results"
          width="100%"
          fontSize="30px"
          fontWeight={700}
          textAlign="start"
          padding="0 0 30px 0"></Text>
      </Grid>
      <FilterDrawer
        isOpen={isDrawerOpen}
        sx={{ backgroundColor: theme.palette.background.paper }}>
        <DrawerHeader />
        <IconButton
          sx={{
            margin: 2,
            position: "absolute",
            top: { xs: "20px", lg: "40px" },
            left: { xs: "20px", lg: 0 },
          }}
          onClick={(event) => handleDrawer(false)}>
          <CloseIcon />
        </IconButton>
        <Text
          type="primary"
          variant="h1"
          text="Filteration"
          width="100%"
          fontSize="30px"
          fontWeight={700}
          textAlign="center"
          padding="0 0 30px 0"></Text>
        <Filter/>
      </FilterDrawer>
    </Grid>
  );
};

export default Search;
