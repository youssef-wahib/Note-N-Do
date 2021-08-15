import React from "react";
import { Container, Typography, Box, Button } from "@material-ui/core";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>NOTE'N'DO | TO DO LIST</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Container maxWidth="lg">
        <Typography variant={"h2"}> notes</Typography>
        <Typography variant={"body1"}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
          aliquid, architecto deserunt numquam quidem sapiente soluta vitae?
          Architecto molestias natus obcaecati unde voluptatum? Atque
          consectetur dolor illo officia quis voluptate!
        </Typography>
      </Container>
    </>
  );
}
