// render calendar, navbar, and modal here
import React from "react";
import Calendar from "../../components/Calendar";
import NavBar from "../../components/NavBar";
import EventModal from "../../components/EventModal";
import { Container } from "@material-ui/core";
import API from "../../utils/API";
import { dateFnsLocalizer } from "react-big-calendar";

const CalendarPage = () => {
  //   const classes = useStyles();
  // const [events, setEvents] = useState([]);
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  // const [range, setRange] = useState(true);

  // useEffect(() => {
  //   getEvents();
  // });

  // // full CRUD with events - GET when calendar opens, POST to add events, UPDATE to edit events, and DELETE to delete events
  // const getEvents = async () => {
  //   try {
  //     await API.getEvents
  //       .then((res) => {
  //         console.log(res);
  //         let appointments = res;

  //         for (let i = 0; i < appointments.length; i++) {
  //           console.log(appointments[i]);
  //           appointments[i].start = dateFnsLocalizer
  //             .utc(appointments[i].start)
  //             .toDate();
  //           appointments[i].end = dateFnsLocalizer
  //             .utc(appointments[i].end)
  //             .toDate();
  //         }

  //         setEvents(appointments);
  //         console.log(events);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const addEvents = async () => {
  //   try {
  //     const event  = await API.addEvents({
  //       title: title,
  //       allDay: range,
  //       resource: description,
  //     });
  //     setRange(true);
  //     setTitle("");
  //     setDescription("");
  //     setEvents(event)
  //     getEvents();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const editEvents = async (eventId) => {
    try {
      await API.editEvents(eventId);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteEvents = async (eventId) => {
    try {
      await API.deleteEvents(eventId);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <NavBar />
      <Calendar 
      // onSelectSlot={addEvents}
      ></Calendar>

      <EventModal />
    </Container>
  );
};

export default CalendarPage;
