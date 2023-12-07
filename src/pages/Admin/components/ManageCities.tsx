import React, { useContext } from "react";
import { Searchbar } from "@components/Searchbar";
import { Grid, Stack } from "@mui/material";
import DefaultButton from "@components/Buttons/DefaultButton";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { AdminDrawerContext } from "../contexts/AdminAsideDrawer";
import { InformationTable } from "@components/InformationTable";

const ManageCities = () => {
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
      <Stack gap={{lg:"2vh",xs:3}}>
        <Grid container gap={{ xs: 3, xl: 0 }} justifyContent={"space-between"}>
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
        <InformationTable></InformationTable>
        </Stack>
      
    </>
  );
};

export default ManageCities;
