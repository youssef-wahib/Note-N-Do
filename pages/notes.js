import React from "react";
import Head from "next/head";
import firebase from "../utils/firebase";
import { Container, Typography, Paper, makeStyles } from "@material-ui/core";
import WriteNotes from "../utils/WriteNotes";
import ReadNotes from "../utils/ReadNotes";
firebase();

const useStyles = makeStyles((theme) => ({
  frame: {
    padding: 50,
    marginTop: 20,
    color: "#fffffe",
  },
}));

export default function Notes() {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>NOTE'N'DO | NOTES</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Container>
        <Paper className={classes.frame}>
          <Typography color={"primary"} variant={"h2"} align={"center"}>
            My Notes
          </Typography>
          <WriteNotes />
          <ReadNotes />
        </Paper>
      </Container>
    </>
  );
}
