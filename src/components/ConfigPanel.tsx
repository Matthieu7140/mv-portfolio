import SettingsRounded from "@mui/icons-material/SettingsRounded";
import {
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Paper, { PaperProps } from "@mui/material/Paper";
import * as React from "react";
import Draggable from "react-draggable";
import { useTheme } from "../contexts/ThemeContext";

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
          width: "50vw",
        }}
      />
    </Draggable>
  );
}

export default function ConfigPanel() {
  const [open, setOpen] = React.useState(false);
  const { theme, setTheme } = useTheme();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // Theme zone
  const handleThemeChange = (e: SelectChangeEvent<string>) => {
    setTheme(e.target.value);
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
          Configuration panel
        </DialogTitle>
        <DialogContent>
          <FormControl fullWidth>
            <InputLabel>Theme</InputLabel>
            <Select value={theme} onChange={handleThemeChange}>
              <MenuItem value="system">System</MenuItem>
              <MenuItem value="light">Light</MenuItem>
              <MenuItem value="dark">Dark</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
