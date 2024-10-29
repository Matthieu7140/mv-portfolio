import { Box, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import BlinkLogo from "./components/BlinkLogo";
import ConfigPanel from "./components/ConfigPanel/ConfigPanel";
import CustomLink from "./components/CustomLink";
import { useTitle } from "./contexts/TitleContext";

export default function Index() {
  const { setTitle } = useTitle();
  const { t, i18n } = useTranslation("translation", { keyPrefix: "landing" });
  const theme = useTheme();

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
            position: "relative",
          }}
        >
          {t("title")}
          <BlinkLogo
            width={40}
            fill={theme.palette.primary.main}
            sx={{
              position: "absolute",
              bottom: 0,
              display: "inline-flex",
            }}
          />
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
