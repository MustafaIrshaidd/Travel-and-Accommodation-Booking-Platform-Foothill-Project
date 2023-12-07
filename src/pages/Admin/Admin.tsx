import React, { useContext } from "react";
import { Grid, Stack, IconButton, Zoom } from "@mui/material";
import { AdminMain, AsideDrawer, DrawerHeader } from "./styles";
import { Route, Routes } from "react-router-dom";
import ManageCities from "./components/ManageCities";
import { AdminDrawerContext } from "./contexts/AdminAsideDrawer";
import CloseIcon from "@mui/icons-material/Close";
import { AddCityForm } from "./forms";

const Admin = () => {
  const { isAdminDrawerOpen, toggleAdminDrawer } =
    useContext(AdminDrawerContext);

  return (
    <>
      <Stack direction={"row"} width={"100%"} position={"relative"}>
        <AdminMain isOpen={!isAdminDrawerOpen}>
          <DrawerHeader />
          <Routes>
            <Route path="/cities" element={<ManageCities />} />
            <Route path="/hotels" element={<>hello hotels</>} />
            <Route path="/rooms" element={<>hello rooms</>} />
            <Route path="*" element={<ManageCities />} />
          </Routes>
        </AdminMain>
        <AsideDrawer isOpen={isAdminDrawerOpen}>
          <IconButton
            sx={{
              margin: 1,
              position: "absolute",
              top: { xs: "20px", lg: "80px" },
              left: { xs: "20px", lg: 0 },
            }}
            onClick={toggleAdminDrawer}>
            <CloseIcon />
          </IconButton>
          <Grid
            container
            width={"100%"}
            height={"100%"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}>
            <Grid item xs={10} md={10}>
              <Zoom
                in={isAdminDrawerOpen}
                timeout={500}
                style={{
                  transitionDelay: isAdminDrawerOpen ? "300ms" : "0ms",
                }}>
                <div>
                  <AddCityForm />
                </div>
              </Zoom>
            </Grid>
          </Grid>
        </AsideDrawer>
      </Stack>
    </>
  );
};

export default Admin;
