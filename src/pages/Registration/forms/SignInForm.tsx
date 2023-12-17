import React from "react";
import { useFormik } from "formik";
import { Stack, TextField, Typography, useTheme } from "@mui/material";
import validations from "./validations";
import { SignInFormValues } from "./types";
import { useNavigate } from "react-router-dom";
import { useCustomSnackbar } from "@hooks/useCustomSnackbar.hook";
import { styles } from "./styles";
import { DefaultButton } from "@components/Buttons";
import { AuthContext } from "@contexts/Auth.context";

const SignInForm: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  const navigate = useNavigate();
  const { loginUser } = React.useContext(AuthContext)!;

  const { setSnackbarProps } = useCustomSnackbar();
  const theme = useTheme();
  const { textFieldStyle } = styles(theme);

  const formik = useFormik<SignInFormValues>({
    initialValues: {
      userName: "",
      password: "",
    },
    validationSchema: validations.signinValidationSchema,
    onSubmit: async (values) => {
      setIsLoading(true);
      const result = await loginUser(values);
      setSnackbarProps({
        message: result.message,
        type: result.messageType,
        position: { vertical: "bottom", horizontal: "center" },
      });
      setIsLoading(false);
      formik.resetForm();
      navigate(result.path);
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
          label="password"
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
          type="submit">
          Log In
        </DefaultButton>
      </Stack>
    </form>
  );
};

export default SignInForm;
