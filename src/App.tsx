import React from "react";
import { CustomSnackbar } from "@components/adhocs/CustomSnackbar";
import { useCustomSnackbar } from "@hooks/useCustomSnackbar.hook";
import { RegistrationRoute } from "@routes";

function App() {
  const { snackbarProps } = useCustomSnackbar();

  return (
    <>
      <RegistrationRoute />
      <CustomSnackbar
        message={snackbarProps.message}
        position={{
          vertical: snackbarProps.position.vertical,
          horizontal: snackbarProps.position.horizontal,
        }}
        type={snackbarProps.type}
      />
    </>
  );
}

export default App;
