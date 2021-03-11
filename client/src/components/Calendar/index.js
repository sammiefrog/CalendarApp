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


const MyCalendar = () => {
  const [events, setEvents] = useState([]);
  const [open, setOpen] = useState(false);
  
  useEffect(() => {
    getEvents();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // full CRUD with events - GET when calendar opens, POST to add events, UPDATE to edit events, and DELETE to delete events
  const getEvents = async () => {
    try {
      let usersEvents = await API.getEvents()
          // console.log(res);
          let appointments = usersEvents.data;

          setEvents(appointments);
          console.log(events);
        } catch (err) {
      console.log(err);
    }
  };

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
      events={events}
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
