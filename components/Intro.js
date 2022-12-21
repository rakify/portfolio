import React from "react";
import styles from "../styles/Intro.module.css";
const Intro = () => {
  return (
    <>
      <div className={styles.i}>
        <div className={styles.iLeft}>
          <div className={styles.iLeftWrapper}>
            <h2 className={styles.iIntro}>Hello, My name is</h2>
            <h1 className={styles.iName}>Rakib Miah</h1>
            <div className={styles.iTitle}>
              <div className={styles.iTitleItem}>Fullstack Developer</div>
            </div>
            <p className={styles.iDesc}>
              I build web apps using MERN stack, Nextjs and mobile apps using
              React Native. I'm available to collaborate on any web development
              project or react native project
            </p>
          </div>
        </div>
        <div className={styles.iRight}>
          <div className={styles.iBg}></div>
        </div>
      </div>
    </>
  );
};

export default Intro;
