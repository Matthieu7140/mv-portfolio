import FormatPaintRoundedIcon from "@mui/icons-material/FormatPaintRounded";
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";
import RestartAltRoundedIcon from "@mui/icons-material/RestartAltRounded";
import { Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { styled } from "@mui/system";
import * as React from "react";
import { useTranslation } from "react-i18next";
import ContentConfig from "./ContentConfig";
import ResetSection from "./ResetSection";
import ThemeConfig from "./ThemeConfig";

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

const CustomTab = styled(Tab)({
  borderTopLeftRadius: 5,
  borderBottomLeftRadius: 5,
  textTransform: "none",
});

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);
  const { t } = useTranslation("translation", {
    keyPrefix: "other.configPanel",
  });

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
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
        <ThemeConfig />
      </TabPanel>
      <TabPanel title={t("content.title")} value={value} index={1}>
        <ContentConfig />
      </TabPanel>
      <TabPanel title={t("reset.title")} value={value} index={2}>
        <ResetSection />
      </TabPanel>
    </Stack>
  );
}
