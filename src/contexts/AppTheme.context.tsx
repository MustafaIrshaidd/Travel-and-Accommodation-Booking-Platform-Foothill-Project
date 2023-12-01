import React, { createContext, useContext, useState } from "react";
import {
  ThemeProvider as MuiThemeProvider,
  Theme,
  createTheme,
} from "@mui/material/styles";

const ThemeContext = createContext<
  { theme: Theme; toggleTheme: () => void } | undefined
>(undefined);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }

  return context;
};

type AppThemeProviderProps = {
  children: React.ReactNode;
};

export const AppThemeProvider: React.FC<AppThemeProviderProps> = ({
  children,
}) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
      text:{
        primary:isDarkMode? "#ffffff": "#222222",
        secondary:  "#e83e8c",
      },
      background:{
        default:isDarkMode?"#222222":"#ffffff",
        paper:isDarkMode ? "#fcfcfc":"#444444"
      },
      action:{
        active:isDarkMode?"#aaaaaa":"#444444",
        selected:isDarkMode?"#aaaaaa":"#444444"
      },
      
      success: {
        main: "#e83e8c",
      },
    },
    typography: {
      fontFamily: "Roboto, sans-serif",
      fontSize: 16,
    },
    
  });

  if (!theme) {
    throw new Error("AppTheme must return a valid Theme object");
  }

  return (
    <MuiThemeProvider theme={theme}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </MuiThemeProvider>
  );
};
