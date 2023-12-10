import React, { useContext } from "react";
import { Searchbar } from "@components/Searchbar";
import { Grid, Stack } from "@mui/material";
import DefaultButton from "@components/Buttons/DefaultButton";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { AdminDrawerContext } from "../contexts/AdminAsideDrawer";
import { InformationTable } from "@components/InformationTable";
import { useAppDispatch, useAppSelector } from "@hooks/redux.hook";
import { selectCities } from "@store/selectors/cities";
import { fetchCities } from "@store/features/cities/citiesthunks";
import { HeadCell } from "@components/InformationTable/types";

const headCells: HeadCell[] = [
  {
    id: "id",
    numeric: true,
    disablePadding: true,
    label: "Id",
  },
  {
    id: "name",
    numeric: false,
    disablePadding: false,
    label: "Name",
  },
  {
    id: "description",
    numeric: false,
    disablePadding: false,
    label: "Description",
  },
];

const ManageCities = () => {
  // APP STATE MANAGMENT
  const dispatch = useAppDispatch();

  const cities = useAppSelector(selectCities);

  React.useEffect(() => {
    dispatch(fetchCities({pageNumber:1,pageSize:10}));
  }, [])

  // COMPONENT STATE MANAGMENT
  const { toggleAdminDrawer } = useContext(AdminDrawerContext);
  const handleAddCity = () => {
    console.log("Add City Please !");
    toggleAdminDrawer();
  };

  const handleSearchChange = (searchValue: string) => {
    console.log(searchValue);
  };

  return (
    <>
      <Stack gap={{ lg: "2vh", xs: 3 }}>
        <Grid container gap={{ xs: 3, xl: 0 }} justifyContent={"space-between"}>
          {/* Control Components */}
          <Grid item xs={12} lg={6}>
            <Searchbar width={100} handleSearchbar={handleSearchChange} />
          </Grid>
          <Grid item xs={12} lg={5}>
            <DefaultButton
              startIcon={<AddCircleOutlineIcon />}
              variant="contained"
              text="Add City"
              handleOnClick={handleAddCity}
            />
          </Grid>
        </Grid>
        {/* Representational Component */}
        <InformationTable headcells={headCells} title="Manage Cities" rows={cities}></InformationTable>
      </Stack>
    </>
  );
};

export default ManageCities;
