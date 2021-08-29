import firebase from "firebase";
import "firebase/firestore";
import {
  useCollection,
  useCollectionDataOnce,
  useDocumentOnce,
} from "react-firebase-hooks/firestore";
import React, { useEffect, useState } from "react";
import { useUser } from "./useUser";
import {
  makeStyles,
  Paper,
  Button,
  Typography,
  Container,
} from "@material-ui/core";
const { user } = useUser();
export default function ReadfromFirestore({ userId }) {
  const [todos, loading, error] = useCollectionDataOnce(
    firebase
      .firestore()
      .collection("myCollection")
      .doc(user.id)
      .collection("TODOS")
  );
  console.log(todos);

  return (
    <Container maxWidth={"xl"}>
      <Paper variant={"outlined"}>
        <Typography>hello todos</Typography>
        <Button>testing</Button>
      </Paper>
    </Container>
  );
}
