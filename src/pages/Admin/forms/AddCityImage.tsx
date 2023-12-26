import React from "react";
import { useFormik } from "formik";
import { Stack, TextField, Typography, useTheme } from "@mui/material";
import { AddCityImageProps, AddCityImageValues } from "./types";
import { useCustomSnackbar } from "@hooks/useCustomSnackbar.hook";
import { DefaultButton } from "@components/Buttons";
import validations from "./validations";
import { AdminDrawerContext } from "../contexts/AdminAsideDrawer";
import { useAppDispatch } from "@hooks/redux.hook";
import FileField from "@components/inputs/FileField/FileField";
import FileUploadService from "@services/FileUploadService";

const AddCityImage: React.FC<AddCityImageProps> = ({ onSubmitInformer }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const { toggleAdminDrawer } = React.useContext(AdminDrawerContext);
  const { setSnackbarProps } = useCustomSnackbar();
  const theme = useTheme();
  const dispatch = useAppDispatch();

  const formik = useFormik<AddCityImageValues>({
    initialValues: {
      image: undefined,
      previewImage: "",
    },
    validationSchema: validations.AddCityImageValidationSchema,
    onSubmit: async (values) => {
      try {
        const { image,previewImage } = formik.values;
        console.log(previewImage)
          
        console.log(image)
        const formData = FileUploadService.createFormData(image);
        // Clear the form or perform any other necessary actions
        onSubmitInformer && onSubmitInformer();

        formik.resetForm();
      } catch (error) {
        // Handle errors (e.g., display an error message)
        console.error('Error uploading image:', error);
      }
    },
  });

  const handleImageChange = async (file: any) => {
    await formik.setFieldValue("image", file);

    if (formik.values.previewImage)
      await formik.setFieldValue("previewImage", "");

    if (!formik.touched.image) await formik.setFieldTouched("image", true);
  };

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
            Add City Image
          </Typography>
          <Typography
            variant="caption"
            fontWeight={600}
            fontSize={10}
            color={theme.palette.text.secondary}>
            lovely one
          </Typography>
        </Stack>

        <FileField
          image={formik.values.image}
          onImageChange={handleImageChange}
          onBlur={formik.handleBlur}
          initialPreviewImage={""}
          error={formik.touched.image && Boolean(formik.errors.image)}
          helperText={formik.touched.image && formik.errors.image}></FileField>
        <DefaultButton
          isLoading={isLoading}
          isDisabled={isLoading || !formik.isValid}
          loadingPosition="center"
          variant="contained"
          type="submit"
        >Add City</DefaultButton>
      </Stack>
    </form>
  );
};

export default AddCityImage;
