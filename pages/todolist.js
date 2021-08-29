import React from "react";
import {
  Container,
  Typography,
  Button,
  Paper,
  makeStyles,
} from "@material-ui/core";
import Head from "next/head";
import WritetoFirestore from "../utils/WritetoFirestore";
import TodoList from "../utils/TodoList";
import { useUser } from "../utils/useUser";

const useStyles = makeStyles((theme) => ({
  frame: {
    padding: 50,
    marginTop: 20,
    color: "#fffffe",
  },
}));

export default function About() {
  const { user } = useUser();
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>NOTE'N'DO | TO DO LIST</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Container maxWidth="lg">
        <Paper className={classes.frame}>
          <Typography variant={"h2"} align={"center"} color={"primary"}>
            MY TO DO LIST
          </Typography>
          <WritetoFirestore />

          {user?.id && <TodoList userId={user.id} />}
        </Paper>
      </Container>
    </>
  );
}
