import React from "react";
import { Formik, Form, Field } from "formik";
import { SignInFormValues } from "./Types";
import { Box, Button, Stack, TextField } from "@mui/material";

const initialValues: SignInFormValues = {
  email: "",
  password: "",
};

const SignInForm: React.FC = () => {
  const onSubmit = (values: SignInFormValues) => {
    console.log("Form submitted with values:", values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
        <Stack direction={"column"} spacing={3}>
          <TextField
            name="email"
            type="email"
            fullWidth
            label="Email"
          />
        </Stack>

        <Button type="submit">Log In</Button>
      </Form>
    </Formik>
  );
};

export default SignInForm;
