import firebase from "firebase/app";
import "firebase/database";
import React, { useState } from "react";
import { useUser } from "./useUser";
import {
  Button,
  Container,
  makeStyles,
  Paper,
  TextField,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  containerStyle: {
    marginTop: 20,
    padding: 25,
  },
  margining: {
    marginTop: 20,
  },
}));

export default function WriteNotes() {
  const classes = useStyles();
  const { user } = useUser();
  const [label, setLabel] = useState("");
  const [note, setNote] = useState("");
  const db = firebase.database();
  const [dialogOpen, setDialogOpen] = useState(false);
  function writeUserData() {
    db.ref(`users/${user.id}/Notes/`)
      .push({
        Label: label,
        Note: note,
        Time: firebase.database.ServerValue.TIMESTAMP,
      })
      .then(() => console.log("data was sent to database"));
  }
  const emptyInputHandler = () => {
    return (
      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Incomplete input"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Please enter both note label and note content.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant={"contained"}
            onClick={() => {
              setDialogOpen(false);
            }}
            color="secondary"
          >
            Return
          </Button>
        </DialogActions>
      </Dialog>
    );
  };
  return (
    <Container maxWidth={"xl"}>
      <Paper variant={"outlined"} className={classes.containerStyle}>
        <Typography variant={"h5"}>Here you can write your notes:</Typography>
        <form>
          <TextField
            required
            className={classes.margining}
            color={"secondary"}
            label="Note label"
            variant="outlined"
            value={label}
            onChange={(e) => {
              setLabel(e.target.value);
            }}
          />
          <TextField
            validators={["required"]}
            required
            className={classes.margining}
            color={"secondary"}
            fullWidth
            label="My Notes"
            multiline
            variant="outlined"
            value={note}
            onChange={(e) => {
              setNote(e.target.value);
            }}
          />
          {emptyInputHandler()}
          <Button
            color={"secondary"}
            variant={"contained"}
            className={classes.margining}
            onClick={() => {
              if (label && note) {
                writeUserData();
                setNote("");
                setLabel("");
              } else {
                setDialogOpen(true);
              }
            }}
          >
            Submit Note
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
