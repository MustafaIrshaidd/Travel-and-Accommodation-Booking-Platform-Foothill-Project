import React from "react";
import { useFormik } from "formik";
import { Stack, TextField, Typography, useTheme } from "@mui/material";
import { AddCityFormProps, AddCityFormValues } from "./types";
import { useCustomSnackbar } from "@hooks/useCustomSnackbar.hook";
import { styles } from "@pages/Registration/forms/styles";
import { DefaultButton } from "@components/Buttons";
import validations from "./validations";
import { AdminDrawerContext } from "../contexts/AdminAsideDrawer";
import { useAppDispatch } from "@hooks/redux.hook";
import { cityAdded } from "@store/features/cities/citiesSlice";

const AddCityForm: React.FC<AddCityFormProps> = ({ onSubmitInformer }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const { toggleAdminDrawer } = React.useContext(AdminDrawerContext);
  const { setSnackbarProps } = useCustomSnackbar();
  const theme = useTheme();
  const dispatch = useAppDispatch();

  const { textFieldStyle } = styles(theme);

  const formik = useFormik<AddCityFormValues>({
    initialValues: {
      name: "",
      description: "",
    },
    validationSchema: validations.AddCityValidationSchema,
    onSubmit: async (values) => {
      // Handle Token and Navigation
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        dispatch(
          cityAdded({ name: values.name, description: values.description })
        );
        onSubmitInformer && onSubmitInformer();
        setSnackbarProps({
          message: "City is added Successfully !",
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
            variant="h5"
            fontWeight={600}
            fontSize={30}
            color={theme.palette.text.primary}>
            Add City
          </Typography>
          <Typography
            variant="caption"
            fontWeight={600}
            fontSize={10}
            color={theme.palette.text.secondary}>
            lovely one
          </Typography>
        </Stack>
        <TextField
          sx={textFieldStyle}
          fullWidth
          id="name"
          name="name"
          label="City Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          sx={textFieldStyle}
          fullWidth
          id="description"
          name="description"
          label="City Description"
          type="description"
          value={formik.values.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.description && Boolean(formik.errors.description)
          }
          helperText={formik.touched.description && formik.errors.description}
        />
        <DefaultButton
          isLoading={isLoading}
          isDisabled={isLoading || !formik.isValid}
          loadingPosition="center"
          variant="contained"
          type="submit"
          text="Add City"
        />
      </Stack>
    </form>
  );
};

export default AddCityForm;
