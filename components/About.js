import React from "react";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <div className={styles.a}>
      <h1 className={styles.aTitle}>About Me</h1>
      <div className={styles.aSub}>
        Last 3 years I have spent most of my time learning Algorithms, Data
        Structure and doing competitive programming and for a year I have spent
        my time learning JavaScript Framework and Library. Now I want to use my
        whole skill to do something real. That’s why I am seeking a Job that
        will allow me to gain experience and measure my performance. I believe I
        am a fast learner.
      </div>
    </div>
  );
};

export default About;
