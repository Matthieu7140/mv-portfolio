import { Button, Stack } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { useTranslation } from "react-i18next";
import { useAccentColor } from "../../contexts/AccentColorContext";
import { useTheme } from "../../contexts/ThemeContext";

const ResetButton = styled(Button)({
  width: "fit-content",
});

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
      <Stack direction="column" spacing={1}>
        <ResetButton onClick={handleThemeReset}>
          {t("themeParameters")}
        </ResetButton>
        <ResetButton onClick={handleContentReset}>
          {t("contentParameters")}
        </ResetButton>
        <ResetButton onClick={handleResetAll}>{t("all")}</ResetButton>
      </Stack>
    </React.Fragment>
  );
}
