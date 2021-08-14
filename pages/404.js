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
    backgroundColor: theme.palette.primary.Button,
    "&:hover": {
      backgroundColor: theme.palette.primary.ButtonHover,
    },
    marginTop: 20,
  },
}));
export default function Notfound() {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <Paper className={classes.PaperStyle}>
        <Typography color={"primary"} variant={"h3"}>
          Page not found!!!
        </Typography>
        <Typography color={"primary"} variant={"h5"}>
          The page you are looking for is temporarily unavailable or has been
          removed.
        </Typography>
        <Link href={"/"}>
          <Button variant="contained" className={classes.button}>
            Return Home
          </Button>
        </Link>
      </Paper>
    </Container>
  );
}
