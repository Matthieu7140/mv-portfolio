import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import { Link } from "@mui/material";
import React from "react";

interface CustomLinkProps {
  children?: React.ReactNode;
  url: string;
  newTab?: boolean;
}
export default function CustomLink(props: CustomLinkProps) {
  const { children, url, newTab, ...other } = props;

  return (
    <React.Fragment>
      <Link
        href={url}
        target={newTab ? "_blank" : ""}
        underline="none"
        {...other}
        sx={{
          position: "relative",
          "& > .new-tab-icon": {
            display: "none",
            position: "absolute",
            height: "100%",
            top: 0,
            right: -17,
            fontSize: "13px",
          },
          "&:hover": {
            "& > .new-tab-icon": {
              display: "block",
            },
          },
          "&:active": {
            opacity: 0.66,
          },
          "&:hover::before": {
            content: "''",
            position: "absolute",
            top: 0,
            left: -5,
            right: newTab ? -23 : -5,
            height: "100%",
            backgroundColor: "var(--mui-palette-primary-light)",
            borderBottom: "var(--mui-palette-primary-main) 1px solid",
          },
        }}
      >
        {children}
        {newTab && <OpenInNewRoundedIcon className="new-tab-icon" />}
      </Link>
    </React.Fragment>
  );
}
