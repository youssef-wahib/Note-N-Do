import React from "react";
import Head from "next/head";
import firebase from "../utils/firebase";
import { Container, Typography, Paper, makeStyles } from "@material-ui/core";
// import firebase from "firebase";
import WritetoFirestore from "../utils/WritetoFirestore";
import ReadtoFirestore from "../utils/ReadtoFirestore";
firebase();

const useStyles = makeStyles((theme) => ({
  frame: {
    padding: 50,
    marginTop: 20,
    color: "#fffffe",
  },
}));
// const database = firebase.database();

// export const getStaticProps = async () => {
//   const snapshot = await firestore.collection("Notes").get();
//
//   snapshot.docs.forEach((docs) => console.log(doc.data()));
// };

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
          <Typography color={"primary"} variant={"h3"}>
            My Notes
          </Typography>
          <WritetoFirestore />
          <ReadtoFirestore />
          {/*{notes.map((note) => (*/}
          {/*  <Paper key={note.id}>*/}
          {/*    <Typography>{note.name}</Typography>*/}
          {/*  </Paper>*/}
          {/*))}*/}
        </Paper>
      </Container>
    </>
  );
}
