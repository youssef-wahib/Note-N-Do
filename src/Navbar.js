import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "./Logo.png";
import { Container, makeStyles, Toolbar, Button } from "@material-ui/core";
import { useUser } from "../utils/useUser";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  pages: {
    marginLeft: 2,
  },
}));
export default function Navbar({ children }) {
  const classes = useStyles();
  const { user, logout } = useUser();
  return (
    <div className={classes.root}>
      <Toolbar>
        <Image src={Logo} alt={"logo"} />
        <Container className={classes.pages}>
          <Link href="/">
            <Button color="inherit">Home</Button>
          </Link>
          <Link href="/notes">
            <Button color="inherit">Notes</Button>
          </Link>
          <Link href="/todolist">
            <Button color="inherit">To Do List</Button>
          </Link>
          <Link href={"/auth"}>
            <Button>Log in</Button>
          </Link>
        </Container>
      </Toolbar>
    </div>
  );
}
