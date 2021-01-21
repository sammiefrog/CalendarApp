import React from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import Axios from 'axios';

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

const myEventsList = []

const MyCalendar = () => {
  constructor (props) {
    super(props)

    this.state = {
      cal_events: [],
    }
  }

  componentDidMount () {
    // let self = this
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

        self.setState({
          cal_events:appointments
        })
      })
      .catch((err) => {
        console.log(err)
      });
  }

  const { cal_events } = this.state

    return (
      <Calendar
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
    )
  }


export default MyCalendar;
