import { Favorite, GitHub, MoreVert, Web } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React, { useContext } from "react";
import styles from "../styles/Project.module.css";
import { ThemeContext } from "../context/context";

const Project = ({ img, title, demo = "", github = "", desc = "", date }) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  console.log(darkMode);
  return (
    <Card
    elevation={10}
      className={styles.p}
      sx={{ backgroundColor: darkMode && "gray !important" }}
    >
      <CardMedia
        component="img"
        image={img}
        alt="project front page"
        className={styles.pImg}
      />
      <CardHeader title={title} subheader={date} />

      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          className={styles.pDesc}
        >
          {desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={github}>
          <Tooltip title="Github">
            <GitHub color="primary" />
          </Tooltip>
        </Link>
        {demo !== "" && (
          <Link href={demo}>
            <Tooltip title="Demo">
              <Web color="primary" />
            </Tooltip>
          </Link>
        )}
      </CardActions>
    </Card>
  );
};

export default Project;
