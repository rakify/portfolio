import styles from "../styles/Project.module.css";
import React from "react";
import { IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";

const ProjectDetails = ({ handleClose, p }) => {
  return (
    <>
      <div className={styles.a}>
        <div className={styles.aTop}>
          <h1 className={styles.aTitle}>{p.title}</h1>
          <IconButton
            size="small"
            onClick={handleClose}
            className={styles.aIcon}
          >
            <Close fontSize="small" />
          </IconButton>
        </div>
        <div className={styles.aSub}>{p.desc}</div>
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

export default ProjectDetails;
