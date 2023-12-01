// Registration.test.js

import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Registration from "./Registration";
import { CustomSnackbarProvider } from "@contexts/CustomSnackbar.context";
import { BrowserRouter } from "react-router-dom";
import { AppThemeProvider } from "@contexts/AppTheme.context";
import MockCustomSnackbar from "@__mocks__/CustomSnackbar";



describe("Registration", () => {
  test("renders the form and displays custom snackbar after login", async () => {
    render(
      <CustomSnackbarProvider>
        <BrowserRouter>
          <AppThemeProvider>
            <Registration type={"SignIn"} />
          </AppThemeProvider>
        </BrowserRouter>
      </CustomSnackbarProvider>
    );

    userEvent.type(screen.getByLabelText(/username/i), "testUser");
    userEvent.type(screen.getByLabelText(/password/i), "testPassword");

    fireEvent.click(screen.getByText(/log in/i));

    render(
      <MockCustomSnackbar
        message="Test Message"
        type="info"
        position={{ vertical: "top", horizontal: "right" }}
        autoHideDuration={5000}
      />
    );

    await waitFor(() => {
      expect(screen.getByTestId("mocked-custom-snackbar")).toBeInTheDocument();
    });
  });
});
