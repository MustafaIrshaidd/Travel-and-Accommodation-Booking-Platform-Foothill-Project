import { Grid } from "@mui/material";
import React from "react";
import SignInForm from "./SignInForm";
import { RegistrationProps } from "./types";

const Registration: React.FC<RegistrationProps> = ({ type }) => {
  return (
    <Grid
      container
      width={"100%"}
      height={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}>
      <Grid item xs={11} md={6} lg={4}>
        <SignInForm />
      </Grid>
    </Grid>
  );
};

export default Registration;
