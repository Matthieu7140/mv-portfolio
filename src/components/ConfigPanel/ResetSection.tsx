import { Button, Stack } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { useAccentColor } from "../../contexts/AccentColorContext";
import { useTheme } from "../../contexts/ThemeContext";

export default function ResetSection() {
  const { t, i18n } = useTranslation("translation", {
    keyPrefix: "other.configPanel.reset",
  });
  const { setTheme } = useTheme();
  const { setAccentColor } = useAccentColor();

  const handleThemeReset = () => {
    setTheme("system");
    setAccentColor("blue");
  };

  const handleContentReset = () => {
    i18n.changeLanguage(navigator?.language);
  };

  const handleResetAll = () => {
    handleThemeReset();
    handleContentReset();
  };

  return (
    <React.Fragment>
      <Stack
        direction="column"
        spacing={1}
        sx={{
          "& > button": {
            textAlign: "left",
          },
        }}
      >
        <Button variant="outlined" onClick={handleThemeReset}>
          {t("themeParameters")}
        </Button>
        <Button variant="outlined" onClick={handleContentReset}>
          {t("contentParameters")}
        </Button>
        <Button variant="contained" onClick={handleResetAll}>
          {t("all")}
        </Button>
      </Stack>
    </React.Fragment>
  );
}
