import firebase from "firebase/app";
import "firebase/firestore";
import React, { useState } from "react";
import { useUser } from "./useUser";
import {
  makeStyles,
  Paper,
  Button,
  TextField,
  Typography,
  Container,
} from "@material-ui/core";
import AddBoxIcon from "@material-ui/icons/AddBox";
const useStyles = makeStyles((theme) => ({
  containerStyle: {
    marginTop: 20,
    padding: 25,
  },
  margining: {
    marginTop: 20,
    width: "85%",
  },
  button: {
    margin: theme.spacing(3),
  },
}));

export default function WritetoFirestore() {
  const { user } = useUser();
  const classes = useStyles();
  const [todo, setTodo] = useState("");
  const sendData = () => {
    try {
      firebase
        .firestore()
        .collection("myCollection")
        .doc(user.id)
        .collection("TODOS")
        .doc()
        .set({
          Todo: todo,
          Time: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then((r) => setTodo(""));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Paper variant={"outlined"} className={classes.containerStyle}>
        <Typography variant={"h5"}>To do task:</Typography>
        <form>
          <TextField
            required
            className={classes.margining}
            color={"secondary"}
            label="Task"
            variant="outlined"
            value={todo}
            onChange={(e) => {
              setTodo(e.target.value);
            }}
          />
          <Button
            size={"large"}
            variant="contained"
            color="secondary"
            className={classes.button}
            endIcon={<AddBoxIcon />}
            onClick={() => {
              sendData();
            }}
          >
            ADD
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
