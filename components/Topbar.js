import {
  AppBar,
  CssBaseline,
  Divider,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import Link from "next/link";
import React from "react";

const Topbar = () => {
  return (
    <>
      <CssBaseline />
      <AppBar sx={{ backgroundColor: "#59C1BD", color: "black" }}>
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" component="div">
            Rakib Miah
          </Typography>
          <Stack direction="row" alignItems="center" gap={1}>
            <Link href="/">Home</Link>
            <Divider orientation="vertical" flexItem />
            <Link href="/about/">About</Link>
            <Divider orientation="vertical" flexItem />
            <Link href="/skills/">Skills</Link>
            <Divider orientation="vertical" flexItem />
            <Link href="/portfolio/">Portfolio</Link>
            <Divider orientation="vertical" flexItem />
            <Link href="/contact/">Contact</Link>
          </Stack>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
    </>
  );
};

export default Topbar;
