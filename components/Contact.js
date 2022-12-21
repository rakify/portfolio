import styles from "../styles/Contact.module.css";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
// import { ThemeContext } from "../../context";
import { Email, Home, Phone } from "@mui/icons-material";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  //   const theme = useContext(ThemeContext);
  //   const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_rrvnzco",
        "template_3v5nih4",
        formRef.current,
        "user_DrriDPTGKO2Zj4RDXCA6W"
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
              <Phone />
              +880 1874557769
            </div>
            <div className={styles.cInfoItem}>
              <Email />
              irakibm@gmail.com
            </div>
            <div className={styles.cInfoItem}>
              <Home />
              Mirpur 1, Dhaka, Bangladesh
            </div>
          </div>
        </div>
        <div className={styles.cRight}>
          <p className={styles.cDesc}>
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form className={styles.form} ref={formRef} onSubmit={handleSubmit}>
            <input
              className={styles.input}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              className={styles.input}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              className={styles.input}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              rows="5"
              placeholder="Message"
              name="message"
              className={styles.textarea}
            />
            <button className={styles.button}>Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
