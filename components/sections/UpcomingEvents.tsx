import React from "react";
import { IEvent } from '../../types'
import CardEvent from '../common/CardEvent';

type Props = {
  events: IEvent[]
}

const UpcomingEvents: React.FC<Props> = ({ events }) => {
  if (!events) return <p>No events</p>
  return (
    <>
      {
        events.map((event) => (<CardEvent key={event.slug} event={event} />))
      }
    </>
  )
}

export default UpcomingEvents