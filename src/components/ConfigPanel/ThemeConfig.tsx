import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { useAccentColor } from "../../contexts/AccentColorContext";
import { useTheme } from "../../contexts/ThemeContext";
import { accentColors } from "../../theme";
import ConfigFormElement from "./ConfigFormElement";

export default function ThemeConfig() {
  const { theme, setTheme } = useTheme();
  const { accentColor, setAccentColor } = useAccentColor();
  const { t } = useTranslation("translation", {
    keyPrefix: "other.configPanel.theme",
  });

  const handleThemeChange = (e: SelectChangeEvent<string>) => {
    setTheme(e.target.value);
  };

  const handleAccentChange = (e: SelectChangeEvent<string>) => {
    setAccentColor(e.target.value);
  };

  return (
    <React.Fragment>
      <ConfigFormElement title={t("mode.title")}>
        <Select value={theme} onChange={handleThemeChange}>
          <MenuItem value="system">{t("mode.system")}</MenuItem>
          <MenuItem value="light">{t("mode.light")}</MenuItem>
          <MenuItem value="dark">{t("mode.dark")}</MenuItem>
        </Select>
      </ConfigFormElement>
      <ConfigFormElement title={t("accent.title")}>
        <Select value={accentColor} onChange={handleAccentChange}>
          {Object.keys(accentColors).map((color, index) => (
            <MenuItem key={index} value={color}>
              {t(`accent.${color}`)}
            </MenuItem>
          ))}
        </Select>
      </ConfigFormElement>
    </React.Fragment>
  );
}
