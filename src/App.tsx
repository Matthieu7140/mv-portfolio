import { Box, Link, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import ConfigPanel from "./components/ConfigPanel/ConfigPanel";
import { useTitle } from "./contexts/TitleContext";

export default function Index() {
  const { setTitle } = useTitle();

  useEffect(() => {
    setTitle("Home");
  }, []);

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
          Welcome to my portfolio 🚧
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            textAlign: "center",
          }}
        >
          As you can see, I am still building my online portfolio. Expect to see
          it live soon!
        </Typography>
        <Link
          target="_blank"
          href="https://github.com/Matthieu7140/mv-portfolio"
          rel="noopener"
        >
          See the public repository
        </Link>
      </Stack>
    </React.Fragment>
  );
}
