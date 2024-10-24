import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import { IconButton, Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Paper, { PaperProps } from "@mui/material/Paper";
import { useMediaQuery, useTheme } from "@mui/system";
import * as React from "react";
import Draggable from "react-draggable";
import { useTranslation } from "react-i18next";
import Tabs from "./Tabs";

function PaperComponent(props: PaperProps) {
  const nodeRef = React.useRef(null);
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Draggable
      nodeRef={nodeRef}
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
      disabled={mobile ? true : false}
    >
      <Paper
        ref={nodeRef}
        {...props}
        sx={{
          width: { xs: "100%", md: "600px" },
          height: { xs: "100%", sm: "400px" },
        }}
      />
    </Draggable>
  );
}

export default function ConfigPanel() {
  const [open, setOpen] = React.useState(false);
  const { t } = useTranslation("translation", {
    keyPrefix: "other.configPanel",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <IconButton onClick={handleClickOpen}>
        <SettingsRoundedIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          <Typography variant="h4" component="p">
            {t("title")}
          </Typography>
        </DialogTitle>
        <DialogContent
          sx={{
            pl: 1,
          }}
        >
          <Tabs />
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
