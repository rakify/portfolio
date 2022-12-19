import Head from "next/head";
import Image from "next/image";
import { Container } from "@mui/system";
import Topbar from "../components/Topbar";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Paper,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { GitHub, LinkedIn, Send } from "@mui/icons-material";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rakib Miah</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Topbar />
      <Container
        maxWidth="lg"
        className={styles.container}
        sx={{ mt: { sm: 0, md: "100px" } }}
      >
        <Stack direction="column">
          <Link href="https://github.com/rakify">
            <Tooltip title="Github" placement="top">
              <GitHub fontSize="large" />
            </Tooltip>
          </Link>
          <Link href="https://www.linkedin.com/in/rakib-miah/">
            <Tooltip title="Linkedin" placement="bottom">
              <LinkedIn fontSize="large" />
            </Tooltip>
          </Link>
        </Stack>
        <Card className={styles.card}>
          <CardContent>
            <Typography gutterBottom variant="h3">
              👋 Hi, I’m Rakib Miah
            </Typography>
            <Divider textAlign="right" role="presentation">
              <Typography variant="h6">Fullstack Developer</Typography>
            </Divider>
            <Typography variant="body1" sx={{ mt: 2 }}>
              I'm interested in building web apps using MERN stack, Nextjs and
              building mobile apps using React Native. I'm looking to
              collaborate on any web development project or react native project
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" className={styles.button}>
              <Typography className={styles.buttonText}>Say Hello</Typography>
              <Send />
            </Button>
          </CardActions>
        </Card>
      </Container>
    </>
  );
}
