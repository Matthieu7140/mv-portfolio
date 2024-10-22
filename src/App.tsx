import { Box, Link, Stack, Typography } from "@mui/material";
import { Fragment } from "react";
import ConfigPanel from "./components/ConfigPanel";

// export const meta: MetaFunction = () => {
//   return [
//     { title: "M. Vagnon • Front-End Engineer & Designer" },
//     {
//       name: "description",
//       content: "Matthieu Vagnon, Front-End Engineer and UX/UI designer.",
//     },
//   ];
// };

export default function Index() {
  return (
    <Fragment>
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
    </Fragment>
  );
}
