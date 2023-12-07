// Your stories file
import React from "react";
import { Meta, Story } from "@storybook/react";

import { BrowserRouter } from "react-router-dom";
import { CustomSnackbarProvider } from "@contexts/CustomSnackbar.context";
import { AppThemeProvider } from "@contexts/AppTheme.context";
import ThemeSwitch from "./ThemeSwitch";

export default {
  title: "Dark | Light Mode Switch",
  component: ThemeSwitch,
  tags: ["autodocs"],
  decorators: [
    (StoryFn) => (
      <BrowserRouter>
        <CustomSnackbarProvider>
          <AppThemeProvider>
            <StoryFn />
          </AppThemeProvider>
        </CustomSnackbarProvider>
      </BrowserRouter>
    ),
  ],
} as Meta;

const Template: Story = (args): JSX.Element => <ThemeSwitch {...args} />;

export const SwitchTheme: Story = Template.bind({});
