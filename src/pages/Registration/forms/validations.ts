import * as yup from "yup";

const validations = {
  signinValidationSchema: yup.object({
    username: yup
      .string()
      .required("Username is required"),
    password: yup
      .string()
      .min(8, "Password should be of a minimum 8 characters length")
      .required("Password is required"),
  }),
};

export default validations;
