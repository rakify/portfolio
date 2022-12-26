import { Typography } from "@mui/material";
import styles from "../styles/Projects.module.css";
import { projects } from "../Utils/Data";
import Project from "./Project";

const Projects = () => {
  return (
    <div className={styles.p} id="projects">
      <div className={styles.pTitle}>
        <h1 className={styles.pTitle}>Projects</h1>
      </div>

      <Typography variant="caption">Projects I have worked on recently</Typography>
      <div className={styles.pList}>
        {projects.map((item) => (
          <Project
            key={item.id}
            img={item.img}
            title={item.title}
            demo={item.demo}
            desc={item.desc}
            github={item.github}
            date={item.date}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
