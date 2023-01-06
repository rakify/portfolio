import { Link, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      sx={{ textAlign: "center" }}
    >
      {"Copyright © "}
      <Link href="/" sx={{ fontSize: "large" }}>
        Rakib Miah
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default Footer;
