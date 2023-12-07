import { Grid, useTheme } from "@mui/material";
import React from "react";
import SignInForm from "./forms/SignInForm";
import { RegistrationProps } from "./Types";
import { styles } from "./styles";

const Registration: React.FC<RegistrationProps> = ({ type }) => {
  const theme = useTheme();
  const { registrationContainer } = styles(theme);
  return (
    <Grid
      sx={registrationContainer}
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
