import { createTheme } from "@mui/material";
import { deepmerge } from "@mui/utils";

const global = {
  palette: {
    primary: {
      main: "#007FFF",
    },
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily: "Nunito",
    h1: {
      fontFamily: "DelaGothicOne",
      fontSize: 48,
    },
    h2: {
      fontSize: 40,
    },
    h3: {
      fontSize: 30,
    },
    h4: {
      fontSize: 20,
    },
    h5: {
      fontSize: 16,
    },
    subtitle1: {
      fontFamily: "Marcellus",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Nunito';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: url(nunito-variable.ttf) format('truetype');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
        @font-face {
          font-family: 'Marcellus';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: url(marcellus-regular.ttf) format('truetype');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
        @font-face {
          font-family: 'DelaGothicOne';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: url(dela-gothic-one-regular.ttf) format('truetype');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
};

export const light = createTheme(
  deepmerge(
    {
      cssVariables: true,
      palette: {
        mode: "light",
        divider: "rgba(0, 0, 0, 0.08)",
      },
    },
    global
  )
);

export const dark = createTheme(
  deepmerge(
    {
      cssVariables: true,
      palette: {
        mode: "dark",
        divider: "rgba(255, 255, 255, 0.08)",
        background: {
          default: "#001428",
        },
      },
    },
    global
  )
);
