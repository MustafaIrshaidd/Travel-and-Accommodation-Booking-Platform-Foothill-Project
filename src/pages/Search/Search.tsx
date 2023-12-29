import React from "react";
import { Grid, useTheme, styled, Box, IconButton, Stack } from "@mui/material";
import Filter from "./components/Filter";
import CloseIcon from "@mui/icons-material/Close";
import FilterListIcon from "@mui/icons-material/FilterList";
import { Text } from "@components/common/Text";
import { DrawerHeader, FilterDrawer } from "./styles";
import { useAppSelector } from "@hooks/redux.hook";
import { searchHotels } from "@store/features/hotels/selectors";
import { HotelCard } from "@components/common/HotelCard";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const hotelsSearchResult = useAppSelector(searchHotels);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const handleDrawer = (drawerState: boolean) => {
    setIsDrawerOpen(drawerState);
  };

  const handleClick = (id: number) => {
    navigate(`/user/search/hotel/${id}`);
  };
  return (
    <Grid
      container
      height={"calc(100vh - 58px)"}
      overflow={"scroll"}
      position={"relative"}>
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
        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          justifyContent={"start"}
          gap={3}>
          {hotelsSearchResult.data.map((hotel) => {
            return (
              <HotelCard
                onClick={() => handleClick(hotel.hotelId)}
                id={hotel.hotelId}
                city={hotel.cityName}
                discount={hotel.discount}
                hotelStarRating={hotel.starRating}
                price={hotel.roomPrice}
                title={hotel.hotelName}></HotelCard>
            );
          })}
        </Stack>
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
        <Filter />
      </FilterDrawer>
    </Grid>
  );
};

export default Search;
