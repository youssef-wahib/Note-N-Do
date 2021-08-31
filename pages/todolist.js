import React from "react";
import { Container, makeStyles, Paper, Typography } from "@material-ui/core";
import Head from "next/head";
import WriteTODOS from "../utils/WriteTODOS";
import ReadTODOS from "../utils/ReadTODOS";
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
    <React.Fragment>
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
          {user?.id && <WriteTODOS userId={user.id} />}
          {user?.id && <ReadTODOS userId={user.id} />}
        </Paper>
      </Container>
    </React.Fragment>
  );
}
