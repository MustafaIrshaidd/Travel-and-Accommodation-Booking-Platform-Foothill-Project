// Your stories file
import React from "react";
import { Meta, Story } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { CustomSnackbarProvider } from "@contexts/CustomSnackbar.context";
import { AppThemeProvider } from "@contexts/AppTheme.context";
import { CustomSnackbar } from "@components/adhocs/CustomSnackbar";
import Sidebar from "../Sidebar";
import { SidebarProps } from "../types";

export default {
  title: "Sidebar",
  component: Sidebar,
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

const Template: Story<SidebarProps> = (args): JSX.Element => (
  <Sidebar {...args} />
);

export const DrawerOpened: Story<SidebarProps> = Template.bind({});
DrawerOpened.args = {
  drawerOpened: true,
  username: "Admin",
};

export const DrawerClosed: Story<SidebarProps> = Template.bind({});
DrawerClosed.args = {
  drawerOpened: false,
  username: "Admin",
};

export const UsernameHandler: Story<SidebarProps> = Template.bind({});
UsernameHandler.args = {
  username: "Mustafa Irshaid",
};
