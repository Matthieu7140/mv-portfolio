import { CssBaseline, ThemeProvider } from "@mui/material";
import { useTheme } from "../contexts/ThemeContext";
import { dark, light } from "../theme";

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

  return (
    <ThemeProvider theme={!darkMode ? light : dark}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
