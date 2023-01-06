import { Container } from "@mui/material";
import React from "react";
import Footer from "./Footer";
import Topbar from "./Topbar";

const Layout = ({ children }) => {
  return (
    <Container maxWidth="xl" disableGutters>
      <Topbar />
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;