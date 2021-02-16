import React from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'

const locales = {
  'en-US': require('date-fns/locale/en-US'),
}
// const formattedDate = format('MM/DD/YYYY')

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
  // const [events, setEvents] = useState([])

  // useEffect(() => {
  //   Axios.get('api/events')
  //     .then((res) => {
  //       console.log(res.data);
  //       let appointments = res.data

  //       for (let i = 0; i < appointments.length; i++) {
  //         console.log(appointments[i])
  //         appointments[i].start =
  //         dateFnsLocalizer.utc(appointments[i].start).toDate();
  //         appointments[i].end =
  //         dateFnsLocalizer.utc(appointments[i].end).toDate();
  //       }

  //         setEvents(appointments)
  //         console.log(events) 
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     });
  // });

    return (
      <Calendar
      // open up modal on click and add CRUD actions to modal
      localizer={localizer}
      events={myEventsList}
      // start date of events
      startAccessor="start"
      // end date of events
      endAccessor="end"
      style={{ height: 500 }}
    />
    )
  }


export default MyCalendar;
