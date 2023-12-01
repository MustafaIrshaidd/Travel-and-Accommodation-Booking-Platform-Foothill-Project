import React from "react";

const MockCustomSnackbar = ({
  message,
  type,
  position: { vertical, horizontal },
  autoHideDuration,
}) => {
  return (
    <div data-testid="mocked-custom-snackbar">
      {message} - {type} - {vertical} - {horizontal} - {autoHideDuration}
    </div>
  );
};

export default MockCustomSnackbar;
