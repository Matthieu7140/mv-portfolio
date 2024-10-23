import SettingsRounded from "@mui/icons-material/SettingsRounded";
import { IconButton, Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Paper, { PaperProps } from "@mui/material/Paper";
import * as React from "react";
import Draggable from "react-draggable";
import Tabs from "./Tabs";

function PaperComponent(props: PaperProps) {
  const nodeRef = React.useRef(null);

  return (
    <Draggable
      nodeRef={nodeRef}
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper
        ref={nodeRef}
        {...props}
        sx={{
          width: { xs: "300px", sm: "500px", md: "600px" },
          height: { xs: "300px", sm: "350px", md: "400px" },
        }}
      />
    </Draggable>
  );
}

export default function ConfigPanel() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <IconButton onClick={handleClickOpen}>
        <SettingsRounded />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          <Typography variant="h4" component="p">
            Configuration panel
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Tabs />
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
