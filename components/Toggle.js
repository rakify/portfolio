import { useContext } from "react";
import { ThemeContext } from "../context/context";
import { LightMode, Nightlight } from "@mui/icons-material";
import styles from "../styles/Toggle.module.css";

const Toggle = () => {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };
  return (
    <div className={styles.t}>
      <Nightlight className={styles.icon} />
      <LightMode style={{ color: "black" }} className={styles.icon} />
      <div
        className={styles.tButton}
        onClick={handleClick}
        style={{ left: theme.state.darkMode ? 0 : 25 }}
      ></div>
    </div>
  );
};

export default Toggle;
