import React, { useEffect, useState } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import API from '../../utils/API';
import EventModal from '../EventModal';

const locales = {
  'en-US': require('date-fns/locale/en-US'),
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

const myEventsList = [
  { start: new Date(), end: new Date(), title: "" }
];


const MyCalendar = () => {
  const [events, setEvents] = useState([]);
  const [open, setOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState({
    title: "",
    resource: "",
    allDay: true,
    start: "",
    end: ""
  })
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  // const [range, setRange] = useState(true);

  useEffect(() => {
    getEvents();
  });

  // full CRUD with events - GET when calendar opens, POST to add events, UPDATE to edit events, and DELETE to delete events
  const getEvents = async () => {
    try {
      await API.getEvents
        .then((res) => {
          console.log(res);
          let appointments = res;

          for (let i = 0; i < appointments.length; i++) {
            console.log(appointments[i]);
            appointments[i].start = dateFnsLocalizer
              .utc(appointments[i].start)
              .toDate();
            appointments[i].end = dateFnsLocalizer
              .utc(appointments[i].end)
              .toDate();
          }

          setEvents(appointments);
          console.log(events);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

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

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    return (
      <div>
      <Calendar
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
      selectable={true}
      onSelectSlot={handleOpen}
      tooltipAccessor="title"
    />
    <EventModal 
    handleOpen={open}
    handleClose={handleClose}
    />
    </div>
    )
  }


export default MyCalendar;
