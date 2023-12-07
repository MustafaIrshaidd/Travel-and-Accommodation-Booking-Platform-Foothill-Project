import React from "react";
import { useFormik } from "formik";
import { Stack, TextField, Typography, useTheme } from "@mui/material";
import validations from "./validations";
import { SignInFormValues } from "./types";
import { useNavigate } from "react-router-dom";
import { useCustomSnackbar } from "@hooks/useCustomSnackbar.hook";
import { styles } from "./styles";
import { DefaultButton } from "@components/Buttons";

const SignInForm: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  const { setSnackbarProps } = useCustomSnackbar();
  const navigate = useNavigate();
  const theme = useTheme();
  const { textFieldStyle, submitButtonStyle } = styles(theme);

  const formik = useFormik<SignInFormValues>({
    initialValues: {
      userName: "",
      password: "",
    },
    validationSchema: validations.signinValidationSchema,
    onSubmit: async (values) => {
      // Handle Token and Navigation
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setSnackbarProps({
          message: "User Logged In Successfully !",
          type: "success",
          position: { vertical: "bottom", horizontal: "center" },
        });
      }, 3000);

      formik.resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
      <Stack direction={"column"} spacing={3}>
        <Stack
          direction={"row"}
          justifyContent={"center"}
          alignItems={"end"}
          paddingBottom={3}
          gap={2}>
          <Typography
            variant="h1"
            fontWeight={600}
            fontSize={30}
            color={theme.palette.text.primary}>
            Sign In
          </Typography>
          <Typography
            variant="caption"
            fontWeight={600}
            fontSize={10}
            color={theme.palette.text.secondary}>
            Hello there!
          </Typography>
        </Stack>
        <TextField
          sx={textFieldStyle}
          fullWidth
          id="userName"
          name="userName"
          label="Username"
          value={formik.values.userName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.userName && Boolean(formik.errors.userName)}
          helperText={formik.touched.userName && formik.errors.userName}
        />
        <TextField
          sx={textFieldStyle}
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <DefaultButton
          isLoading={isLoading}
          isDisabled={isLoading || !formik.isValid}
          loadingPosition="center"
          variant="contained"
          type="submit"
          text="Log In"
        />
      </Stack>
    </form>
  );
};

export default SignInForm;
