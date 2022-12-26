import { Close } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import styles from "../styles/About.module.css";

const About = ({ handleClose }) => {
  return (
    <>
      <div className={styles.a}>
        <div className={styles.aTop}>
          <h1 className={styles.aTitle}>About Me</h1>
          <IconButton
            size="small"
            onClick={handleClose}
            className={styles.aIcon}
          >
            <Close fontSize="small" />
          </IconButton>
        </div>
        <div className={styles.aSub}>
          Last 3 years I have spent most of my time learning Algorithms, Data
          Structure and doing competitive programming and for a year I have
          spent my time learning JavaScript Framework and Library. Now I want to
          use my whole skill to do something real. That’s why I am seeking a Job
          that will allow me to gain experience and measure my performance. I
          believe I am a fast learner.
        </div>
        <a
          target="_blank"
          href="https://drive.google.com/file/d/1CuuvKfLShvz64mWvqpheIcaSAsQ8LP-T/view?usp=share_link"
          className={styles.aResume}
        >
          Resume
        </a>

        <h1 className={styles.aTitle}>Skills</h1>
        <div className={styles.aSkills}>
          <span className={styles.aSkill1}>React</span>
          <span className={styles.aSkill2}>React Native</span>
          <span className={styles.aSkill3}>Mongodb</span>
          <span className={styles.aSkill4}>Nodejs</span>
          <span className={styles.aSkill2}>Expressjs</span>
          <span className={styles.aSkill1}>Redux Toolkit</span>
          <span className={styles.aSkill4}>Nextjs</span>
          <span className={styles.aSkill3}>Typescipt</span>
        </div>
      </div>
    </>
  );
};

export default About;
