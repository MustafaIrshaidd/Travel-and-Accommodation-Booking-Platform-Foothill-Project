import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import Sidebar from "../Sidebar";
import { CustomSnackbarProvider } from "@contexts/CustomSnackbar.context";
import { BrowserRouter } from "react-router-dom";
import { AppThemeProvider } from "@contexts/AppTheme.context";

describe("Sidebar", () => {
  test("Display username as the parameter that was sent to it", async () => {
    render(
      <CustomSnackbarProvider>
        <BrowserRouter>
          <AppThemeProvider>
            <Sidebar username="TestUser" drawerOpened={true} />
          </AppThemeProvider>
        </BrowserRouter>
      </CustomSnackbarProvider>
    );

    expect(screen.getByText("TestUser")).toBeInTheDocument();
  });

  test("Expect drawer is open", async () => {
    render(
      <CustomSnackbarProvider>
        <BrowserRouter>
          <AppThemeProvider>
            <Sidebar username="TestUser" drawerOpened={true} />
          </AppThemeProvider>
        </BrowserRouter>
      </CustomSnackbarProvider>
    );

    await waitFor(() => {
      expect(screen.getByLabelText("open drawer")).toHaveStyle("display:none");
    });
  });

  test("Expect drawer is closed", async () => {
    render(
      <CustomSnackbarProvider>
        <BrowserRouter>
          <AppThemeProvider>
            <Sidebar username="TestUser" />
          </AppThemeProvider>
        </BrowserRouter>
      </CustomSnackbarProvider>
    );

    
    await waitFor(() => {
      expect(screen.getByLabelText("open drawer")).toHaveStyle(
        "display:inline-flex"
      );
    });
  });

});
