import React from "react";
import {
  Container,
  Typography,
  Paper,
  Grid,
  makeStyles,
} from "@material-ui/core";
import { useUser } from "../utils/useUser";

const useStyles = makeStyles((theme) => ({
  paperStyle: {
    marginTop: 20,
    padding: 30,
  },
}));
export default function Index() {
  const { user } = useUser();
  const classes = useStyles();

  if (user)
    return (
      <Container maxWidth="lg">
        <Paper className={classes.paperStyle}>
          <Typography align={"center"} variant="h1">
            NOTE'N'DO
          </Typography>
          <Typography align={"center"} variant={"h3"}>
            Hello, {user.email.split("@")[0]}. Nice to meet you!
          </Typography>
          <Typography align={"center"} variant={"h4"}>
            This is a web application for you to take notes and make your to do
            lists.
          </Typography>
        </Paper>
      </Container>
    );
  else
    return (
      <Container maxWidth="lg">
        <Paper className={classes.paperStyle}>
          <Typography align={"center"} variant="h1">
            NOTE'N'DO
          </Typography>
          <Typography align={"center"} variant={"h5"}>
            This is a web application for you to take notes and make your to do
            lists. Hurry up and sign in to get started!!!
          </Typography>
        </Paper>
      </Container>
    );
}
