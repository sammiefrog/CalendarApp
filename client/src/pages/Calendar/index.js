// render calendar, navbar, and modal here
import React from "react";
import Calendar from "../../components/Calendar";
import NavBar from "../../components/NavBar";
import EventModal from "../../components/EventModal";
import { Container } from "@material-ui/core";

const CalendarPage = () => {
//   const classes = useStyles();

  return (
    <Container>
      <NavBar />
      <Calendar>
        <EventModal />
      </Calendar>
    </Container>
  );
};

export default CalendarPage