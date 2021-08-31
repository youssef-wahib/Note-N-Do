import { firestore } from "./db";
import React, { useState } from "react";
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

export default function WriteTODOS({ userId }) {
  const classes = useStyles();
  const [todo, setTodo] = useState("");
  const sendData = () => {
    firestore
      .collection(`myCollection/${userId}/TODOS`)
      .doc()
      .set({
        Todo: todo,
        Time: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((r) => {
        setTodo("");
      });
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
