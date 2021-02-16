// render calendar, navbar, and modal here
import React from "react";
import Calendar from "../../components/Calendar";
import NavBar from "../../components/NavBar";
import EventModal from "../../components/EventModal";
import { Container } from "@material-ui/core";
// import API from "../../utils/API"



const CalendarPage = () => {
//   const classes = useStyles();
// const [events, setEvents] = useState([]);

// // full CRUD with events - GET when calendar opens, POST to add events, UPDATE to edit events, and DELETE to delete events
// const addEvents = async () => {
//   try {
//     await API.addEvents()
// } catch (err) {
//   console.log(err);
// }
// }

// const editEvents = async eventId => {
// try {
//   await API.editEvents(eventId)
// } catch (err) {
// console.log(err);
// }
// }

// const deleteEvents = async eventId => {
//   try {
//     await API.deleteEvents(eventId)
// } catch (err) {
//   console.log(err);
// }
// }

  return (
    <Container>
      <NavBar />
      <Calendar>
        <EventModal 
        
        />
      </Calendar>
    </Container>
  );
};

export default CalendarPage