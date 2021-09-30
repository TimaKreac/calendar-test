import React from 'react'
import { Calendar } from 'antd'
import { IEvent } from '../models/IEvent'
import { Moment } from 'moment'
import { formatDate } from '../utils/date'

interface EventCalendarProps {
  events: IEvent[]
}

const EventCalendar: React.FC<EventCalendarProps> = ({ events }) => {
  function dateCellRender(date: Moment) {
    const formattedDate = formatDate(date.toDate())
    const currentDayEvents = events.filter(
      (event) => event.date === formattedDate
    )
    console.log(currentDayEvents)
    return (
      <div>
        {currentDayEvents.map((event, i) => (
          <div key={i}>{event.description}</div>
        ))}
      </div>
    )
  }

  return <Calendar dateCellRender={dateCellRender} />
}

export default EventCalendar
