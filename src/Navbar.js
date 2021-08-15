import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "./Logo.png";
import { Grid, makeStyles, Toolbar, Button, AppBar } from "@material-ui/core";
import { useUser } from "../utils/useUser";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
  },
  bar: {
    flexGrow: 1,
    flexDirection: "row-reverse",
  },
}));
export default function Navbar({ children }) {
  const classes = useStyles();
  const { user, logout } = useUser();
  if (user) {
    return (
      <AppBar elevation={0} className={classes.root} position={"static"}>
        <Toolbar>
          <Grid container alignContent={"center"} spacing={3} xl={12}>
            <Grid item>
              <Image src={Logo} alt={"logo"} />
            </Grid>
            <Grid item>
              <Link href="/">
                <Button color="inherit">Home</Button>
              </Link>
            </Grid>
            <Grid item>
              <Link href="/notes">
                <Button color="inherit">Notes</Button>
              </Link>
            </Grid>
            <Grid item>
              <Link href="/todolist">
                <Button color="inherit">To Do List</Button>
              </Link>
            </Grid>
          </Grid>
          <Grid container className={classes.bar}>
            <Button
              variant={"contained"}
              disableElevation
              color={"secondary"}
              onClick={() => logout()}
            >
              Log out
            </Button>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  } else
    return (
      <AppBar elevation={0} className={classes.root} position={"static"}>
        <Toolbar>
          <Grid container alignContent={"center"} spacing={3} xl={12}>
            <Grid item>
              <Image src={Logo} alt={"logo"} />
            </Grid>
            <Grid item>
              <Link href="/">
                <Button color="inherit">Home</Button>
              </Link>
            </Grid>
          </Grid>
          <Grid container className={classes.bar}>
            <Link href={"/auth"}>
              <Button
                variant={"contained"}
                color={"secondary"}
                disableElevation
              >
                Log in
              </Button>
            </Link>
          </Grid>
        </Toolbar>
      </AppBar>
    );
}
