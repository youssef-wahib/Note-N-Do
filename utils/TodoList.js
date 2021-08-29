import React from "react";
import { Button, Container, Paper, Typography, } from "@material-ui/core";
import { useCollection, } from "react-firebase-hooks/firestore";
import { firestore } from "./db";

export default function TodoList({ userId }) {
  const [todos] = useCollection(firestore.collection(`myCollection/${userId}/TODOS`));

  return (
    <Container maxWidth={"xl"}>
      <Paper variant={"outlined"}>
        {todos?.docs?.map(doc => {
          const { Todo: todo } = doc.data()

          return (
            <React.Fragment key={todo}>
              <Typography>{todo}</Typography>
              <Button>testing</Button>
            </React.Fragment>
          )
        })}
      </Paper>
    </Container>
  );
}
