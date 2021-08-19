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
} from "@material-ui/core";
import PropTypes, { object } from "prop-types";
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
      {value === index && (
        <Box p={4}>
          <Typography>{children}</Typography>
        </Box>
      )}
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
}));

TabPanel.propTypes = {
  children: PropTypes.node,
  //  color:PropTypes.any.isRequired,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default function ReadNotes() {
  const db = firebase.database();
  const { user } = useUser();
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [load, setLoad] = useState(true);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setLoad(true);
  };
  let userNotes = {};
  useEffect(() => {
    try {
      setLoad(false);
      db.ref(`users/${user.id}/Notes/`).on("value", (snapshot) => {
        userNotes = Object.entries(snapshot.val());
      });
    } catch (e) {
      console.log(e);
    }
    tabNotes();
  }, [load]);

  const tabLabels = () => {
    return Object.values(userNotes).map((data, index) => {
      // console.log(Object.values(data[1])[0]);
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
    Object.values(userNotes).map((data, index) => {
      console.log(Object.values(data[1])[1]);
      return (
        <TabPanel key={index} value={value} index={index}>
          Object.values(data[1])[1]
        </TabPanel>
      );
    });
  };
  return (
    <Container maxWidth={"xl"}>
      <Paper variant={"outlined"}>
        <Typography align={"center"} variant={"h3"}>
          Here you can view your Notes
        </Typography>
        <div className={classes.root}>
          <Tabs
            orientation="vertical"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
          >
            {Object.values(userNotes).map((data, index) => {
              // console.log(Object.values(data[1])[0]);
              return (
                <Tab
                  key={index}
                  label={Object.values(data[1])[0]}
                  {...a11yProps(index)}
                />
              );
            })}

            <Tab label="Item One" {...a11yProps(0)} />
            <Tab label="Item Two" {...a11yProps(1)} />
          </Tabs>
          {Object.values(userNotes).map((data, index) => {
            // console.log(Object.values(data[1])[1]);
            return (
              <TabPanel key={index} value={value} index={index}>
                Object.values(data[1])[1]
              </TabPanel>
            );
          })}
          <TabPanel value={value} index={0}>
            Item sdfhakljsdhfjk
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
        </div>
      </Paper>
    </Container>
  );
}
