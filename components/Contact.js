import styles from "../styles/Contact.module.css";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../context/context";
import { Email, GitHub, Home, LinkedIn, Phone } from "@mui/icons-material";
import Link from "next/link";

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
    <div className={styles.c} id="contact">
      <div className={styles.cBg} style={{backgroundColor:darkMode && "#333"}}></div>
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
            <div className={styles.cInfoItem}>
              <Link href="https://github.com/rakify" legacyBehavior>
                <a target="_blank">
                  <GitHub
                    fontSize="large"
                    sx={{ color: "#171515" }}
                    className={styles.cIcon}
                  />
                </a>
              </Link>
              <Link href="https://linkedin.com/in/rakib-miah" legacyBehavior>
                <a target="_blank">
                  <LinkedIn
                    fontSize="large"
                    sx={{ color: "#0e76a8" }}
                    className={styles.cIcon}
                  />
                </a>
              </Link>
              <Link href="mailto:irakibm@gmail.com" legacyBehavior>
                <a target="_blank">
                  <Email
                    fontSize="large"
                    sx={{ color: "#d44608" }}
                    className={styles.cIcon}
                  />
                </a>
              </Link>
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
              required
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
              required
              style={{ backgroundColor: darkMode && "#333" }}
              className={styles.input}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              required
              style={{ backgroundColor: darkMode && "#333" }}
              rows="5"
              placeholder="Message"
              name="message"
              className={styles.textarea}
            />
            <button className={styles.button} disabled={done}>
              {done ? "Sent" : "Submit"}
            </button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
