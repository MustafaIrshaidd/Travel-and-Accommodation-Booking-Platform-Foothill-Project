import React, { useContext } from "react";
import { Registration } from "@pages/Registration";
import { CustomSnackbar } from "@components/CustomSnackbar";
import { useCustomSnackbar } from "@hooks/useCustomSnackbar.hook";


function App() {
  const { snackbarProps } = useCustomSnackbar();
  
  return (
    <>
      <Registration type={"SignIn"} />
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
