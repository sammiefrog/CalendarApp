// What app is
// Login and Register buttons that redirects to those pages
import React from "react";
import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  header: {
    padding: "25px",
    margin: "20px",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <Box className={classes.header}>
      <Typography variant="h2">About</Typography>
      <Typography variant="h6">
        This a calendar for yo unorganized ass.
      </Typography>
      <Button variant="contained" color="primary" href="/login">
        Login
      </Button>
      <Button variant="contained" color="primary" href="/register">
        Register
      </Button>
    </Box>
  );
};

export default About;
