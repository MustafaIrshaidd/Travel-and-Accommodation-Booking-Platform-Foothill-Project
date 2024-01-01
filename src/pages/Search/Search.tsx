import React from "react";
import { Grid, useTheme, styled, Box, IconButton, Stack } from "@mui/material";
import Filter from "./components/Filter";
import CloseIcon from "@mui/icons-material/Close";
import FilterListIcon from "@mui/icons-material/FilterList";
import { Text } from "@components/common/Text";
import { DrawerHeader, FilterDrawer, SearchDrawer } from "./styles";
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

  const hotels = hotelsSearchResult.data.map((hotel) => {
    return (
      <Grid item>
        <HotelCard
          onClick={() => handleClick(hotel.hotelId)}
          id={hotel.hotelId}
          city={hotel.cityName}
          discount={hotel.discount}
          hotelStarRating={hotel.starRating}
          price={hotel.roomPrice}
          title={hotel.hotelName}
          roomPictures={[hotel.roomPhotoUrl]}
        />
      </Grid>
    );
  });

  return (
    <Grid container height={"calc(100vh - 70px)"} position={"relative"}>
      <IconButton
        sx={{
          marginLeft: 2,
          position: "absolute",
          top: "55px",
          left: "0",
        }}
        onClick={(event) => handleDrawer(true)}>
        <FilterListIcon />
      </IconButton>
      <Stack direction={"row"} width={"100%"}>
        <FilterDrawer
          isOpen={isDrawerOpen}
          sx={{ backgroundColor: theme.palette.background.paper }}>
          <DrawerHeader />
          <IconButton
            sx={{
              margin: 2,
              position: "absolute",
              top: "40px",
              left: "0",
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
            padding="0 0 30px 0"
          />
          <Filter />
        </FilterDrawer>
        <SearchDrawer >
          <Grid
            item
            width={"80%"}
            margin={"auto"}
            
            sx={{ backgroundColor: theme.palette.background.default }}>
            <DrawerHeader />
            <Text
              type="primary"
              variant="h1"
              text="Results"
              width="100%"
              fontSize="30px"
              fontWeight={700}
              textAlign={{ xs: "center", lg: "start" }}
              padding="0 0 30px 0"
            />
            <Grid
              container
              justifyContent={{
                xs: "center",
                lg: "start",
              }}
              alignItems={"center"}
              gap={3}>
              {hotels}
            </Grid>
          </Grid>
        </SearchDrawer>
      </Stack>
    </Grid>
  );
};

export default Search;
