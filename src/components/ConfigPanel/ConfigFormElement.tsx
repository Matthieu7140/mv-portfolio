import { FormControl, Stack, Typography } from "@mui/material";
import * as React from "react";

interface ConfigFormElementProps {
  children?: React.ReactNode;
  title: string;
}
export default function ConfigFormElement(props: ConfigFormElementProps) {
  const { children, title, ...other } = props;

  return (
    <Stack direction="column" spacing={1} {...other}>
      <Typography variant="h5">{title}</Typography>
      <FormControl>{children}</FormControl>
    </Stack>
  );
}
