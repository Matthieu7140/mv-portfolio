import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import ConfigPanel from "./components/ConfigPanel/ConfigPanel";
import CustomLink from "./components/CustomLink";
import { useTitle } from "./contexts/TitleContext";

export default function Index() {
  const { setTitle } = useTitle();
  const { t, i18n } = useTranslation("translation", { keyPrefix: "landing" });

  useEffect(() => {
    setTitle(t("tabTitle"));
  }, [i18n.resolvedLanguage]);

  return (
    <React.Fragment>
      <Box
        sx={{
          position: "absolute",
          top: 10,
          right: 10,
        }}
      >
        <ConfigPanel />
      </Box>
      <Stack
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{
          height: "100vh",
          padding: "0 25px",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            textAlign: "center",
          }}
        >
          {t("title")}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            textAlign: "center",
          }}
        >
          {t("subtitle")}
        </Typography>
        <CustomLink
          url="https://github.com/matthieu-vagnon/mv-portfolio"
          newTab
        >
          {t("gitHub")}
        </CustomLink>
      </Stack>
    </React.Fragment>
  );
}
