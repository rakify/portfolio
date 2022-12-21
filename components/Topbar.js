import { Mail, Person } from "@mui/icons-material";
import Link from "next/link";
import React, { useContext } from "react";
import { ThemeContext } from "../context/context";
import styles from "../styles/Topbar.module.css";
import Toggle from "./Toggle";

const Topbar = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <div
        className={styles.topbar}
        style={{
          backgroundColor: darkMode && "#333",
          color: darkMode && "white",
        }}
      >
        <div className={styles.wrapper}>
          <a href="/" className={styles.logo}>
            Rakib Miah
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
      {/* <Toggle /> */}
    </>
  );
};

export default Topbar;
