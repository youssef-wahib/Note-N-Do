import initFirebase from "../utils/firebase";
import { useEffect, useState } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase/app";
import "firebase/auth";
import { setUserCookie } from "../utils/userCookies";
import { mapUserData } from "../utils/mapUserData";
import { Container, Paper, Typography, makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  frame: {
    padding: 50,
    marginTop: 20,
  },
}));
initFirebase();
const FiresbaseAuthConfig = {
  signInFlow: "popup",
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: true,
    },
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
  signInSuccessUrl: "/",
  credentialHelper: "none",
  callback: {
    signInSuccessWithAuthResult: async ({ user }, redirectUrl) => {
      const userData = mapUserData(user);
      setUserCookie(userData);
    },
  },
};
export default function FirebaseAuth() {
  const classes = useStyles();
  const [renderAuth, setRenderAuth] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setRenderAuth(true);
    }
  }, []);
  return (
    <Container>
      <Paper className={classes.frame}>
        <Typography variant={"h5"} align={"center"}>
          Please select one of the following methods to log in:
        </Typography>
        {renderAuth ? (
          <StyledFirebaseAuth
            uiConfig={FiresbaseAuthConfig}
            firebaseAuth={firebase.auth()}
          />
        ) : null}
      </Paper>
    </Container>
  );
}
