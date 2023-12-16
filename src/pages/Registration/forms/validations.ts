import * as yup from "yup";

const validations = {
  signinValidationSchema: yup.object({
    userName: yup.string().required("Username is required"),
    password: yup
      .string()
      .min(3, "password should be of a minimum 8 characters length")
      .required("password is required"),
  }),
};

export default validations;
