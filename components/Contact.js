import styles from "../styles/Contact.module.css";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../context/context";
import { Email, Home, Phone } from "@mui/icons-material";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_1pkfoam",
        "template_smsjbuq",
        formRef.current,
        "g_uBuIzT4w4pszcW_"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className={styles.c}>
      <div className={styles.cBg}></div>
      <div className={styles.cWrapper}>
        <div className={styles.cLeft}>
          <h1 className={styles.cTitle}>Let's discuss your project</h1>
          <div className={styles.cInfo}>
            <div className={styles.cInfoItem}>
              <Phone className={styles.cIcon} />
              +880 1874557769
            </div>
            <div className={styles.cInfoItem}>
              <Email className={styles.cIcon} />
              irakibm@gmail.com
            </div>
            <div className={styles.cInfoItem}>
              <Home className={styles.cIcon} />
              Mirpur 1, Dhaka, Bangladesh
            </div>
          </div>
        </div>
        <div className={styles.cRight}>
          <p className={styles.cDesc}>
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. Write me.
          </p>
          <form className={styles.form} ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              className={styles.input}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              className={styles.input}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              className={styles.input}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              rows="5"
              placeholder="Message"
              name="message"
              className={styles.textarea}
            />
            <button className={styles.button}>{done?"Sent":"Submit"}</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
