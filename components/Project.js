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
import React, { useContext, useState } from "react";
import styles from "../styles/Project.module.css";
import { ThemeContext } from "../context/context";

const Project = ({ p }) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  console.log(darkMode);
  return (
    <>
      <Card
        elevation={10}
        className={styles.p}
        sx={{ backgroundColor: darkMode && "gray !important" }}
      >
        <CardMedia
          component="img"
          image={p?.img}
          alt="project front page"
          className={styles.pImg}
        />
        <CardHeader title={p?.title} subheader={p?.date} />

        <CardContent>
          <Typography
            variant="body2"
            color="text.secondary"
            className={styles.pDesc}
          >
            {p?.desc}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="text" size="small" className={styles.pLink}>
            <Link href={`/projects/${p?.slug}`}>Continue reading →</Link>
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default Project;
