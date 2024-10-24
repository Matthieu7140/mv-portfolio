import FormatPaintRoundedIcon from "@mui/icons-material/FormatPaintRounded";
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";
import RestartAltRoundedIcon from "@mui/icons-material/RestartAltRounded";
import {
  Button,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { styled } from "@mui/system";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../contexts/ThemeContext";
import { locales } from "../../locales";

interface TabPanelProps {
  children?: React.ReactNode;
  title: string;
  index: number;
  value: number;
}
function TabPanel(props: TabPanelProps) {
  const { children, title, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      width="100%"
      sx={{
        overflowY: "scroll",
      }}
      {...other}
    >
      {value === index && (
        <Stack
          direction="column"
          spacing={2}
          sx={{
            pt: 1,
          }}
        >
          <Typography variant="h4">{title}</Typography>
          <Stack direction="column" spacing={2}>
            {children}
          </Stack>
        </Stack>
      )}
    </Box>
  );
}

interface ConfigFormElementProps {
  children?: React.ReactNode;
  title: string;
}
function ConfigFormElement(props: ConfigFormElementProps) {
  const { children, title, ...other } = props;

  return (
    <Stack direction="column" spacing={1} {...other}>
      <Typography variant="h5">{title}</Typography>
      <FormControl>{children}</FormControl>
    </Stack>
  );
}

const CustomTab = styled(Tab)({
  borderTopLeftRadius: 5,
  borderBottomLeftRadius: 5,
  textTransform: "none",
});

const ResetButton = styled(Button)({
  width: "fit-content",
});

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);
  const { theme, setTheme } = useTheme();
  const { t, i18n } = useTranslation("translation", {
    keyPrefix: "other.configPanel",
  });

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleThemeChange = (e: SelectChangeEvent<string>) => {
    setTheme(e.target.value);
  };

  //   const handleAccentChange = (e: SelectChangeEvent<string>) => {};

  const handleLanguageChange = (e: SelectChangeEvent<string>) => {
    i18n.changeLanguage(e.target.value);
  };

  const handleThemeReset = () => {
    setTheme("system");
  };

  const handleContentReset = () => {
    i18n.changeLanguage(navigator?.language);
  };

  const handleResetAll = () => {
    handleThemeReset();
    handleContentReset();
  };

  return (
    <Stack direction="row" spacing={3} width="100%" height="100%">
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleTabChange}
        sx={{
          borderRight: 1,
          borderColor: "divider",
          minWidth: "fit-content",
          "& .MuiTabs-indicator": {
            width: "3px",
            borderTopLeftRadius: 3,
            borderBottomLeftRadius: 3,
          },
        }}
      >
        <CustomTab
          icon={<FormatPaintRoundedIcon />}
          label={t("theme.title")}
          {...a11yProps(0)}
        />
        <CustomTab
          icon={<FormatQuoteRoundedIcon />}
          label={t("content.title")}
          {...a11yProps(1)}
        />
        <CustomTab
          icon={<RestartAltRoundedIcon />}
          label={t("reset.title")}
          {...a11yProps(2)}
        />
      </Tabs>
      <TabPanel title={t("theme.title")} value={value} index={0}>
        <ConfigFormElement title={t("theme.mode.title")}>
          <Select value={theme} onChange={handleThemeChange}>
            <MenuItem value="system">{t("theme.mode.system")}</MenuItem>
            <MenuItem value="light">{t("theme.mode.light")}</MenuItem>
            <MenuItem value="dark">{t("theme.mode.dark")}</MenuItem>
          </Select>
        </ConfigFormElement>
        <ConfigFormElement title={t("theme.accent.title")}>
          <Select value="default">
            <MenuItem value="default">{t("theme.accent.default")}</MenuItem>
          </Select>
        </ConfigFormElement>
      </TabPanel>
      <TabPanel title={t("content.title")} value={value} index={1}>
        <ConfigFormElement title={t("content.language.title")}>
          <Select value={i18n.resolvedLanguage} onChange={handleLanguageChange}>
            {locales.map((language, index) => (
              <MenuItem key={index} value={language.key}>
                {`${language.title} ${
                  navigator.language.includes(language.key)
                    ? t("content.language.default")
                    : ""
                }`}
              </MenuItem>
            ))}
          </Select>
        </ConfigFormElement>
      </TabPanel>
      <TabPanel title={t("reset.title")} value={value} index={2}>
        <Stack direction="column" spacing={1}>
          <ResetButton onClick={handleThemeReset}>
            {t("reset.themeParameters")}
          </ResetButton>
          <ResetButton onClick={handleContentReset}>
            {t("reset.contentParameters")}
          </ResetButton>
          <ResetButton onClick={handleResetAll}>{t("reset.all")}</ResetButton>
        </Stack>
      </TabPanel>
    </Stack>
  );
}
