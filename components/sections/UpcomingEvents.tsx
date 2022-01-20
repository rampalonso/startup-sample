import { NextPage } from "next";
import Link from 'next/link'
import { IEvent } from '../../types'

type Props = {
  events: IEvent[]
}

const UpcomingEvents: NextPage<Props> = ({ events }) => {
  if (!events) return <p>No events</p>
  return (
    <>
      {
        events.map((event) => {
          const { slug, title, description, date, done } = event;
          const { name: expositor } = event.expositorsCollection.items[0]
          return (
            <div key={slug}>
              <h1>{title}</h1>
              <p>{description}</p>
              <span>{date}</span>
              <span>{expositor}</span>
              <Link href={'/events/' + slug}><a>Ir al evento</a></Link>
            </div>
          )
        })
      }
    </>
  )
}

export default UpcomingEvents