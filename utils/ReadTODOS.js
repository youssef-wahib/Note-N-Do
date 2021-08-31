import firebase from "firebase";
import "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import React, { useState } from "react";
import {
  Checkbox,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
  Paper,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import timeConverter from "./timeConverter";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    color: theme.palette.primary.main,
  },
  doneTodo: {
    textDecoration: "line-through",
    color: theme.palette.secondary.main,
    "&:hover": {
      textDecoration: "line-through",
      color: theme.palette.secondary.main,
    },
  },
}));

export default function ReadTODOS({ userId }) {
  const classes = useStyles();
  const [checked, setChecked] = useState([0]);
  const [todos] = useCollection(
    firebase.firestore().collection(`myCollection/${userId}/TODOS`)
  );
  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  const deleteTodoHandler = (docId) => {
    firebase
      .firestore()
      .collection(`myCollection/${userId}/TODOS`)
      .doc(docId)
      .delete()
      .then(() => {
        console.log("Document was deleted");
      });
  };
  return (
    <Container maxWidth={"xl"}>
      <Paper variant={"outlined"}>
        <List className={classes.root}>
          {todos?.docs?.map((doc) => {
            const { Todo: todo } = doc.data();
            const {
              Time: { seconds: time },
            } = doc.data();
            return (
              <ListItem
                key={doc.id}
                dense
                button
                onClick={handleToggle(time)}
                className={checked.indexOf(time) !== -1 ? classes.doneTodo : ""}
              >
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={checked.indexOf(time) !== -1}
                    tabIndex={-1}
                    disableRipple
                  />
                </ListItemIcon>
                <ListItemText
                  primary={todo}
                  secondary={timeConverter(time * 1000)}
                />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    aria-label="comments"
                    onClick={() => deleteTodoHandler(doc.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
        </List>
      </Paper>
    </Container>
  );
}
