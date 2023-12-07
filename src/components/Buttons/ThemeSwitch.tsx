import * as React from "react";
import { useThemeContext } from "@contexts/AppTheme.context";
import { DarkLightModeSwitch } from "./styles";

const ThemeSwitch = () => {
  const { toggleTheme } = useThemeContext();

  const handleToggleTheme = () => {
    toggleTheme();
  };

  return (
    <DarkLightModeSwitch
      aria-label="Toggle Theme Switch"
      onClick={handleToggleTheme}></DarkLightModeSwitch>
  );
};

export default ThemeSwitch;
