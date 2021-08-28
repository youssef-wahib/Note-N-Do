import firebase from "firebase/app";
import "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useUser } from "./useUser";
import {
  makeStyles,
  Paper,
  Button,
  TextField,
  Typography,
  Container,
} from "@material-ui/core";

export default function ReadfromFirestore() {
  const [load, setLoad] = useState(true);
  const [todos, setTodos] = useState({});
  const { user } = useUser();
  useEffect(() => {
    setLoad(false);
    try {
      firebase
        .firestore()
        .collection("myCollection")
        .doc(user.id)
        .get()
        .then((doc) => {
          console.log(doc.data());
        });
    } catch (error) {
      console.log(error);
    }
  }, [load]);

  return (
    <Container maxWidth={"xl"}>
      <Paper variant={"outlined"}>
        <Typography>hello todos</Typography>
        <Button>testing</Button>
      </Paper>
    </Container>
  );
}
