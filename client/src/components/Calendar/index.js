import React, { useState, useEffect }from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import Axios from 'axios';
import API from "../../utils/API"
// probably should import event modal here to open up onClick when CRUDding event
import EventModal from '../EventModal';

const locales = {
  'en-US': require('date-fns/locale/en-US'),
}
const formattedDate = format('MM/DD/YYYY')

const localizer = dateFnsLocalizer({
  formattedDate,
  parse,
  startOfWeek,
  getDay,
  locales,
})

const MyCalendar = () => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    Axios.get('api/events')
      .then((res) => {
        console.log(res.data);
        let appointments = res.data

        for (let i = 0; i < appointments.length; i++) {
          console.log(appointments[i])
          appointments[i].start =
          dateFnsLocalizer.utc(appointments[i].start).toDate();
          appointments[i].end =
          dateFnsLocalizer.utc(appointments[i].end).toDate();
        }

          setEvents(appointments)
          console.log(events) 
      })
      .catch((err) => {
        console.log(err)
      });
  });
  // full CRUD with events - GET when calendar opens, POST to add events, UPDATE to edit events, and DELETE to delete events
  const addEvents = async () => {
    try {
      await API.addEvents()
  } catch (err) {
    console.log(err);
  }
}

const editEvents = async eventId => {
  try {
    await API.editEvents(eventId)
} catch (err) {
  console.log(err);
}
}

const deleteEvents = async eventId => {
    try {
      await API.deleteEvents(eventId)
  } catch (err) {
    console.log(err);
  }
}

    return (
      <Calendar
      // open up modal on click and add CRUD actions to modal
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
    )
  }


export default MyCalendar;
