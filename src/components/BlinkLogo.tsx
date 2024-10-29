import { Box, SxProps } from "@mui/material";
import React, { useEffect } from "react";

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
          display: "flex",
          height: "100%",
          alignItems: "end",
          width: width ? width : "50",
          "& > svg > rect": {
            transition: "y 0.2s ease-in-out",
          },
          "&.visible > svg > rect": {
            y: 160,
          },
          ...sx,
        }}
      >
        <svg
          width="100%"
          viewBox="0 0 800 150"
          fill={fill ? fill : "#000000"}
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="800" height="150" y="0" />
        </svg>
      </Box>
    </React.Fragment>
  );
}
