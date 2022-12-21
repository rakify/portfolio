import styles from "../styles/Projects.module.css";
import { projects } from "../Utils/Data";
import Project from "./Project";

const Projects = () => {
  return (
    <div className={styles.p}>
      <div className={styles.pTexts}>
        <h1 className={styles.pTitle}>My Works</h1>
        <p className={styles.pDesc}>I have built some projects.</p>
      </div>
      <div className={styles.pList}>
        {projects.map((item) => (
          <Project key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
