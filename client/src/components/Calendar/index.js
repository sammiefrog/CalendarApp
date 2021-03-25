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

const reload=()=>window.location.reload();

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
    reload()
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
      onSelectEvent={event => alert(`
      Name: ${event.title} 
      Description: ${event.resource} 
      Start: ${event.start} 
      End: ${event.end} 
      All Day? ${event.allDay}`)}
      // when an event is clicked
      // modal should pop up showing event info - do this first
      // then have option to edit or delete event on this modal pop up 
      // different from modal that pops up to create an event
      // so build modal that displays event info first, then add edit and delete functions to that
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
