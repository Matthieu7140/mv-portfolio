import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { locales } from "../../locales";
import ConfigFormElement from "./ConfigFormElement";

export default function ContentConfig() {
  const { t, i18n } = useTranslation("translation", {
    keyPrefix: "other.configPanel.content",
  });

  const handleLanguageChange = (e: SelectChangeEvent<string>) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <React.Fragment>
      <ConfigFormElement title={t("language.title")}>
        <Select value={i18n.resolvedLanguage} onChange={handleLanguageChange}>
          {locales.map((language, index) => (
            <MenuItem key={index} value={language.key}>
              {`${language.title} ${
                navigator.language.includes(language.key)
                  ? t("language.default")
                  : ""
              }`}
            </MenuItem>
          ))}
        </Select>
      </ConfigFormElement>
    </React.Fragment>
  );
}
