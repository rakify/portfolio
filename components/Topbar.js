import { Mail, Person } from "@mui/icons-material";
import Link from "next/link";
import React from "react";
import styles from "../styles/Topbar.module.css";

const Topbar = () => {
  return (
    <>
      <div className={styles.topbar}>
        <div className={styles.wrapper}>
          <a href="/" className={styles.logo}>
            devRakib
          </a>
          <div className={styles.itemContainer}>
            <Person className={styles.icon} />
            <span>+880 1580841319</span>
          </div>
          <div className={styles.itemContainer}>
            <Mail className={styles.icon} />
            <span>irakibm@gmail.com</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
