import React, { useContext } from "react";
import { Searchbar } from "@components/inputs/Searchbar";
import { Grid, Stack } from "@mui/material";
import DefaultButton from "@components/Buttons/DefaultButton";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { AdminDrawerContext } from "../contexts/AdminAsideDrawer";
import { InformationTable } from "@components/common/InformationTable";
import { useAppDispatch, useAppSelector } from "@hooks/redux.hook";
import {
  selectCities,
  selectCitiesError,
} from "@store/features/cities/selectors";
import { deleteCityAsync, fetchCities } from "@store/features/cities/thunks";
import { HeadCell } from "@components/common/InformationTable/types";
import { selectCitiesLoading } from "@store/features/cities/selectors";
import { FormsStepperContext } from "@contexts/FormsStepper.context";
import AddCityImage from "../forms/AddCityImage";
import { unwrapResult } from "@reduxjs/toolkit";
import AddCityInfo from "../forms/AddCityInfo";
import { useCustomSnackbar } from "@hooks/useCustomSnackbar.hook";

const headCells: HeadCell[] = [
  {
    id: "id",
    numeric: true,
    disablePadding: false,
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
  const { setSnackbarProps } = useCustomSnackbar();
  // APP STATE MANAGMENT
  const dispatch = useAppDispatch();

  const cities = useAppSelector(selectCities);
  const loading = useAppSelector(selectCitiesLoading);
  const error = useAppSelector(selectCitiesError);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const resultAction = await dispatch(
          fetchCities({ pageNumber: 1, pageSize: 10 })
        );
        const originalPromiseResult = unwrapResult(resultAction);
      } catch (rejectedValueOrSerializedError: any) {
        setSnackbarProps({
          message: rejectedValueOrSerializedError,
          type: "error",
          position: { vertical: "bottom", horizontal: "center" },
        });
      }
    };

    fetchData();
  }, [dispatch]);

  const handleRemoveCityById = async (id: number) => {
    try {
      const resultAction = await dispatch(deleteCityAsync(id));
      const originalPromiseResult = unwrapResult(resultAction);
      console.log(originalPromiseResult);
    } catch (rejectedValueOrSerializedError) {
      console.log(rejectedValueOrSerializedError);
    }
  };

  const handleUpdateCityById = (id: number) => {
    console.log(id);
  };

  // COMPONENT STATE MANAGMENT
  const { setForms, handleNext, activeStep, stepsCompleted, handleReset } =
    useContext(FormsStepperContext)!;
  const { toggleAdminDrawer } = useContext(AdminDrawerContext);

  const handleAddCity = () => {
    setForms([
      <AddCityInfo onSubmitInformer={handleNext} />,
      <AddCityImage onSubmitInformer={handleNext} />,
      <AddCityInfo onSubmitInformer={handleNext} />,
    ]);
    toggleAdminDrawer();
  };

  React.useEffect(() => {
    if (stepsCompleted) {
      toggleAdminDrawer();
      handleReset();
    }
  }, [stepsCompleted]);

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
              handleOnClick={handleAddCity}>
              Add City
            </DefaultButton>
          </Grid>
        </Grid>
        {/* Representational Component */}
        <InformationTable
          loading={loading}
          headcells={headCells}
          title="Manage Cities"
          rows={cities}
          handleDeleteRow={handleRemoveCityById}
          handleUpdateRow={handleUpdateCityById}></InformationTable>
      </Stack>
    </>
  );
};

export default ManageCities;
