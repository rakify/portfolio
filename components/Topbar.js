import { Mail, Person } from "@mui/icons-material";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { ThemeContext } from "../context/context";
import styles from "../styles/Topbar.module.css";
import Toggle from "./Toggle";

const Topbar = () => {
  const router = useRouter();
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      {router.route === "/" ? (
        <div
          className={styles.topbar}
          style={{
            backgroundColor: darkMode && "#333",
            color: darkMode && "white",
          }}
        >
          <div className={styles.left}>
            <Button
              className={styles.iButton2}
              size="small"
              variant="text"
              sx={{
                color: "white",
              }}
            >
              <>
                <Person className={styles.icon} />
                <span>+880 1580841319</span>
              </>
            </Button>
            <Button
              className={styles.iButton2}
              size="small"
              variant="text"
              sx={{
                color: "white",
                textTransform: "lowercase",
              }}
            >
              <>
                <Mail className={styles.icon} />
                <span>irakibm@gmail.com</span>
              </>
            </Button>
          </div>
          <div className="right">
            <Toggle />
          </div>
        </div>
      ) : (
        <div
          className={styles.topbar}
          style={{
            backgroundColor: darkMode ? "#333" : "#39B5E0",
            color: darkMode && "white",
          }}
        >
          <div className={styles.left}>
            <Button
              className={styles.iButton1}
              size="small"
              variant="text"
              sx={{
                color: "white",
                textTransform: "capitalize",
              }}
            >
              <Link
                href="/"
                style={{
                  textDecoration: "none",
                }}
              >
                Home
              </Link>
            </Button>
            <Button
              className={styles.iButton1}
              size="small"
              variant="text"
              sx={{
                color: "white",
                textTransform: "capitalize",
              }}
            >
              <Link
                href="/#projects"
                style={{
                  textDecoration: "none",
                }}
              >
                Projects
              </Link>
            </Button>
            <Button
              className={styles.iButton1}
              size="small"
              variant="text"
              sx={{
                color: "white",
                textTransform: "capitalize",
              }}
            >
              <Link
                href="/#contact"
                style={{
                  textDecoration: "none",
                }}
              >
                Contact
              </Link>
            </Button>
          </div>
          <div className="right">
            <Toggle />
          </div>
        </div>
      )}
    </>
  );
};

export default Topbar;
