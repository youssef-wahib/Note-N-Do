import firebase from "firebase/app";
import "firebase/database";
import React, { useEffect, useState } from "react";
import { useUser } from "./useUser";
import {
  Paper,
  Container,
  Typography,
  makeStyles,
  Tabs,
  Tab,
  Box,
  IconButton,
  Grid,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import PropTypes from "prop-types";
import timeConverter from "./timeConverter";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={2}>{children}</Box>}
    </div>
  );
}
function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  notes: {
    width: "100%",
  },
}));

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default function ReadNotes() {
  const { user } = useUser();
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [load, setLoad] = useState(true);
  const [userNotes, setUserNotes] = useState({});
  const handleChange = (event, newValue) => {
    setValue(newValue);
    setLoad(true);
  };

  useEffect(() => {
    try {
      setLoad(false);
      firebase
        .database()
        .ref(`users/${user.id}/Notes/`)
        .on("value", (snapshot) => {
          if (snapshot.val()) {
            setUserNotes(Object.entries(snapshot.val()));
          }
        });
    } catch (e) {
      console.log(e);
    }
  }, [load]);
  const deleteNoteHandler = (key, index) => {
    firebase
      .database()
      .ref(`users/${user.id}/Notes/${key}`)
      .remove()
      .then(() => {
        index ? setValue(index - 1) : setValue(index);
        console.warn("Note deleted successfully.");
      });
  };
  const tabLabels = () => {
    return Object.values(userNotes).map((data, index) => {
      return (
        <Tab
          key={index}
          label={Object.values(data[1])[0]}
          {...a11yProps(index)}
        />
      );
    });
  };
  const tabNotes = () => {
    return Object.values(userNotes)?.map((data, index) => {
      return (
        <TabPanel
          key={index}
          value={value}
          index={index}
          className={classes.notes}
        >
          <Typography variant={"h5"}>{Object.values(data[1])[1]}</Typography>
          <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="flex-end"
          >
            <Typography display={"inline"} variant={"h6"}>
              {timeConverter(Object.values(data[1])[2])}
            </Typography>
            <IconButton
              style={{
                margin: -7,
              }}
              color={"primary"}
              edge={"end"}
              aria-label="delete"
              onClick={() => deleteNoteHandler(data[0], index)}
            >
              <DeleteIcon />
            </IconButton>
          </Grid>
        </TabPanel>
      );
    });
  };
  return (
    <Container maxWidth={"xl"}>
      <Paper variant={"outlined"}>
        <div className={classes.root}>
          <Tabs
            style={{ width: "30%" }}
            orientation="vertical"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
          >
            {tabLabels()}
          </Tabs>
          {tabNotes()}
        </div>
      </Paper>
    </Container>
  );
}
