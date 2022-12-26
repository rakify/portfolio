import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import { Button } from "@mui/material";
import React, { useState } from "react";
import styles from "../styles/Intro.module.css";
import SwipeableEdgeDrawer from "../Utils/Drawer";
const Intro = () => {
  const [openAbout, setOpenAbout] = useState(false);
  const handleClose = () => {
    setOpenAbout(!openAbout);
  };
  return (
    <>
      <div className={styles.i}>
        <h1 className={styles.iName}>Hi, I'm Rakib Miah</h1>
        <h4 className={styles.iTitle}>Fullstack Developer</h4>
        <div className={styles.iDesc}>
          I build web apps using MERN stack, Nextjs and mobile apps using React
          Native. I'm currently available to collaborate on any web development
          project or react native project.{<br />} Read more{" "}
          <Button
            variant="text"
            size="small"
            className={styles.iButton1}
            onClick={handleClose}
          >
            about me
          </Button>{" "}
          or{" "}
          <Button
            variant="text"
            size="small"
            className={styles.iButton2}
            onClick={() => (window.location.href = "/#contact")}
          >
            contact me
          </Button>
          .
        </div>
      </div>
      {openAbout && (
        <SwipeableEdgeDrawer handleClose={handleClose} openAbout={openAbout} />
      )}
    </>
  );
};

export default Intro;
