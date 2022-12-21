import React from "react";
import styles from "../styles/Project.module.css";

const Project = ({ img, link }) => {
  return (
    <div className={styles.p}>
      <div className={styles.pBrowser}>
        <div className={styles.pCircle}></div>
        <div className={styles.pCircle}></div>
        <div className={styles.pCircle}></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className={styles.pImg} />
      </a>
    </div>
  );
};

export default Project;
