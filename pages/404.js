import React from "react";
import {
  Container,
  Typography,
  Paper,
  makeStyles,
  Button,
} from "@material-ui/core";
import Link from "next/link";
const useStyles = makeStyles((theme) => ({
  PaperStyle: {
    padding: 50,
    marginTop: 50,
  },
  button: {
    marginTop: 20,
  },
}));
export default function Notfound() {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <Paper className={classes.PaperStyle}>
        <Typography variant={"h3"}>Page not found!!!</Typography>
        <Typography variant={"h5"}>
          The page you are looking for is temporarily unavailable or has been
          removed.
        </Typography>
        <Link href={"/"}>
          <Button
            variant="contained"
            color={"secondary"}
            className={classes.button}
          >
            Return Home
          </Button>
        </Link>
      </Paper>
    </Container>
  );
}
