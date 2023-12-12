import * as yup from "yup";

const validations = {
  AddCityValidationSchema: yup.object({
    name: yup.string().required("City Name is required"),
    description: yup.string().required("Description is required"),
  }),
  AddCityImageValidationSchema: yup.object({}),
};

export default validations;
