export const styles = (theme: any) => ({
  textFieldStyle: {
    "& label": { color: theme.palette.text.primary },
    "& label.Mui-focused": {
      color: theme.palette.text.primary,
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: theme.palette.text.primary,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: theme.palette.text.primary,
      },
      "&:hover fieldset": {
        borderColor: theme.palette.text.primary,
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.text.primary,
      },
    },
  },
  submitButtonStyle: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.background.default,
    "&:hover": {
      backgroundColor: theme.palette.action.selected,
    },
    "&:active": {
      backgroundColor: theme.palette.action.active,
    },
  },
  registrationContainer: {
    backgroundColor: theme.palette.background.default,
  },
});
