/// <reference types="vite-plugin-svgr/client" />
import { Box, SxProps } from "@mui/material";
import React, { useEffect } from "react";
import Logo from "../../public/logo-mono-white.svg?react";

interface BlinkLogoProps {
  width?: number;
  fill?: string;
  sx?: SxProps;
}
export default function BlinkLogo(props: BlinkLogoProps) {
  const { width, fill, sx } = props;

  useEffect(() => {
    const logo = document.querySelector(".blink-logo-container");

    const blink = setInterval(() => {
      logo?.classList.toggle("visible");
    }, 500);

    return () => {
      clearInterval(blink);
    };
  }, []);

  return (
    <React.Fragment>
      <Box
        className="blink-logo-container visible"
        sx={{
          display: "inline-flex",
          transition: "opacity 0.2s ease-in-out",
          opacity: 0,
          "&.visible": {
            opacity: 1,
          },
          "& > svg": {
            width: width ? `${width}px` : "50px",
            height: "auto",
          },
          "& > svg > rect": {
            fill: fill && fill,
          },
          ...sx,
        }}
      >
        <Logo />
      </Box>
    </React.Fragment>
  );
}
