import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { deepmerge } from "@mui/utils";
import React from "react";
import { useAccentColor } from "../contexts/AccentColorContext";
import { useTheme } from "../contexts/ThemeContext";
import { accentColors, dark, global, light } from "../theme";

export default function StyleProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useTheme();
  const darkMode =
    theme === "system"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
      : theme === "light"
      ? false
      : true;
  const { accentColor } = useAccentColor();

  // Building theme based on user preferences
  const resolvedTheme = !darkMode
    ? createTheme(
        deepmerge(
          deepmerge(global, light),
          accentColors[accentColor as keyof typeof accentColors].light
        )
      )
    : createTheme(
        deepmerge(
          deepmerge(global, dark),
          accentColors[accentColor as keyof typeof accentColors].dark
        )
      );

  return (
    <ThemeProvider theme={resolvedTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
