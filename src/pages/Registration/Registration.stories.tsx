// Your stories file
import React from "react";
import { Meta, Story } from "@storybook/react";
import { Registration } from ".";
import { RegistrationProps } from "./Types";
import { BrowserRouter } from "react-router-dom";
import { CustomSnackbarProvider } from "@contexts/CustomSnackbar.context";
import { AppThemeProvider } from "@contexts/AppTheme.context";
import { CustomSnackbar } from "@components/CustomSnackbar";

export default {
  title: "Registration",
  component: Registration,
  tags: ["autodocs"],
  decorators: [
    (StoryFn) => (
      <BrowserRouter>
        <CustomSnackbarProvider>
          <AppThemeProvider>
            <StoryFn />
            <CustomSnackbar
              message={"Logged In Successfully !"}
              type={"success"}
              position={{
                vertical: "bottom",
                horizontal: "center",
              }}
            />
          </AppThemeProvider>
        </CustomSnackbarProvider>
      </BrowserRouter>
    ),
  ],
} as Meta;

const Template: Story<RegistrationProps> = (args): JSX.Element => (
  <Registration {...args} />
);

export const SignIn: Story<RegistrationProps> = Template.bind({});
SignIn.args = {
  type: "SignIn",
};
